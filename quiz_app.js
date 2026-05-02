// Quiz App Logic - v2 (submit button + multi-select fix)
let currentSource = 'original';
let selectedModules = new Set();
let quizQuestions = [];
let currentIdx = 0;
let correctCount = 0;
let wrongCount = 0;
let selectedAnswers = new Set(); // track selected options

function getData() {
    return currentSource === 'original' ? ORIGINAL_DATA : EXTRA_DATA;
}

function setSource(src) {
    currentSource = src;
    document.querySelectorAll('.source-tab').forEach((b, i) => {
        b.classList.toggle('active', (i === 0 && src === 'original') || (i === 1 && src === 'extra'));
    });
    selectedModules.clear();
    renderModules();
    updateCount();
}

function renderModules() {
    const grid = document.getElementById('module-grid');
    const data = getData();
    grid.innerHTML = '';
    data.forEach(m => {
        const checked = selectedModules.has(m.id) ? 'checked' : '';
        const sel = selectedModules.has(m.id) ? ' selected' : '';
        grid.innerHTML += `<div class="module-card${sel}" onclick="toggleModule(${m.id}, this)">
            <input type="checkbox" id="m${m.id}" ${checked} onclick="event.stopPropagation()">
            <div><label for="m${m.id}">Module ${m.id}</label><div class="q-count">${m.title} (${m.questions.length} câu)</div></div>
        </div>`;
    });
}

function toggleModule(id, el) {
    if (selectedModules.has(id)) { selectedModules.delete(id); } else { selectedModules.add(id); }
    if (el) { el.classList.toggle('selected'); el.querySelector('input').checked = selectedModules.has(id); }
    updateCount();
}

function toggleAll(select) {
    const data = getData();
    selectedModules.clear();
    if (select) data.forEach(m => selectedModules.add(m.id));
    renderModules();
    updateCount();
}

