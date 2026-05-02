# Ôn tập AWS Knowledge Check (Module 2 - 13)

Tài liệu này tổng hợp các câu hỏi kiểm tra kiến thức của AWS. Các đáp án đã được kiểm tra tính chính xác và giải thích được biên tập lại bằng tiếng Việt chuẩn mực, chuyên ngành, đầy đủ và rõ ràng.

## Module 2: Kiến trúc đám mây và Định giá (Cloud Economics and Billing)

### Câu 1
**Câu hỏi:** Đâu là định nghĩa đúng nhất về kiến trúc đám mây?
**Các lựa chọn:**
- A. Kết hợp các phần mềm và thành phần giao diện người dùng (frontend) và máy chủ (backend) để tạo ra các dịch vụ web có tính sẵn sàng cao và khả năng mở rộng nhằm đáp ứng nhu cầu của tổ chức.
- B. Di dời các trung tâm dữ liệu tại chỗ (on-premises) truyền thống sang các trung tâm dữ liệu có thể truy cập qua internet do một nhà cung cấp quản lý.
- C. Áp dụng các đặc điểm của đám mây vào một giải pháp sử dụng các dịch vụ và tính năng của đám mây để đáp ứng các yêu cầu về kỹ thuật và kinh doanh.
- D. Thiết kế các ứng dụng trong cơ sở hạ tầng công nghệ thông tin chia sẻ, dựa trên đám mây bằng cách sử dụng các máy ảo và kho dữ liệu chịu lỗi trên đám mây.
**Đáp án chuẩn:** C
**Giải thích:** Kiến trúc đám mây không chỉ đơn giản là di dời nguyên trạng máy chủ vật lý lên môi trường mạng (như câu B) hay chỉ sử dụng hệ thống máy ảo (như câu D). Đáp án C là đầy đủ nhất vì nó bao hàm việc áp dụng các "đặc tính của đám mây" (như tự động mở rộng, trả tiền theo mức độ sử dụng) vào các dịch vụ của AWS để giải quyết chính xác các bài toán về kỹ thuật và kinh doanh của doanh nghiệp.

### Câu 2
**Câu hỏi:** AWS Well-Architected Framework có 6 trụ cột. Ba trong số đó là Bảo mật (Security), Vận hành xuất sắc (Operational excellence) và Tính bền vững (Sustainability). Hai trụ cột khác của Well-Architected Framework là gì? (Chọn 2)
**Các lựa chọn:**
- A. Quyền riêng tư (Privacy)
- B. Quản trị (Governance)
- C. Quản lý rủi ro (Risk management)
- D. Độ tin cậy (Reliability)
- E. Tối ưu hóa chi phí (Cost optimization)
**Đáp án chuẩn:** D. Độ tin cậy (Reliability) và E. Tối ưu hóa chi phí (Cost optimization)
**Giải thích:** 6 trụ cột (pillars) chính thức của thiết kế AWS Well-Architected Framework bao gồm:
1. Operational Excellence (Vận hành xuất sắc)
2. Security (Bảo mật)
3. Reliability (Độ tin cậy)
4. Performance Efficiency (Hiệu suất hoạt động)
5. Cost Optimization (Tối ưu hóa chi phí)
6. Sustainability (Tính bền vững). 
Các đáp án A, B, C tuy quan trọng nhưng không nằm trong danh sách 6 trụ cột cốt lõi này.

### Câu 3
**Câu hỏi:** Những hành động nào phù hợp với trụ cột "Vận hành xuất sắc" (Operational excellence) của AWS Well-Architected Framework? (Chọn 2)
**Các lựa chọn:**
- A. Lên kế hoạch và quản lý toàn bộ vòng đời của tài sản phần cứng.
- B. Đánh giá và cải tiến các quy trình và thủ tục theo một chu kỳ liên tục.
- C. Đánh giá cấu trúc tổ chức và vai trò để xác định các lỗ hổng kỹ năng.
- D. Đảm bảo nhân sự vận hành ghi chép lại các thay đổi đối với cơ sở hạ tầng bằng tài liệu.
- E. Áp dụng các nguyên tắc và phương pháp kỹ thuật phần mềm vào cơ sở hạ tầng dưới dạng mã (Infrastructure as code).
**Đáp án chuẩn:** B và E
**Giải thích:** 
- Chọn B: Vì cốt lõi của việc vận hành xuất sắc là liên tục đánh giá và cải tiến các quy trình để hệ thống ngày càng tốt hơn.
- Chọn E: Quản lý cơ sở hạ tầng bằng mã (Infrastructure as Code) là nguyên tắc thiết kế quan trọng nhất của trụ cột này, giúp giảm thiểu lỗi từ con người.
- Câu A sai vì trên AWS, bạn không cần quản lý phần cứng vật lý. Câu D sai vì việc ghi chép tài liệu thủ công rất dễ xảy ra sai sót; AWS khuyến khích sử dụng mã lập trình để tự động hóa mọi thay đổi.

### Câu 4
**Câu hỏi:** Một ứng dụng yêu cầu một tầng web frontend gồm nhiều máy chủ giao tiếp với một tầng ứng dụng backend cũng gồm nhiều máy chủ. Thiết kế nào tuân thủ chặt chẽ nhất các phương pháp thực hành tốt nhất (best practices) của AWS?
**Các lựa chọn:**
- A. Chỉ định một máy chủ ứng dụng chuyên dụng và một kết nối chuyên dụng cho mỗi máy chủ web.
- B. Thiết kế tầng web để giao tiếp với tầng ứng dụng thông qua dịch vụ Cân bằng tải đàn hồi (Elastic Load Balancing - ELB).
- C. Tạo nhiều máy chủ (instances), trong đó mỗi máy chủ kết hợp cả frontend web và backend ứng dụng trên cùng một máy.
- D. Tạo một mạng lưới kết nối toàn bộ (full mesh) giữa tầng web và tầng ứng dụng, để mỗi máy chủ web có thể giao tiếp trực tiếp với mọi máy chủ ứng dụng.
**Đáp án chuẩn:** B
**Giải thích:** Nguyên tắc thiết kế quan trọng của AWS là "Kết nối lỏng lẻo" (Loose Coupling). Việc đặt một bộ Cân bằng tải (ELB) ở giữa tầng Frontend và Backend sẽ giúp hai tầng này không bị phụ thuộc trực tiếp vào nhau. Nếu một máy chủ Backend gặp sự cố, ELB sẽ tự động điều hướng lưu lượng truy cập sang máy chủ khác, đảm bảo hệ thống duy trì tính khả dụng.

### Câu 5
**Câu hỏi:** Một kiến trúc sư giải pháp đang xây dựng quy trình xử lý lỗi máy chủ. Quy trình nào tuân thủ chặt chẽ nhất các phương pháp thực hành tốt nhất của AWS?
**Các lựa chọn:**
- A. Amazon CloudWatch phát hiện lỗi hệ thống. Nó thông báo cho quản trị viên hệ thống để họ cung cấp một máy chủ mới bằng AWS Management Console.
- B. Nhân viên vận hành phát hiện lỗi hệ thống. Họ thông báo cho quản trị viên hệ thống để cung cấp một máy chủ mới bằng AWS Management Console.
- C. Nhân viên vận hành phát hiện lỗi hệ thống. Họ khởi hoạt tự động hóa để cung cấp một máy chủ mới.
- D. Amazon CloudWatch phát hiện lỗi hệ thống. Nó tự động kích hoạt tiến trình cung cấp một máy chủ mới.
**Đáp án chuẩn:** D
**Giải thích:** Nguyên tắc thiết kế trên nền tảng đám mây là "Tự động hóa mọi thứ" (Automate everything). Việc xử lý lỗi thủ công có sự can thiệp của con người (như các câu A, B, C) vừa mất thời gian vừa dễ xảy ra sai sót. Phương pháp tối ưu nhất là để hệ thống giám sát (như Amazon CloudWatch) tự động phát hiện lỗi và tự động kích hoạt quy trình khởi tạo máy chủ thay thế (ví dụ thông qua Auto Scaling).

### Câu 6
**Câu hỏi:** Một công ty đang xem xét di dời trung tâm dữ liệu tại chỗ (on-premises) của họ lên đám mây. Động lực chính của họ là tăng hiệu quả về chi phí. Cách tiếp cận nào tuân thủ chặt chẽ nhất các phương pháp thực hành tốt nhất của AWS?
**Các lựa chọn:**
- A. Khởi tạo các máy chủ khi cần thiết và dừng các dịch vụ khi chúng không được sử dụng.
- B. Khởi tạo một số máy chủ trên đám mây và đảm bảo các máy chủ này chạy liên tục 24/7.
- C. Sao chép toàn bộ trung tâm dữ liệu tại chỗ của họ lên đám mây theo cấu trúc tương tự.
- D. Duy trì trung tâm dữ liệu tại chỗ càng lâu càng tốt.
**Đáp án chuẩn:** A
**Giải thích:** Lợi thế lớn nhất của điện toán đám mây là mô hình chi trả theo mức độ sử dụng (Pay-as-you-go). Do đó, phương pháp tối ưu chi phí tốt nhất là chỉ khởi động máy chủ khi có nhu cầu xử lý và tắt chúng đi khi không sử dụng, thay vì để hệ thống chạy liên tục 24/7 gây lãng phí tài nguyên như các máy chủ vật lý truyền thống.

### Câu 7
**Câu hỏi:** Một công ty lưu trữ dữ liệu chỉ đọc (read-only) trên Amazon S3. Hầu hết người dùng ở cùng quốc gia với trụ sở công ty. Một số người dùng nằm rải rác trên toàn thế giới. Quyết định thiết kế nào tuân thủ chặt chẽ nhất các phương pháp thực hành tốt nhất của AWS?
**Các lựa chọn:**
- A. Sử dụng một bucket trong AWS Region (Khu vực) gần với trụ sở công ty nhất. Tất cả người dùng truy cập dữ liệu thông qua Amazon CloudFront.
- B. Sử dụng một bucket trong Region gần với trụ sở công ty nhất.
- C. Sử dụng một bucket trong Region có độ trễ trung bình thấp nhất cho tất cả người dùng.
- D. Sao chép (Replicate) các đối tượng qua các bucket ở nhiều AWS Region trên thế giới. Người dùng truy cập vào bucket ở Region gần họ nhất.
**Đáp án chuẩn:** A
**Giải thích:** Vì phần lớn người dùng ở gần trụ sở, việc đặt bucket S3 tại Region gần đó là quyết định đúng đắn. Để phục vụ số lượng nhỏ khách hàng quốc tế, việc sao chép toàn bộ dữ liệu ra khắp thế giới (câu D) sẽ tốn rất nhiều chi phí. Cách tối ưu nhất là sử dụng mạng phân phối nội dung Amazon CloudFront để lưu vào bộ nhớ đệm (cache) dữ liệu tại các vị trí biên (Edge Locations) trên toàn cầu, giúp khách hàng quốc tế truy cập với độ trễ thấp.

### Câu 8
**Câu hỏi:** Một chuyên gia tư vấn (consultant) cần truy cập vào một tệp dữ liệu lớn trong bucket S3. Họ cần một ngày để hoàn thành việc truy cập tệp. Phương pháp cấp quyền truy cập nào tuân thủ chặt chẽ nhất các phương pháp thực hành tốt nhất của AWS?
**Các lựa chọn:**
- A. Tạo một Đường dẫn có chữ ký trước (Presigned URL) cho đối tượng, tự động hết hạn sau 24 giờ, và cung cấp đường dẫn đó cho chuyên gia tư vấn.
- B. Sao chép đối tượng vào một bucket S3 mới. Bật quyền truy cập công khai trên bucket mới này. Lấy URL của đối tượng từ bucket mới và cung cấp cho chuyên gia tư vấn.
- C. Tạo một tài khoản người dùng (user account) cho chuyên gia tư vấn. Cấp quyền cho tài khoản này truy cập bucket S3 thông qua AWS Management Console.
- D. Bật quyền truy cập công khai trên bucket S3 hiện tại. Cung cấp URL đối tượng cho chuyên gia tư vấn.
**Đáp án chuẩn:** A
**Giải thích:** Việc mở quyền truy cập công khai (câu B, D) sẽ tạo ra rủi ro bảo mật vô cùng nghiêm trọng đối với hệ thống. Việc tạo một tài khoản IAM mới (câu C) chỉ để tải một tệp tin là không cần thiết và phức tạp. Đường dẫn có chữ ký trước (Presigned URL) được thiết kế chuyên biệt để cấp quyền truy cập tạm thời vào tài nguyên bảo mật, và nó sẽ tự động vô hiệu hóa sau thời gian được cài đặt (24 giờ).

### Câu 9
**Câu hỏi:** Những yếu tố chính nào ảnh hưởng đến việc quyết định sử dụng Khu vực AWS (AWS Regions) nào? (Chọn 2)
**Các lựa chọn:**
- A. Khả năng bảo vệ khỏi các thảm họa thiên nhiên cục bộ.
- B. Tuân thủ các luật lệ và quy định của địa phương.
- C. Bảo mật và kiểm soát truy cập.
- D. Giảm độ trễ cho người dùng cuối.
- E. Khả năng phục hồi của ứng dụng trong quá trình hệ thống gặp sự cố.
**Đáp án chuẩn:** B và D
**Giải thích:** Việc chọn Khu vực (Region) thường phụ thuộc vào 4 yếu tố chính: Tuân thủ pháp luật (ví dụ: yêu cầu dữ liệu người dùng của một quốc gia phải được lưu trữ nội địa), Giảm độ trễ (đặt máy chủ gần người dùng để tải trang nhanh hơn), Tính khả dụng của dịch vụ, và Giá cả. (Lưu ý: Khả năng chống thảm họa thiên nhiên và lỗi hệ thống cục bộ là vai trò của các Vùng sẵn sàng - Availability Zones chứ không phải của Region).

### Câu 10
**Câu hỏi:** Những yếu tố chính nào ảnh hưởng đến việc quyết định sử dụng Vùng sẵn sàng (Availability Zones - AZ) nào? (Chọn 2)
**Các lựa chọn:**
- A. Giảm độ trễ cho người dùng cuối.
- B. Tuân thủ các luật lệ và quy định.
- C. Khả năng phục hồi của ứng dụng trong quá trình hệ thống gặp sự cố.
- D. Bảo mật và kiểm soát truy cập.
- E. Khả năng bảo vệ khỏi các thảm họa thiên nhiên cục bộ.
**Đáp án chuẩn:** C và E
**Giải thích:** Availability Zones (AZ) là các cụm trung tâm dữ liệu vật lý được đặt cách xa nhau trong cùng một Region. Việc phân bổ ứng dụng trên nhiều AZ nhằm mục đích: Bảo vệ hệ thống khỏi các thảm họa thiên nhiên mang tính cục bộ (như lũ lụt, hỏa hoạn ở một AZ) và đảm bảo tính phục hồi, giúp hệ thống tiếp tục hoạt động (Resiliency) trong trường hợp một AZ gặp sự cố gián đoạn dịch vụ.

---

## Module 3: Bảo mật và Mô hình trách nhiệm chung (Security)

### Câu 1
**Câu hỏi:** Phát biểu nào phản ánh nguyên tắc thiết kế của trụ cột bảo mật trong Well-Architected Framework?
**Các lựa chọn:**
- A. Không triển khai giải pháp vào môi trường sản xuất (production) cho đến khi bạn chắc chắn rằng không có bất kỳ rủi ro bảo mật nào tồn tại.
- B. Phi tập trung hóa việc quản lý đặc quyền.
- C. Đảm bảo nhân sự tích cực giám sát các rủi ro tiềm ẩn bằng phương pháp thủ công.
- D. Áp dụng bảo mật ở mọi tầng (layer) của kiến trúc.
**Đáp án chuẩn:** D
**Giải thích:** Bảo mật trên đám mây đòi hỏi phải áp dụng chiến lược "Phòng thủ theo chiều sâu" (Apply security at all layers). Điều này có nghĩa là bạn phải cấu hình bảo mật ở tầng mạng (VPC), tầng máy chủ (EC2), tầng dữ liệu (S3), chứ không chỉ xây dựng lớp bảo vệ vòng ngoài. Câu A không thực tế vì không thể đảm bảo rủi ro bằng 0. Câu C sai vì AWS khuyến khích sử dụng các công cụ tự động để giám sát bảo mật thay vì dựa vào sức người.

### Câu 2
**Câu hỏi:** Những phát biểu nào về trách nhiệm là chính xác dựa trên Mô hình trách nhiệm chung của AWS (Shared Responsibility Model)? (Chọn 2)
**Các lựa chọn:**
- A. AWS chịu trách nhiệm cấu hình tường lửa dựa trên máy chủ (host-based firewall).
- B. Khách hàng chịu trách nhiệm quản lý dữ liệu người dùng của họ.
- C. Khách hàng chịu trách nhiệm cài đặt, bảo trì và ngừng hoạt động phần cứng mà họ sử dụng trong trung tâm dữ liệu AWS.
- D. AWS chịu trách nhiệm cấu hình các Nhóm bảo mật (Security groups).
- E. AWS chịu trách nhiệm về an ninh vật lý của các trung tâm dữ liệu.
**Đáp án chuẩn:** B và E
**Giải thích:** Mô hình trách nhiệm chung được phân chia như sau:
- **Trách nhiệm CỦA đám mây (Security OF the cloud):** AWS quản lý phần cứng, hạ tầng mạng, nguồn điện và bảo mật vật lý cho các trung tâm dữ liệu (Chọn E).
- **Trách nhiệm TRONG đám mây (Security IN the cloud):** Khách hàng chịu trách nhiệm bảo vệ dữ liệu người dùng (Chọn B), cài đặt tường lửa của hệ điều hành, cấu hình Security Group (A và D sai). Khách hàng không có quyền truy cập vật lý hay quản lý phần cứng (C sai).

### Câu 3
**Câu hỏi:** Các lựa chọn nào là đặc điểm của "Nguyên tắc đặc quyền tối thiểu" (Principle of least privilege)? (Chọn 2)
**Các lựa chọn:**
- A. Sử dụng mã hóa.
- B. Chỉ cấp quyền truy cập khi thực sự cần thiết.
- C. Theo dõi các hành động và thay đổi.
- D. Xây dựng các chính sách bảo mật giới hạn quyền truy cập vào các tác vụ cụ thể.
- E. Luôn sử dụng nhóm (groups).
**Đáp án chuẩn:** B và D
**Giải thích:** "Nguyên tắc đặc quyền tối thiểu" có nghĩa là chỉ cấp cho người dùng những quyền hạn tối thiểu vừa đủ để họ thực hiện một công việc cụ thể (limit access to specific tasks), và không cấp thêm bất kỳ quyền hạn dư thừa nào khác, nhằm hạn chế rủi ro lạm dụng hoặc lộ lọt dữ liệu.

### Câu 4
**Câu hỏi:** Phát biểu nào về Dịch vụ quản lý định danh và truy cập AWS (AWS IAM) là đúng?
**Các lựa chọn:**
- A. IAM cung cấp lịch sử kiểm toán về ai đã thực hiện hành động, thực hiện hành động gì và vào thời điểm nào.
- B. IAM cung cấp thêm một lớp bảo mật bằng cách phát hiện các hành vi bất thường trên tài nguyên.
- C. Với IAM, bạn có thể quản lý mã hóa cho các dữ liệu yêu cầu mã hóa ở trạng thái nghỉ (encryption at rest).
- D. Với IAM, bạn có thể cấp cho các thực thể (principals) quyền truy cập cực kỳ chi tiết vào các tài nguyên.
**Đáp án chuẩn:** D
**Giải thích:** Chức năng chính của IAM là quản lý việc "Ai (Principals) được phép thực hiện hành động gì trên Tài nguyên nào (Resources)" với mức độ phân quyền rất chi tiết. Câu A mô tả chức năng của AWS CloudTrail. Câu B mô tả tính năng của Amazon GuardDuty. Câu C là chức năng của AWS KMS.

### Câu 5
**Câu hỏi:** Những phát biểu nào mô tả chính xác về Vai trò IAM (IAM Roles)? (Chọn 2)
**Các lựa chọn:**
- A. Chúng được liên kết duy nhất với một cá nhân cụ thể.
- B. Chúng cung cấp thông tin xác thực bảo mật vĩnh viễn.
- C. Cá nhân, ứng dụng và các dịch vụ có thể đảm nhận (assume) các vai trò này.
- D. Chúng chỉ có thể được sử dụng bởi các tài khoản liên kết với người đã tạo ra vai trò đó.
- E. Chúng cung cấp thông tin xác thực bảo mật tạm thời.
**Đáp án chuẩn:** C và E
**Giải thích:** Đặc điểm khác biệt lớn nhất của IAM Role (Vai trò) so với IAM User (Người dùng) là Role cung cấp chứng chỉ bảo mật tạm thời (temporary credentials). Bất kỳ đối tượng nào được ủy quyền, bao gồm cá nhân con người, ứng dụng, hoặc dịch vụ của AWS (như máy chủ EC2) đều có thể "đảm nhận" (assume) vai trò này để thực thi công việc trong một khoảng thời gian giới hạn.

### Câu 6
**Câu hỏi:** Phát biểu nào phản ánh phương pháp thực hành tốt nhất (best practice) đối với tài khoản quản trị tối cao (root user) trên tài khoản AWS?
**Các lựa chọn:**
- A. Để tránh bị khóa khỏi tài khoản, không nên bật xác thực đa yếu tố (MFA) trên tài khoản root.
- B. Tạo một người dùng quản trị (admin user) và thực hiện hầu hết các tác vụ quản trị bằng người dùng này thay vì tài khoản root.
- C. Tạo hai tài khoản root với thông tin xác thực riêng biệt và giao cho hai cá nhân khác nhau.
- D. Xóa các quyền không cần thiết khỏi tài khoản root.
**Đáp án chuẩn:** B
**Giải thích:** Tài khoản Root là tài khoản có quyền lực tối cao nhất trên toàn bộ hệ thống. AWS khuyến cáo người dùng phải bật xác thực đa yếu tố (MFA) cho tài khoản Root, lưu trữ thông tin đăng nhập ở nơi cực kỳ an toàn và không dùng tài khoản này cho các tác vụ hằng ngày. Thay vào đó, bạn nên tạo một người dùng IAM, cấp quyền Quản trị viên (Admin) cho người dùng đó và sử dụng nó để thực hiện công việc (Chọn B). Việc giới hạn hay xóa quyền của tài khoản Root là không thể thực hiện được (Câu D sai).

