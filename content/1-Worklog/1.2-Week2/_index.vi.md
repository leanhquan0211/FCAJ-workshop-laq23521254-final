---
title: "Tuần 2: Chuẩn bị môi trường và khởi tạo ứng dụng local"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.2. </b> "
---

### Mục tiêu tuần 2:

* Chốt phạm vi MVP và chuẩn bị môi trường phát triển local cho website đăng ký sự kiện serverless.
* Thiết lập bộ khung dự án, kiểm tra cơ sở dữ liệu local và thành phần backend đầu tiên.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 5 | - Chốt phạm vi MVP của website đăng ký sự kiện serverless và ghi nhận kiến trúc AWS dự kiến.<br>&emsp; + Xác định chức năng xem sự kiện, sức chứa và kết quả đăng ký cho người tham gia; quản lý sự kiện và trạng thái đăng ký cho quản trị viên.<br>&emsp; + Xác định giới hạn của giai đoạn đầu, các chức năng ngoài MVP và ranh giới giữa phát triển local với triển khai AWS về sau.<br>- Kiểm tra các công cụ cần thiết để phát triển và kiểm thử trên máy local.<br>&emsp; + Kiểm tra VS Code, Git, Docker Desktop với Linux containers, Docker Compose, AWS SAM CLI và Python 3.12.<br>- Chuẩn bị cấu trúc và môi trường phát triển ban đầu cho dự án.<br>&emsp; + Sắp xếp thư mục frontend, backend, kiểm thử và tài liệu; thiết lập môi trường Python độc lập và danh sách thư viện.<br>&emsp; + Rà soát quy tắc loại trừ môi trường ảo, dữ liệu local, file sinh ra khi build và cấu hình nhạy cảm khỏi Git. | 08/10/2026 | 08/10/2026 | [Python venv](https://docs.python.org/3.12/library/venv.html); [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html); [Git ignore](https://git-scm.com/docs/gitignore) |
| 6 | - Cấu hình DynamoDB Local bằng Docker Compose để phục vụ phát triển backend.<br>&emsp; + Xem xét cấu hình container local, named volume và script tạo bảng events, registrations.<br>&emsp; + Truy vấn các bảng và đọc sự kiện mẫu để kiểm tra khả năng truy cập cơ sở dữ liệu.<br>- Tạo và kiểm tra thành phần backend đầu tiên bằng AWS SAM.<br>&emsp; + Khai báo Lambda Python 3.12, tuyến GET /health và các origin CORS local trong template SAM.<br>&emsp; + Xác thực template SAM và gọi handler bằng sự kiện kiểm tra sức khỏe mô phỏng.<br>- Chuẩn bị trang giao diện local ban đầu.<br>&emsp; + Tạo bố cục HTML để hiển thị trạng thái backend và nút kiểm tra kết nối. | 09/10/2026 | 09/10/2026 | [DynamoDB Local](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html); [Docker volumes](https://docs.docker.com/engine/storage/volumes/); [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) |

### Kết quả đạt được tuần 2:

* **Phạm vi dự án:** Đã ghi nhận phạm vi MVP cho website đăng ký sự kiện. Người tham gia dự kiến xem sự kiện, số chỗ còn lại và kết quả đăng ký; quản trị viên dự kiến quản lý sự kiện, sức chứa và trạng thái đăng ký. Thanh toán, ứng dụng di động, email riêng cho từng người và microservices nằm ngoài phạm vi hiện tại. S3 kết hợp CloudFront, API Gateway, Lambda và DynamoDB là hướng kiến trúc AWS dự kiến, chưa phải hệ thống đã triển khai.
* **Môi trường phát triển:** Đã xác nhận VS Code, Git, Docker Compose và AWS SAM CLI có sẵn; Docker Desktop đang chạy Linux containers. Môi trường Python riêng của dự án dùng phiên bản 3.12. Các thư mục frontend, backend, kiểm thử và tài liệu, danh sách thư viện Python và quy tắc Git ignore tạo thành bộ khung ban đầu.
* **Cơ sở dữ liệu local:** Docker Compose đã khai báo DynamoDB Local cùng named volume và container đang chạy. Truy vấn chỉ đọc xác nhận có hai bảng events, registrations và đọc được sự kiện mẫu. Chưa xác minh dữ liệu còn nguyên sau khi khởi động lại container.
* **Backend ban đầu:** Cấu hình SAM khai báo hàm Python 3.12, tuyến GET /health và các origin CORS local; kiểm tra SAM lint thành công. Gọi trực tiếp Lambda handler bằng sự kiện mô phỏng trả statusCode 200 cùng JSON có trạng thái ok. Chưa xác minh yêu cầu HTTP đi qua SAM Local.