function updateCount() {
    const data = getData();
    let count = 0;
    data.forEach(m => { if (selectedModules.has(m.id)) count += m.questions.length; });
    document.getElementById('sel-count').textContent = count;
    document.getElementById('start-btn').disabled = count === 0;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startQuiz() {
    const data = getData();
    quizQuestions = [];
    data.forEach(m => {
        if (selectedModules.has(m.id)) {
            m.questions.forEach(q => quizQuestions.push({ ...q, moduleId: m.id, moduleTitle: m.title }));
        }
    });
    shuffle(quizQuestions);
    currentIdx = 0; correctCount = 0; wrongCount = 0;
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('quiz-interface').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    showQuestion();
}

function getCorrectLetters(q) {
    // First check if question text has "(Chọn X)" pattern to know how many answers expected
    const answerText = q.a || '';
    const letters = [];
    
    // Match answer letters: look for standalone A-F followed by . or word boundary
    // Handle formats: "B", "A và C", "B. Full text...", "C. text và D. text"
    const matches = answerText.match(/(?:^|[\s,])([A-F])(?:\.|\b)/g);
    if (matches) {
        matches.forEach(m => {
            const letter = m.match(/[A-F]/)[0];
            if (!letters.includes(letter)) letters.push(letter);
        });
    }
    
    // Fallback: if no matches found, try simpler approach
    if (letters.length === 0) {
        const simple = answerText.match(/[A-F]/g);
        if (simple) simple.forEach(l => { if (!letters.includes(l)) letters.push(l); });
    }
    
    return letters;
}

function getExpectedCount(q) {
    // Check question text for "(Chọn X)" pattern
    const m = q.t.match(/\(Ch[oọ]n\s*(\d+)\)/i);
    if (m) return parseInt(m[1]);
    return null;
}

function isMultiAnswer(q) {
    const fromText = getExpectedCount(q);
    if (fromText && fromText > 1) return true;
    const correctLetters = getCorrectLetters(q);
    return correctLetters.length > 1;
}

function showQuestion() {
    const q = quizQuestions[currentIdx];
    const total = quizQuestions.length;
    selectedAnswers = new Set();

    const multi = isMultiAnswer(q);
    const correctLetters = getCorrectLetters(q);
    const expectedCount = getExpectedCount(q) || correctLetters.length;

    document.getElementById('q-tag').textContent = `Module ${q.moduleId}`;
    document.getElementById('q-text').textContent = q.t;

    const note = document.getElementById('q-note');
    if (multi) {
        note.textContent = `⚠️ Câu này có ${expectedCount} đáp án đúng — hãy chọn đủ ${expectedCount} đáp án rồi nhấn "Nộp bài"`;
        note.style.display = 'block';
    } else {
        note.textContent = `📌 Câu này có 1 đáp án đúng — chọn 1 đáp án rồi nhấn "Nộp bài"`;
        note.style.display = 'block';
    }

    const optsDiv = document.getElementById('q-opts');
    optsDiv.innerHTML = '';
    q.o.forEach((opt, i) => {
        const letter = opt.charAt(0);
        const text = opt.substring(2).trim();
        const btn = document.createElement('button');
        btn.className = 'opt';
        btn.id = `opt-${i}`;
        btn.innerHTML = `<span class="letter">${letter}.</span><span>${text}</span>`;
        btn.onclick = () => toggleOption(btn, letter, q);
        optsDiv.appendChild(btn);
    });

    document.getElementById('q-exp').style.display = 'none';
    document.getElementById('q-result-label').innerHTML = '';
    document.getElementById('next-area').style.display = 'none';
    document.getElementById('submit-area').style.display = 'block';
    document.getElementById('submit-btn').disabled = true;

    document.getElementById('prog-txt').textContent = `${currentIdx + 1} / ${total}`;
    document.getElementById('prog-fill').style.width = ((currentIdx + 1) / total * 100) + '%';
    document.getElementById('c-ok').textContent = correctCount;
    document.getElementById('c-no').textContent = wrongCount;
}

function toggleOption(btn, letter, q) {
    const multi = isMultiAnswer(q);

    if (multi) {
        // Multi: toggle selection
        if (selectedAnswers.has(letter)) {
            selectedAnswers.delete(letter);
            btn.classList.remove('selected-opt');
        } else {
            selectedAnswers.add(letter);
            btn.classList.add('selected-opt');
        }
    } else {
        // Single: deselect all others, select this one
        document.querySelectorAll('.opt').forEach(b => b.classList.remove('selected-opt'));
        selectedAnswers.clear();
        selectedAnswers.add(letter);
        btn.classList.add('selected-opt');
    }

    // Enable submit if at least 1 selected
    document.getElementById('submit-btn').disabled = selectedAnswers.size === 0;
}

function submitAnswer() {
    const q = quizQuestions[currentIdx];
    const correctLetters = getCorrectLetters(q);

    // Disable all options
    document.querySelectorAll('.opt').forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('selected-opt');
        const letter = btn.querySelector('.letter').textContent.replace('.', '').trim();
        const isCorrect = correctLetters.includes(letter);
        const wasSelected = selectedAnswers.has(letter);

        if (isCorrect) {
            btn.classList.add('correct');
        } else if (wasSelected && !isCorrect) {
            btn.classList.add('wrong');
        } else {
            btn.classList.add('dimmed');
        }
    });

    // Determine if fully correct
    let fullyCorrect = true;
    if (selectedAnswers.size !== correctLetters.length) {
        fullyCorrect = false;
    } else {
        for (const l of correctLetters) {
            if (!selectedAnswers.has(l)) { fullyCorrect = false; break; }
        }
    }

    if (fullyCorrect) { correctCount++; }
    else { wrongCount++; }

    document.getElementById('c-ok').textContent = correctCount;
    document.getElementById('c-no').textContent = wrongCount;

    // Show result label + explanation
    const label = document.getElementById('q-result-label');
    if (fullyCorrect) {
        label.innerHTML = '<span class="correct-label">✅ Đúng rồi!</span>';
    } else {
        label.innerHTML = `<span class="wrong-label">❌ Chưa đúng — Đáp án: ${correctLetters.join(', ')}</span>`;
    }

    // Build explanation text
    let expText = q.e || '';
    // Also show answer text if it contains useful info
    if (q.a && q.a.length > 5) {
        expText = q.a + '<br><br>' + expText;
    }
    document.getElementById('q-exp-txt').innerHTML = expText;
    document.getElementById('q-exp').style.display = 'block';

    // Hide submit, show next
    document.getElementById('submit-area').style.display = 'none';
    const nextArea = document.getElementById('next-area');
    nextArea.style.display = 'block';
    if (currentIdx >= quizQuestions.length - 1) {
        nextArea.querySelector('button').textContent = '🏆 Xem kết quả';
    } else {
        nextArea.querySelector('button').textContent = 'Câu tiếp theo →';
    }
}

function nextQ() {
    currentIdx++;
    if (currentIdx >= quizQuestions.length) { showResults(); return; }
    showQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showResults() {
    document.getElementById('quiz-interface').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    const total = quizQuestions.length;
    const pct = Math.round(correctCount / total * 100);
    document.getElementById('r-pct').textContent = pct + '%';
    document.getElementById('r-ok').textContent = correctCount;
    document.getElementById('r-total').textContent = total;
}

function exitQuiz() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('quiz-interface').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    window.scrollTo({ top: 0 });
}

function restartQuiz() {
    shuffle(quizQuestions);
    currentIdx = 0; correctCount = 0; wrongCount = 0;
    document.getElementById('results').style.display = 'none';
    document.getElementById('quiz-interface').style.display = 'block';
    showQuestion();
    window.scrollTo({ top: 0 });
}

// Init
document.addEventListener('DOMContentLoaded', () => { renderModules(); updateCount(); });