### Câu 7
**Câu hỏi:** AWS IAM đánh giá một chính sách (policy) theo quy trình như thế nào?
**Các lựa chọn:**
- A. Một lệnh từ chối rõ ràng (explicit deny) không ghi đè một lệnh cho phép rõ ràng (explicit allow).
- B. Nó kiểm tra các lệnh cho phép rõ ràng trước khi kiểm tra các lệnh từ chối rõ ràng.
- C. Nó kiểm tra các lệnh từ chối rõ ràng trước khi kiểm tra các lệnh cho phép rõ ràng.
- D. Nếu chính sách không có lệnh từ chối rõ ràng hoặc lệnh cho phép rõ ràng nào, người dùng sẽ có quyền truy cập theo mặc định.
**Đáp án chuẩn:** C
**Giải thích:** Logic đánh giá quyền truy cập của AWS cực kỳ chặt chẽ: Hệ thống luôn bắt đầu bằng mặc định là "Từ chối" (Default Deny). Sau đó, nó quét toàn bộ chính sách xem có dòng "Từ chối rõ ràng" (Explicit Deny) nào hay không (Chọn C); nếu có, yêu cầu lập tức bị từ chối mà không cần xét tiếp. Cuối cùng, nó mới tìm các lệnh "Cho phép rõ ràng" (Explicit Allow). Nói tóm lại, lệnh Từ chối (Explicit Deny) luôn luôn được ưu tiên cao nhất.

### Câu 8
**Câu hỏi:** Phát biểu nào về các chính sách (policies) của AWS IAM là chính xác?
**Các lựa chọn:**
- A. Các chính sách dựa trên tài nguyên (Resource-based policies) cho phép truy cập theo mặc định.
- B. Các chính sách dựa trên danh tính (Identity-based policies) được gắn vào một người dùng (user), nhóm (group) hoặc vai trò (role).
- C. Các chính sách dựa trên danh tính chỉ có thể được gắn vào một thực thể duy nhất.
- D. Các chính sách dựa trên tài nguyên được gắn vào một người dùng, nhóm hoặc vai trò.
**Đáp án chuẩn:** B
**Giải thích:** Trong IAM có 2 loại chính sách cơ bản:
1. Chính sách dựa trên danh tính (Identity-based policies): Được gán trực tiếp cho đối tượng thực thi như User, Group, hoặc Role (chọn B đúng).
2. Chính sách dựa trên tài nguyên (Resource-based policies): Được gắn trực tiếp lên các tài nguyên mà người dùng truy cập, chẳng hạn như S3 bucket hay SQS queue (Câu D sai).

### Câu 9
**Câu hỏi:** Thành phần (element) nào trong chính sách AWS IAM chứa thông tin về việc quyết định cho phép (allow) hay từ chối (deny) một yêu cầu?
**Các lựa chọn:**
- A. Điều kiện (Condition)
- B. Thực thể (Principal)
- C. Hiệu ứng (Effect)
- D. Hành động (Action)
**Đáp án chuẩn:** C
**Giải thích:** Trong cấu trúc JSON của một chính sách IAM, phần tử "Effect" xác định kết quả của chính sách, và nó chỉ nhận một trong hai giá trị là: "Allow" (Cho phép) hoặc "Deny" (Từ chối). (Action là thao tác được phép làm, Principal là đối tượng bị áp dụng chính sách, Condition là các điều kiện ràng buộc đi kèm).

### Câu 10
**Câu hỏi:** Tùy chọn nào mô tả chính xác thành phần "statement" trong một chính sách AWS IAM?
**Các lựa chọn:**
- A. Thành phần statement là một phần tùy chọn (không bắt buộc) của chính sách IAM.
- B. Một chính sách chỉ có thể chứa duy nhất một thành phần statement.
- C. Thành phần statement không áp dụng cho các chính sách dựa trên danh tính.
- D. Thành phần statement chứa các thành phần con khác, kết hợp lại với nhau để định nghĩa những gì được cho phép hoặc bị từ chối.
**Đáp án chuẩn:** D
**Giải thích:** "Statement" là khối cốt lõi và bắt buộc phải có trong mọi chính sách IAM (Câu A sai). Một chính sách có thể bao gồm nhiều khối Statement (Câu B sai). Bên trong mỗi Statement sẽ chứa các thành phần nhỏ hơn (như Effect, Action, Resource, Condition) nhằm định nghĩa một cách chi tiết quyền hạn cụ thể (Câu D đúng).

---

## Module 4: Lưu trữ (Storage)

### Câu 1
**Câu hỏi:** Do công ty tiến hành sáp nhập, một kỹ sư dữ liệu cần gia tăng dung lượng lưu trữ đối tượng (object storage). Họ không dự đoán được chính xác dung lượng cần thiết. Họ mong muốn một dịch vụ có khả năng mở rộng quy mô linh hoạt để lưu trữ dữ liệu phi cấu trúc, bán cấu trúc và có cấu trúc. Dịch vụ nào sẽ tối ưu chi phí nhất để thực hiện nhiệm vụ này?
**Các lựa chọn:**
- A. Amazon S3
- B. Amazon Elastic Block Store (Amazon EBS)
- C. AWS Storage Gateway
- D. Amazon RDS
**Đáp án chuẩn:** A. Amazon S3
**Giải thích:** Từ khóa "lưu trữ đối tượng" (object storage) cùng với khả năng lưu trữ mọi định dạng dữ liệu (unstructured, semistructured, structured) với khả năng mở rộng vô hạn chính là các đặc tính cốt lõi của Amazon S3. (EBS là lưu trữ dạng khối dùng cho máy chủ ảo, RDS là cơ sở dữ liệu quan hệ, Storage Gateway dùng để kết nối hạ tầng tại chỗ với đám mây).

### Câu 2
**Câu hỏi:** Amazon S3 cung cấp giải pháp tối ưu cho trường hợp sử dụng (use case) nào dưới đây?
**Các lựa chọn:**
- A. Một không gian lưu trữ có thể truy cập qua internet dành cho các tệp video để một trang web bên ngoài có thể truy cập.
- B. Một kho dữ liệu (data warehouse) dành cho hệ thống phân tích kinh doanh (business intelligence).
- C. Hệ thống lưu trữ tính phí theo giờ cho các tệp tạm thời được truy cập thường xuyên.
- D. Dữ liệu sổ cái (ledger data) được cập nhật và truy xuất liên tục.
**Đáp án chuẩn:** A
**Giải thích:** Amazon S3 là giải pháp hoàn hảo để lưu trữ các tệp tĩnh (hình ảnh, video, tài liệu) và cho phép người dùng hoặc ứng dụng truy cập trực tiếp từ internet thông qua URL tĩnh. (Câu B là mục đích sử dụng của Amazon Redshift, câu C dành cho Amazon ElastiCache hoặc EBS, câu D dùng cho Amazon QLDB).

### Câu 3
**Câu hỏi:** Một công ty muốn sử dụng bucket Amazon S3 để lưu trữ trang web của họ thay vì dùng máy chủ web truyền thống. Những loại nội dung nào được Amazon S3 hỗ trợ cho tính năng lưu trữ trang web tĩnh (static web hosting)? (Chọn 3)
**Các lựa chọn:**
- A. Các tệp HTML động (Dynamic HTML files)
- B. Các tập lệnh chạy phía máy khách (Client-side scripts)
- C. Các tập lệnh chạy phía máy chủ (Server-side scripts)
- D. Hệ quản trị cơ sở dữ liệu (Database engine)
- E. Tệp âm thanh và video
- F. Các tệp HTML tĩnh và tệp hình ảnh
**Đáp án chuẩn:** B, E, và F
**Giải thích:** Amazon S3 chỉ cung cấp tính năng lưu trữ Trang web tĩnh (Static Website). Nghĩa là nó chỉ lưu và phân phối các tệp tin trực tiếp xuống trình duyệt của người dùng như: HTML, CSS, Hình ảnh (F), Video/Âm thanh (E) và các đoạn mã xử lý ở phía trình duyệt như JavaScript (B). S3 không có môi trường tính toán để xử lý các mã lệnh phía máy chủ (như PHP, Python) hay cơ sở dữ liệu.

### Câu 4
**Câu hỏi:** Một công ty dự định sử dụng bucket S3 để lưu trữ dữ liệu nhạy cảm. Những biện pháp nào họ có thể thực hiện để bảo vệ dữ liệu của mình? (Chọn 2)
**Các lựa chọn:**
- A. Bật mã hóa phía máy chủ (server-side encryption) trên bucket S3 sau khi đã tải lên dữ liệu nhạy cảm.
- B. Bật mã hóa phía máy chủ trên bucket S3 trước khi tải lên dữ liệu nhạy cảm.
- C. Sử dụng Giao thức truyền tệp an toàn (SFTP) để kết nối trực tiếp đến Amazon S3.
- D. Sử dụng mã hóa phía máy khách (client-side encryption) để bảo vệ dữ liệu trong quá trình truyền tải trước khi gửi lên Amazon S3.
- E. Tải lên các tệp không được mã hóa vì Amazon S3 sẽ tự động mã hóa tệp theo mặc định.
**Đáp án chuẩn:** B và D
**Giải thích:** Để đảm bảo tính bảo mật tuyệt đối cho dữ liệu nhạy cảm, bạn phải thực hiện mã hóa. Có hai phương pháp chính:
1. Yêu cầu S3 tự động mã hóa dữ liệu ngay khi nó được nhận vào hệ thống (Mã hóa phía máy chủ - Server-side encryption). Cấu hình này phải được thiết lập trước khi tải dữ liệu lên (Chọn B).
2. Tự mã hóa tệp tin bằng hệ thống của khách hàng trước, sau đó tải bản đã mã hóa lên S3 (Mã hóa phía máy khách - Client-side encryption - Chọn D).

### Câu 5
**Câu hỏi:** Một công ty cần tạo một kho lưu trữ chung để chia sẻ tệp tin. Amazon S3 hỗ trợ đáp ứng những yêu cầu nào trong các yêu cầu sau? (Chọn 2)
**Các lựa chọn:**
- A. Đính kèm bình luận (comments) vào tệp tin.
- B. Khóa một tệp tin sao cho tại một thời điểm chỉ có một người có thể chỉnh sửa nó.
- C. So sánh nội dung chi tiết giữa các tệp tin khác nhau.
- D. Khôi phục các tệp tin đã bị xóa.
- E. Duy trì các phiên bản khác nhau của tệp tin.
**Đáp án chuẩn:** D. Khôi phục các tệp tin đã bị xóa và E. Duy trì các phiên bản khác nhau của tệp tin.
**Giải thích:** Amazon S3 sở hữu tính năng vô cùng hữu ích gọi là Quản lý phiên bản (Versioning). Khi tính năng này được kích hoạt, hệ thống sẽ lưu lại bản sao của tệp mỗi khi có thao tác ghi đè (Duy trì các phiên bản - E). Nhờ đó, nếu một tệp tin vô tình bị xóa đi, quản trị viên có khả năng khôi phục lại trạng thái trước đó một cách dễ dàng (Khôi phục tệp bị xóa - D). S3 là dịch vụ lưu trữ đối tượng đơn thuần, không phải ứng dụng văn phòng, nên nó không có tính năng bình luận, khóa tệp (file locking) hay so sánh văn bản.

### Câu 6
**Câu hỏi:** Đội ngũ chăm sóc khách hàng truy cập dữ liệu hồ sơ hàng ngày trong khoảng thời gian tối đa 30 ngày. Các hồ sơ này có thể được mở lại giải quyết và yêu cầu phải truy xuất được ngay lập tức trong vòng 1 năm kể từ khi đóng lại. Giải pháp lưu trữ nào vừa đáp ứng yêu cầu vừa mang lại hiệu quả kinh tế cao nhất?
**Các lựa chọn:**
- A. Lưu dữ liệu tại S3 Standard. Sử dụng chính sách vòng đời để chuyển dữ liệu sang S3 Glacier Flexible Retrieval sau 30 ngày.
- B. Lưu toàn bộ dữ liệu tại S3 Standard để luôn sẵn sàng truy cập mọi lúc.
- C. Lưu dữ liệu tại S3 Standard. Sử dụng chính sách vòng đời để chuyển dữ liệu sang lớp S3 Standard-Infrequent Access (S3 Standard-IA) sau 30 ngày.
- D. Lưu dữ liệu tại S3 Intelligent-Tiering để hệ thống tự động luân chuyển giữa các lớp tùy theo tần suất truy cập.
**Đáp án chuẩn:** C
**Giải thích:** 
- Trong 30 ngày đầu, dữ liệu được truy cập thường xuyên nên phải lưu ở lớp S3 Standard.
- Sau 30 ngày, tần suất truy cập giảm hẳn, nhưng nếu hồ sơ được mở lại thì cần lấy dữ liệu ngay lập tức (immediate access). Việc đẩy xuống lớp lưu trữ S3 Standard-IA sẽ giảm chi phí lưu trữ mà vẫn giữ nguyên tốc độ truy xuất tức thì. (Câu A sai vì lớp Glacier đòi hỏi thời gian phục hồi từ vài phút đến vài giờ, không đáp ứng tiêu chí tức thì. Câu B không tối ưu chi phí).

### Câu 7
**Câu hỏi:** Tùy chọn nào sử dụng mạng lưới các vị trí biên (edge locations) trong Amazon CloudFront để truyền tải các tệp tin với khoảng cách xa đến một bucket S3 một cách nhanh chóng?
**Các lựa chọn:**
- A. AWS SDKs
- B. AWS Transfer Family
- C. Amazon S3 Transfer Acceleration
- D. Amazon S3 REST API
**Đáp án chuẩn:** C. Amazon S3 Transfer Acceleration
**Giải thích:** Dựa vào từ khóa "edge locations" kết hợp với "transfer files", đây là tính năng S3 Transfer Acceleration. Tính năng này tăng tốc quá trình tải lên từ một nơi ở xa (ví dụ tải lên S3 Mỹ từ Việt Nam) bằng cách định tuyến gói tin qua vị trí biên CloudFront gần nhất và truyền đi qua mạng lưới cáp quang xương sống tốc độ cao của AWS.

### Câu 8
**Câu hỏi:** Một nhà sản xuất video phải thường xuyên tải nhiều tệp video lên Amazon S3. Các tệp này có dung lượng dao động từ 100–700 MB. Kết nối internet thiếu ổn định, khiến một số quá trình tải lên bị lỗi giữa chừng. Giải pháp nào cung cấp cách truyền tải nhanh nhất, đáng tin cậy nhất và hiệu quả về chi phí để đẩy tệp lên Amazon S3?
**Các lựa chọn:**
- A. Amazon S3 Transfer Acceleration
- B. Bảng điều khiển AWS Management Console
- C. Tính năng tải lên đa phần (multipart uploads) của Amazon S3
- D. AWS Transfer Family
**Đáp án chuẩn:** C. Tính năng tải lên đa phần (multipart uploads) của Amazon S3
**Giải thích:** Khi đường truyền mạng bị chập chờn, việc tải lên nguyên khối một tệp 700MB sẽ rất rủi ro vì lỗi mạng sẽ khiến thao tác phải thực hiện lại từ đầu. Tính năng tải lên đa phần (multipart upload) sẽ chia nhỏ tệp 700MB thành hàng trăm phần nhỏ. Nếu kết nối bị ngắt, hệ thống chỉ cần gửi lại chính xác phần bị lỗi thay vì toàn bộ tệp. AWS khuyến nghị sử dụng tính năng này cho các tệp có kích thước lớn hơn 100MB.

### Câu 9
**Câu hỏi:** Lớp lưu trữ nào của Amazon S3 được thiết kế đặc biệt cho mục đích lưu trữ các bản sao lưu từ dữ liệu tại chỗ (on-premises) hoặc các dữ liệu có thể dễ dàng tái tạo lại được?
**Các lựa chọn:**
- A. S3 One Zone-Infrequent Access (S3 One Zone-IA)
- B. S3 Intelligent-Tiering
- C. S3 Glacier Instant Retrieval
- D. S3 Standard-Infrequent Access (S3 Standard-IA)
**Đáp án chuẩn:** A. S3 One Zone-Infrequent Access (S3 One Zone-IA)
**Giải thích:** Điểm mấu chốt là "dữ liệu dễ dàng tái tạo lại được" (easily re-creatable data). Lớp lưu trữ S3 One Zone-IA có đặc tính là chỉ lưu trữ dữ liệu tại một Vùng sẵn sàng (AZ) duy nhất, thay vì được nhân bản ra tối thiểu 3 vùng như các lớp S3 khác. Điều này giúp giảm 20% chi phí, tuy nhiên nếu AZ đó gặp thảm họa, dữ liệu có thể bị mất. Vì vậy, nó chỉ phù hợp với dữ liệu không quá quan trọng hoặc đã có bản gốc lưu ở nơi khác.

### Câu 10
**Câu hỏi:** Một công ty cần lưu giữ các hồ sơ để phục vụ kiểm tra pháp lý trong thời hạn 7 năm. Các hồ sơ này cực kỳ hiếm khi được truy xuất (chỉ 1 hoặc 2 lần mỗi năm). Lớp lưu trữ nào của Amazon S3 mang lại mức chi phí thấp nhất cho nhu cầu này?
**Các lựa chọn:**
- A. S3 Glacier Deep Archive
- B. S3 One Zone-Infrequent Access (S3 One Zone-IA)
- C. S3 Intelligent-Tiering
- D. S3 Standard-Infrequent Access (S3 Standard-IA)
**Đáp án chuẩn:** A. S3 Glacier Deep Archive
**Giải thích:** S3 Glacier Deep Archive là lớp lưu trữ có chi phí rẻ nhất trong toàn bộ dịch vụ của AWS. Nó được thiết kế chuyên biệt để đóng băng và lưu trữ dài hạn (lên tới nhiều năm) đối với các dữ liệu chỉ nhằm mục đích tuân thủ pháp luật, bởi quá trình phục hồi dữ liệu từ lớp này có thể mất từ 12 đến 48 giờ.

---

## Module 5: Điện toán (Compute)

### Câu 1
**Câu hỏi:** Những đặc tính nào là lý do để doanh nghiệp quyết định lựa chọn Amazon EC2? (Chọn 2)
**Các lựa chọn:**
- A. Kiểm soát hoàn toàn các tài nguyên điện toán.
- B. Khả năng chạy bất kỳ loại khối lượng công việc (workload) nào.
- C. AWS tự động quản lý các bản vá hệ điều hành (OS patches).
- D. AWS đảm nhận quản lý bảo mật cho hệ điều hành.
- E. Khả năng chạy các ứng dụng phi máy chủ (serverless).
**Đáp án chuẩn:** A. Kiểm soát hoàn toàn các tài nguyên điện toán và B. Khả năng chạy bất kỳ loại khối lượng công việc nào.
**Giải thích:** Amazon EC2 cung cấp dịch vụ máy chủ ảo dưới dạng Hạ tầng như một Dịch vụ (IaaS). Lợi ích lớn nhất của IaaS là người dùng có quyền kiểm soát toàn diện (root/admin access) vào máy chủ ảo để cài đặt và chạy bất kỳ phần mềm hay hệ thống nào họ muốn. Câu C và D sai vì trong dịch vụ EC2, trách nhiệm bảo mật và vá lỗi hệ điều hành hoàn toàn thuộc về khách hàng. Câu E sai vì EC2 là máy chủ có quản lý truyền thống, không phải kiến trúc serverless như AWS Lambda.

### Câu 2
**Câu hỏi:** Lợi ích của việc sử dụng Amazon Machine Image (AMI) là gì? (Chọn 3)
**Các lựa chọn:**
- A. Cập nhật hệ thống bằng cách tự động vá lỗi trên AMI của chúng.
- B. Khởi chạy hàng loạt máy chủ mới với cấu hình giống hệt nhau.
- C. Bán hoặc chia sẻ các giải pháp phần mềm được đóng gói dưới dạng AMI.
- D. Tự động hóa cài đặt nhóm bảo mật (security group) cho các máy chủ.
- E. Sử dụng AMI đóng vai trò như một bản sao lưu (backup) máy chủ cho các phiên bản Amazon EC2.
- F. Di chuyển trực tiếp dữ liệu từ mạng tại chỗ (on-premises) sang các máy chủ Amazon EC2.
**Đáp án chuẩn:** B, C, và E
**Giải thích:** AMI hoạt động tương tự như một "bản sao lưu nguyên trạng hệ thống đĩa" của máy chủ. Nó mang lại những lợi ích:
1. Bạn có thể sử dụng nó làm mẫu để khởi tạo nhanh chóng hàng loạt máy chủ có chung cấu hình (B).
2. Bạn có thể cài đặt sẵn phần mềm, đóng gói thành AMI để kinh doanh trên AWS Marketplace (C).
3. Nó là phương pháp tuyệt vời để sao lưu toàn bộ trạng thái cấu hình của hệ thống máy chủ (E). 
(Lưu ý: AMI không có chức năng tự động vá lỗi hệ thống và không lưu trữ cấu hình mạng lưới bảo mật như Security Group).

### Câu 3
**Câu hỏi:** Một quản trị viên hệ thống phải tiến hành thay đổi loại máy (instance types) của nhiều máy chủ Amazon EC2 đang trong trạng thái hoạt động. Các máy chủ này được khởi chạy bằng cả AMI sử dụng bộ lưu trữ Elastic Block Store (EBS) và AMI sử dụng bộ lưu trữ Instance Store. Phương pháp nào là cách hợp lệ để thực hiện thay đổi cấu hình máy?
**Các lựa chọn:**
- A. Dừng (Stop) một máy chủ sử dụng Instance Store, thay đổi cấu hình, và khởi động lại.
- B. Dừng (Stop) một máy chủ sử dụng EBS, thay đổi cấu hình, và khởi động lại.
- C. Thay đổi cấu hình của máy chủ sử dụng Instance Store mà không cần phải tắt máy.
- D. Thay đổi cấu hình của máy chủ sử dụng EBS mà không cần phải tắt máy.
**Đáp án chuẩn:** B. Dừng (Stop) một máy chủ sử dụng EBS, thay đổi cấu hình, và khởi động lại.
**Giải thích:** Có hai quy tắc quan trọng trong quản trị EC2:
1. Việc thay đổi phần cứng máy ảo (RAM, CPU) bắt buộc phải thực hiện sau khi máy chủ đã chuyển sang trạng thái dừng (Stop).
2. Trạng thái dừng (Stop) CHỈ được hỗ trợ trên các máy chủ có ổ đĩa hệ điều hành sử dụng công nghệ EBS. Đối với máy chủ sử dụng ổ đĩa cục bộ tạm thời (Instance Store), chức năng Stop không được hỗ trợ (nó chỉ có thể restart hoặc terminate). Vì vậy, chỉ có đáp án B là khả thi.

