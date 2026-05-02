const EXTRA_DATA = [];

// Module 2-4
EXTRA_DATA.push(...[
{id:2,title:"Kiến trúc đám mây (Mở rộng)",questions:[
{t:"Trụ cột nào của AWS Well-Architected Framework tập trung vào khả năng phục hồi sau sự cố?",o:["A. Bảo mật (Security)","B. Độ tin cậy (Reliability)","C. Hiệu suất (Performance Efficiency)","D. Tính bền vững (Sustainability)"],a:"B",e:"Trụ cột Reliability tập trung vào khả năng hệ thống phục hồi sau sự cố."},
{t:"Khái niệm 'Elasticity' trong điện toán đám mây có nghĩa là gì?",o:["A. Khả năng mã hóa tự động","B. Khả năng tự động co giãn tài nguyên theo nhu cầu","C. Khả năng sao lưu dữ liệu","D. Chạy nhiều hệ điều hành"],a:"B",e:"Elasticity là khả năng hệ thống tự động co giãn tài nguyên (thêm/bớt) theo lưu lượng thực tế."},
{t:"Nguyên tắc thiết kế nào giúp giảm thiểu tác động khi một thành phần gặp sự cố?",o:["A. Thiết kế monolithic","B. Thiết kế kết nối chặt","C. Thiết kế kết nối lỏng (Loose coupling)","D. Thiết kế đơn điểm"],a:"C",e:"Loose coupling đảm bảo các thành phần hoạt động độc lập, không bị ảnh hưởng dây chuyền."},
{t:"AWS Trusted Advisor cung cấp khuyến nghị về lĩnh vực nào? (Chọn 2)",o:["A. Tối ưu chi phí","B. Giao diện UI","C. Hiệu suất hệ thống","D. Quản lý nhân sự"],a:"A và C",e:"Trusted Advisor tự động kiểm tra tài khoản và khuyến nghị về Tối ưu chi phí, Hiệu suất, Bảo mật."},
{t:"Mô hình 'Pay-as-you-go' của AWS là gì?",o:["A. Trả trước 1 năm","B. Chỉ thanh toán cho tài nguyên thực tế đã sử dụng","C. Thanh toán cố định hàng tháng","D. Miễn phí năm đầu"],a:"B",e:"Pay-as-you-go nghĩa là chỉ trả tiền cho lượng tài nguyên thực tế đã tiêu thụ."},
{t:"Công cụ nào giúp ước tính chi phí trước khi triển khai?",o:["A. Billing Dashboard","B. Pricing Calculator","C. Cost Explorer","D. AWS Budgets"],a:"B",e:"AWS Pricing Calculator cho phép mô phỏng cấu hình và ước tính chi phí trước khi tạo tài nguyên."},
{t:"Lợi ích của việc dùng nhiều Availability Zones là gì?",o:["A. Giảm chi phí","B. Tăng tốc độ CPU","C. Tăng tính sẵn sàng và khả năng chịu lỗi","D. Đơn giản hóa quản trị"],a:"C",e:"Triển khai trên nhiều AZ giúp hệ thống sống sót ngay cả khi một Data Center gặp sự cố."},
{t:"AWS Free Tier cung cấp những loại ưu đãi nào? (Chọn 2)",o:["A. Dùng thử miễn phí 12 tháng","B. Giảm giá 50%","C. Miễn phí vĩnh viễn ở mức sử dụng thấp","D. Hoàn tiền 100%"],a:"A và C",e:"AWS Free Tier có: Dùng thử miễn phí, Miễn phí 12 tháng và Miễn phí vĩnh viễn (ở mức thấp)."},
{t:"'High Availability' trong AWS là gì?",o:["A. Hệ thống có tốc độ cực nhanh","B. Hệ thống luôn sẵn sàng hoạt động với thời gian ngừng tối thiểu","C. Chi phí cực thấp","D. Chỉ admin mới được truy cập"],a:"B",e:"High Availability nghĩa là hệ thống được thiết kế để hoạt động liên tục với downtime cực thấp."},
{t:"Nguyên tắc 'Design for Failure' khuyến nghị điều gì?",o:["A. Không cần sao lưu","B. Luôn giả định mọi thành phần đều có thể hỏng và thiết kế dự phòng","C. Chỉ dùng 1 máy chủ","D. Tắt hệ thống khi có lỗi"],a:"B",e:"Cần giả định mọi thứ đều có thể hỏng để thiết kế dự phòng, tự động phục hồi."}
]},
{id:3,title:"Bảo mật (Mở rộng)",questions:[
{t:"AWS CloudTrail cung cấp chức năng chính nào?",o:["A. Vá lỗi OS","B. Ghi nhật ký mọi lệnh gọi API trên tài khoản","C. Mã hóa S3","D. Quản lý khóa"],a:"B",e:"CloudTrail ghi lại chi tiết mọi hành động API trên tài khoản AWS."},
{t:"Xác thực đa yếu tố (MFA) cung cấp lớp bảo mật bằng cách nào?",o:["A. Mã hóa dữ liệu","B. Yêu cầu thêm mã xác thực ngoài mật khẩu","C. Khóa tài khoản sau 3 lần sai","D. Giới hạn IP"],a:"B",e:"MFA yêu cầu thêm mã OTP từ điện thoại ngoài mật khẩu để bảo vệ tài khoản tốt hơn."},
{t:"Dịch vụ nào phát hiện mối đe dọa bằng cách phân tích nhật ký?",o:["A. IAM","B. Amazon GuardDuty","C. KMS","D. Amazon S3"],a:"B",e:"GuardDuty dùng Machine Learning phân tích VPC Flow Logs, CloudTrail, DNS để tìm nguy hiểm."},
{t:"Security Group hoạt động ở cấp độ nào?",o:["A. Subnet","B. Máy chủ ảo (Instance)","C. VPC","D. Region"],a:"B",e:"Security Group hoạt động như tường lửa ảo ở cấp độ từng EC2 instance."},
{t:"Sự khác biệt chính giữa Security Group và Network ACL là gì?",o:["A. SG là stateless, NACL là stateful","B. SG ở cấp instance, NACL ở cấp subnet","C. SG kiểm soát lưu lượng vào, NACL kiểm soát vào và ra","D. Không khác biệt"],a:"B",e:"SG ở cấp instance và stateful. NACL ở cấp subnet và stateless."},
{t:"AWS Config cung cấp chức năng gì?",o:["A. Triển khai code","B. Theo dõi và ghi lại lịch sử thay đổi cấu hình tài nguyên","C. Cân bằng tải","D. Lưu mật khẩu"],a:"B",e:"AWS Config liên tục theo dõi mọi thay đổi cấu hình tài nguyên để đảm bảo tính tuân thủ."},
{t:"Chính sách nào được gắn trực tiếp lên tài nguyên như S3 bucket?",o:["A. Identity-based policy","B. Resource-based policy","C. SCP","D. Session policy"],a:"B",e:"Resource-based policy (như S3 Bucket Policy) được gắn trực tiếp lên tài nguyên để kiểm soát quyền truy cập."},
{t:"Dịch vụ nào cung cấp tường lửa ứng dụng web?",o:["A. GuardDuty","B. Shield","C. AWS WAF","D. Inspector"],a:"C",e:"AWS WAF bảo vệ ứng dụng web khỏi SQL injection, XSS..."},
{t:"AWS Shield bảo vệ chống lại tấn công nào?",o:["A. SQL injection","B. Tấn công DDoS","C. Phishing","D. Brute-force"],a:"B",e:"AWS Shield chuyên bảo vệ chống lại các cuộc tấn công Từ chối dịch vụ phân tán (DDoS)."},
{t:"Khi nào nên sử dụng IAM Role thay vì IAM User cho EC2?",o:["A. Cần mật khẩu tĩnh","B. Cần thông tin xác thực tạm thời tự động xoay vòng","C. Khi chỉ có 1 user","D. Không cần quyền"],a:"B",e:"IAM Role cung cấp thông tin xác thực tạm thời an toàn hơn là dùng Access Key tĩnh của User."}
]},
{id:4,title:"Lưu trữ (Mở rộng)",questions:[
{t:"Amazon S3 đảm bảo độ bền dữ liệu (durability) ở mức nào?",o:["A. 99.9%","B. 99.99%","C. 11 số 9 (99.999999999%)","D. 100%"],a:"C",e:"S3 được thiết kế với độ bền 11 số 9, rất khó mất dữ liệu."},
{t:"S3 Versioning giúp bảo vệ dữ liệu như thế nào?",o:["A. Mã hóa mọi file","B. Lưu giữ mọi phiên bản của đối tượng kể cả khi bị ghi đè","C. Sao chép qua Region khác","D. Nén dữ liệu"],a:"B",e:"Versioning lưu lại các phiên bản cũ để khôi phục khi bị xóa hoặc sửa nhầm."},
{t:"Dịch vụ nào phù hợp làm ổ đĩa hệ điều hành cho EC2?",o:["A. S3","B. Amazon EBS","C. EFS","D. Glacier"],a:"B",e:"EBS cung cấp ổ đĩa khối (block storage) hiệu suất cao để gắn làm ổ hệ điều hành."},
{t:"Sự khác biệt chính giữa EBS và EFS là gì?",o:["A. EBS chỉ cho Linux, EFS cho Windows","B. EBS gắn vào 1 EC2, EFS có thể chia sẻ giữa nhiều EC2","C. EBS miễn phí","D. Không khác biệt"],a:"B",e:"EBS gắn độc quyền 1 EC2. EFS là hệ thống file chia sẻ (NFS) cho hàng nghìn EC2 dùng chung."},
{t:"S3 Lifecycle Policy dùng làm gì?",o:["A. Mã hóa dữ liệu","B. Tự động chuyển dữ liệu giữa các lớp lưu trữ hoặc xóa sau một thời gian","C. Giới hạn quyền","D. Tăng tốc tải lên"],a:"B",e:"Lifecycle Policy tự động hóa việc chuyển dữ liệu sang lớp rẻ hơn hoặc xóa để tiết kiệm chi phí."},
{t:"S3 Intelligent-Tiering hoạt động ra sao?",o:["A. Luôn dùng lớp rẻ nhất","B. Tự động di chuyển dữ liệu giữa các lớp dựa trên tần suất truy cập thực tế","C. Chọn thủ công mỗi tháng","D. Chỉ lưu file nhỏ"],a:"B",e:"Intelligent-Tiering tự động tối ưu chi phí bằng cách theo dõi mẫu truy cập của dữ liệu."},
{t:"AWS Storage Gateway dùng khi nào?",o:["A. Lưu trên cloud hoàn toàn","B. Kết nối hạ tầng lưu trữ on-premises với đám mây AWS","C. Chạy web tĩnh","D. Chạy database"],a:"B",e:"Storage Gateway là giải pháp lai (hybrid) kết nối lưu trữ tại văn phòng với lưu trữ đám mây."},
{t:"S3 Object Lock cung cấp tính năng gì?",o:["A. Khóa bucket hoàn toàn","B. Ngăn chặn việc xóa/sửa đối tượng trong một khoảng thời gian xác định","C. Mã hóa bằng khóa riêng","D. Giới hạn dung lượng"],a:"B",e:"Object Lock áp dụng mô hình WORM (viết 1 lần, đọc nhiều lần) để tuân thủ pháp luật."},
{t:"Kích thước tối đa của 1 file trên S3 là bao nhiêu?",o:["A. 5 GB","B. 5 TB","C. 50 TB","D. Không giới hạn"],a:"B",e:"Kích thước tối đa của 1 đối tượng trên S3 là 5 Terabytes."},
{t:"Glacier Instant Retrieval khác gì Flexible Retrieval?",o:["A. Truy xuất dữ liệu ngay lập tức trong mili giây","B. Rẻ hơn","C. Chậm hơn","D. Giống nhau"],a:"A",e:"Instant Retrieval cho phép lấy lại dữ liệu tức thì (mili giây), còn Flexible mất từ phút đến giờ."}
]}
]);

