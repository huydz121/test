# Script to re-parse the markdown file and fix data
$dir = $PWD.Path
$mdPath = Join-Path $dir "AWS_Knowledge_Checks_Review.md"
$outPath = Join-Path $dir "quiz_data.js"

$text = [System.IO.File]::ReadAllText($mdPath, [System.Text.Encoding]::UTF8)
$lines = $text -split "`r?`n"

$modules = New-Object System.Collections.ArrayList
$curMod = $null
$curQ = $null
$inExplain = $false
$explainLines = New-Object System.Collections.ArrayList
# Field counter within each question: 1=CauHoi 2=LuaChon 3=DapAn 4=GiaiThich
$fieldIdx = 0

foreach ($line in $lines) {
    $t = $line.Trim()
    
    # Match module header: ## Module X: Title
    if ($t.StartsWith("## Module ")) {
        if ($curQ -ne $null -and $inExplain) {
            $curQ.exp = ($explainLines -join " ").Trim()
            $inExplain = $false
        }
        if ($curQ -ne $null -and $curMod -ne $null) { [void]$curMod.qs.Add($curQ); $curQ = $null }
        if ($curMod -ne $null) { [void]$modules.Add($curMod) }
        $rest = $t.Substring(10)
        $colonIdx = $rest.IndexOf(":")
        if ($colonIdx -gt 0) {
            $mId = [int]$rest.Substring(0, $colonIdx).Trim()
            $mTitle = $rest.Substring($colonIdx + 1).Trim()
        } else { $mId = 0; $mTitle = $rest }
        $curMod = @{ id=$mId; title=$mTitle; qs=(New-Object System.Collections.ArrayList) }
    }
    # Match question header: ### ...N
    elseif ($t.StartsWith("### ") -and $t -match "\d+$") {
        if ($curQ -ne $null -and $inExplain) {
            $curQ.exp = ($explainLines -join " ").Trim()
            $inExplain = $false
        }
        if ($curQ -ne $null -and $curMod -ne $null) { [void]$curMod.qs.Add($curQ) }
        $curQ = @{ text=""; opts=(New-Object System.Collections.ArrayList); ans=""; exp="" }
        $explainLines = New-Object System.Collections.ArrayList
        $fieldIdx = 0
    }
    elseif ($curQ -ne $null) {
        if ($inExplain) {
            if ($t.StartsWith("### ") -or $t.StartsWith("## ") -or $t.StartsWith("---")) {
                $curQ.exp = ($explainLines -join " ").Trim()
                $inExplain = $false
            } elseif ($t.Length -gt 0) {
                [void]$explainLines.Add($t)
            }
        }
        
        # Detect bold field markers: **FieldName:** content
        $qIdx = $t.IndexOf(":**")
        if (-not $inExplain -and $qIdx -gt 0 -and $qIdx -lt 25 -and $t.StartsWith("**")) {
            $fieldIdx++
            $afterMarker = $t.Substring($qIdx + 3).Trim()
            
            # Use field position: 1st=Question, 2nd=Options(skip), 3rd=Answer, 4th=Explain
            if ($fieldIdx -eq 1) {
                $curQ.text = $afterMarker
            }
            elseif ($fieldIdx -eq 3) {
                $curQ.ans = $afterMarker
            }
            elseif ($fieldIdx -eq 4) {
                $explainLines = New-Object System.Collections.ArrayList
                if ($afterMarker.Length -gt 0) { [void]$explainLines.Add($afterMarker) }
                $inExplain = $true
            }
        }
        elseif (-not $inExplain -and $t.StartsWith("- ") -and $t.Length -gt 4 -and $t[2] -match "[A-F]" -and $t[3] -eq ".") {
            [void]$curQ.opts.Add($t.Substring(2).Trim())
        }
    }
}

# Close last question
if ($curQ -ne $null -and $inExplain) {
    $curQ.exp = ($explainLines -join " ").Trim()
}
if ($curQ -ne $null -and $curMod -ne $null) { [void]$curMod.qs.Add($curQ) }
if ($curMod -ne $null) { [void]$modules.Add($curMod) }

# Build JS output
function EJ($s) { 
    $s = $s.Replace('\', '\\').Replace('"', '\"').Replace("`r", "").Replace("`n", " ")
    return $s
}

$sb = New-Object System.Text.StringBuilder
[void]$sb.Append("const ORIGINAL_DATA=[")
$emptyAnswers = 0
$emptyExplains = 0
for ($i=0; $i -lt $modules.Count; $i++) {
    $m = $modules[$i]
    if ($i -gt 0) { [void]$sb.Append(",") }
    [void]$sb.Append("{id:$($m.id),title:`"$(EJ $m.title)`",questions:[")
    for ($j=0; $j -lt $m.qs.Count; $j++) {
        $q = $m.qs[$j]
        if ($j -gt 0) { [void]$sb.Append(",") }
        if ($q.ans.Length -eq 0) { $emptyAnswers++ }
        if ($q.exp.Length -eq 0) { $emptyExplains++ }
        [void]$sb.Append("{t:`"$(EJ $q.text)`",o:[")
        for ($k=0; $k -lt $q.opts.Count; $k++) {
            if ($k -gt 0) { [void]$sb.Append(",") }
            [void]$sb.Append("`"$(EJ $q.opts[$k])`"")
        }
        [void]$sb.Append("],a:`"$(EJ $q.ans)`",e:`"$(EJ $q.exp)`"}")
    }
    [void]$sb.Append("]}")
}
[void]$sb.Append("];")

[System.IO.File]::WriteAllText($outPath, $sb.ToString(), (New-Object System.Text.UTF8Encoding $false))

$totalQ = 0
foreach ($m in $modules) { $totalQ += $m.qs.Count }
Write-Output "Done! $($modules.Count) modules, $totalQ questions"
Write-Output "Empty answers: $emptyAnswers, Empty explains: $emptyExplains"
foreach ($m in $modules) { 
    $ea = 0; $ee = 0
    foreach ($q in $m.qs) { if($q.ans.Length -eq 0){$ea++}; if($q.exp.Length -eq 0){$ee++} }
    Write-Output "  Module $($m.id): $($m.qs.Count) qs, emptyAns=$ea, emptyExp=$ee"
}