### Câu 4
**Câu hỏi:** Một khối lượng công việc đòi hỏi tần suất truy xuất đọc/ghi cực kỳ cao đối với các tập dữ liệu lưu trữ trực tiếp trên máy chủ. Nhóm loại máy chủ (instance types) nào sẽ hoạt động TỐT NHẤT cho khối lượng công việc này? (Chọn 2)
**Các lựa chọn:**
- A. Nhóm tính toán tăng tốc (Accelerated computing)
- B. Nhóm mục đích chung (General purpose)
- C. Nhóm tối ưu hóa bộ nhớ (Memory optimized)
- D. Nhóm tối ưu hóa lưu trữ (Storage optimized)
- E. Nhóm tối ưu hóa điện toán (Compute optimized)
**Đáp án chuẩn:** C. Nhóm tối ưu hóa bộ nhớ (Memory optimized) và D. Nhóm tối ưu hóa lưu trữ (Storage optimized)
**Giải thích:** 
- Nhóm tối ưu hóa lưu trữ (Storage optimized): Được thiết kế tối ưu với ổ cứng tốc độ siêu cao, phù hợp để đọc và ghi hàng vạn lệnh I/O mỗi giây từ đĩa vật lý.
- Nhóm tối ưu hóa bộ nhớ RAM (Memory optimized): Được sử dụng để tải các tập dữ liệu khổng lồ trực tiếp lên bộ nhớ RAM nhằm xử lý với độ trễ gần như bằng không (rất quan trọng cho các cơ sở dữ liệu xử lý tức thời quy mô lớn).

### Câu 5
**Câu hỏi:** Một ứng dụng nội bộ cần thu thập địa chỉ kiểm soát truy cập môi trường (MAC address) của máy chủ Amazon EC2 mà nó đang được lưu trữ. Hệ thống kiến trúc sử dụng nhóm AWS Auto Scaling để tự động thêm bớt máy chủ liên tục. Đâu là cách TỐT NHẤT để phần mềm ứng dụng tự động nhận biết địa chỉ MAC?
**Các lựa chọn:**
- A. Sử dụng chức năng user data của từng máy chủ để truy vấn địa chỉ MAC thông qua siêu dữ liệu máy chủ (instance metadata).
- B. Lưu cứng địa chỉ MAC vào tệp cấu hình ứng dụng (config file) của từng máy chủ.
- C. Đính kèm địa chỉ MAC vào bản mẫu Amazon Machine Image (AMI) dùng để khởi tạo tất cả máy chủ trong Auto Scaling.
- D. Biên dịch một bản AMI riêng biệt chứa địa chỉ MAC cho từng máy chủ mới sinh ra.
**Đáp án chuẩn:** A. Sử dụng chức năng user data của từng máy chủ để truy vấn địa chỉ MAC thông qua siêu dữ liệu máy chủ (instance metadata).
**Giải thích:** Vì Auto Scaling tạo mới máy chủ một cách ngẫu nhiên và tự động, mỗi máy ảo sẽ sở hữu một địa chỉ MAC duy nhất. Do đó, việc lưu cứng thông số này vào cấu hình phần mềm hoặc bản AMI mẫu là điều không thể (loại trừ B, C, D). Cách tối ưu là phần mềm sẽ gửi một yêu cầu truy vấn nội bộ vào đường dẫn "instance metadata" ngay khi khởi động để hệ thống EC2 tự động trả về thông tin địa chỉ MAC của chính nó.

### Câu 6
**Câu hỏi:** Các phát biểu nào sau đây mô tả chính xác về tính năng Dữ liệu người dùng (User data)? (Chọn 2)
**Các lựa chọn:**
- A. Theo mặc định, tập lệnh user data chỉ thực thi duy nhất một lần vào lúc máy chủ được khởi chạy.
- B. Theo mặc định, tập lệnh user data sẽ thực thi lại sau mỗi lần khởi động lại máy chủ (restart).
- C. Tập lệnh user data không thể được thực thi khi máy chủ đang ở trạng thái dừng (stopped).
- D. Kiến trúc sư đám mây phải tự chạy lệnh /var/lib/cloud/instance/scripts/part-001 để tập lệnh được thực thi lần nữa.
- E. Kiến trúc sư đám mây phải xóa bỏ tệp tin đánh dấu "config_user_scripts" để hệ thống tiến hành chạy lại tập lệnh user data.
**Đáp án chuẩn:** A và E
**Giải thích:** User data là một công cụ truyền tham số hoặc mã lệnh tự động cài đặt hệ thống ở bước khởi động máy (bootstrap).
- Đặc điểm của nó là chỉ được hệ thống kích hoạt chạy đúng một lần duy nhất vào lúc máy chủ EC2 vừa được sinh ra (A).
- Nếu quản trị viên muốn kịch bản mã lệnh này chạy lại trong lần khởi động tiếp theo, họ phải đi vào hệ thống và xóa tệp tin có tên "config_user_scripts" (E) nhằm xóa lịch sử hoạt động, khiến hệ thống tin rằng tập lệnh này chưa từng được chạy.

### Câu 7
**Câu hỏi:** Một hệ thống chuyên xử lý giao dịch thương mại trên Amazon EC2 thực hiện khối lượng cực lớn các thao tác đọc và ghi liên tục với tần suất cao. Loại ổ đĩa Amazon Elastic Block Store (Amazon EBS) nào là TỐT NHẤT cho ứng dụng này?
**Các lựa chọn:**
- A. Ổ đĩa thể rắn mục đích chung - General Purpose solid state drive (SSD)
- B. Ổ đĩa cứng cơ học tối ưu hóa băng thông - Throughput Optimized hard disk drive (HDD)
- C. Ổ đĩa cứng cơ học lưu trữ lạnh - Cold hard disk drive (HDD)
- D. Ổ đĩa thể rắn phân bổ trước mức IOPS - Provisioned IOPS solid state drive (SSD)
**Đáp án chuẩn:** D. Provisioned IOPS solid state drive (SSD)
**Giải thích:** Đối với hệ thống giao dịch dữ liệu, từ khóa quan trọng là "khối lượng cực lớn" và "thao tác liên tục".
- Các tùy chọn ổ đĩa HDD (B, C) không đáp ứng được tần suất truy xuất ngẫu nhiên nhanh chóng.
- Ổ đĩa SSD mục đích chung (A) hoạt động ổn định nhưng có giới hạn thông lượng.
- Ổ đĩa SSD phân bổ trước mức IOPS (D) là phân khúc ổ cứng cao cấp nhất, cung cấp hiệu năng cực lớn, độ trễ không đáng kể và cam kết duy trì tốc độ đọc/ghi không sụt giảm, đặc biệt phù hợp cho các cơ sở dữ liệu tải nặng.

### Câu 8
**Câu hỏi:** Mặc dù bạn hoàn toàn có thể tự triển khai hệ thống chia sẻ tệp NFS bằng cách cài đặt máy chủ trên nền tảng Amazon EC2 (dùng ổ EBS), nhưng việc sử dụng dịch vụ lưu trữ chuyên nghiệp Amazon Elastic File System (Amazon EFS) mang lại những lợi thế kỹ thuật vượt trội nào? (Chọn 2)
**Các lựa chọn:**
- A. Khả năng sẵn sàng cao (High availability)
- B. Tính nhất quán dữ liệu mạnh mẽ (Strong consistency)
- C. Không cần phải thực hiện quá trình sao lưu
- D. Chức năng khóa tệp tin chuyên sâu (File locking)
- E. Tự động mở rộng quy mô lưu trữ (Automatic scaling)
**Đáp án chuẩn:** A. Khả năng sẵn sàng cao (High availability) và E. Tự động mở rộng quy mô lưu trữ (Automatic scaling)
**Giải thích:** Việc tự thiết lập máy chủ chia sẻ tệp chứa nhiều nhược điểm lớn như: máy chủ gặp sự cố khiến dịch vụ ngưng hoạt động, hoặc ổ cứng đầy phải tự tiến hành mua thêm dung lượng vật lý. Dịch vụ lưu trữ Amazon EFS giải quyết hoàn toàn hai khuyết điểm này:
1. Tính sẵn sàng cao (A): Dữ liệu được hệ thống tự động phân tán ở nhiều Vùng sẵn sàng, đảm bảo dữ liệu luôn có thể truy cập ngay cả khi một trung tâm dữ liệu gặp sự cố.
2. Mở rộng tự động (E): Dung lượng bộ nhớ của EFS có khả năng co giãn hoàn toàn tự động dựa trên số lượng tệp được lưu trữ, xóa bỏ giới hạn về mặt vật lý.

### Câu 9
**Câu hỏi:** Dịch vụ Amazon FSx for Windows File Server cung cấp giải pháp đặc thù gì cho hệ thống mạng?
**Các lựa chọn:**
- A. Một giải pháp chuyên dụng để sao lưu dữ liệu cho các máy chủ Windows đặt tại hạ tầng doanh nghiệp (on-premises).
- B. Công cụ của Amazon dùng để giám sát và quản lý các máy chủ tệp tin nền tảng Windows.
- C. Dịch vụ cung cấp máy chủ định danh Microsoft Active Directory cho các máy chủ chia sẻ tệp.
- D. Máy chủ lưu trữ và chia sẻ tệp nền tảng Windows được AWS quản lý toàn diện.
**Đáp án chuẩn:** D. Máy chủ lưu trữ và chia sẻ tệp nền tảng Windows được AWS quản lý toàn diện.
**Giải thích:** Nếu như hệ điều hành Linux tương thích tốt nhất với hệ thống tệp Amazon EFS, thì các ứng dụng dành cho môi trường doanh nghiệp Windows yêu cầu định dạng tệp SMB và NTFS, tương thích trực tiếp với Active Directory. Amazon FSx for Windows File Server chính là một máy chủ chia sẻ tệp tin gốc của Windows, được AWS vận hành và bảo trì hoàn toàn, giúp khách hàng sử dụng dễ dàng như đang dùng hạ tầng nội bộ nhưng có khả năng thay đổi quy mô tự động.

### Câu 10
**Câu hỏi:** Những mô tả nào về các mô hình định giá sử dụng máy chủ Amazon EC2 là chính xác? (Chọn 2)
**Các lựa chọn:**
- A. Với Máy chủ chạy theo yêu cầu (On-Demand Instances), khách hàng thanh toán chi phí điện toán tính theo thời gian sử dụng thực tế mà không cần bất kỳ ràng buộc hợp đồng dài hạn nào.
- B. Với Máy chủ linh hoạt giá rẻ (Spot Instances), hệ thống cung cấp năng lực điện toán dư thừa với giá được chiết khấu rất sâu, tuy nhiên chúng có thể bị hệ thống tự động gián đoạn và thu hồi.
- C. Với Máy chủ thuê riêng (Dedicated Hosts), đây là những máy chủ ảo được thiết kế chuyên biệt để hoạt động độc quyền như một bức tường lửa.
- D. Với Máy chủ dự phòng hợp đồng (Reserved Instances), AWS sẽ bàn giao các máy chủ vật lý chuyên dụng cho khách hàng độc quyền sử dụng trong thời hạn hợp đồng.
- E. Kế hoạch tiết kiệm (Savings Plans) là công cụ lập kế hoạch ngân sách giúp khách hàng quản lý và cảnh báo chi phí tiêu thụ trên EC2.
**Đáp án chuẩn:** A và B
**Giải thích:** AWS triển khai cấu trúc tính phí EC2 rõ ràng như sau:
- Tùy chọn Theo yêu cầu (A): Là mô hình trả tiền theo thời gian thực (tính bằng giây), không đòi hỏi hợp đồng cam kết. Mô hình này linh hoạt nhất nhưng mức giá không được chiết khấu.
- Tùy chọn Máy chủ Spot (B): Đây là công suất thừa của AWS được đem bán lại với mức giảm giá có thể lên tới 90%. Tuy nhiên, đổi lại, AWS có toàn quyền yêu cầu lấy lại máy chủ đó bất kỳ lúc nào với cảnh báo trước 2 phút. 
(Các lựa chọn sai: Dedicated Hosts là thuê phần cứng vật lý dùng chung không giới hạn tính năng; Reserved Instances chỉ là cam kết chiết khấu chứ không phải là sở hữu phần cứng; Savings Plans là hợp đồng cam kết sử dụng linh hoạt thay thế Reserved Instances, chứ không phải công cụ lập ngân sách.)

---

## Module 6: Cơ sở dữ liệu (Database)

### Câu 1
**Câu hỏi:** Phát biểu nào so sánh tính năng giữa một dịch vụ cơ sở dữ liệu được AWS quản lý toàn diện với một cơ sở dữ liệu tự triển khai trên máy chủ ảo Amazon EC2 là đúng?
**Các lựa chọn:**
- A. AWS tự động đảm nhận việc nâng cấp các bản vá lỗi cơ sở dữ liệu đối với dịch vụ cơ sở dữ liệu được quản lý.
- B. Khách hàng không cần phải thiết lập cấu hình sao lưu cho dịch vụ cơ sở dữ liệu được AWS quản lý.
- C. AWS tự động quản lý và áp dụng bản vá hệ điều hành (OS) đối với cơ sở dữ liệu do khách hàng tự cài đặt trên máy chủ EC2.
- D. Khách hàng không cần thiết lập cấu hình sao lưu nếu cơ sở dữ liệu được lưu trữ trên máy chủ EC2.
**Đáp án chuẩn:** A. AWS tự động đảm nhận việc nâng cấp các bản vá lỗi cơ sở dữ liệu đối với dịch vụ cơ sở dữ liệu được quản lý.
**Giải thích:** Đặc điểm nổi bật của dịch vụ được quản lý toàn diện (như Amazon RDS) là việc AWS sẽ tự động hóa các tác vụ quản trị bảo trì tốn thời gian, bao gồm nâng cấp hệ điều hành và cập nhật các bản vá lỗi bảo mật (database patches). Ngược lại, nếu người dùng tự triển khai cơ sở dữ liệu trên máy ảo EC2, họ phải tự mình thực hiện mọi thao tác quản trị máy chủ (loại trừ C). Ở cả hai phương án, thao tác thiết lập quy trình sao lưu theo nhu cầu riêng luôn luôn cần thiết (loại trừ B và D).

### Câu 2
**Câu hỏi:** Một doanh nghiệp khởi nghiệp quy mô nhỏ đang cân nhắc sử dụng dịch vụ cơ sở dữ liệu nào cho hệ thống đăng ký học viên trên nền tảng trực tuyến. Các đặc tả yêu cầu nào sẽ định hướng họ lựa chọn Amazon RDS thay vì Amazon DynamoDB? (Chọn 2)
**Các lựa chọn:**
- A. Cấu trúc dữ liệu có tính hệ thống cao và mối quan hệ chặt chẽ.
- B. Các dữ liệu liên quan đến học viên, thông tin khóa học và thông tin ghi danh được phân mảnh trong nhiều bảng (tables) khác nhau.
- C. Yêu cầu mọi dữ liệu và quá trình giao dịch phải được mã hóa nhằm bảo vệ tính riêng tư.
- D. Hệ thống đăng ký ghi danh đòi hỏi tính sẵn sàng cao xuyên suốt để tránh mất khách hàng.
- E. Dữ liệu cần thiết phải có quy trình sao lưu định kỳ để đối phó sự cố thảm họa.
**Đáp án chuẩn:** A và B
**Giải thích:** Amazon RDS là dịch vụ cơ sở dữ liệu quan hệ (SQL) được tối ưu hóa cho mô hình dữ liệu có cấu trúc ổn định (A) và sở hữu khả năng xử lý truy vấn kết hợp (JOIN) hiệu quả khối lượng thông tin phân mảnh trên nhiều bảng dữ liệu (B). Trong khi đó, Amazon DynamoDB là cơ sở dữ liệu phi quan hệ (NoSQL), không có khả năng kết nối phức tạp giữa các bảng một cách tối ưu. Cả hai nền tảng đều hỗ trợ sẵn các chức năng nâng cao như mã hóa bảo mật, tính khả dụng cao và tự động sao lưu, do đó các lựa chọn C, D, E không phải là tiêu chí quyết định.

### Câu 3
**Câu hỏi:** Một dự án mới đang được lên kế hoạch xây dựng để quản lý kho hàng hóa thông qua giao diện web. Đội ngũ kỹ sư mong muốn sử dụng một hệ thống cơ sở dữ liệu xử lý giao dịch với khả năng phản hồi theo thời gian thực (real-time). Dịch vụ nào là giải pháp thiết kế hoàn hảo nhất?
**Các lựa chọn:**
- A. Amazon DynamoDB
- B. Amazon Redshift
- C. Amazon Neptune
- D. Amazon DocumentDB
**Đáp án chuẩn:** A. Amazon DynamoDB
**Giải thích:** Yêu cầu trọng tâm của dự án là khả năng xử lý "giao dịch thời gian thực" phục vụ cho các "ứng dụng web" hiện đại. Amazon DynamoDB là một dịch vụ cơ sở dữ liệu phi quan hệ (NoSQL) phân tán, cung cấp độ trễ phản hồi được tính bằng một chữ số mili giây ở quy mô toàn cầu, hoàn toàn lý tưởng cho mô hình này. (Trong khi đó, Amazon Redshift là kho phân tích dữ liệu lớn chuyên biệt, Amazon Neptune giải quyết bài toán đồ thị mạng lưới).

### Câu 4
**Câu hỏi:** Một công ty giải trí trò chơi trực tuyến đang phát triển nền tảng trò chơi, ở đó hàng ngàn người chơi có thể tự do tạo ra các đồ vật trong trò chơi theo ý muốn. Mô hình cơ sở dữ liệu cũ đang sử dụng MySQL trên nền Amazon RDS. Những đặc điểm thiết kế đồ vật trò chơi nào sẽ chứng minh rằng chuyển sang Amazon DynamoDB là một nước đi ưu việt hơn? (Chọn 2)
**Các lựa chọn:**
- A. Tất cả đồ vật do người chơi tạo ra chia sẻ chung một tập hợp các thuộc tính cố định.
- B. Người chơi có quyền sáng tạo ra các thuộc tính đồ vật không thể dự đoán trước.
- C. Trò chơi ghi nhận lượng truy cập yêu cầu đọc thông tin đồ vật vô cùng lớn nhưng lượng thao tác ghi thông tin thì khá thấp.
- D. Dữ liệu trò chơi cần lưu trữ tệp tin kỹ thuật số nhị phân có dung lượng có thể lên đến 700 MB.
- E. Nội dung của một đồ vật trong trò chơi có thể thay đổi bằng cách tính toán từ số liệu ở những bảng dữ liệu khác.
**Đáp án chuẩn:** B và C
**Giải thích:** 
1. Khả năng lưu trữ không cần lược đồ (Unpredictable attributes - B): Điểm mạnh của DynamoDB là cho phép từng hàng dữ liệu có những cột thuộc tính hoàn toàn khác nhau mà không cần cấu trúc định nghĩa từ trước, khác biệt hoàn toàn với RDS yêu cầu lược đồ cột chặt chẽ.
2. Xử lý tải đọc khổng lồ (High read activity - C): Khả năng mở rộng ngang vô hạn của DynamoDB cung cấp sức mạnh vượt trội giúp xử lý trơn tru hàng triệu yêu cầu truy xuất đọc toàn cầu mà không gây nghẽn cổ chai. (Câu D sai vì một mục dữ liệu của DynamoDB bị giới hạn ở 400KB, câu E là lợi thế vượt trội của SQL/RDS).

### Câu 5
**Câu hỏi:** Một tổ chức phi chính phủ đang đối mặt với tỷ lệ lừa đảo tài chính ngày càng tăng. Dịch vụ cơ sở dữ liệu nào cung cấp sức mạnh truy vấn thời gian thực để phân tích bản đồ cấu trúc liên kết nhằm theo dấu vết các mô hình gian lận lừa đảo?
**Các lựa chọn:**
- A. Amazon RDS
- B. Amazon DynamoDB
- C. Amazon Redshift
- D. Amazon Neptune
**Đáp án chuẩn:** D. Amazon Neptune
**Giải thích:** Khi gặp từ khóa truy vấn phân tích bản đồ hoặc mạng lưới (graph database), giải pháp duy nhất và chính xác nhất trên hệ sinh thái AWS là Amazon Neptune. Đây là một cơ sở dữ liệu đồ thị, được thiết kế đặc biệt để tối ưu hóa việc phân tích những nút thắt liên kết phức tạp giữa các chủ thể (giúp tìm ra các mạng lưới rửa tiền hoặc hệ thống gợi ý bạn bè trên nền tảng xã hội).

### Câu 6
**Câu hỏi:** Một chuyên viên hạ tầng cần di chuyển và vận hành hệ thống Microsoft SQL Server phục vụ cho một dự án mới trên đám mây AWS. Họ có thể cân nhắc triển khai dịch vụ quản lý nào để đáp ứng nhanh chóng yêu cầu này?
**Các lựa chọn:**
- A. Amazon RDS
- B. Amazon DynamoDB
- C. Amazon Aurora
- D. Amazon Neptune
**Đáp án chuẩn:** A. Amazon RDS
**Giải thích:** Microsoft SQL Server thuộc nhóm các Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) truyền thống. Do đó, AWS cung cấp môi trường lý tưởng để chạy SQL Server thông qua nền tảng quản lý Amazon RDS. (Cần đặc biệt lưu ý: Dịch vụ cơ sở dữ liệu tối cao của AWS là Amazon Aurora hiện tại CHỈ phát hành dưới hai phiên bản nhân tương thích là MySQL và PostgreSQL, hoàn toàn KHÔNG hỗ trợ kiến trúc SQL Server).

### Câu 7
**Câu hỏi:** Để đảm bảo tính toàn vẹn và độ an toàn cho một máy chủ cơ sở dữ liệu Amazon RDS, kiến trúc sư hệ thống cần áp dụng đồng thời các phương pháp kỹ thuật nào sau đây? (Chọn 3)
**Các lựa chọn:**
- A. Xây dựng chính sách AWS IAM chuyên sâu nhằm kiểm soát đặc quyền quản trị trực tiếp đến tận từng cấp độ bảng (table), hàng (row) và cột (column).
- B. Cấu hình VGW (virtual private gateway) để sàng lọc truy cập từ các mạng nội bộ.
- C. Kết nối một VPC gateway endpoint nhằm hạn chế luồng dữ liệu bị rò rỉ ra ngoài môi trường internet công cộng.
- D. Triển khai máy chủ vào mạng lưới cách ly ảo (Virtual Private Cloud - VPC) để bảo vệ vật lý và hệ thống.
- E. Thiết lập mạng lưới quy tắc Nhóm bảo mật (Security groups) kiểm soát kết nối ở cấp độ cổng mạng đối với các máy chủ RDS riêng lẻ.
- F. Tiến hành quy trình mã hóa dữ liệu ở cả hai trạng thái lưu trữ tĩnh và đang truyền tải để bảo vệ luồng thông tin tối mật.
**Đáp án chuẩn:** D, E, và F
**Giải thích:** Máy chủ Amazon RDS về bản chất là một phiên bản máy chủ ảo thực thi chức năng xử lý dữ liệu. Để bảo vệ nó, AWS đưa ra tiêu chuẩn bảo mật ba lớp:
1. Đặt máy chủ vào môi trường mạng kín (VPC - D).
2. Xây dựng bộ quy tắc tường lửa (Security groups - E) nhằm chặn các kết nối và cổng mạng không mong muốn.
3. Mã hóa cấp độ cao (Encryption - F) để bảo vệ an toàn nội dung. (Câu A hoàn toàn sai vì IAM của AWS không thể can thiệp sâu vào phân quyền dữ liệu cấu trúc bảng/cột; việc này phải do quản trị viên cơ sở dữ liệu cấu hình trong phần mềm SQL. Câu C sai vì Endpoint dạng Gateway chỉ hỗ trợ S3 và DynamoDB).