// Module 5-8
EXTRA_DATA.push(...[
{id:5,title:"Điện toán (Mở rộng)",questions:[
{t:"AWS Lambda hoạt động theo mô hình nào?",o:["A. EC2 chạy 24/7","B. Phi máy chủ (Serverless) - chạy khi có trigger","C. Máy chủ vật lý","D. Container liên tục"],a:"B",e:"Lambda là Serverless, bạn chỉ trả tiền cho phần nghìn giây code được chạy."},
{t:"Auto Scaling Group cung cấp lợi ích gì?",o:["A. Mã hóa tự động","B. Tự động tăng/giảm số lượng EC2 instance theo tải","C. Cập nhật hệ điều hành","D. Tạo database"],a:"B",e:"ASG điều chỉnh số lượng server tự động theo lưu lượng hiện tại."},
{t:"Chức năng chính của Elastic Load Balancer (ELB)?",o:["A. Lưu dữ liệu","B. Phân phối lưu lượng mạng đến nhiều máy chủ","C. Dịch tên miền","D. Mã hóa kết nối"],a:"B",e:"ELB chia tải đều cho nhiều máy chủ để tránh quá tải 1 máy duy nhất."},
{t:"Instance Store khác gì EBS?",o:["A. Bền hơn EBS","B. Mất dữ liệu khi instance stop/terminate","C. Giống y hệt","D. Không thể lưu trữ"],a:"B",e:"Instance Store là ổ đĩa tạm vật lý, sẽ mất trắng dữ liệu khi máy ảo bị tắt (stop)."},
{t:"Spot Instance phù hợp công việc nào?",o:["A. Database quan trọng","B. Web server chính","C. Xử lý hàng loạt có khả năng chịu gián đoạn","D. Thanh toán"],a:"C",e:"Spot rất rẻ nhưng bị AWS thu hồi bất kỳ lúc nào, phù hợp cho việc chịu được ngắt quãng."},
{t:"Dedicated Host là gì?",o:["A. Máy chủ vật lý riêng biệt cho phép kiểm soát cấp độ phần cứng (socket/core)","B. Máy ảo giá rẻ","C. Container","D. Database dùng chung"],a:"A",e:"Dùng Dedicated Host khi bạn có license phần mềm on-premises cần đối chiếu số CPU vật lý."},
{t:"Security Group mặc định của VPC làm gì?",o:["A. Mở mọi port","B. Chặn tất cả luồng vào, cho phép tất cả luồng ra","C. Chặn tất cả luồng ra và vào","D. Chặn port 80"],a:"B",e:"SG mặc định an toàn: Inbound bị chặn hết, Outbound được cho phép hết."},
{t:"Application Load Balancer (ALB) hỗ trợ định tuyến ở tầng mấy?",o:["A. Tầng 4 (Network)","B. Tầng 7 (Application - HTTP/HTTPS)","C. Tầng 3","D. Tầng 2"],a:"B",e:"ALB chuyên xử lý HTTP/HTTPS và định tuyến theo đường dẫn (Path) ở Layer 7."},
{t:"Truy cập metadata của EC2 bằng IP nào?",o:["A. 192.168.1.1","B. 169.254.169.254","C. 10.0.0.1","D. localhost"],a:"B",e:"IP đặc biệt 169.254.169.254 dùng để gọi API lấy metadata ngay trong lòng máy EC2."},
{t:"Spread Placement Group là gì?",o:["A. Đặt chung 1 rack","B. Phân tán các EC2 lên các phần cứng vật lý khác nhau","C. Đặt trên 1 host","D. Tự động xóa máy"],a:"B",e:"Giúp hạn chế rủi ro hỏng hóc phần cứng đồng loạt."}
]},
{id:6,title:"Cơ sở dữ liệu (Mở rộng)",questions:[
{t:"Lợi thế của Amazon Aurora?",o:["A. Miễn phí","B. Nhanh gấp 5 lần MySQL, 3 lần PostgreSQL","C. Không cần internet","D. Chỉ lưu ảnh"],a:"B",e:"Aurora là DB độc quyền AWS được tối ưu riêng cho cloud."},
{t:"DynamoDB hỗ trợ mô hình nào?",o:["A. Quan hệ SQL","B. Key-Value và Document (NoSQL)","C. Graph","D. Time-series"],a:"B",e:"DynamoDB là NoSQL Serverless cực mạnh của AWS."},
{t:"Read Replica trên RDS dùng làm gì?",o:["A. Backup","B. Gánh tải đọc (Read) để giảm tải cho DB chính","C. Nén data","D. Phân tích AI"],a:"B",e:"Tăng tốc ứng dụng bằng cách đẩy các query SELECT sang các bản sao Read Replica."},
{t:"Amazon Redshift dùng làm gì?",o:["A. Web hosting","B. Data Warehouse (Kho dữ liệu khổng lồ để phân tích)","C. Gửi email","D. Làm cache"],a:"B",e:"Redshift xử lý dữ liệu lớn cỡ Petabyte cho Business Intelligence (BI)."},
{t:"Tính năng Multi-AZ của RDS dùng để?",o:["A. Tăng tốc đọc","B. Dự phòng sự cố (Failover) tự động","C. Tăng dung lượng đĩa","D. Cân bằng tải"],a:"B",e:"Khi DB chính sập, RDS tự động bật DB dự phòng (Standby) ở AZ khác để thay thế ngay lập tức."},
{t:"ElastiCache hỗ trợ 2 engine nào?",o:["A. Redis và Memcached","B. MySQL và Oracle","C. SQL Server và PostgreSQL","D. MongoDB và Cassandra"],a:"A",e:"Redis và Memcached là 2 công cụ lưu trữ in-memory mã nguồn mở phổ biến nhất."},
{t:"AWS DMS (Database Migration Service) làm gì?",o:["A. Chuyển tiền","B. Di chuyển dữ liệu database một cách liên tục và đồng nhất/không đồng nhất","C. Chuyển tên miền","D. Mã hóa DB"],a:"B",e:"DMS di chuyển database từ On-premise lên AWS mà ứng dụng vẫn hoạt động không gián đoạn."},
{t:"DocumentDB tương thích với DB nào?",o:["A. MySQL","B. MongoDB","C. Oracle","D. DynamoDB"],a:"B",e:"DocumentDB là dịch vụ tương thích API với MongoDB do AWS quản lý."},
{t:"Khi nào dùng DynamoDB thay vì RDS?",o:["A. Cần JOIN nhiều bảng","B. Cần độ trễ dưới 10ms, mở rộng không giới hạn và schema linh hoạt","C. Cần Store procedure","D. Cần ACID chặt chẽ"],a:"B",e:"DynamoDB vượt trội về tốc độ tải siêu cao và không yêu cầu schema cố định."},
{t:"Amazon QLDB đặc biệt ở điểm nào?",o:["A. Dùng AI","B. Cung cấp sổ cái (ledger) bất biến, không thể sửa đổi hoặc xóa","C. Miễn phí","D. Chạy offline"],a:"B",e:"QLDB giống như blockchain nội bộ, lưu giữ mọi thay đổi dữ liệu minh bạch và bất biến."}
]},
{id:7,title:"Mạng cơ bản (Mở rộng)",questions:[
{t:"Thành phần nào cho public subnet ra internet?",o:["A. NAT Gateway","B. Internet Gateway (IGW)","C. Virtual Private Gateway","D. Customer Gateway"],a:"B",e:"IGW là cánh cổng kết nối trực tiếp VPC với Internet công cộng."},
{t:"Private subnet ra internet tải update bằng cách nào an toàn?",o:["A. IGW","B. Elastic IP","C. NAT Gateway","D. Direct Connect"],a:"C",e:"NAT Gateway nằm ở Public Subnet sẽ đứng ra tải dữ liệu thay cho Private Subnet."},
{t:"Route Table là gì?",o:["A. Chặn IP","B. Bảng định tuyến quyết định đường đi của dữ liệu mạng","C. Load balancer","D. Cáp quang"],a:"B",e:"Route table chứa các luật (route) chỉ đường cho traffic đi ra IGW, NAT hay Peering."},
{t:"Chính sách Weighted routing của Route 53 làm gì?",o:["A. Load balance theo khu vực","B. Phân chia tỷ lệ % traffic đến các server","C. Kiểm tra sức khỏe","D. Định tuyến tự động"],a:"B",e:"Ví dụ gửi 80% truy cập vào server A, 20% vào server B."},
{t:"VPC Peering có đặc điểm gì?",o:["A. Kết nối qua mạng internet","B. Là kết nối mạng riêng (không qua internet) giữa 2 VPC","C. Hỗ trợ định tuyến bắc cầu (A->B, B->C suy ra A->C)","D. Chỉ dùng được trong 1 Region"],a:"B",e:"VPC Peering rất an toàn vì dùng hạ tầng cáp quang riêng của AWS. (Nó KHÔNG hỗ trợ bắc cầu)."},
{t:"Elastic IP là gì?",o:["A. IP đổi liên tục","B. IP tĩnh (Static) Public cấp cho tài khoản AWS của bạn","C. IP private","D. IPv6"],a:"B",e:"Là một IP cố định, bạn có thể gán nó từ EC2 này sang EC2 khác."},
{t:"NACL (Network ACL) đánh giá luật theo thứ tự nào?",o:["A. Ngẫu nhiên","B. Số thứ tự từ thấp đến cao","C. Số cao đến thấp","D. Đánh giá tất cả"],a:"B",e:"Luật số 100 sẽ được đánh giá trước luật số 200. Nếu khớp, nó bỏ qua các luật bên dưới."},
{t:"Một VPC có tối đa bao nhiêu IGW?",o:["A. 1","B. 2","C. 5","D. Không giới hạn"],a:"A",e:"Một VPC chỉ gắn được duy nhất 1 Internet Gateway."},
{t:"Amazon Route 53 là dịch vụ gì?",o:["A. Tạo server","B. Hệ thống phân giải tên miền (DNS)","C. Tính toán","D. Lưu trữ"],a:"B",e:"Route 53 giúp map tên miền thân thiện (google.com) với địa chỉ IP."},
{t:"Khi tạo VPC mới, cái gì KHÔNG được tạo sẵn?",o:["A. Route Table mặc định","B. Security Group mặc định","C. NACL mặc định","D. Subnets"],a:"D",e:"Bạn phải tự tay tạo các Subnets sau khi tạo VPC."}
]},
{id:8,title:"Mạng nâng cao (Mở rộng)",questions:[
{t:"Transit Gateway giải quyết vấn đề gì?",o:["A. Backup data","B. Thay thế VPC Peering chằng chịt bằng cấu trúc Hub trung tâm mạng lưới","C. Giảm giá EC2","D. Tăng tốc web"],a:"B",e:"Transit Gateway là tổng đài trung tâm, các VPC chỉ cần nối 1 dây vào Hub này là có thể kết nối với nhau."},
{t:"Direct Connect ưu việt hơn VPN ở điểm nào?",o:["A. Rẻ hơn","B. Nhanh tạo xong","C. Băng thông cực lớn, ổn định, không đi qua internet","D. Kết nối không dây"],a:"C",e:"Cáp quang Direct Connect đâm thẳng vào Data Center của bạn, tránh hoàn toàn internet công cộng."},
{t:"Gateway VPC Endpoint dùng cho dịch vụ nào?",o:["A. Tất cả","B. Chỉ S3 và DynamoDB","C. EC2 và RDS","D. SQS và SNS"],a:"B",e:"Khái niệm Gateway Endpoint ra đời rất sớm và chỉ phục vụ duy nhất 2 hệ thống là S3 và DynamoDB."},
{t:"Global Accelerator dùng để làm gì?",o:["A. Nén file zip","B. Tăng tốc độ truy cập ứng dụng toàn cầu bằng mạng cáp quang nội bộ AWS","C. Tính toán toán học","D. Backup DB"],a:"B",e:"Giúp người dùng ở VN kết nối đến máy chủ Mỹ với tốc độ siêu nhanh thông qua Edge Location."},
{t:"Site-to-Site VPN dùng giao thức gì để mã hóa đường hầm?",o:["A. HTTP","B. IPsec","C. SSH","D. FTP"],a:"B",e:"IPsec là tiêu chuẩn vàng để mã hóa mạng VPN doanh nghiệp."},
{t:"Phía AWS trong kết nối VPN gọi là gì?",o:["A. Customer Gateway","B. Virtual Private Gateway (VGW) hoặc Transit Gateway","C. IGW","D. NAT"],a:"B",e:"VGW là cánh cửa tiếp nhận kết nối VPN từ Customer Gateway của doanh nghiệp."},
{t:"VPN CloudHub dùng làm gì?",o:["A. Kết nối 1 VPC - 1 Data Center","B. Kết nối nhiều VPC với nhau","C. Kết nối nhiều chi nhánh văn phòng (Hub and Spoke) qua VPN AWS","D. Chia sẻ file"],a:"C",e:"Biến AWS thành Hub trung tâm để chi nhánh Hà Nội có thể kết nối với chi nhánh HCM thông qua mạng AWS."},
{t:"Interface VPC Endpoint dùng công nghệ gì?",o:["A. Direct Connect","B. AWS PrivateLink","C. Transit Gateway","D. IGW"],a:"B",e:"PrivateLink tạo ra 1 card mạng (ENI) có IP private ngay trong subnet của bạn để kết nối với AWS service."},
{t:"Backup cho Direct Connect tiết kiệm chi phí nhất?",o:["A. 2 đường Direct Connect","B. Site-to-Site VPN qua Internet","C. Peering","D. Gắn USB"],a:"B",e:"Dùng cáp quang Direct Connect làm kết nối chính, và VPN (rẻ, qua mạng internet) làm kết nối dự phòng failover."},
{t:"VPC Flow Logs KHÔNG lưu thông tin gì?",o:["A. IP nguồn/đích","B. Nội dung bên trong gói tin (Packet Payload)","C. Port","D. Giao thức"],a:"B",e:"Nó chỉ log metadata mạng (ai gọi cho ai), không lưu nội dung bạn chat gì hay gửi file gì."}
]}
]);

