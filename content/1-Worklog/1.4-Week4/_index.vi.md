---
title: "Tuần 4: Xây dựng bộ kiểm thử và tích hợp luồng người mua"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.4. </b> "
---

### Mục tiêu tuần 4:

* Thống nhất luồng người mua, phạm vi kiểm thử và đầu ra cần chứng minh của đồ án.
* Phối hợp với teammate phát triển ứng dụng và kiểm thử song song.
* Xây dựng bộ kiểm thử local có giao diện theo dõi và đối chiếu tính nhất quán dữ liệu.
* Tích hợp bộ kiểm thử với ứng dụng, xác minh các tình huống đặt vé ở quy mô nhỏ.
* Hợp nhất mã nguồn và chuẩn hóa tài liệu bàn giao.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 3 | - Rà soát mục tiêu về truy cập tăng đột ngột, khả năng mở rộng và đăng ký đồng thời.<br>- Trao đổi với teammate để thống nhất luồng xem sự kiện công khai, đăng nhập trước khi đặt vé và xem lại vé theo tài khoản.<br>- Xác định ba nhóm kiểm thử: sự kiện hot, tải tăng–giảm và tranh số vé giới hạn.<br>&emsp; + Phân chia trách nhiệm ứng dụng và kiểm thử; thống nhất API, dữ liệu thử và đầu ra bàn giao. | 20/10/2026 | 20/10/2026 | [AWS FCAJ Workshop](https://hcm-rules.awsfcaj.com/3-project/); [Git worktree](https://git-scm.com/docs/git-worktree) |
| 4 | - Tổ chức môi trường làm việc riêng cho phần kiểm thử.<br>- Xây dựng công cụ chuẩn bị dữ liệu, quản lý phiên riêng cho từng tài khoản và các kịch bản tải có giới hạn.<br>&emsp; + Xây dựng runner điều phối việc chuẩn bị, chạy và lưu kết quả.<br>- Xây dựng dashboard cấu hình lượt chạy, theo dõi biểu đồ, trạng thái và lịch sử.<br>&emsp; + Bổ sung tổng hợp chỉ số, đối chiếu dữ liệu và kiểm tra ban đầu với các API hiện có. | 21/10/2026 | 21/10/2026 | [Grafana k6: kịch bản theo người dùng](https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/per-vu-iterations/); [Grafana k6: dữ liệu đo JSON](https://grafana.com/docs/k6/latest/results-output/real-time/json/) |
| 6 | - Tiếp nhận bản ứng dụng có tài khoản người mua do teammate bàn giao; đối chiếu contract và dữ liệu thực tế.<br>- Điều chỉnh Test Lab để tích hợp API 3.0 trên dữ liệu thử riêng.<br>&emsp; + Kiểm tra đủ chỗ, tranh chỗ cuối, gửi lại yêu cầu, đổi nội dung với cùng key, đăng ký trùng và quyền xem vé.<br>- Đối chiếu dữ liệu sau kiểm thử, bổ sung kiểm thử hồi quy và kiểm tra dashboard trên trình duyệt.<br>- Hoàn thiện tài liệu, rà soát và bàn giao mã nguồn phần kiểm thử. | 23/10/2026 | 23/10/2026 | [Grafana k6: phiên và cookie](https://grafana.com/docs/k6/latest/using-k6/cookies/); [AWS: giao dịch DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html) |
| 7 | - Phối hợp với teammate rà soát kết quả hợp nhất ứng dụng và Test Lab.<br>- Chuẩn hóa tài liệu công việc, bối cảnh dự án, quy tắc cộng tác và hướng dẫn Git.<br>&emsp; + Làm rõ nguồn tham khảo và bằng chứng thực hiện.<br>- Đối chiếu phiên bản ứng dụng với bộ kiểm thử, xác định phần cần cập nhật trước đợt kiểm thử tiếp theo. | 24/10/2026 | 24/10/2026 | [Git worktree](https://git-scm.com/docs/git-worktree) |

### Kết quả đạt được tuần 4:

* **Luồng và phạm vi:** Thống nhất người mua cần tài khoản trước khi đặt vé, còn việc xem sự kiện vẫn công khai. Xác định ba nhóm kiểm thử và đầu ra về kết quả đặt vé, phản hồi và tính nhất quán dữ liệu.
* **Phối hợp:** Phân chia phần ứng dụng và kiểm thử, sử dụng nhánh/worktree và dữ liệu thử riêng để làm việc song song. Phần kiểm thử tiếp nhận và tích hợp với luồng người mua, quản trị do teammate phát triển.
* **Bộ kiểm thử:** Đã xây dựng Event Test Lab gồm chuẩn bị dữ liệu, mô phỏng tải, runner, dashboard, lưu kết quả và đối chiếu database. Dashboard hiển thị trạng thái, biểu đồ và lịch sử từ dữ liệu đo thật.
* **Tích hợp và kiểm chứng:** Trên API 3.0, bài 2 người/4 chỗ tạo đúng 2 vé; bài 2 người tranh 1 chỗ chỉ tạo 1 vé. Kiểm tra gửi lại yêu cầu, từ chối nội dung khác với cùng key, chống đăng ký trùng và quyền xem vé đạt; số vé và số chỗ khớp sau kiểm tra.
* **Chất lượng và bàn giao:** Hồ sơ kiểm thử ghi nhận 28/28 unit test Test Lab đạt; dashboard build/lint và kiểm tra trình duyệt đạt. Mã nguồn đã được hợp nhất và đẩy lên remote; tài liệu công việc, bối cảnh, quy tắc cộng tác và hướng dẫn Git được chuẩn hóa.
* **Phần tiếp tục:** Ứng dụng hiện dùng contract 4.1, trong khi Test Lab mới có bằng chứng tích hợp trên contract 3.0. Cần cập nhật tương thích và chạy lại bài nhỏ trước các bài 100 người. Chưa có kết quả tải lớn hoặc autoscaling AWS; chưa triển khai AWS, OTP hoặc thanh toán.