### Câu 8
**Câu hỏi:** Đối với dịch vụ Amazon DynamoDB, kỹ sư cần triển khai các phương pháp kỹ thuật bảo mật nào nhằm tối đa hóa an toàn dữ liệu? (Chọn 3)
**Các lựa chọn:**
- A. Xây dựng chính sách AWS IAM chuyên sâu nhằm kiểm soát đặc quyền truy cập ở cấp độ bảng (table), mục dữ liệu (item) hoặc thuộc tính cụ thể (attribute).
- B. Triển khai vào mạng lưới cách ly ảo (VPC) để cô lập máy chủ và thiết lập tường lửa.
- C. Tiến hành quy trình mã hóa dữ liệu nhằm bảo mật thông tin nội dung quan trọng.
- D. Cấu hình VGW (virtual private gateway) để sàng lọc dữ liệu.
- E. Thiết lập mạng lưới quy tắc Nhóm bảo mật (Security groups) kiểm soát giao tiếp mạng của máy chủ ảo.
- F. Kết nối thông qua một điểm cuối mạng lưới VPC (VPC gateway endpoint) nhằm tránh luồng dữ liệu truyền tải phải chuyển hướng qua internet.
**Đáp án chuẩn:** A, C, và F
**Giải thích:** Do DynamoDB là một dịch vụ phi máy chủ (Serverless), khách hàng không được cấp và không có quyền truy cập vào một hạ tầng máy chủ ảo cụ thể. Điều này khiến cho việc sử dụng tính năng cô lập mạng lưới VPC (B) hoặc cấu hình Nhóm bảo mật (E) là điều bất khả thi. Thay vào đó, quy trình bảo mật chuẩn mực bao gồm:
1. Sử dụng tính năng phân quyền chi tiết cực kỳ mạnh mẽ của IAM (A) để hạn chế thao tác trực tiếp tới cấp độ một hàng dữ liệu cụ thể.
2. Mã hóa tài nguyên hệ thống (C).
3. Thiết lập kết nối VPC Gateway Endpoint (F) để các máy chủ nằm trong mạng VPC nội bộ có thể gửi yêu cầu thẳng tới DynamoDB thông qua đường trục nội bộ mà không cần phải vòng ra Internet rủi ro.

### Câu 9
**Câu hỏi:** Một công ty mong muốn di chuyển hoàn toàn cấu trúc cơ sở dữ liệu Oracle truyền thống hiện tại ở trung tâm dữ liệu nội bộ sang hệ thống Amazon Aurora MySQL. Đâu là quy trình mô tả các giai đoạn triển khai cấp cao nhất xác thực nhất?
**Các lựa chọn:**
- A. Chạy AWS Schema Conversion Tool (AWS SCT) để chuyển đổi lược đồ đồng thời di chuyển dữ liệu vào máy chủ mới.
- B. Triển khai AWS Database Migration Service (AWS DMS) để sao chép dữ liệu, sau đó sử dụng AWS SCT nhằm tinh chỉnh lại cấu trúc bảng.
- C. Vận hành AWS Schema Conversion Tool (AWS SCT) để chuyển đổi lược đồ hệ thống, sau đó thực thi AWS Database Migration Service (AWS DMS) nhằm kết nối và tải lượng lớn dữ liệu sang nền tảng mới.
- D. Thiết lập kết nối AWS Database Migration Service (AWS DMS) từ máy chủ gốc chuyển luồng thẳng đến Amazon Aurora MySQL để tiết kiệm thời gian.
**Đáp án chuẩn:** C
**Giải thích:** Việc di chuyển giữa hai ngôn ngữ cơ sở dữ liệu hoàn toàn khác biệt (Oracle và MySQL) được gọi là quá trình di chuyển không đồng nhất (Heterogeneous migration). Theo phương pháp thực hành, chuyên viên bắt buộc phải sử dụng công cụ SCT để dịch và tương thích hóa toàn bộ bộ khung định nghĩa dữ liệu (Schema) sang ngôn ngữ đích. Chỉ sau khi cấu trúc mới đã được xây dựng chuẩn xác tại đích đến, công cụ phân phối luồng tải dữ liệu (AWS DMS) mới được cấp phép thực hiện nhiệm vụ bơm dữ liệu vào hệ thống một cách trơn tru.

### Câu 10
**Câu hỏi:** Một kiến trúc sư giải pháp đám mây đang tiến hành xây dựng nền tảng sử dụng một máy chủ Amazon RDS MySQL. Yêu cầu cấu trúc cơ sở dữ liệu phải được thiết kế để đảm bảo năng lực tính sẵn sàng cao xuyên suốt các Vùng sẵn sàng (Availability Zones) cũng như chống chịu rủi ro ở cấp độ Khu vực AWS (AWS Regions) với thời gian ngừng hoạt động tối thiểu nhất. Đâu là phương án giải quyết tối ưu?
**Các lựa chọn:**
- A. Khởi tạo một phiên bản máy chủ Single-AZ. Thiết lập một bản sao lưu phục vụ đọc (read replica) lưu tại một Region địa lý khác.
- B. Triển khai một cấu hình đa vùng Multi-AZ. Thiết lập mở rộng một bản sao lưu phục vụ đọc (read replica) nằm tại một Region địa lý khác.
- C. Triển khai một cấu hình đa vùng Multi-AZ. Điều chỉnh thiết lập thời gian khung sao lưu tự động phù hợp.
- D. Khởi tạo phiên bản Single-AZ. Cấu hình tự động gửi tệp tin sao lưu (snapshots) định kỳ qua một Region dự phòng khác.
**Đáp án chuẩn:** B
**Giải thích:** Đề bài đặt ra hai yêu cầu thiết lập mức độ khả dụng độc lập:
1. Chống chịu sự cố ngắt kết nối tại cấp độ một trung tâm dữ liệu cục bộ (Availability Zones): Giải pháp duy nhất là bật thiết lập phân tán tài nguyên tại Nhiều Vùng sẵn sàng (Multi-AZ).
2. Chống chịu sự cố ở cấp độ thảm họa địa lý diện rộng (Khu vực - Regions): Để hệ thống có thể chuyển hướng hoạt động (failover) tức thời khi một Region ngừng cung cấp dịch vụ, thiết lập một máy chủ bản sao đọc phụ (Read replica) hoạt động liên tục ở vùng khác là bắt buộc. Đáp án B kết hợp hoàn hảo để thỏa mãn cả hai thách thức này.

---

## Module 7: Mạng lưới (Networking)

### Câu 1
**Câu hỏi:** Đám mây riêng ảo (Virtual Private Cloud - VPC) trên AWS được định nghĩa chuẩn xác như thế nào?
**Các lựa chọn:**
- A. Một mạng lưới ảo được phân tách và cô lập về mặt logic do khách hàng thiết lập trong đám mây AWS.
- B. Một dịch vụ nền tảng tích hợp toàn diện nhằm mở rộng biên giới đám mây AWS xuống trực tiếp hạ tầng cục bộ của khách hàng.
- C. Một hệ thống mạng kết nối riêng tư (VPN) dành riêng cho đám mây AWS.
- D. Một đường liên kết trực tiếp mở rộng hạ tầng cục bộ vào sâu trong môi trường AWS.
**Đáp án chuẩn:** A. Một mạng lưới ảo được phân tách và cô lập về mặt logic do khách hàng thiết lập trong đám mây AWS.
**Giải thích:** Amazon VPC đóng vai trò như một môi trường mạng nội bộ chuyên biệt, nơi hệ thống kiến trúc mạng được tách biệt hoàn toàn về mặt logic (logically isolated) dành riêng cho tài khoản khách hàng vận hành trên AWS. Người dùng nắm toàn quyền phân bổ các không gian địa chỉ, mạng con (subnets), cùng hệ thống đường dẫn giao thông. Các đáp án B và D mô tả cho chức năng của nhóm dịch vụ kết nối lai (hybrid) như AWS Outposts hoặc mạng trực tiếp Direct Connect, còn câu C mô tả giao thức VPN.

### Câu 2
**Câu hỏi:** Trong thiết kế kiến trúc mạng tiêu chuẩn trên AWS, thành phần tài nguyên nào KHÔNG được phép thiết lập luồng kết nối trực tiếp đến môi trường internet bên ngoài?
**Các lựa chọn:**
- A. Dịch vụ cổng dịch địa chỉ mạng (NAT gateway) nằm trong vùng mạng con công khai (public subnet).
- B. Máy chủ EC2 khởi tạo trong không gian mạng con công khai.
- C. Giao diện mạng được gán địa chỉ IP tĩnh (Elastic IP).
- D. Máy chủ EC2 thiết lập trong vùng mạng con riêng tư (private subnet).
**Đáp án chuẩn:** D. Máy chủ EC2 thiết lập trong vùng mạng con riêng tư (private subnet).
**Giải thích:** Theo lý thuyết quy hoạch kiến trúc mạng của AWS, mục đích của việc phân chia Mạng con riêng tư (Private Subnet) là để đóng gói các tài nguyên mang tính bảo mật nội bộ cao (như các hệ thống cơ sở dữ liệu hay máy chủ phân tích) không bị tiếp xúc trực tiếp trước các rủi ro từ Internet. Do đó, các máy chủ nằm tại vùng này sẽ không có IP định tuyến trực tiếp. Để tải dữ liệu cập nhật về máy, các máy chủ Private này bắt buộc phải điều hướng kết nối thông qua trạm trung chuyển một chiều là cổng NAT Gateway nằm ở Mạng con công khai.

### Câu 3
**Câu hỏi:** Không gian mạng của một tổ chức đang cấu hình sử dụng khối định tuyến IP 172.16.0.0/21 (cung cấp 2048 địa chỉ). Tổ chức định hướng phân chia mạng thành hai khối mạng con (Subnet A và B). Yêu cầu kỹ thuật hiện tại cần tối thiểu 100 địa chỉ hoạt động khả dụng cho mỗi khối mạng, tuy nhiên dung lượng này được dự phóng sẽ đạt tối đa 254 địa chỉ khả dụng trong một tương lai rất gần. Đâu là lược đồ kiến trúc mạng tuân thủ chuẩn xác nhất tiêu chí bảo đảm và thực hành tốt nhất của AWS?
**Các lựa chọn:**
- A. Subnet A: 172.16.0.0/24 (256 addresses) và Subnet B: 172.16.1.0/24 (256 addresses)
- B. Subnet A: 172.16.0.0/22 (1024 addresses) và Subnet B: 172.16.4.0/22 (1024 addresses)
- C. Subnet A: 172.16.0.0/23 (512 addresses) và Subnet B: 172.16.2.0/23 (512 addresses)
- D. Subnet A: 172.16.0.0/25 (128 addresses) và Subnet B: 172.16.0.128/25 (128 addresses)
**Đáp án chuẩn:** C. Subnet A: 172.16.0.0/23 (512 addresses) và Subnet B: 172.16.2.0/23 (512 addresses)
**Giải thích:** Mấu chốt kỹ thuật nằm ở yêu cầu cung cấp khả năng mở rộng lên "TỐI ĐA 254 địa chỉ khả dụng (usable addresses)". Khác với mạng truyền thống, giao thức của AWS luôn dự trữ 5 địa chỉ IP trong mỗi một phân lớp mạng con để sử dụng cho mục đích vận hành nội bộ (như máy chủ DNS và bộ định tuyến ảo). 
- Ở đáp án A (sử dụng tiền tố /24): Tổng dung lượng là 256 địa chỉ, nhưng khi trừ đi 5 địa chỉ bị khóa bởi hệ thống AWS thì chỉ còn 251 địa chỉ khả dụng, không thể đáp ứng được ngưỡng mục tiêu là 254.
- Vì vậy, giải pháp tối ưu là lựa chọn tiền tố /23 ở câu C (tạo ra 512 địa chỉ, cung cấp 507 địa chỉ khả dụng), đảm bảo đáp ứng ngưỡng yêu cầu và cung cấp thêm không gian an toàn.

### Câu 4
**Câu hỏi:** Một loạt các máy chủ xử lý dữ liệu đang vận hành trong một mạng VPC nội bộ. Nhằm đảm bảo an toàn, các nền tảng Internet công cộng bên ngoài hoàn toàn bị ngăn cấm truy cập vào các máy chủ này, nhưng ngược lại, máy chủ bắt buộc phải có khả năng khởi tạo kết nối tải xuống các bản vá cập nhật bảo mật từ Internet. Mô hình phân bổ mạng nào giúp giải quyết bài toán trên?
**Các lựa chọn:**
- A. Cấu hình gán địa chỉ IP tĩnh (Elastic IP), đặt trong mạng con liên kết bộ định tuyến thẳng tới một Internet Gateway.
- B. Gỡ bỏ địa chỉ IP công khai, đặt trong mạng con liên kết bộ định tuyến thẳng tới một Internet Gateway.
- C. Gỡ bỏ địa chỉ IP công khai, định cấu hình đặt máy chủ trong một mạng con với bộ định tuyến mặc định đẩy dữ liệu thông qua trạm trung chuyển mạng NAT Gateway.
- D. Khởi tạo IP công khai (public IP addresses), định cấu hình liên kết mạng con định tuyến ra cổng Internet Gateway.
**Đáp án chuẩn:** C. Gỡ bỏ địa chỉ IP công khai, định cấu hình đặt máy chủ trong một mạng con với bộ định tuyến mặc định đẩy dữ liệu thông qua trạm trung chuyển mạng NAT Gateway.
**Giải thích:** Để đáp ứng thiết kế "ngăn chặn hoàn toàn luồng truy cập vào nhưng cấp phép cho luồng kết nối đi ra", yêu cầu bắt buộc là:
1. Đặt máy chủ vào môi trường mạng riêng tư hoàn toàn không có IP công khai.
2. Xây dựng đường ống dẫn luồng kết nối (routing table) đẩy ra bên ngoài thông qua một NAT Gateway. Thiết bị NAT hoạt động theo nguyên tắc một chiều, thiết lập liên kết tải gói tin cập nhật nhưng lập tức chặn toàn bộ mọi thao tác gọi ngược (ping/request) từ thế giới bên ngoài vào.

### Câu 5
**Câu hỏi:** Một đội ngũ chuyên viên bảo trì (consultant) cần đặc quyền truy cập bảo mật qua nền tảng internet vào một cụm máy chủ EC2 trung tâm trong 3 ngày làm việc liên tiếp. Máy chủ sẽ được lệnh tắt hoạt động (shut down) vào các ngày còn lại để tối ưu nguồn chi phí. Hệ thống mạng VPC hiện tại đã được cấu trúc có cổng mạng Internet. Vậy phương pháp cấp phát thiết lập mạng IPv4 cho cụm máy chủ là gì nhằm đảm bảo kết nối ổn định cho các chuyên viên?
**Các lựa chọn:**
- A. Kích hoạt thuộc tính tự động phân bổ địa chỉ kết nối cho toàn bộ không gian mạng con (subnet).
- B. Kích hoạt tính năng phân bổ liên tục tự động trên cấu hình mạng của riêng máy chủ EC2.
- C. Lập trình gán cố định kết nối trong kịch bản khởi động (boot configuration) của hệ điều hành trên máy ảo.
- D. Cấp phát và đính kèm vĩnh viễn một địa chỉ IP Đàn hồi (Elastic IP) cho máy chủ EC2.
**Đáp án chuẩn:** D. Cấp phát và đính kèm vĩnh viễn một địa chỉ IP Đàn hồi (Elastic IP) cho máy chủ EC2.
**Giải thích:** Đối với đặc thù IP công khai tự động trên AWS (A, B), bất cứ khi nào một máy chủ EC2 tiến hành chuyển đổi trạng thái (như tắt máy để tiết kiệm - shut down), hạ tầng AWS sẽ thu hồi lại địa chỉ IP đó và cung cấp một địa chỉ hoàn toàn ngẫu nhiên khi hệ thống khởi động lại. Việc này khiến cho đội ngũ chuyên viên bảo trì liên tục mất kết nối và không xác định được đích đến. Do đó, kỹ thuật viên phải mua và gán một địa chỉ "Elastic IP", đây là một dải IP tính phí được AWS cam kết tĩnh vĩnh viễn không thay đổi bất kể trạng thái của máy chủ là gì.

### Câu 6
**Câu hỏi:** Trong một kiến trúc bảo mật phân lớp, ứng dụng sử dụng một máy chủ nhúng "Bastion Host" nhằm thiết lập cầu nối cho các phiên truy cập vào máy chủ EC2 đặt tại khu vực mạng con tư nhân riêng biệt (private subnet). Để cho phép giao thức quản trị từ xa (SSH) truyền tải từ địa chỉ IP nguồn đi qua hệ thống này, các cấu hình quy tắc Nhóm bảo mật (Security groups) nào là bắt buộc? (Chọn 2)
**Các lựa chọn:**
- A. Bổ sung một quy tắc trên Nhóm bảo mật của máy EC2 tư nhân cấp phép phản hồi lưu lượng ngược trở lại máy Bastion host.
- B. Bổ sung một quy tắc trên Nhóm bảo mật của máy Bastion host thiết lập tường lửa ngăn chặn (deny) mọi nguồn cấp internet khác.
- C. Bổ sung một quy tắc trên Nhóm bảo mật của máy Bastion host cấp phép luồng phản hồi trở về địa chỉ IP gốc.
- D. Bổ sung một quy tắc cấp phép lưu lượng kết nối truy cập đầu vào qua cổng Port 22 trên Nhóm bảo mật của máy chủ EC2 nhận nguồn dữ liệu từ Nhóm bảo mật Bastion host.
- E. Bổ sung một quy tắc cấp phép kết nối thông qua cổng Port 22 từ luồng IP gốc của quản trị viên trên thiết lập Nhóm bảo mật của máy Bastion host.
**Đáp án chuẩn:** D và E
**Giải thích:** Phiên làm việc truy cập từ xa (SSH - hoạt động trên Port 22) sẽ là một quy trình hai trạm trung chuyển: Từ thiết bị cá nhân -> Trạm kiểm soát Bastion Host -> Máy chủ hệ thống nội bộ tư nhân.
- Giai đoạn 1 (E): Trạm kiểm soát Bastion host đóng vai trò là tiền đồn, bắt buộc phải mở một cổng Port 22 duy nhất để đón nhận đúng địa chỉ IP gốc (source IP address) từ thiết bị cá nhân của bạn tiến vào hệ thống.
- Giai đoạn 2 (D): Ở lớp sâu hơn, máy chủ hệ thống bên trong không gian mạng tư nhân cũng phải cấu trúc Nhóm bảo mật mở cửa thông qua cổng Port 22 để tiếp nhận đường truyền nội bộ được cấp phép từ ông trạm kiểm soát Bastion Host đi vào. (Lưu ý: Không bao giờ chọn A và C vì hệ thống Nhóm bảo mật của AWS tuân theo cơ chế tường lửa lưu trạng thái (Stateful); một khi hệ thống đã đồng ý yêu cầu đi vào, nó sẽ tự động đồng bộ hóa tạo ra đường truyền cho dòng phản hồi (return traffic) để thoát ra ngoài mà không cần bạn phải thiết lập thủ công).

### Câu 7
**Câu hỏi:** Kiến trúc dự án yêu cầu xây dựng một hệ thống mạng lưới bảo mật, ở đó một phân vùng mạng con (subnet) sẽ bị kiểm soát cực kỳ nghiêm ngặt và chỉ thiết lập kết nối đến một số địa chỉ mạng Internet được kiểm duyệt. Vậy một kiến trúc sư cần phải thiết lập và vận hành các quy tắc Danh sách kiểm soát truy cập mạng (Network ACL - NACL) theo nguyên lý như thế nào để siết chặt luồng giao thông cả ra lẫn vào (traffic from and to)?
**Các lựa chọn:**
- A. Bổ sung danh sách các quy tắc (rules) vào thành phần NACL mặc định (default network ACL) nhằm cấp phép đường truyền từ các địa chỉ chuẩn.
- B. Xây dựng bổ sung hệ thống quy tắc vào danh sách NACL chuyên biệt tùy chỉnh (custom network ACL). Định nghĩa cho phép đường truyền từ các địa chỉ chuẩn và cấu hình bổ sung tính năng từ chối tường minh (Deny all) toàn bộ các kết nối phát sinh khác.
- C. Bổ sung hệ thống quy tắc trên danh sách NACL tùy chỉnh của cấu trúc mạng con nhằm cấp quyền truy cập từ các địa chỉ Internet chuẩn đã được phê duyệt.
- D. Xây dựng bổ sung trên danh sách NACL mặc định nhằm cấp phép đường truyền từ các địa chỉ chuẩn, sau đó cấu hình bổ sung tính năng từ chối tường minh (Deny all) cho toàn bộ các kết nối còn lại.
**Đáp án chuẩn:** C. Bổ sung hệ thống quy tắc trên danh sách NACL tùy chỉnh của cấu trúc mạng con nhằm cấp quyền truy cập từ các địa chỉ Internet chuẩn đã được phê duyệt.
**Giải thích:** Trong kiến trúc mạng phân lớp AWS, một danh sách điều khiển kiểm soát mạng con tùy chỉnh (Custom Network ACL) được vận hành dựa trên triết lý bảo mật bằng không. Hệ thống được lập trình chứa một cơ chế cốt lõi tàng hình luôn luôn mang giá trị "Từ chối mọi thứ" (Ngầm định Deny All ở độ ưu tiên thấp nhất). Vì vậy, đội ngũ kiến trúc sư hoàn toàn không phải tốn sức lực cấu hình việc ngăn chặn (Câu B và D chứa thao tác thừa). Việc duy nhất cần thực thi là cấu hình những luật "Cho phép" (Allow) các địa chỉ tin cậy. Những gói tin ngoại lai nào không thể vượt qua danh sách các luật Cho phép sẽ tự động gặp phải bộ quy tắc ngầm định dưới cùng và bị tiêu hủy.