// Module 9-13
EXTRA_DATA.push(...[
{id:9,title:"IAM (Mở rộng)",questions:[
{t:"Mô hình Trách nhiệm Chung quy định khách hàng bảo mật gì?",o:["A. Data center vật lý","B. Bảo mật 'TRONG' đám mây (Dữ liệu, Ứng dụng, HĐH)","C. Toàn bộ hạ tầng mạng","D. Phần cứng EC2"],a:"B",e:"Khách hàng tự bảo vệ dữ liệu, code và cấu hình của mình."},
{t:"Principal trong IAM là gì?",o:["A. Một người hoặc ứng dụng tạo yêu cầu gọi API","B. Là ổ cứng","C. Là Database","D. Là Policy"],a:"A",e:"Bất kỳ thực thể nào (User, Role, Service) đưa ra yêu cầu đều gọi là Principal."},
{t:"IAM Policy viết bằng ngôn ngữ gì?",o:["A. XML","B. JSON","C. HTML","D. Python"],a:"B",e:"Mọi IAM Policy đều là một đoạn mã JSON định nghĩa quyền hạn."},
{t:"IAM Credential Report báo cáo cái gì?",o:["A. Hóa đơn tiền","B. Trạng thái của mọi user, mật khẩu, và Access Key","C. Lịch sử web","D. Server sập"],a:"B",e:"Giúp admin biết User nào đã đổi mật khẩu, ai đang bật/tắt MFA."},
{t:"Cách an toàn để EC2 gọi API S3?",o:["A. Ghi pass vào file text","B. Gán IAM Role cho EC2 instance","C. Viết cứng pass vào code","D. Cấp quyền Root"],a:"B",e:"Role sinh ra khóa tạm thời tự hủy, không bị lộ lọt trên mã nguồn."},
{t:"Amazon Cognito làm gì?",o:["A. Quản lý user/pass, hỗ trợ đăng nhập Facebook/Google cho ứng dụng","B. Lưu file ảnh","C. Chạy code","D. Làm Web server"],a:"A",e:"Cung cấp tính năng Authentication/Authorization chuyên nghiệp cho App mobile/web."},
{t:"Thành phần 'Action' trong Policy là gì?",o:["A. Tên người dùng","B. Lệnh hành động cụ thể (VD: s3:GetObject)","C. Chặn hay cho phép","D. Máy chủ nào"],a:"B",e:"Action xác định đúng lệnh API nào được phép chạy."},
{t:"Service Control Policies (SCPs) ở AWS Organizations có thể làm gì?",o:["A. Xóa account AWS","B. Giới hạn đặc quyền tối đa, chặn hành vi nguy hiểm của tài khoản con","C. Bật web","D. Tạo user"],a:"B",e:"SCP như một trần nhà quyền lực, ngay cả quyền Root của tài khoản con cũng không thể vượt qua."},
{t:"IAM Access Analyzer làm gì?",o:["A. Đo tốc độ mạng","B. Tìm các tài nguyên (S3, KMS) đang bị share/lộ ra bên ngoài tài khoản","C. Tính tiền","D. Code AI"],a:"B",e:"Nó quét các policy để cảnh báo nếu bạn lỡ cấu hình S3 public ra ngoài Internet."},
{t:"Bảo vệ Root account bằng cách nào?",o:["A. Share mật khẩu cho team","B. Bật MFA, tạo Admin User để dùng hàng ngày, cất kỹ Root","C. Xóa Root","D. Không cần làm gì"],a:"B",e:"Root có quyền tối cao không thể bị vô hiệu hóa, nên phải được khóa kín nhiều lớp."}
]},
{id:10,title:"Tự động hóa (Mở rộng)",questions:[
{t:"CloudFormation template dùng định dạng nào?",o:["A. XML","B. JSON hoặc YAML","C. Python","D. Bash"],a:"B",e:"CloudFormation hỗ trợ 2 định dạng văn bản là JSON và YAML (dễ đọc hơn)."},
{t:"CloudFormation Drift Detection là gì?",o:["A. Sửa lỗi syntax","B. Phát hiện tài nguyên bị ai đó sửa tay (lệch với template)","C. Xóa tài nguyên","D. Cài win"],a:"B",e:"Giúp kiểm soát sự thay đổi thủ công (drift) làm phá vỡ kiến trúc đã khai báo bằng code."},
{t:"Parameter Store dùng làm gì?",o:["A. Lưu video","B. Lưu trữ tập trung các chuỗi cấu hình, mật khẩu bảo mật","C. Lưu source code","D. Backup win"],a:"B",e:"Lưu các biến môi trường, chuỗi kết nối DB dạng mã hóa an toàn."},
{t:"AWS OpsWorks dùng công cụ tự động hóa nào?",o:["A. Chef và Puppet","B. Jenkins","C. Docker","D. Terraform"],a:"A",e:"OpsWorks cung cấp máy chủ Chef/Puppet để quản lý cấu hình tự động (Configuration Management)."},
{t:"Phần 'Outputs' trong CloudFormation template dùng để?",o:["A. Bật nguồn máy chủ","B. Hiển thị/Export các thông tin (URL, ID) sau khi khởi tạo thành công","C. Viết Code JS","D. Xóa DB"],a:"B",e:"Output giống như câu lệnh return trong lập trình, trả về kết quả tài nguyên đã tạo."}
]},
{id:11,title:"IaC - Caching (Mở rộng)",questions:[
{t:"Amazon CloudFront có thể lấy dữ liệu (Origin) từ đâu?",o:["A. Chỉ S3","B. S3, EC2, ALB, API Gateway hoặc máy chủ bên ngoài AWS","C. Chỉ DynamoDB","D. Không cần origin"],a:"B",e:"CloudFront rất đa năng, có thể làm CDN cho bất kỳ máy chủ Web HTTP nào."},
{t:"CloudFront Edge Caching giữ file dựa trên cái gì?",o:["A. Dung lượng ổ cứng","B. Cấu hình Time-To-Live (TTL) và Cache-Control header","C. Tốc độ RAM","D. IP của người dùng"],a:"B",e:"TTL quy định file ảnh này được giữ ở vùng biên (Edge) bao lâu trước khi hết hạn."},
{t:"Chức năng Redis Pub/Sub trong ElastiCache dùng làm gì?",o:["A. Gửi tin nhắn email","B. Gửi thông điệp thời gian thực (Real-time chat, ranking trực tiếp)","C. Tính tiền","D. Backup đĩa cứng"],a:"B",e:"Redis tối ưu cho tương tác tốc độ ánh sáng như Chatbot, Game trực tuyến."},
{t:"ElastiCache được tạo ra để giải quyết nghẽn cổ chai ở đâu?",o:["A. Hệ thống Frontend","B. Database Backend","C. Network Load Balancer","D. Route 53 DNS"],a:"B",e:"Giảm áp lực truy vấn cho DB chính (như RDS) bằng cách nhớ sẵn kết quả trên RAM."},
{t:"Amazon API Gateway Caching hoạt động ra sao?",o:["A. Không có cache","B. Nó nhớ kết quả phản hồi của API và trả ngay cho các request y hệt tiếp theo","C. Chỉ cache HTML tĩnh","D. Chuyển request sang S3"],a:"B",e:"API Caching tiết kiệm tài nguyên Lambda và Database bằng cách trả luôn kết quả có sẵn trong mili giây."}
]},
{id:12,title:"Microservices (Mở rộng)",questions:[
{t:"AWS Fargate khác ECS trên EC2 ra sao?",o:["A. Fargate đắt hơn 100 lần","B. Fargate Serverless, bạn không cần quan tâm tạo và quản lý máy chủ EC2","C. Fargate chỉ hỗ trợ Win","D. Fargate là DB"],a:"B",e:"Với Fargate, bạn chỉ nói 'Chạy cho tôi container này', AWS tự lo việc tìm máy chủ ẩn bên dưới."},
{t:"Kiến trúc SQS + Lambda gọi là gì?",o:["A. Monolithic","B. Kiến trúc phi máy chủ hướng sự kiện (Event-driven serverless)","C. MVC","D. Micro-frontend"],a:"B",e:"Tin nhắn SQS chính là 'Sự kiện' (Event) kích hoạt Lambda chạy tự động."},
{t:"Amazon ECR là dịch vụ gì?",o:["A. Kho lưu code GitHub","B. Kho lưu trữ (Registry) Docker container images","C. Lưu video","D. Lưu log hệ thống"],a:"B",e:"Elastic Container Registry là chỗ để developer push Docker image lên đám mây bảo mật."},
{t:"API Gateway thường đi cặp với dịch vụ nào tạo Serverless backend?",o:["A. EC2","B. AWS Lambda","C. RDS","D. S3"],a:"B",e:"Bộ đôi tiêu chuẩn: API Gateway hứng HTTP Request -> Gửi cho Lambda chạy logic -> Trả kết quả."},
{t:"Tại sao Loose Coupling (kết nối lỏng lẻo) lại quan trọng trong Microservices?",o:["A. Code nhanh hơn","B. Nếu một module sập, các module khác vẫn sống nhờ cơ chế đệm (như SQS)","C. Đỡ tốn tiền","D. Hacker không hack được"],a:"B",e:"Giới hạn thiệt hại khi có sự cố, không để sập dây chuyền toàn hệ thống."}
]},
{id:13,title:"Tổng hợp (Mở rộng)",questions:[
{t:"Hàng đợi Dead-Letter Queue (DLQ) ở SQS làm gì?",o:["A. Gửi thư","B. Lưu các tin nhắn bị lỗi xử lý nhiều lần để team dev phân tích","C. Xóa tin nhắn","D. Mã hóa"],a:"B",e:"Tin nhắn bị crash liên tục sẽ bị tống vào DLQ để cách ly, không làm kẹt hàng đợi chính."},
{t:"Sự khác nhau cơ bản giữa SNS và SQS?",o:["A. SNS là PULL, SQS là PUSH","B. SNS chủ động đẩy tin nhắn (PUSH) đi nhiều nơi, SQS giữ tin nhắn đợi worker lấy (PULL)","C. SQS nhanh hơn","D. Giống hệt nhau"],a:"B",e:"SNS như loa phường (Push), SQS như hộp thư bưu điện (Pull)."},
{t:"Step Functions khai báo kịch bản bằng ngôn ngữ nào?",o:["A. Python","B. Amazon States Language (ASL - dạng JSON)","C. C++","D. SQL"],a:"B",e:"ASL định nghĩa sơ đồ khối rẽ nhánh, vòng lặp, chạy song song cho máy trạng thái."},
{t:"Thách thức lớn nhất khi dùng Microservices?",o:["A. Thiếu ngôn ngữ lập trình","B. Khó khăn trong việc quản lý và nhất quán dữ liệu phân tán (Distributed data)","C. Bắt buộc dùng AWS","D. Rất chậm"],a:"B",e:"Mỗi dịch vụ có DB riêng nên việc đảm bảo tính đúng đắn khi giao dịch liên chéo dịch vụ rất phức tạp."},
{t:"Amazon EventBridge hoạt động theo nguyên lý nào?",o:["A. PULL message liên tục","B. Trạm xe buýt sự kiện (Event Bus) nhận event từ ứng dụng/SaaS và điều phối tự động","C. Lưu trữ tĩnh","D. Giám sát mã nguồn"],a:"B",e:"EventBridge cực mạnh trong việc bắt các sự kiện thay đổi trạng thái hệ thống và kích hoạt các quy trình xử lý tự động."}
]}
]);