### Câu 8
**Câu hỏi:** Nguyên tắc vàng nào thể hiện các phương pháp thực hành tối ưu hóa nhất (best practices) về khả năng thiết kế bền vững cho đám mây riêng ảo (VPC)? (Chọn 3)
**Các lựa chọn:**
- A. Phân tách và tạo ra một định tuyến mạng con (subnet) riêng biệt cho mỗi Vùng sẵn sàng (Availability Zone) tương ứng với từng phân nhóm dịch vụ máy chủ có chiến lược định tuyến khác nhau.
- B. Lên kế hoạch dự trữ sẵn một lượng lớn không gian cấp phát địa chỉ chưa định tuyến để phục vụ cho sự mở rộng vô định trong tương lai.
- C. Lập trình tính toán phân chia khối địa chỉ mạng (CIDR block) của mạng VPC hoàn toàn khít với số lượng máy chủ thiết bị hiện tại mà không chừa dư.
- D. Khởi tạo một thông số mạng địa chỉ CIDR tương tự và trùng lặp hoàn toàn với kiến trúc mạng công ty tại chỗ (on-premises network).
- E. Thiết kế phân vùng dải địa chỉ mạng CIDR giống hệt nhau đối với các mạng con nằm trong các AZ khác nhau.
- F. Xây dựng quy hoạch mạng lưới hạ tầng VPC với tiêu chí phân chia dải địa chỉ đều đặn bao phủ rải rác toàn bộ các phân khu Vùng sẵn sàng (Availability Zones).
**Đáp án chuẩn:** A, B, và F
**Giải thích:** Kiến trúc mạng VPC bền bỉ trên AWS cần áp dụng 3 quy chuẩn:
1. Mỗi Vùng sẵn sàng (AZ) cần sở hữu một mạng con riêng biệt (A): Thiết kế này ngăn chặn việc cấu trúc mạng bị phụ thuộc, nhằm đảm bảo khi một trung tâm dữ liệu cục bộ gặp sự cố thì các trung tâm khác hoàn toàn không bị ảnh hưởng định tuyến.
2. Thiết lập quy hoạch dự phòng (B): Luôn cung cấp dư dả các phân mảnh IP (khác với câu C) nhằm đáp ứng nhu cầu gia tăng công suất hệ thống mà không vấp phải giới hạn mạng và phải đập bỏ xây lại từ đầu.
3. Cân bằng tải phân vùng (F): Thiết kế dàn đều toàn bộ cấu trúc mạng lưới (Subnets) ra khắp tất cả các AZ khả dụng trong một Khu vực, giúp tránh tắc nghẽn thông lượng mạng tại một điểm yết hầu. (Đặc biệt lưu ý câu D vi phạm thiết kế nghiêm trọng, vì việc sử dụng một dải IP trùng lặp với không gian mạng công ty vật lý sẽ sinh ra lỗi xung đột định tuyến (overlap) khiến việc kết nối lai hai môi trường là bất khả thi).

### Câu 9
**Câu hỏi:** Các điểm đến của nhật ký luồng lưu lượng (VPC Flow Logs) theo dõi toàn bộ đường đi mạng IP trong hệ thống có thể được định tuyến vận chuyển tới kho lưu trữ trung tâm nào? (Chọn 3)
**Các lựa chọn:**
- A. Bộ lưu trữ đối tượng Amazon S3 bucket
- B. Nền tảng giám sát hệ thống Amazon CloudWatch
- C. Bảng điều khiển quản trị trung tâm AWS Management Console
- D. Công cụ phân luồng dữ liệu liên tục Amazon Kinesis Data Firehose
- E. Công cụ truy vấn máy học Amazon Athena
- F. Cơ sở dữ liệu tìm kiếm phân tích Amazon OpenSearch Service
**Đáp án chuẩn:** A, B, và D
**Giải thích:** Tính năng VPC Flow Logs là thiết bị ghi dấu nhật ký (log) cho mọi kết nối giao thức mạng đã xâm nhập hoặc cố gắng xâm nhập vào kiến trúc hệ thống của bạn. Khi kích hoạt chức năng theo dõi này, AWS cấp quyền cho phép bạn vận chuyển nguồn cung cấp log khổng lồ này về một trong ba trung tâm xử lý dữ liệu lõi:
1. Nền tảng Amazon S3: Mục đích thiết lập kho lưu trữ lâu dài với chi phí giám sát bằng không.
2. Dịch vụ Amazon CloudWatch: Dành cho mục đích hiển thị trực tiếp dữ liệu theo thời gian thực và thiết lập hệ thống cảnh báo cảnh sát (Alarms).
3. Hệ thống luồng Kinesis Data Firehose: Sử dụng như một đường ống dữ liệu tức thời nhằm cung cấp cho các ứng dụng đối tác thứ ba đánh giá rủi ro hệ thống mạng.

### Câu 10
**Câu hỏi:** Một quy trình tự động hóa thuộc máy chủ cấu hình EC2 yêu cầu thiết lập cầu nối chuyển luồng mạng trực tiếp đến một dịch vụ S3 bucket. Đâu là thành phần thiết bị liên kết tối ưu nhất để thực hiện khả năng này mà HOÀN TOÀN KHÔNG phát sinh thêm bất cứ khoản phí dịch vụ nào, cũng như KHÔNG áp đặt bất cứ rào cản băng thông thông lượng truyền tin nào?
**Các lựa chọn:**
- A. Nút mạng chuyển tiếp VPC (Gateway VPC endpoint)
- B. Các điểm truy cập mạng công khai khu vực (Public region access point)
- C. Trạm cân bằng tải mạng cuối (Gateway Load Balancer endpoint)
- D. Điểm truy cập giao diện mạng riêng tư ảo (Interface VPC endpoint)
**Đáp án chuẩn:** A. Nút mạng chuyển tiếp VPC (Gateway VPC endpoint)
**Giải thích:** Để thiết lập liên kết từ cụm máy ảo EC2 trong hạ tầng nội bộ hướng ra các dịch vụ khác của AWS mà không cần vòng tránh thông qua rủi ro trên mạng lưới Internet, AWS triển khai khái niệm VPC Endpoint.
- Nút mạng chuyển tiếp Gateway VPC (A): Đây là kiến trúc lâu đời đặc quyền được AWS xây dựng chỉ phục vụ kết nối cho đúng hai hệ thống khổng lồ là Amazon S3 và Amazon DynamoDB. Cấu trúc định tuyến này vĩnh viễn miễn phí và cung cấp thông lượng kết nối không giới hạn dung lượng.
- Ngược lại, điểm kết nối giao diện Interface VPC (D) dù có chức năng tương tự, song được vận hành trên hạ tầng AWS PrivateLink, do đó sẽ áp dụng phí khởi tạo dựa trên giờ và áp đặt chi phí trên mỗi đơn vị Gigabyte xử lý dữ liệu mạng (vi phạm điều kiện bài toán).

---

## Module 8: Kết nối mạng mở rộng (Advanced Networking)

### Câu 1
**Câu hỏi:** Giải pháp kiến trúc mạng nào cung cấp cách tiếp cận tinh giản và có khả năng quản lý tối ưu nhất để kết nối đồng bộ một mạng lưới khổng lồ gồm 100 Đám mây riêng ảo (VPCs) lại với nhau?
**Các lựa chọn:**
- A. Thiết lập mạng lưới chằng chịt kết nối mỗi VPC với 99 mạng VPC còn lại thông qua giải pháp ngang hàng (VPC peering).
- B. Xây dựng một mạng lưới vệ tinh mô hình trung tâm (hub-and-spoke) sử dụng cổng trung tâm AWS VPN CloudHub.
- C. Xâu chuỗi tất cả các VPC thành vòng tròn tuần tự bằng phương thức VPC peering.
- D. Định tuyến liên kết toàn bộ 100 VPC quy tụ chung vào Trạm trung chuyển AWS Transit Gateway.
**Đáp án chuẩn:** D. Định tuyến liên kết toàn bộ 100 VPC quy tụ chung vào Trạm trung chuyển AWS Transit Gateway.
**Giải thích:** Nếu áp dụng kiến trúc mạng ngang hàng Peering truyền thống (A, C) cho một số lượng lớn 100 VPC, quản trị viên sẽ phải thiết lập gần 5000 kết nối độc lập chéo nhau, tạo ra một cơn ác mộng cực lớn về mặt cấu trúc và khó khăn trong việc vận hành kiểm soát độ trễ. Giải pháp AWS Transit Gateway hoạt động giống như một thiết bị trung chuyển định tuyến tổng đài duy nhất (Hub). Khi đó, mỗi VPC chỉ cần thiết lập đúng một nhánh kết nối (Attachment) vào Hub này để có thể phân phối và xử lý toàn bộ luồng thông tin giao thông trên toàn mạng lưới một cách khoa học.

### Câu 2
**Câu hỏi:** Một quy trình hoạt động của công ty đòi hỏi tạo luồng giao thông bảo mật ổn định từ một tài khoản AWS đặt tại một Khu vực địa lý (Region) sang một hệ thống máy chủ tại một tài khoản khác nằm ở Khu vực địa lý riêng biệt trên thế giới. Thiết lập kết cấu nào nên được tích hợp trên hai Trạm định tuyến Transit Gateways tại mỗi bên nhằm duy trì chức năng thông mạng?
**Các lựa chọn:**
- A. Cáp mạng xương sống AWS Direct Connect
- B. Liên kết ngang hàng giữa các trạm trung chuyển (Transit gateway peering attachment)
- C. Mạng kết nối VPN hạ tầng AWS Site-to-Site VPN
- D. Cổng kết nối bảo mật AWS PrivateLink
**Đáp án chuẩn:** B. Liên kết ngang hàng giữa các trạm trung chuyển (Transit gateway peering attachment)
**Giải thích:** Trạm trung chuyển mạng AWS Transit Gateway được thiết kế để phân luồng cục bộ giữa các không gian VPC nằm trong cùng một Khu vực địa lý (Region). Tuy nhiên, khi đối mặt với bài toán kết nối mạng liên lục địa (ví dụ Mỹ sang Nhật Bản), chức năng Peering Attachment của AWS sẽ đóng vai trò xây dựng một "đường hầm liên bang", cho phép đồng bộ hóa bảng định tuyến chéo giúp hai Trạm trung chuyển này liên kết và giao tiếp thông suốt vượt khỏi ranh giới khu vực.

### Câu 3
**Câu hỏi:** Một công ty sở hữu hai mạng VPC tách biệt. Mạng VPC A sở hữu khối phân bổ địa chỉ chuẩn (CIDR block) là 10.1.0.0/16, trong khi hệ thống mạng VPC B quản lý khối phân mảnh là 10.2.0.0/16. Hai phân mảnh mạng này hoạt động trong hệ thống nội bộ của cùng một công ty. Đâu là kiến trúc kết nối đơn giản, chi phí rẻ nhất nhằm đồng bộ hóa để hai khối mạng này trao đổi mọi luồng giao thông lưu lượng thông suốt nhau?
**Các lựa chọn:**
- A. Kết nối điểm nối điểm qua đường truyền internet AWS Site-to-Site VPN
- B. Cầu nối không gian ngang hàng (VPC peering)
- C. Kết nối cáp viễn thông trực tiếp qua AWS Direct Connect
- D. Các thiết bị nối biên VPC endpoints
**Đáp án chuẩn:** B. Cầu nối không gian ngang hàng (VPC peering)
**Giải thích:** Khi yêu cầu hệ thống chỉ dừng ở mức độ chia sẻ kết nối trực diện giữa hai mạng nội bộ có không gian địa chỉ không trùng lặp (10.1 và 10.2), thiết lập VPC Peering là giải pháp hoàn mỹ và gọn nhẹ nhất. Hệ thống không đòi hỏi thiết bị chuyển mạch trung gian bổ sung, hoàn toàn không phụ thuộc yếu tố truyền tải qua mạng cáp công cộng, và miễn phí hoàn toàn cước phí khởi tạo ban đầu.

### Câu 4
**Câu hỏi:** Các hệ thống phân tích nằm ở độ sâu của mạng con riêng tư và cực kỳ bảo mật trong cấu trúc mạng VPC đang được điều phối để truy cập lấy dữ liệu phân tích từ Amazon S3. Tổ hợp thiết kế kiến trúc bảo mật nào đảm bảo đóng băng toàn bộ khả năng phân luồng giao thông truy xuất của hệ thống tiếp xúc trực tiếp lên môi trường internet? (Chọn 2)
**Các lựa chọn:**
- A. Xây dựng một đường hầm mạng điểm cuối riêng tư (VPC gateway endpoint) liên kết đến dịch vụ Amazon S3.
- B. Triển khai các thiết bị mạng giao diện mạng tư nhân (VPC interface endpoints).
- C. Sửa đổi hệ thống gọi ứng dụng bằng cách kết nối thông qua hạ tầng IP nội bộ mã nguồn riêng của Amazon S3.
- D. Thiết lập kiến trúc mạng điểm-đến-điểm bằng hệ thống VPC peering trực diện từ vùng bảo mật vào môi trường của Amazon S3.
- E. Sử dụng giải pháp tĩnh với phân hệ địa chỉ mạng nội bộ cho các bộ xử lý hệ thống.
**Đáp án chuẩn:** A. Xây dựng một đường hầm mạng điểm cuối riêng tư (VPC gateway endpoint) liên kết đến dịch vụ Amazon S3 và B. Triển khai các thiết bị mạng giao diện mạng tư nhân (VPC interface endpoints).
**Giải thích:** Để giải quyết bài toán giao tiếp giữa các thành phần cô lập (private subnets) với các hệ sinh thái như S3 hay DynamoDB mà không cho phép bất kỳ khả năng nào mở cổng Internet Gateway, giao thức của AWS quy định bắt buộc áp dụng công nghệ Điểm cuối VPC (VPC Endpoints). Khách hàng có hai tùy chọn bao gồm:
1. Endpoint dạng kết nối định tuyến chuyển tiếp (Gateway): Thiết kế truyền thống, điều hướng cấu trúc định tuyến (route table), miễn phí, chuyên sử dụng cho các nền tảng S3 hay DynamoDB (Chọn A).
2. Endpoint dựa trên nền tảng kết cấu cổng mạng linh hoạt (Interface): Hoạt động thông qua kiến trúc PrivateLink của AWS với một card mạng nhận dạng IP, có khả năng linh hoạt và mở rộng cho vô số hệ thống ứng dụng đối tác bảo mật (Chọn B).

### Câu 5
**Câu hỏi:** Một quy hoạch kiến trúc mạng lưới cấu trúc nên không gian gồm 3 VPC độc lập (VPC A, VPC B, VPC C). Tất cả khối không gian quản lý phân bổ địa chỉ (CIDR) đều không xung đột (non-overlapping). Mạng A và mạng C hiện đang sở hữu định tuyến liên kết chéo ngang hàng (VPC peering connections) hoàn toàn độc lập quy tụ vào mạng B. Tuy nhiên, bất chấp kết nối này, nền tảng của mạng A hoàn toàn vô hiệu hóa khả năng nhận diện định tuyến của mạng C. Phương thức tái thiết kế nào có khả năng thông luồng giao tiếp dữ liệu giữa A và C với kết quả tối ưu chi phí và tinh gọn nhất?
**Các lựa chọn:**
- A. Thao tác điều hướng thay đổi cấu hình mã luật định tuyến trên mạng B, nhằm mở khóa luồng dữ liệu trung gian cho A sang C.
- B. Chủ động tạo thêm một kiến trúc kết nối ngang hàng (peering connection) trực tiếp liên thông A với C, đồng thời tái thiết lập bảng định tuyến trên cả hai hướng để quy luồng.
- C. Thiết lập định dạng lại kiến trúc bằng mạng chuyển mạch trung gian Transit VPC, kết nối các VPC với nhau, rồi ép toàn bộ lưu lượng phân luồng tại đó.
- D. Thiết lập những trạm điểm cuối VPC (endpoints) đơn lẻ trên máy chủ cụ thể ở VPC A để tìm cách chuyển dữ liệu mã hóa tĩnh từ mạng C.
**Đáp án chuẩn:** B. Chủ động tạo thêm một kiến trúc kết nối ngang hàng (peering connection) trực tiếp liên thông A với C, đồng thời tái thiết lập bảng định tuyến trên cả hai hướng để quy luồng.
**Giải thích:** Trọng tâm cốt lõi của nguyên tắc thiết kế kết nối ngang hàng trên hạ tầng mạng đám mây AWS (VPC Peering) là tính chất ngăn chặn đặc quyền cầu nối trung chuyển (non-transitive routing). Bất kể cả hệ thống A và hệ thống C đều có kết nối hợp pháp định tuyến với trung tâm B, máy chủ đặt tại mạng B vĩnh viễn không thể đóng vai trò làm trạm tiếp sóng gói tin dẫn luồng để A định hướng dữ liệu liên kết gián tiếp thấy được máy chủ C. Để hệ thống thông nhau, khách hàng bị bắt buộc phải tạo dựng mạng kết nối Peering trực diện và độc quyền nối thẳng A và C. (Câu B).

### Câu 6
**Câu hỏi:** Trong một tình huống ứng phó gián đoạn kinh doanh do thảm họa thiên tai, một trung tâm dữ liệu tại chỗ cấp hai (secondary data center) của công ty đã buộc phải vận hành chuyển dịch trên nền tảng không gian làm việc cơ động chỉ duy trì phương thức kết nối băng thông internet. Yêu cầu đặt ra là thiết lập một liên kết mạng bảo mật vào không gian hạ tầng đám mây (VPC) mà tính bằng tiêu chí vận hành hiệu quả càng nhanh chóng càng tốt, do trung tâm dự kiến dỡ bỏ và di tản lần hai trong vòng 2 tuần tới. Lựa chọn thiết bị hoặc giao thức thiết kế kỹ thuật nào nhằm thỏa mãn hoàn toàn bối cảnh khẩn cấp này?
**Các lựa chọn:**
- A. Kênh liên kết dữ liệu mã hóa ảo AWS Site-to-Site VPN
- B. Mạng kết nối cáp vật lý AWS Direct Connect
- C. Cơ chế đường hầm chuyên dụng VPC endpoints
- D. Giải pháp ngang hàng kiến trúc mạng VPC peering
**Đáp án chuẩn:** A. Kênh liên kết dữ liệu mã hóa ảo AWS Site-to-Site VPN
**Giải thích:** Đối mặt với yếu tố thời gian là giới hạn (operational as soon as possible) và tính chất lưu trữ tạm bợ chỉ trong vỏn vẹn "2 tuần", đường hầm kết nối truyền dẫn VPN (Site-to-Site VPN) là giải pháp chiến thắng tuyệt đối. Việc triển khai VPN diễn ra hoàn toàn dựa trên nền tảng internet cơ hữu và chỉ mất thời gian đo đếm bằng phút. Phương án cáp viễn thông kết nối vật lý AWS Direct Connect (B) mặc dù cung cấp băng thông bảo mật nhưng quá trình lập hợp đồng, kéo cáp thiết lập sẽ tiêu tốn từ vài tuần lên đến vài tháng.

### Câu 7
**Câu hỏi:** Một hệ thống mạng lõi của công ty ghi nhận rủi ro bị mất mát giao thức lưu lượng (packet loss) do độ nghẽn đường truyền trên các điểm trung chuyển của nhà mạng viễn thông. Họ mong muốn triển khai một thiết kế để tiếp nhận đường truyền nội bộ khách hàng kết nối vào mạng lưới đám mây của Amazon một cách tối ưu, thông qua trung tâm biên (edge location) tiếp cận gần nhất đối với các cổng kết nối cục bộ của hệ thống nội mạng. AWS phát triển một nền tảng nào xử lý yêu cầu tối ưu hóa đường truyền như vậy?
**Các lựa chọn:**
- A. Nền tảng điều hướng và tăng tốc phân tán AWS Global Accelerator
- B. Giao thức cáp chuyên dụng AWS Direct Connect
- C. Trung tâm định tuyến mạng AWS Transit Gateway
- D. Cổng truyền dẫn phân mảnh VPN cục bộ AWS VPN CloudHub
**Đáp án chuẩn:** A. Nền tảng điều hướng và tăng tốc phân tán AWS Global Accelerator
**Giải thích:** Global Accelerator hoạt động giống như một thiết bị tìm và dẫn đường ưu việt. Bằng cách định tuyến luồng truy cập của khách hàng tiếp nhận từ các điểm máy chủ phân tán ngoại vi (Edge Location) gần nhất, nó lập tức nén gói tin và ép thông lượng dữ liệu này đi vào dải mạng cáp quang riêng, độ trễ siêu thấp và được bảo vệ độc quyền của chính Amazon AWS, thay vì di chuyển ngẫu nhiên và nghẽn luồng trên không gian rủi ro và hỗn loạn của mạng lưới Internet công cộng.

### Câu 8
**Câu hỏi:** Một quy trình thiết lập nền tảng sao lưu hàng đêm cực kỳ đồ sộ từ trung tâm dữ liệu tại chỗ lên môi trường khôi phục của đám mây AWS. Hệ thống kiến trúc đòi hỏi phải vận hành với tiêu chuẩn băng thông cung cấp và tốc độ lưu lượng mạng được cam kết với chất lượng mang hiệu suất cao và sự ổn định cao nhất mà không bị giới hạn biến động. Đâu là mô hình chuẩn cho phương án thiết kế này?
**Các lựa chọn:**
- A. Khởi tạo cầu nối bảo mật (VPC) peering
- B. Tuyến đường dây cáp viễn thông bảo mật AWS Direct Connect
- C. Mạng riêng ảo kết nối bảo mật AWS Site-to-Site VPN
- D. Các liên kết cơ sở hạ tầng (VPC) endpoints
**Đáp án chuẩn:** B. Tuyến đường dây cáp viễn thông bảo mật AWS Direct Connect
**Giải thích:** Nếu khách hàng lựa chọn thiết lập truyền dẫn giao thức qua VPN (C), toàn bộ luồng lưu lượng buộc phải điều hướng chung thông qua không gian hạ tầng của các nhà mạng trên Internet, tốc độ có thể chậm do yếu tố khách quan không thể cam kết và kiểm soát. Phương án AWS Direct Connect mang tới một cáp quang riêng biệt hoàn toàn trực tiếp liên kết trung tâm hạ tầng dữ liệu của khách hàng đâm xuyên thẳng đến Data Center khổng lồ của AWS, nhằm cam kết băng thông tốc độ (1Gbps, 10Gbps, hoặc 100Gbps) ổn định vững chắc tuyệt đối 100%.

### Câu 9
**Câu hỏi:** Không gian hạ tầng mạng của hệ thống nội bộ đang sử dụng phương thức liên kết truyền tải dữ liệu trực tiếp độc quyền bằng nền tảng của mạng AWS Direct Connect. Quản trị viên đang có kế hoạch tái đánh giá kiến trúc với mục tiêu thiết lập một lớp áo giáp kết nối nhằm bảo vệ rủi ro ngắt mạng cho hệ thống (Highly available), thông qua phương án xây dựng một hệ thống đường dây dự phòng, nhưng áp đặt quy định ngân sách tiết kiệm nhất có thể. Giao thức kết nối dự phòng nào thỏa mãn yếu tố thiết kế với chi phí vận hành siêu thấp (cost-effective solution)?
**Các lựa chọn:**
- A. Đăng ký mua thêm một mạng cáp quang Direct Connect kết nối thông qua một trạm thiết bị nhà cung cấp vị trí địa lý Direct Connect tách biệt.
- B. Thiết lập mạng riêng ảo cục bộ theo yêu cầu (Client VPN connection) dựa trên thiết bị kết nối đơn.
- C. Đăng ký mua thêm một mạng cáp quang Direct Connect bổ sung chia sẻ thông qua chung một trạm đấu nối địa lý Direct Connect.
- D. Kích hoạt dự phòng thiết lập cấu hình kết nối mạng riêng ảo AWS Site-to-Site VPN theo nhu cầu (on-demand) tận dụng trên đường truyền cáp internet của tổ chức.
**Đáp án chuẩn:** D. Kích hoạt dự phòng thiết lập cấu hình kết nối mạng riêng ảo AWS Site-to-Site VPN theo nhu cầu (on-demand) tận dụng trên đường truyền cáp internet của tổ chức.
**Giải thích:** Mặc dù việc mua thêm một sợi cáp vật lý dự phòng cấu hình song song của nền tảng AWS Direct Connect (như A hoặc C) mang đến băng thông tuyệt vời nhưng đi kèm mức chi tiêu rất đắt đỏ. Nếu cấu trúc tổ chức ưu tiên "Tiết kiệm chi phí vận hành nhất", chiến lược tạo bộ kết nối dự phòng Site-to-Site VPN trở thành phương án số 1. Phương án này chỉ phát sinh các phí tổn siêu nhỏ (on-demand) về sử dụng giao thức khi được chỉ định khởi động nhằm vá lỗi hệ thống ngắt sóng và làm tuyến truyền dự phòng trong khi hạ tầng đường cáp chính thực hiện thay thế sửa chữa.

### Câu 10
**Câu hỏi:** Hệ thống kiến trúc phân tán kết nối quy tụ từ một Đám mây riêng ảo (VPC) phân nhánh đến hàng loạt mạng lưới các trung tâm hạ tầng dữ liệu khác nhau trên toàn quốc dựa trên phương pháp ảo hóa mạng (VPN). Phương án thiết kế triển khai tích hợp kỹ thuật mạng lưới nào có đủ tính chất để đem lại cấu trúc chống chịu đứt đoạn (resiliency) mạnh mẽ đồng thời giải quyết bài toán nhu cầu về cam kết băng thông luồng dữ liệu (predictable bandwidth) không suy giảm?
**Các lựa chọn:**
- A. Xây dựng môi trường mạng kết nối cáp quang Direct Connect giữ vai trò truyền tải mạch chính (primary), đồng thời dự phòng một lớp mã hóa ảo VPN thiết lập khả năng chịu lỗi (secondary failover) cho mỗi trung tâm dữ liệu khi sự cố khởi phát.
- B. Sử dụng hoàn toàn bộ định tuyến cấu hình quy mô AWS Transit Gateway gắn vào để phân luồng.
- C. Chuyển hướng theo định hình mô hình mạng không gian liên kết đồ thị lưới (mesh topology) như phương án liên kết Amazon VPC peering.
- D. Áp dụng kỹ thuật giao thức tự động mở khóa đường vòng (BGP) thiết lập kết nối xuyên biên giới ở nhiều vùng đám mây.
**Đáp án chuẩn:** A. Xây dựng môi trường mạng kết nối cáp quang Direct Connect giữ vai trò truyền tải mạch chính (primary), đồng thời dự phòng một lớp mã hóa ảo VPN thiết lập khả năng chịu lỗi (secondary failover) cho mỗi trung tâm dữ liệu khi sự cố khởi phát.
**Giải thích:** Kiến trúc câu hỏi đặt ra hai giới hạn khó khăn nhất trong quá trình quy hoạch định tuyến mạng. 
1. Để đảm bảo luồng giao thông xử lý lưu lượng mạng không tắc nghẽn cũng như băng thông ổn định tuyệt đối (predictable bandwidth): Bắt buộc khách hàng phải ưu tiên cấu trúc vận chuyển bằng cáp chuyên tuyến vật lý AWS Direct Connect cho hệ thống chính.
2. Để đảm bảo mức độ chịu đựng rủi ro (resiliency): Cấu hình bổ sung hệ thống tạo đường hầm VPN chạy ẩn với vai trò giám sát, khi hệ thống cáp chính đứt tín hiệu, luồng dữ liệu sẽ ngay lập tức được "nhảy" chuyển hướng (failover) thông qua cấu trúc truyền thông Internet để duy trì dịch vụ. Đây được xem như là mô hình chuẩn hóa tiêu chuẩn trong thiết kế hạ tầng Enterprise tại AWS.

---
## Module 9: Quản lý Định danh và Truy cập (Identity and Access Management)

### Câu 1
**Câu hỏi:** Đâu là các đặc điểm của một nhóm (group) trong AWS Identity and Access Management (IAM)? (Chọn 2)
**Các lựa chọn:**
- A. Một nhóm có thể thuộc về một nhóm khác.
- B. Một người dùng (user) có thể thuộc nhiều nhóm.
- C. Một nhóm có thể sở hữu thông tin xác thực bảo mật riêng.
- D. Những người dùng mới được thêm vào một nhóm sẽ kế thừa các quyền của nhóm đó.
- E. Các quyền trong chính sách của nhóm luôn ghi đè các quyền trong chính sách của người dùng.
**Đáp án chuẩn:** B. Một người dùng có thể thuộc nhiều nhóm và D. Những người dùng mới được thêm vào một nhóm sẽ kế thừa các quyền của nhóm đó.
**Giải thích:** Trong IAM, Nhóm (Group) là một tập hợp các Người dùng (User) nhằm mục đích quản lý quyền hạn hàng loạt. Một Người dùng có thể nằm trong nhiều Nhóm cùng lúc (B). Khi bạn thêm một người dùng mới vào Nhóm, họ sẽ tự động được hưởng tất cả các quyền mà Nhóm đó đang sở hữu (D). (Lưu ý: Không thể tạo nhóm lồng bên trong nhóm (A sai) và Nhóm chỉ là ranh giới quản lý nên không có thông tin đăng nhập riêng biệt (C sai)).

### Câu 2
**Câu hỏi:** Lợi thế của việc sử dụng mô hình Kiểm soát truy cập dựa trên thuộc tính (Attribute-Based Access Control - ABAC) so với Kiểm soát truy cập dựa trên vai trò (Role-Based Access Control - RBAC) là gì?
**Các lựa chọn:**
- A. ABAC yêu cầu ít quá trình kiểm thử hơn so với RBAC.
- B. Các quyền của ABAC xác định rõ ràng các tài nguyên mà chúng bảo vệ.
- C. ABAC có khả năng yêu cầu số lượng chính sách (policies) ít hơn so với RBAC.
- D. Các quyền của ABAC an toàn hơn so với các quyền của RBAC.
**Đáp án chuẩn:** C. ABAC có khả năng yêu cầu số lượng chính sách ít hơn so với RBAC.
**Giải thích:** Với RBAC truyền thống, mỗi khi có vị trí công việc mới bạn phải tạo thêm chính sách mới. Với ABAC, bạn phân quyền dựa trên các "Thẻ" (Tags) động. Ví dụ: "Chỉ cho phép truy cập nếu thẻ 'Phòng ban' của người dùng khớp với thẻ 'Phòng ban' của tài nguyên". Khi đó, bạn chỉ cần tạo một chính sách chung duy nhất cho toàn bộ công ty, giúp mở rộng quy mô quản trị tinh gọn hơn rất nhiều.

### Câu 3
**Câu hỏi:** Một lập trình viên là thành viên của một nhóm IAM có đính kèm một chính sách nhóm. Chính sách nhóm này cho phép truy cập vào Amazon S3 và Amazon EC2, nhưng từ chối truy cập vào Amazon Elastic Container Service (Amazon ECS). Lập trình viên đó cũng có một chính sách người dùng được đính kèm trực tiếp, cho phép truy cập vào Amazon ECS và Amazon CloudFront. Quyền truy cập thực tế của người dùng này là gì?
**Các lựa chọn:**
- A. Được truy cập Amazon ECS và Amazon CloudFront, nhưng không được truy cập Amazon S3 và Amazon EC2.
- B. Được truy cập Amazon S3 và Amazon EC2, nhưng không được truy cập Amazon ECS và Amazon CloudFront.
- C. Được truy cập Amazon S3, Amazon EC2 và Amazon CloudFront, nhưng không được truy cập Amazon ECS.
- D. Được truy cập Amazon S3, Amazon EC2, Amazon ECS và Amazon CloudFront.
**Đáp án chuẩn:** C. Được truy cập Amazon S3, Amazon EC2 và Amazon CloudFront, nhưng không được truy cập Amazon ECS.
**Giải thích:** Đây là quy tắc đánh giá quyền hạn cốt lõi của AWS: Lệnh "Từ chối rõ ràng" (Explicit Deny) luôn luôn ghi đè và chiến thắng mọi lệnh "Cho phép" (Allow). Mặc dù chính sách cá nhân cho phép truy cập ECS, nhưng chính sách của nhóm đã lệnh "Deny" ECS, nên kết quả cuối cùng là người này bị cấm truy cập ECS hoàn toàn. Các dịch vụ khác không có xung đột (S3, EC2, CloudFront) nên vẫn được phép truy cập bình thường.

### Câu 4
**Câu hỏi:** Lợi ích của việc thiết lập Liên kết danh tính (Identity federation) với Đám mây AWS là gì?
**Các lựa chọn:**
- A. Nó loại bỏ sự cần thiết phải định nghĩa các quyền trong IAM để bảo mật quyền truy cập vào tài nguyên AWS.
- B. Nó tập trung hóa việc lưu trữ và quản lý danh tính người dùng vào bên trong AWS.
- C. Nó gán các vai trò (roles) cho những người dùng đã xác thực để kiểm soát quyền truy cập của họ vào tài nguyên AWS.
- D. Nó cho phép sử dụng nhà cung cấp danh tính bên ngoài để xác thực người dùng trong nội bộ tổ chức và cấp cho họ quyền truy cập vào tài nguyên AWS.
**Đáp án chuẩn:** D. Nó cho phép sử dụng nhà cung cấp danh tính bên ngoài để xác thực người dùng trong nội bộ tổ chức và cấp cho họ quyền truy cập vào tài nguyên AWS.
**Giải thích:** Identity Federation (Liên kết danh tính) cho phép nhân viên sử dụng chính hệ thống định danh sẵn có của công ty (như Microsoft Active Directory, Google Workspace) để đăng nhập thẳng vào hệ thống AWS. Quản trị viên không cần phải tạo thêm và duy trì hàng ngàn tài khoản IAM rời rạc trên đám mây, giúp quản lý thông tin đăng nhập tập trung và an toàn hơn.

### Câu 5
**Câu hỏi:** Dịch vụ nào hỗ trợ cung cấp liên kết danh tính (identity federation) dành cho người dùng truy cập vào một ứng dụng web đang chạy trên Đám mây AWS?
**Các lựa chọn:**
- A. AWS CloudHSM
- B. AWS WAF
- C. Amazon Cognito
- D. AWS Key Management Service (AWS KMS)
**Đáp án chuẩn:** C. Amazon Cognito
**Giải thích:** Amazon Cognito là dịch vụ được thiết kế chuyên biệt để cung cấp hệ thống quản lý danh tính, xác thực và ủy quyền dành cho các ứng dụng web và thiết bị di động. Nó cho phép người dùng cuối của bạn đăng nhập qua các nền tảng mạng xã hội (Facebook, Google, Apple) hoặc thông qua hệ thống định danh của doanh nghiệp.

### Câu 6
**Câu hỏi:** Dịch vụ nào hỗ trợ quản lý tập trung thanh toán hóa đơn, kiểm soát quyền truy cập, tuân thủ và bảo mật, đồng thời chia sẻ tài nguyên xuyên suốt trên nhiều tài khoản AWS khác nhau?
**Các lựa chọn:**
- A. AWS Systems Manager
- B. AWS Organizations
- C. AWS Identity and Access Management (IAM)
- D. Amazon Cognito
**Đáp án chuẩn:** B. AWS Organizations
**Giải thích:** Khi một doanh nghiệp mở rộng quy mô và quản lý hàng chục tài khoản AWS độc lập (cho từng phòng ban, dự án), AWS Organizations là công cụ hợp nhất tất cả. Nó giúp bạn thanh toán trên một hóa đơn tổng duy nhất (Consolidated Billing) và áp đặt các quy chuẩn bảo mật thống nhất cho toàn bộ các tài khoản con.

### Câu 7
**Câu hỏi:** Một công ty công nghệ có nhiều tài khoản môi trường sản xuất (production accounts) được nhóm vào một Đơn vị tổ chức (Organizational Unit - OU) sản xuất trong AWS Organizations. Công ty muốn ngăn chặn tuyệt đối tất cả người dùng IAM trong các tài khoản này xóa nhật ký AWS CloudTrail. Quản trị viên hệ thống có thể thực thi hạn chế này bằng cách nào?
**Các lựa chọn:**
- A. Tạo một chính sách IAM và gắn nó vào từng người dùng IAM trong các tài khoản sản xuất.
- B. Tạo một Chính sách kiểm soát dịch vụ (Service Control Policy - SCP) và gắn nó vào OU sản xuất.
- C. Tạo một chính sách thẻ (tag policy) và gắn nó vào các tài khoản sản xuất.
- D. Tạo một chính sách Amazon S3 bucket và liên kết với tất cả các bucket chứa nhật ký CloudTrail.
**Đáp án chuẩn:** B. Tạo một Chính sách kiểm soát dịch vụ (Service Control Policy - SCP) và gắn nó vào OU sản xuất.
**Giải thích:** SCP là cấp độ quản lý "quyền lực tối cao" trong nền tảng AWS Organizations. Khi bạn áp dụng một SCP có nội dung cấm xóa nhật ký lên một khối OU, thì quy định này sẽ đè bẹp mọi quyền hạn bên dưới; thậm chí ngay cả người dùng quản trị tối cao (Administrator) của các tài khoản con trong OU đó cũng không thể thực hiện hành động bị cấm.

### Câu 8
**Câu hỏi:** Một lập trình viên đang viết một ứng dụng máy khách (client) nhằm mã hóa dữ liệu nhạy cảm bằng Khóa dữ liệu (Data key) trước khi gửi đến máy chủ. Ứng dụng máy khách cũng gửi luôn Khóa dữ liệu đó đến máy chủ để máy chủ có thể giải mã thông tin. Lập trình viên lo ngại rằng tính bảo mật của dữ liệu sẽ bị xâm phạm nếu Khóa dữ liệu bị đánh cắp trên đường truyền. Loại mã hóa nào nên được sử dụng để bảo vệ tối đa thông tin nhạy cảm này?
**Các lựa chọn:**
- A. Mã hóa bất đối xứng (Asymmetric encryption)
- B. Mã hóa đối xứng (Symmetric encryption)
- C. Mã hóa phía máy chủ (Server-side encryption)
- D. Mã hóa phong bì (Envelope encryption)
**Đáp án chuẩn:** D. Mã hóa phong bì (Envelope encryption)
**Giải thích:** Mã hóa phong bì là phương pháp bảo mật tiêu chuẩn cao nhất trong kiến trúc đám mây. Dữ liệu thực tế được mã hóa bằng một Khóa dữ liệu (Data Key). Tuy nhiên, để ngăn chặn việc Khóa dữ liệu bị lộ, chính nó sẽ lại được mã hóa thêm một lần nữa bằng một Khóa chính cấp cao hơn (Master Key). Kẻ gian dù có đánh cắp được Khóa dữ liệu mã hóa thì cũng không thể giải mã được nó nếu không nắm giữ Khóa chính.

### Câu 9
**Câu hỏi:** AWS Key Management Service (AWS KMS) cung cấp những chức năng cốt lõi nào? (Chọn 2)
**Các lựa chọn:**
- A. Xác thực người dùng bên ngoài
- B. Tạo các khóa mã hóa đối xứng và bất đối xứng
- C. Tạo khóa truy cập (access keys) cho AWS IAM
- D. Lưu trữ dữ liệu đã được mã hóa
- E. Xoay vòng (thay thế) các khóa
**Đáp án chuẩn:** B. Tạo các khóa mã hóa đối xứng và bất đối xứng và E. Xoay vòng các khóa.
**Giải thích:** AWS KMS là dịch vụ trung tâm để tạo lập và kiểm soát các khóa mã hóa. Hai chức năng chính của nó là sinh ra các khóa mật mã (khóa đối xứng hoặc khóa công khai/bí mật bất đối xứng) và hỗ trợ cơ chế tự động xoay vòng khóa (Rotate keys) định kỳ. Việc xoay vòng khóa giúp hạn chế rủi ro trong trường hợp một khóa bị lộ mà không cần phải can thiệp thủ công mã hóa lại toàn bộ dữ liệu.

### Câu 10
**Câu hỏi:** Dịch vụ AWS nào tự động rà soát, phát hiện và bảo vệ các thông tin nhạy cảm được lưu trữ trên Amazon S3 trong một tài khoản AWS?
**Các lựa chọn:**
- A. AWS Audit Manager
- B. Amazon Macie
- C. Amazon Detective
- D. AWS Resource Access Manager (AWS RAM)
**Đáp án chuẩn:** B. Amazon Macie
**Giải thích:** Amazon Macie là dịch vụ bảo mật dữ liệu sử dụng công nghệ học máy (Machine Learning) và so khớp mẫu nhận dạng (Pattern matching) để tự động quét các tệp tin lưu trong S3. Nếu nó phát hiện ra các thông tin mang tính nhận dạng cá nhân (PII) như số thẻ tín dụng, số căn cước công dân hoặc dữ liệu tài chính bị phơi bày, nó sẽ lập tức đưa ra cảnh báo cho quản trị viên.

---

## Module 10: Tự động hóa hạ tầng đám mây (Automating Infrastructure)

### Câu 1
**Câu hỏi:** Dịch vụ nào đóng vai trò là dịch vụ Hạ tầng dưới dạng mã (Infrastructure as Code - IaC) được sử dụng để tự động hóa quá trình khởi tạo và quản lý các tài nguyên AWS?
**Các lựa chọn:**
- A. AWS Systems Manager
- B. AWS CloudFormation
- C. AWS Elastic Beanstalk
- D. AWS OpsWorks
**Đáp án chuẩn:** B. AWS CloudFormation
**Giải thích:** AWS CloudFormation là dịch vụ cho phép người dùng định nghĩa toàn bộ kiến trúc hạ tầng đám mây của mình dưới dạng các tệp tin văn bản thuần túy (theo định dạng YAML hoặc JSON). Khi tệp tin này được thực thi, hệ thống AWS sẽ tự động phân tích cú pháp và khởi tạo chính xác tất cả các tài nguyên đã được khai báo, đảm bảo quá trình triển khai diễn ra hoàn toàn tự động và không có sai sót do thao tác thủ công.

### Câu 2
**Câu hỏi:** Lợi ích cốt lõi của việc sử dụng phương pháp Hạ tầng dưới dạng mã (IaC) để tự động hóa quản lý tài nguyên là gì?
**Các lựa chọn:**
- A. Đơn giản hóa việc thiết lập và bảo trì các tài nguyên mạng nội bộ (on-premises).
- B. Cung cấp một giao diện đồ họa người dùng để quản lý tài nguyên AWS.
- C. Làm giảm sự phụ thuộc vào AWS Management Console trong việc cung cấp tài nguyên.
- D. Cho phép sử dụng các khuôn mẫu (templates) để cung cấp và quản lý một tập hợp các tài nguyên theo một phương thức nhất quán và có thể lặp lại nhiều lần.
**Đáp án chuẩn:** D. Cho phép sử dụng các khuôn mẫu (templates) để cung cấp và quản lý một tập hợp các tài nguyên theo một phương thức nhất quán và có thể lặp lại nhiều lần.
**Giải thích:** Phương pháp IaC cho phép bạn viết ra các "bản thiết kế" (templates) mô tả hạ tầng. Lợi ích lớn nhất là bạn có thể tái sử dụng bản thiết kế này để triển khai hệ thống đi triển khai lại vô hạn lần (repeatable) mà vẫn đảm bảo kết quả đầu ra đồng nhất tuyệt đối (consistent), loại bỏ hoàn toàn nguy cơ sai lệch cấu hình do con người thao tác thủ công trên giao diện web.

### Câu 3
**Câu hỏi:** Thành phần nào của CloudFormation được sử dụng để mô tả khai báo các tài nguyên AWS mà bạn muốn tạo và quản lý?
**Các lựa chọn:**
- A. Khuôn mẫu (Templates)
- B. Ngăn xếp (Stacks)
- C. Bộ thay đổi (Change sets)
- D. Tài nguyên (Resources)
**Đáp án chuẩn:** A. Khuôn mẫu (Templates)
**Giải thích:** Template (Khuôn mẫu) là tệp tin văn bản (JSON hoặc YAML) chứa toàn bộ các khai báo về tài nguyên hạ tầng mà bạn muốn AWS khởi tạo. Bên trong tệp này, bạn sẽ liệt kê chi tiết cấu hình mạng lưới, máy chủ ảo, cơ sở dữ liệu và các quy tắc bảo mật cần thiết cho hệ thống.

### Câu 4
**Câu hỏi:** Thành phần nào của CloudFormation được sử dụng để quản lý một tập hợp toàn bộ các tài nguyên AWS như một đơn vị hệ thống duy nhất?
**Các lựa chọn:**
- A. Tài nguyên (Resources)
- B. Bộ thay đổi (Change sets)
- C. Ngăn xếp (Stacks)
- D. Khuôn mẫu (Templates)
**Đáp án chuẩn:** C. Ngăn xếp (Stacks)
**Giải thích:** Khi một bản Khuôn mẫu (Template) được mang đi triển khai, AWS sẽ khởi tạo các tài nguyên vật lý thực tế và gom tất cả chúng vào một nhóm quản lý thống nhất gọi là Ngăn xếp (Stack). Bạn có thể cập nhật hoặc xóa toàn bộ Stack này cùng một lúc thay vì phải thao tác trên từng tài nguyên đơn lẻ, giúp tiết kiệm thời gian và tránh bỏ sót tài nguyên rác gây phát sinh chi phí.

### Câu 5
**Câu hỏi:** Một kiến trúc sư giải pháp muốn xem trước những tác động thay đổi mà CloudFormation sẽ áp dụng lên một ngăn xếp (stack) trước khi chính thức thực thi. Họ nên sử dụng thành phần nào của CloudFormation?
**Các lựa chọn:**
- A. Bộ thay đổi (Change sets)
- B. Khuôn mẫu (Templates)
- C. Ngăn xếp (Stacks)
- D. Phát hiện sai lệch (Drift detection)
**Đáp án chuẩn:** A. Bộ thay đổi (Change sets)
**Giải thích:** Change sets (Bộ thay đổi) cho phép kiến trúc sư xem trước một bản tóm tắt đầy đủ và chi tiết về tất cả các thay đổi dự kiến sẽ diễn ra: tài nguyên nào sẽ được tạo mới, tài nguyên nào sẽ bị chỉnh sửa, và đặc biệt là tài nguyên nào sẽ bị xóa bỏ. Việc rà soát này giúp đảm bảo tính an toàn tối đa cho hệ thống sản xuất đang vận hành trước khi áp dụng bất kỳ thay đổi nào.

### Câu 6
**Câu hỏi:** Dịch vụ AWS nào cung cấp một giao diện quản trị tập trung thống nhất để tự động hóa và quản lý các tác vụ vận hành trên toàn bộ tài nguyên AWS của bạn?
**Các lựa chọn:**
- A. AWS CloudFormation
- B. AWS OpsWorks
- C. AWS Systems Manager
- D. AWS Elastic Beanstalk
**Đáp án chuẩn:** C. AWS Systems Manager
**Giải thích:** AWS Systems Manager (SSM) là công cụ quản lý trung tâm đa năng, cho phép quản trị viên giám sát trạng thái, thu thập thông tin cấu hình, thực thi lệnh từ xa và tự động hóa hàng loạt các tác vụ quản trị trên dàn máy chủ EC2 hoặc hạ tầng tại chỗ (on-premises), tất cả thông qua một bảng điều khiển duy nhất mà không cần đăng nhập thủ công vào từng máy chủ.

### Câu 7
**Câu hỏi:** Tính năng nào của AWS Systems Manager cung cấp khả năng thực thi các tập lệnh (scripts) hoặc mệnh lệnh trực tiếp trên một cụm (fleet) các máy chủ Amazon EC2?
**Các lựa chọn:**
- A. State Manager
- B. Run Command
- C. Automation
- D. Patch Manager
**Đáp án chuẩn:** B. Run Command
**Giải thích:** Run Command cho phép người quản trị thực thi các lệnh hệ thống (như cài đặt phần mềm, thay đổi cấu hình, thu thập nhật ký) trên hàng loạt máy chủ EC2 cùng một lúc với quy mô lớn. Điểm nổi bật là quá trình này không yêu cầu phải mở kết nối SSH hay RDP trực tiếp vào từng máy, giúp duy trì bảo mật bằng cách đóng kín các cổng mạng rủi ro.

### Câu 8
**Câu hỏi:** Một công ty muốn xây dựng quy trình tự động hóa hoàn toàn việc cài đặt các bản vá lỗi (patching) cho các máy chủ Amazon EC2 của họ. Họ nên sử dụng tính năng nào của AWS Systems Manager?
**Các lựa chọn:**
- A. Run Command
- B. State Manager
- C. Patch Manager
- D. Automation
**Đáp án chuẩn:** D. Automation
**Giải thích:** Tính năng Automation được thiết kế chuyên biệt để đơn giản hóa và tự động hóa các quy trình quản trị hệ thống CNTT phức tạp và lặp đi lặp lại. Quản trị viên có thể xây dựng các Sách hướng dẫn vận hành (Runbooks) thiết lập chuỗi công việc tự động hoàn chỉnh: từ việc dừng máy ảo, sao lưu dữ liệu, áp dụng bản vá lỗi hệ điều hành, cho đến khởi động lại hệ thống, mọi bước đều diễn ra tự động theo kịch bản đã lập trình sẵn.

### Câu 9
**Câu hỏi:** Dịch vụ AWS nào mang đến giải pháp dễ dàng nhất cho các nhà phát triển để triển khai và mở rộng quy mô các ứng dụng web, hỗ trợ sẵn hàng loạt các nền tảng ngôn ngữ lập trình phổ biến?
**Các lựa chọn:**
- A. AWS OpsWorks
- B. AWS CloudFormation
- C. AWS Systems Manager
- D. AWS Elastic Beanstalk
**Đáp án chuẩn:** D. AWS Elastic Beanstalk
**Giải thích:** Elastic Beanstalk là nền tảng Nền tảng dưới dạng dịch vụ (PaaS) giúp lập trình viên triển khai ứng dụng cực kỳ nhanh chóng. Người phát triển chỉ cần tải mã nguồn ứng dụng lên (viết bằng Java, .NET, PHP, Node.js, Python, Ruby, Go...), Elastic Beanstalk sẽ tự động đảm nhận toàn bộ quá trình thiết lập hạ tầng phức tạp bao gồm khởi tạo máy chủ, cấu hình bộ cân bằng tải, thiết lập tự động mở rộng và giám sát tình trạng sức khỏe hệ thống.

### Câu 10
**Câu hỏi:** Lợi ích kỹ thuật lớn nhất của việc sử dụng AWS Elastic Beanstalk để triển khai các ứng dụng web là gì?
**Các lựa chọn:**
- A. Cung cấp toàn quyền kiểm soát tuyệt đối đối với các tài nguyên hạ tầng cơ sở bên dưới.
- B. Tự động xử lý hoàn toàn các khâu triển khai, phân bổ năng lực máy chủ, cân bằng tải và tự động mở rộng quy mô ứng dụng.
- C. Trực tiếp làm giảm chi phí vận hành khi chạy các ứng dụng web trên hạ tầng AWS.
- D. Cho phép sử dụng các khuôn mẫu (templates) để chủ động cung cấp và quản lý tài nguyên AWS.
**Đáp án chuẩn:** B. Tự động xử lý hoàn toàn các khâu triển khai, phân bổ năng lực máy chủ, cân bằng tải và tự động mở rộng quy mô ứng dụng.
**Giải thích:** Đây là giá trị cốt lõi và tính năng nổi bật nhất của Elastic Beanstalk. Nền tảng này giúp ẩn đi toàn bộ sự phức tạp của hạ tầng điện toán đám mây bên dưới. Nó tự động hóa tất cả những công việc cấu trúc hệ thống nặng nhọc (triển khai mã nguồn, cấp phát tài nguyên máy chủ, thiết lập cân bằng tải, cấu hình tự động mở rộng), qua đó cho phép đội ngũ kỹ sư phần mềm chuyên tâm hoàn toàn vào việc phát triển tính năng sản phẩm và viết mã ứng dụng.

---

## Module 11: Quản lý hạ tầng đám mây (Infrastructure as Code)

### Câu 1
**Câu hỏi:** Dịch vụ nào đóng vai trò là dịch vụ Hạ tầng dưới dạng mã (Infrastructure as Code - IaC) được sử dụng để tự động hóa quá trình khởi tạo và quản lý các tài nguyên AWS?
**Các lựa chọn:**
- A. AWS Systems Manager
- B. AWS CloudFormation
- C. AWS Elastic Beanstalk
- D. AWS OpsWorks
**Đáp án chuẩn:** B. AWS CloudFormation
**Giải thích:** CloudFormation là dịch vụ cốt lõi của AWS cho phép bạn mô phỏng toàn bộ hạ tầng đám mây (bao gồm VPC, EC2, RDS, IAM...) thành các đoạn mã lập trình (định dạng JSON hoặc YAML). Khi bạn thực thi tệp tin này, hệ thống AWS sẽ tự động phân tích và xây dựng tất cả các tài nguyên một cách chính xác theo bản thiết kế kiến trúc.

### Câu 2
**Câu hỏi:** Lợi ích cốt lõi của việc sử dụng phương pháp Hạ tầng dưới dạng mã (IaC) để tự động hóa quản lý tài nguyên là gì?
**Các lựa chọn:**
- A. Đơn giản hóa việc thiết lập và bảo trì các tài nguyên mạng nội bộ (on-premises).
- B. Cung cấp một giao diện đồ họa người dùng để quản lý tài nguyên AWS.
- C. Làm giảm sự phụ thuộc vào AWS Management Console trong việc cung cấp tài nguyên.
- D. Cho phép sử dụng các khuôn mẫu (templates) để cung cấp và quản lý một tập hợp các tài nguyên theo một phương thức nhất quán và có thể lặp lại nhiều lần.
**Đáp án chuẩn:** D. Cho phép sử dụng các khuôn mẫu (templates) để cung cấp và quản lý một tập hợp các tài nguyên theo một phương thức nhất quán và có thể lặp lại nhiều lần.
**Giải thích:** Bằng cách biến hạ tầng thành mã nguồn (IaC), bạn tạo ra các "khuôn mẫu" thiết kế. Lợi ích lớn nhất là bạn có thể tái sử dụng khuôn mẫu này để triển khai các môi trường sao chép (như môi trường thử nghiệm Test, môi trường sản xuất Production) hàng trăm lần (repeatable) mà vẫn đảm bảo độ chính xác và tính nhất quán tuyệt đối (consistent), loại bỏ hoàn toàn các lỗi sai sót do thao tác thủ công.

### Câu 3
**Câu hỏi:** Thành phần nào của CloudFormation được sử dụng để mô tả khai báo các tài nguyên AWS mà bạn muốn tạo và quản lý?
**Các lựa chọn:**
- A. Khuôn mẫu (Templates)
- B. Ngăn xếp (Stacks)
- C. Bộ thay đổi (Change sets)
- D. Tài nguyên (Resources)
**Đáp án chuẩn:** A. Khuôn mẫu (Templates)
**Giải thích:** Template (Khuôn mẫu) thực chất là tệp tin văn bản chứa mã nguồn kiến trúc (JSON/YAML). Trong tệp này, bạn sẽ khai báo thiết kế chi tiết về cấu hình của mạng, máy chủ ảo, cơ sở dữ liệu và các quy tắc bảo mật mà bạn dự định khởi tạo.

### Câu 4
**Câu hỏi:** Thành phần nào của CloudFormation được sử dụng để quản lý một tập hợp toàn bộ các tài nguyên AWS như một đơn vị hệ thống duy nhất?
**Các lựa chọn:**
- A. Tài nguyên (Resources)
- B. Bộ thay đổi (Change sets)
- C. Ngăn xếp (Stacks)
- D. Khuôn mẫu (Templates)
**Đáp án chuẩn:** C. Ngăn xếp (Stacks)
**Giải thích:** Khi một Khuôn mẫu (Template) được mang đi thực thi, AWS sẽ tạo ra một nhóm tài nguyên vật lý và gom tất cả chúng lại thành một khối logic gọi là Ngăn xếp (Stack). Sự tiện lợi của Stack là nếu bạn muốn gỡ bỏ hệ thống, bạn chỉ cần ra lệnh xóa Stack, AWS sẽ tự động dọn dẹp hàng loạt các thành phần bên trong mà không để sót lại tài nguyên rác gây lãng phí.

### Câu 5
**Câu hỏi:** Một kiến trúc sư giải pháp muốn xem trước những tác động thay đổi mà CloudFormation sẽ áp dụng lên một ngăn xếp (stack) hệ thống trước khi chính thức thực thi. Họ nên sử dụng tính năng nào của CloudFormation?
**Các lựa chọn:**
- A. Bộ thay đổi (Change sets)
- B. Khuôn mẫu (Templates)
- C. Ngăn xếp (Stacks)
- D. Phát hiện sai lệch (Drift detection)
**Đáp án chuẩn:** A. Bộ thay đổi (Change sets)
**Giải thích:** Change sets (Bộ thay đổi) đóng vai trò như một môi trường rà soát giả lập. Nó sẽ đối chiếu mã nguồn mới với hệ thống hiện tại và liệt kê chi tiết: hành động nào sẽ tạo thêm tài nguyên mới, tài nguyên nào bị chỉnh sửa thông số, và đặc biệt cảnh báo những tài nguyên nào sẽ bị xóa bỏ. Điều này giúp ngăn chặn những rủi ro thay đổi ngoài ý muốn làm sập dịch vụ đang chạy.

### Câu 6
**Câu hỏi:** Dịch vụ AWS nào cung cấp một giao diện quản trị tập trung thống nhất để tự động hóa và điều phối các tác vụ vận hành trên toàn bộ cụm tài nguyên AWS của bạn?
**Các lựa chọn:**
- A. AWS CloudFormation
- B. AWS OpsWorks
- C. AWS Systems Manager
- D. AWS Elastic Beanstalk
**Đáp án chuẩn:** C. AWS Systems Manager
**Giải thích:** AWS Systems Manager (SSM) là một công cụ vận hành trung tâm mạnh mẽ. Nó cấp quyền cho quản trị viên khả năng thu thập thông tin, hiển thị và kiểm soát tự động hóa vận hành trên quy mô hàng ngàn máy chủ (từ cấu hình phần mềm, vá lỗi bảo mật, đến theo dõi độ tuân thủ) trên một bảng điều khiển duy nhất, mà không cần phải đăng nhập thủ công vào từng hệ thống máy chủ rời rạc.

### Câu 7
**Câu hỏi:** Tính năng nào của AWS Systems Manager cung cấp khả năng thực thi các tập lệnh (scripts) hoặc mệnh lệnh trực tiếp trên một cụm (fleet) các máy chủ Amazon EC2 mà không cần giao thức kết nối từ xa?
**Các lựa chọn:**
- A. State Manager
- B. Run Command
- C. Automation
- D. Patch Manager
**Đáp án chuẩn:** B. Run Command
**Giải thích:** Run Command là giải pháp thao tác quản trị từ xa an toàn tuyệt đối. Nó cho phép người quản trị ra lệnh thực thi mã lệnh (như cài đặt phần mềm, thay đổi mật khẩu) xuống hàng loạt máy chủ EC2 tại cùng một thời điểm. Quá trình này không đòi hỏi phải sử dụng kết nối SSH hoặc RDP, do đó người dùng có thể đóng kín toàn bộ các cổng bảo mật rủi ro trên máy chủ.

### Câu 8
**Câu hỏi:** Một công ty muốn xây dựng quy trình tự động hóa hoàn toàn việc cài đặt các bản vá lỗi (patching) cho hàng trăm máy chủ Amazon EC2 của họ. Họ nên sử dụng tính năng nào của AWS Systems Manager để điều phối việc này?
**Các lựa chọn:**
- A. Run Command
- B. State Manager
- C. Patch Manager
- D. Automation
**Đáp án chuẩn:** D. Automation
**Giải thích:** Systems Manager Automation được thiết kế để đơn giản hóa việc giải quyết các nhiệm vụ duy trì hệ thống CNTT phức tạp và lặp đi lặp lại. Bạn có thể xây dựng các Sách hướng dẫn (Runbooks) thiết lập luồng công việc tự động: từ việc dừng máy ảo, tự động tạo bản sao lưu dữ liệu, áp dụng bản vá lỗi hệ điều hành và cuối cùng là khởi động lại hệ thống, mọi thứ diễn ra tự động theo kịch bản.

### Câu 9
**Câu hỏi:** Dịch vụ AWS nào mang đến một giải pháp dễ dàng nhất cho các nhà phát triển (developers) để triển khai ứng dụng web và mở rộng quy mô, hỗ trợ sẵn hàng loạt các nền tảng ngôn ngữ lập trình phổ biến?
**Các lựa chọn:**
- A. AWS OpsWorks
- B. AWS CloudFormation
- C. AWS Systems Manager
- D. AWS Elastic Beanstalk
**Đáp án chuẩn:** D. AWS Elastic Beanstalk
**Giải thích:** AWS Elastic Beanstalk là nền tảng Nền tảng dưới dạng dịch vụ (PaaS) lý tưởng cho lập trình viên. Người phát triển chỉ cần tải mã nguồn ứng dụng (viết bằng Java, .NET, PHP, Node.js, Python, Ruby...) lên nền tảng, Elastic Beanstalk sẽ tự động đảm nhận toàn bộ quá trình thiết lập kiến trúc phức tạp bao gồm khởi tạo máy chủ, thiết lập bộ cân bằng tải, cấu hình tự động mở rộng và theo dõi tình trạng hệ thống.

### Câu 10
**Câu hỏi:** Lợi ích kỹ thuật lớn nhất của việc sử dụng nền tảng AWS Elastic Beanstalk để triển khai các ứng dụng web là gì?
**Các lựa chọn:**
- A. Cung cấp cho nhà quản trị toàn quyền kiểm soát tuyệt đối đối với các tài nguyên hạ tầng cơ sở vật lý.
- B. Tự động hóa hoàn toàn các thao tác triển khai, phân bổ năng lực máy chủ, cân bằng tải mạng và mở rộng quy mô ứng dụng theo chu kỳ.
- C. Trực tiếp làm giảm chi phí tính toán khi chạy các ứng dụng web trên hạ tầng AWS.
- D. Cho phép thiết lập các khuôn mẫu mã nguồn (templates) để chủ động cung cấp và quản lý tài nguyên AWS chi tiết.
**Đáp án chuẩn:** B. Tự động hóa hoàn toàn các thao tác triển khai, phân bổ năng lực máy chủ, cân bằng tải mạng và mở rộng quy mô ứng dụng theo chu kỳ.
**Giải thích:** Đây là giá trị cốt lõi giải phóng sức lao động. Nền tảng Elastic Beanstalk giúp ẩn đi sự phức tạp của hạ tầng điện toán đám mây. Nó tự động hóa tất cả những công việc cấu trúc hệ thống nặng nhọc (provisioning, load balancing, auto scaling), qua đó cho phép đội ngũ kỹ sư phần mềm chuyên tâm hoàn toàn vào việc phát triển tính năng và viết mã ứng dụng, thay vì loay hoay cấu hình máy chủ.

---

## Module 12: Bộ nhớ đệm (Caching)

### Câu 1
**Câu hỏi:** Hai loại phân cấp bộ nhớ đệm (caching) phổ biến trên hệ thống đám mây là gì? (Chọn 2)
**Các lựa chọn:**
- A. Caching cấp ứng dụng (Application caching)
- B. Caching cấp biên mạng (Edge caching)
- C. Caching cấp tài nguyên (Resource caching)
- D. Caching nội dung tĩnh (Static caching)
- E. Caching cấp người dùng (User caching)
**Đáp án chuẩn:** A. Caching cấp ứng dụng (Application caching) và B. Caching cấp biên mạng (Edge caching)
**Giải thích:** Caching thường được thiết kế dựa trên khoảng cách và mục tiêu phục vụ. Caching cấp ứng dụng (ví dụ Amazon ElastiCache) lưu dữ liệu trực tiếp trong bộ nhớ RAM tại tầng máy chủ nội bộ để tối ưu hóa truy vấn cho cơ sở dữ liệu. Ngược lại, Caching cấp biên mạng (ví dụ Amazon CloudFront) đưa dữ liệu phân tán ra các trung tâm Edge Locations nằm gần người dùng nhất để giảm thiểu độ trễ tải trang vật lý.

### Câu 2
**Câu hỏi:** Một công ty mong muốn cung cấp cho người dùng trải nghiệm tải tệp tin video và hình ảnh tốc độ cao với độ trễ tối thiểu nhất có thể. Người dùng của ứng dụng phân bố trên quy mô toàn cầu. Giải pháp dịch vụ AWS nào sẽ hoàn thành xuất sắc yêu cầu này?
**Các lựa chọn:**
- A. Amazon ElastiCache
- B. Amazon API Gateway
- C. Amazon Route 53
- D. Amazon CloudFront
**Đáp án chuẩn:** D. Amazon CloudFront
**Giải thích:** Tổ hợp từ khóa "Độ trễ thấp" (low-latency) và phân bổ "Toàn cầu" (across the world) luôn xác định Amazon CloudFront là câu trả lời. Đây là nền tảng Mạng phân phối nội dung toàn cầu (CDN) có chức năng lưu trữ bản sao nội dung tại hàng trăm điểm biên mạng Edge Locations khắp thế giới, cho phép người dùng luôn tải dữ liệu từ trạm phát sóng gần họ nhất.

### Câu 3
**Câu hỏi:** Cần triển khai một dịch vụ được quản lý toàn diện nhằm cung cấp cho người dùng truy cập siêu tốc (độ trễ thấp) đối với các tệp dữ liệu gốc được lưu trữ trong một bucket Amazon S3. Tổ chức nên ứng dụng dịch vụ AWS nào cho kịch bản kết hợp này?
**Các lựa chọn:**
- A. Amazon API Gateway
- B. Amazon CloudFront
- C. Amazon ElastiCache
- D. Amazon Route 53
**Đáp án chuẩn:** B. Amazon CloudFront
**Giải thích:** Amazon CloudFront tương tác tích hợp như một mảnh ghép hoàn hảo với Amazon S3. Thay vì buộc mọi người dùng trên toàn thế giới phải truy cập vào một bucket S3 cố định tại Mỹ (tạo ra độ trễ khoảng cách rất lớn), CloudFront sẽ trích xuất tệp dữ liệu từ S3 và lưu trữ bản ghi vào bộ đệm (cache) tại các điểm biên mạng khu vực, giúp tăng tốc độ phản hồi truy cập lên hàng chục lần.

### Câu 4
**Câu hỏi:** Một kiến trúc sư phần mềm mong muốn tìm kiếm một phương án thiết kế để giảm thiểu triệt để tải trọng tính toán quá tải lên hệ thống cơ sở dữ liệu backend của ứng dụng. Họ nên ứng dụng giải pháp công nghệ AWS nào?
**Các lựa chọn:**
- A. Amazon CloudFront
- B. Amazon ElastiCache
- C. Amazon API Gateway
- D. Amazon Route 53
**Đáp án chuẩn:** B. Amazon ElastiCache
**Giải thích:** Để giải quyết vấn đề nghẽn cổ chai hoặc giảm tải khối lượng xử lý cho các hệ quản trị cơ sở dữ liệu truyền thống (như RDS hay Aurora), giải pháp tiêu chuẩn là sử dụng Amazon ElastiCache. Hệ thống này xây dựng một kho lưu trữ dữ liệu trực tiếp trên bộ nhớ RAM (In-memory). Bất cứ khi nào có một lệnh truy vấn trùng lặp lặp lại, ứng dụng sẽ lấy kết quả lưu sẵn từ ElastiCache cực nhanh thay vì đánh thức cơ sở dữ liệu phải thực hiện rà soát đĩa cứng chậm chạp tính toán lại.

### Câu 5
**Câu hỏi:** Một kiến trúc sư muốn giảm thời gian phản hồi độ trễ (latency) của một dịch vụ giao diện lập trình ứng dụng (API). Giải pháp AWS nào tích hợp tính năng này hiệu quả nhất?
**Các lựa chọn:**
- A. Amazon ElastiCache
- B. Amazon CloudFront
- C. Amazon API Gateway
- D. Amazon Route 53
**Đáp án chuẩn:** C. Amazon API Gateway
**Giải thích:** Amazon API Gateway không chỉ đóng vai trò phân luồng giao diện mà còn tích hợp sẵn một phân hệ bộ nhớ đệm (API caching) cấp doanh nghiệp. Khi được cấu hình kích hoạt, API Gateway sẽ tự động ghi nhớ các kết quả phản hồi (responses) từ máy chủ máy chủ nền tảng. Khi nhận được một yêu cầu giống hệt (cùng tham số đầu vào), nó sẽ trả ngay kết quả từ vùng đệm về cho người dùng trong mili giây mà không cần gọi hàm kích hoạt hệ thống backend xử lý lại từ đầu.

### Câu 6
**Câu hỏi:** Phát biểu định nghĩa nào về chức năng của Edge caching (Bộ đệm biên mạng) là chính xác về mặt vật lý?
**Các lựa chọn:**
- A. Nó lưu trữ dữ liệu trong một bộ nhớ đệm được thiết lập cấu trúc gần với các máy chủ nền tảng (backend servers) của ứng dụng nhất.
- B. Nó lưu trữ dữ liệu trong một bộ nhớ đệm được phân bổ nằm ở vị trí địa lý vật lý gần với người dùng cuối (users) của ứng dụng nhất.
- C. Nó lưu trữ dữ liệu trong một bộ nhớ đệm được cấu trúc đặt gần cơ sở dữ liệu hệ thống nhất.
- D. Nó lưu trữ dữ liệu trong một bộ nhớ đệm được đặt gần trung tâm phát triển (developers) phần mềm nhất.
**Đáp án chuẩn:** B. Nó lưu trữ dữ liệu trong một bộ nhớ đệm được phân bổ nằm ở vị trí địa lý vật lý gần với người dùng cuối (users) của ứng dụng nhất.
**Giải thích:** Khái niệm "Biên mạng" (Edge) trong điện toán đám mây là hệ thống các trạm vệ tinh nằm ở ranh giới tiếp giáp cuối cùng của mạng lưới hạ tầng, vươn sát nhất đến khu vực địa lý của khách hàng tiêu dùng. Mục đích cốt lõi của việc áp dụng Edge Caching là rút ngắn tối đa quãng đường truyền tải gói tin cáp quang giữa hệ thống dữ liệu AWS và thiết bị truy cập cuối của người dùng.

### Câu 7
**Câu hỏi:** Phát biểu định nghĩa nào về kiến trúc Application caching (Bộ đệm ứng dụng nội bộ) là chuẩn xác nhất?
**Các lựa chọn:**
- A. Nó lưu trữ dữ liệu trong bộ nhớ đệm tiếp giáp với khu vực thiết bị đầu cuối của người dùng.
- B. Nó lưu trữ dữ liệu trong bộ nhớ đệm tập trung phục vụ riêng cho các trung tâm lập trình.
- C. Nó lưu trữ dữ liệu trong bộ nhớ đệm được thiết lập định tuyến tiếp giáp song song với các tài nguyên xử lý ứng dụng nội bộ (backend resources).
- D. Nó lưu trữ dữ liệu trong bộ nhớ đệm phân tán rộng tại các trạm biên (edge locations) toàn cầu.
**Đáp án chuẩn:** C. Nó lưu trữ dữ liệu trong bộ nhớ đệm được thiết lập định tuyến tiếp giáp song song với các tài nguyên xử lý ứng dụng nội bộ (backend resources).
**Giải thích:** Trái ngược hoàn toàn với hệ thống Edge Caching hướng ngoại phục vụ người dùng cuối, kiến trúc Application Caching nhắm tới giải quyết độ trễ hiệu suất nội bộ. Nó triển khai các cụm nhớ trên RAM đặt sâu bên trong hệ thống lõi mạng VPC, giao tiếp liền kề với các máy chủ xử lý hoặc máy chủ cơ sở dữ liệu nhằm cắt giảm thời gian truy xuất thông tin của các thuật toán ứng dụng bên trong nền tảng máy chủ.

### Câu 8
**Câu hỏi:** Công cụ nền tảng xử lý cốt lõi (engine) nào của Amazon ElastiCache được khuyến nghị sử dụng khi kiến trúc sư giải pháp cần xây dựng một kho lưu trữ dữ liệu trên bộ nhớ RAM, đòi hỏi hỗ trợ đa dạng các định dạng cấu trúc dữ liệu phức tạp nâng cao?
**Các lựa chọn:**
- A. Memcached
- B. Redis
- C. Neptune
- D. DocumentDB
**Đáp án chuẩn:** B. Redis
**Giải thích:** Dịch vụ Amazon ElastiCache vận hành hỗ trợ hai cấu trúc nền tảng mã nguồn mở:
- Memcached: Là nền tảng siêu tinh gọn, chỉ thiết kế để lưu trữ chuỗi dữ liệu đơn giản nhất dạng Khóa-Giá trị (Key-Value).
- Redis (Lựa chọn B): Là công cụ cực kỳ mạnh mẽ, hỗ trợ các thuật toán cấu trúc phân cấp chuyên sâu (như chuỗi ký tự dài, danh sách list, tệp hợp set, mã hóa hàm băm hash). Đồng thời Redis sở hữu các công năng cấp doanh nghiệp như tự động phân cụm sao chép (replication), cấu hình độ bền dữ liệu và sao lưu phục hồi hệ thống.

### Câu 9
**Câu hỏi:** Nền tảng lõi xử lý (engine) nào của Amazon ElastiCache được khuyến nghị ưu tiên khi một kiến trúc sư hệ thống cần xây dựng giải pháp bộ nhớ đệm trong RAM yêu cầu tiêu chí tối đa hóa sự tối giản vận hành và dễ dàng mở rộng công suất theo cấu trúc chiều ngang (horizontal scaling)?
**Các lựa chọn:**
- A. Memcached
- B. Redis
- C. Neptune
- D. DocumentDB
**Đáp án chuẩn:** A. Memcached
**Giải thích:** Memcached nổi danh trong kiến trúc hệ thống nhờ vào triết lý thiết kế đơn giản tuyệt đối (simplicity). Đặc tính kỹ thuật của nó cho phép thực hiện thao tác mở rộng quy mô theo chiều ngang đa luồng (horizontal scaling) cực kỳ mượt mà. Khách hàng có thể linh hoạt bổ sung hoặc loại bỏ vô số các nút phân bổ (nodes) vào cụm máy chủ xử lý nhằm tăng cường hay thu hẹp tổng dung lượng bộ nhớ RAM mà không cần quá trình cấu trúc thiết lập lại phức tạp.

### Câu 10
**Câu hỏi:** Phát biểu nào mô tả đúng đắn nhất tính chất linh hoạt của phương pháp bộ nhớ đệm (caching) trong hệ thống đám mây?
**Các lựa chọn:**
- A. Caching luôn luôn cải thiện tuyệt đối hiệu suất tốc độ của mọi ứng dụng.
- B. Caching chỉ có thể được thiết lập ứng dụng để lưu trữ các định dạng dữ liệu có tính chất tĩnh.
- C. Công nghệ Caching có khả năng được triển khai để lưu trữ đồng thời cả nội dung dữ liệu tĩnh và dữ liệu động.
- D. Bộ nhớ đệm Caching chỉ được thiết kế vận hành hiệu quả dành riêng cho các tập dữ liệu dung lượng nhỏ.
**Đáp án chuẩn:** C. Công nghệ Caching có khả năng được triển khai để lưu trữ đồng thời cả nội dung dữ liệu tĩnh và dữ liệu động.
**Giải thích:** Việc ứng dụng bộ nhớ đệm vô cùng đa năng trong kiến trúc điện toán. Hệ thống hoàn toàn có thể lưu vào bộ đệm cấu trúc các dữ liệu tĩnh không bao giờ thay đổi nội dung (như tệp hình ảnh, video, mã giao diện CSS) thông qua mạng lưới CDN CloudFront. Cùng lúc đó, hệ thống cũng có thể lưu vào bộ đệm những kết quả dữ liệu động đòi hỏi khả năng tính toán (như kết xuất truy vấn từ cơ sở dữ liệu hệ thống, kết quả tính toán thông số từ giao diện API) thông qua dịch vụ ElastiCache hoặc chức năng tích hợp của máy chủ API Gateway.

---

## Module 13: Kiến trúc Microservices và Serverless

### Câu 1
**Câu hỏi:** Các phương thức giao tiếp và truyền thông dữ liệu cơ bản giữa các dịch vụ siêu nhỏ (microservices) trong một kiến trúc ứng dụng phân tán là gì? (Chọn 2)
**Các lựa chọn:**
- A. Giao tiếp đồng bộ (Synchronous)
- B. Giao tiếp bất đồng bộ (Asynchronous)
- C. Giao tiếp theo chu kỳ (Periodic)
- D. Giao tiếp tĩnh trạng thái (Static)
- E. Giao tiếp tức thời ngay lập tức (Immediate)
**Đáp án chuẩn:** A. Giao tiếp đồng bộ (Synchronous) và B. Giao tiếp bất đồng bộ (Asynchronous)
**Giải thích:** Trong kiến trúc hệ thống vi dịch vụ (Microservices), các thành phần dịch vụ tương tác thông tin chéo với nhau chủ yếu qua 2 mô hình giao thức:
- **Đồng bộ (Synchronous):** Máy chủ A gọi máy chủ B và bắt buộc đóng băng hệ thống phải chờ nhận được kết quả phản hồi từ B trước khi tiếp tục công việc (thường dùng API).
- **Bất đồng bộ (Asynchronous):** Máy chủ A gửi một thông điệp tác vụ vào đường ống truyền đi và ngay lập tức quay lại xử lý các công việc khác độc lập mà không cần quan tâm đến kết quả xử lý tức thì của B (thường dùng Hàng đợi Queue).

### Câu 2
**Câu hỏi:** Một kiến trúc sư giải pháp muốn chia tách (decouple) độc lập hoàn toàn các phân hệ thành phần của một ứng dụng phần mềm, nhằm mục đích đảm bảo chúng có khả năng phát sinh lỗi cục bộ hoặc mở rộng quy mô hệ thống riêng rẽ. Phương pháp thiết kế này cần ứng dụng dịch vụ AWS nào làm nền tảng?
**Các lựa chọn:**
- A. Amazon SQS
- B. Amazon SNS
- C. Amazon EventBridge
- D. AWS Step Functions
**Đáp án chuẩn:** A. Amazon SQS
**Giải thích:** Dịch vụ Hàng đợi Thông điệp Đơn giản (Amazon Simple Queue Service - SQS) đóng vai trò như một "vùng lưu trữ trung gian đệm" an toàn nằm giữa các bộ phận xử lý của dịch vụ. Bằng việc phân tách kiến trúc (Decoupling), nếu máy chủ dịch vụ chuyên xử lý nhận dữ liệu gặp trục trặc sập nguồn hoặc quá tải năng lực, thì thông điệp dữ liệu đầu vào vẫn nằm chờ an toàn trong kho chứa hàng đợi SQS, bảo vệ toàn bộ kiến trúc ứng dụng khỏi nguy cơ đứt gãy sụp đổ dây chuyền.

### Câu 3
**Câu hỏi:** Nhận định nào sau đây mô tả kỹ thuật chính xác nhất về bản chất của dịch vụ Amazon SQS?
**Các lựa chọn:**
- A. SQS là một dịch vụ web trung gian cung cấp khả năng truy cập vào cấu trúc một hàng đợi thông điệp (message queue), được vận hành chuyên dụng để lưu giữ bảo mật thông điệp trong thời gian chờ hệ thống máy chủ máy tính tiến hành nạp và xử lý chúng.
- B. Nó là nền tảng web tạo điều kiện dễ dàng để lập cấu hình, thiết lập và phân phối các thông báo đẩy ra từ trung tâm đám mây.
- C. Nó là một xe buýt dữ liệu sự kiện phi máy chủ cấu hình linh hoạt giúp liên kết tích hợp các hệ thống phần mềm lại với nhau thông qua sự kiện trích xuất ứng dụng nội bộ.
- D. Đây là một nền tảng điều phối vận hành phi máy chủ trực quan hỗ trợ việc tổ chức chuỗi logic hoạt động của hàng loạt các khối chức năng AWS Lambda.
**Đáp án chuẩn:** A
**Giải thích:** Định nghĩa nền tảng cốt lõi của SQS: một hệ thống bộ nhớ lưu trữ hàng đợi đám mây, đóng vai trò tập hợp lưu trữ tạm thời các khối giao dịch mệnh lệnh thông điệp (messages) cực kỳ bảo mật và đáng tin cậy, neo giữ trạng thái của chúng cho đến khi các máy chủ chuyên trách xử lý (worker nodes) có đủ tài nguyên tính toán tiến vào rút thông điệp ra để thực thi tác vụ.

### Câu 4
**Câu hỏi:** Loại kiến trúc cấu hình hàng đợi Amazon SQS nào là điều kiện vận hành bắt buộc khi kỹ sư phần mềm thiết kế yêu cầu các thông điệp truyền tải phải được đảm bảo xử lý với mức độ chuẩn xác 100% theo đúng tuần tự thời gian như lúc nó được tạo ra?
**Các lựa chọn:**
- A. Hàng đợi thông thường (Standard queue)
- B. Hàng đợi FIFO (FIFO queue)
- C. Hàng đợi có trật tự (Ordered queue)
- D. Hàng đợi ưu tiên mức độ (Priority queue)
**Đáp án chuẩn:** B. Hàng đợi FIFO (FIFO queue)
**Giải thích:** Ký hiệu công nghệ FIFO là viết tắt của "First-In, First-Out" (Vào trước, Ra trước). Loại thuật toán cấu trúc hàng đợi này của Amazon được thiết kế đảm bảo quy chuẩn xử lý bảo tồn nguyên vẹn tính tuần tự nghiêm ngặt tuyệt đối của chuỗi thông điệp và cam kết không xảy ra tình trạng nhân bản một thông điệp được xử lý trùng lặp (Exactly-Once processing). Cấu trúc Standard queue (A) thì tốc độ luồng xử lý cao hơn nhưng có nguy cơ xáo trộn thứ tự hoặc lặp thông báo.

### Câu 5
**Câu hỏi:** Một kỹ sư hệ thống cần phát triển tính năng thiết lập hệ thống phát sóng các thông báo khẩn cấp từ một hệ thống trung tâm phân tán đồng loạt đến vô số các thiết bị nhận điểm cuối đa dạng, bao gồm hệ thống gửi địa chỉ hộp thư điện tử cá nhân (email) và kích hoạt trực tiếp hàm mã phi máy chủ AWS Lambda. Công cụ truyền thông mạng đám mây nào đáp ứng tốt nhất yêu cầu này?
**Các lựa chọn:**
- A. Amazon SQS
- B. Amazon SNS
- C. Amazon EventBridge
- D. AWS Step Functions
**Đáp án chuẩn:** B. Amazon SNS
**Giải thích:** Amazon SNS (Simple Notification Service) vận hành chuyên biệt trên kiến trúc truyền thông một-chiều "Xuất bản/Đăng ký" (Publish/Subscribe). Thay vì phải lập trình tính toán từng địa chỉ người nhận, máy chủ chỉ cần phát đi một tin nhắn duy nhất ghim vào cấu trúc một Chủ đề (Topic). Hệ thống SNS sẽ có trách nhiệm kỹ thuật phân nhánh và bắn thông báo đó cùng lúc (fan-out) tới tất cả các thiết bị hay nền tảng (như ứng dụng Email, hệ thống tin nhắn SMS, hàng đợi SQS, hoặc hàm kích hoạt Lambda) đã thực hiện đăng ký theo dõi Topic đó.

### Câu 6
**Câu hỏi:** Phát biểu nào sau đây phác thảo đúng đắn nhất tính năng của Amazon SNS?
**Các lựa chọn:**
- A. Dịch vụ này triển khai giải pháp để đóng gói, lưu trữ bền vững lâu dài các tệp thông báo trong một không gian hàng đợi tuần tự.
- B. Dịch vụ này cung cấp phương thức phân tán dữ liệu thông điệp quy mô siêu lớn để chủ động đẩy trực tiếp (push) đến một số lượng lớn đối tượng đã tham gia đăng ký nhận tin (subscribers).
- C. Nó mang đến công cụ giải pháp để điều phối thứ tự xếp lớp của hàng loạt hoạt động xử lý AWS Lambda.
- D. Đây là công cụ hệ thống giúp đồng bộ liên kết hàng loạt cấu trúc nền tảng ứng dụng phần mềm dựa trên tập dữ liệu khai thác nền.
**Đáp án chuẩn:** B
**Giải thích:** Nhiệm vụ duy nhất và tối thượng của SNS là vận chuyển và phân phối siêu tốc các gói tin thông điệp đến hàng triệu nút nhận (subscribers) trong thời gian thực tại cùng một thời điểm thông qua cơ chế tự động hóa phân luồng (Fan-out). Nó khác biệt với Amazon SQS (Câu A) vốn là nơi nhận giữ lưu trữ thông điệp thụ động để chờ người khác đến lấy (Pull).

### Câu 7
**Câu hỏi:** Một quy trình định tuyến thông tin của doanh nghiệp yêu cầu một hệ thống liên kết sâu các ứng dụng phần mềm độc lập với nhau, sử dụng việc phân loại dữ liệu phát sinh từ chính các ứng dụng máy chủ nội bộ, tích hợp thông tin liên thông từ các nhà cung cấp ứng dụng phần mềm dạng dịch vụ (SaaS) bên thứ ba độc lập (như Zendesk, Shopify), và toàn bộ các tính năng dịch vụ AWS. Bộ dịch vụ định tuyến nào của AWS được chuyên biệt xây dựng cho kiến trúc mở này?
**Các lựa chọn:**
- A. Amazon SQS
- B. Amazon SNS
- C. Amazon EventBridge
- D. AWS Step Functions
**Đáp án chuẩn:** C. Amazon EventBridge
**Giải thích:** Amazon EventBridge đóng vai trò như một "Chiếc xe buýt sự kiện phi máy chủ" (Serverless Event Bus) vạn năng. Sức mạnh vượt trội và sự độc đáo của EventBridge là khả năng liên kết mở rộng nguyên bản. Nó cho phép lắng nghe tự động một cách trực tiếp các dòng sự kiện thông báo thay đổi hệ thống phát sinh từ các ứng dụng của hàng chục đối tác doanh nghiệp bên thứ 3 mà không cần lập trình mã kết nối API phức tạp, sau đó thiết lập luật điều hướng và chuyển tiếp chúng đến bộ phận hạ tầng xử lý của AWS.

### Câu 8
**Câu hỏi:** Một kiến trúc sư giải pháp muốn đồng bộ và lên lịch điều phối tự động tất cả các thành phần chức năng rời rạc của một ứng dụng phần mềm phân tán rộng thông qua một nền tảng tạo dựng quy trình luồng công việc dưới định dạng giao diện hình ảnh trực quan (visual workflows). Lựa chọn nền tảng dịch vụ AWS nào là đúng đắn nhất?
**Các lựa chọn:**
- A. Amazon SQS
- B. Amazon SNS
- C. Amazon EventBridge
- D. AWS Step Functions
**Đáp án chuẩn:** D. AWS Step Functions
**Giải thích:** AWS Step Functions cung cấp cho chuyên viên thiết kế kỹ thuật công cụ cực mạnh để quy hoạch, phác thảo ra một quá trình làm việc hệ thống (workflow) từ vô số các tác vụ con rời rạc dưới dạng một sơ đồ khối hình ảnh lưu đồ (State machine). Hệ thống này tự động chịu trách nhiệm duy trì theo dõi lưu giữ tiến trình, lập cấu hình khởi chạy bước xử lý tuần tự hoặc song song, và kiểm soát quá trình điều khiển quy luật phân luồng lỗi tự động theo chính xác bản vẽ đã thiết kế.

### Câu 9
**Câu hỏi:** Nhận định chuyên ngành nào mô tả chức năng của AWS Step Functions là toàn diện và chuẩn xác nhất?
**Các lựa chọn:**
- A. Dịch vụ cung cấp kho chứa đóng gói lưu trữ cho các thông điệp dữ liệu đang treo trong hệ thống phân tầng hàng đợi.
- B. Dịch vụ này triển khai bộ phát sóng thông điệp diện rộng theo cơ chế hướng người dùng nhằm truyền tin đến vô số thiết bị mục tiêu.
- C. Dịch vụ cung cấp phương pháp tổ chức và điều phối phân cấp đồng bộ logic hoạt động của hàng chục nền tảng dịch vụ AWS rời rạc kết hợp thành một kiến trúc quy trình luồng công việc phi máy chủ hoàn chỉnh.
- D. Đây là mạng lưới xe buýt chuyển dẫn để đồng bộ sự kiện giữa vô vàn ứng dụng cấu trúc phần mềm bên trong hệ sinh thái.
**Đáp án chuẩn:** C
**Giải thích:** Trọng trách của Step Functions là đóng vai trò hệ thống tổng công trình sư điều phối trung tâm (Orchestrator). Trong mô hình kỹ thuật phi máy chủ (Serverless), quản trị viên sẽ tạo ra hàng chục các chức năng cực nhỏ (Microservices). Step Functions sẽ đứng ra để nối ghép và kiểm soát luồng di chuyển dữ liệu xuyên qua các dịch vụ chức năng cực nhỏ đó tạo thành một ứng dụng thống nhất theo một kịch bản chu trình chặt chẽ.

### Câu 10
**Câu hỏi:** Lợi ích kỹ thuật mang tính triết lý kiến trúc thiết kế ưu việt nhất khi chuyển đổi hệ thống sang áp dụng kiến trúc công nghệ vi dịch vụ phân tách rời (decoupled architecture) là gì?
**Các lựa chọn:**
- A. Việc phân tách ứng dụng có tác động trực tiếp và tuyệt đối vào việc làm giảm ngay lập tức mọi chi phí tiêu thụ tài nguyên phần cứng vận hành ứng dụng trên nền tảng AWS.
- B. Triết lý này đơn giản hóa tối đa cấu hình thiết lập cài đặt quy mô và loại bỏ tính chất bảo trì cho các máy chủ tài nguyên vật lý AWS.
- C. Phương pháp kiến trúc này cô lập các tiến trình thành phần, cho phép một bộ phận trong hệ thống khả năng phát sinh xảy ra lỗi kỹ thuật hoặc tiến hành mở rộng gia tăng tài nguyên tự do độc lập mà không đe dọa hoặc tạo ra ảnh hưởng kéo theo sự suy giảm đối với phần còn lại của ứng dụng phân tán.
- D. Kiến trúc phân mảnh này hợp nhất một trung tâm bảng điều khiển hệ thống duy nhất nhằm tạo điều kiện thực thi tập trung tất cả quy trình tác vụ giám sát trên bộ nhớ đám mây AWS.
**Đáp án chuẩn:** C
**Giải thích:** Nguyên lý trọng tâm và quý giá nhất của bài toán kiến trúc phân tán (Decoupling) bằng mô hình dịch vụ thông điệp tách rời (thông qua hệ thống SQS và SNS) chính là khả năng độc lập xử lý và quản trị rủi ro thảm họa. Việc cô lập cách ly từng chức năng cụ thể thành những khối riêng rẽ đảm bảo rằng, nếu một khâu bị tổn thương đứt gãy sụp nguồn, hay một khâu khác đột nhiên nhận lưu lượng truy cập khổng lồ cần tiến hành mở rộng năng lực theo chiều ngang (Scale independently), những hiện tượng này sẽ bị bao vây chặt lại trong khối giới hạn cục bộ của nó, hoàn toàn không gây tác động tiêu cực, đe dọa kéo ngã toàn bộ các hệ sinh thái còn lại đang vận hành trong một tập thể ứng dụng cấu trúc khổng lồ.

