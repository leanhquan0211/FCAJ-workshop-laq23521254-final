---
title: "Tuần 3: Tích hợp luồng đăng ký và quản trị sự kiện"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.3. </b> "
---

### Mục tiêu tuần 3:

* Hoàn thiện giao diện thống nhất và luồng người tham gia từ tìm sự kiện đến xem kết quả đăng ký.
* Kết nối Frontend với Backend và cơ sở dữ liệu local, bảo đảm giữ chỗ và chống đăng ký trùng.
* Bổ sung quản trị sự kiện, xác thực, phân quyền và cập nhật tài liệu sử dụng, kiểm thử.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | - Hoàn thiện định hướng chức năng và thiết kế giao diện thống nhất.<br>&emsp; + Chuẩn hóa bố cục, thành phần dùng chung và cách hiển thị trên nhiều kích thước màn hình.<br>- Xây dựng màn hình danh sách sự kiện.<br>&emsp; + Bổ sung tìm kiếm không dấu, lọc theo danh mục và trạng thái, xóa bộ lọc và hiển thị tình trạng đăng ký. | 12/10/2026 | 12/10/2026 | [React: hiển thị và lọc danh sách](https://react.dev/learn/rendering-lists) |
| 3 | - Hoàn thiện luồng người tham gia với dữ liệu mô phỏng.<br>&emsp; + Xây dựng màn hình chi tiết sự kiện, form đăng ký và trang kết quả; kiểm tra dữ liệu nhập và ngăn gửi lặp.<br>- Rà soát khả năng chạy và xử lý trạng thái giao diện.<br>&emsp; + Bổ sung trạng thái tải, không tìm thấy, lỗi đăng ký và giữ thông tin form khi lỗi; cập nhật tài liệu Frontend. | 13/10/2026 | 13/10/2026 | [React: biểu mẫu nhập liệu](https://react.dev/reference/react-dom/components/input); [MDN: lưu trữ local](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) |
| 5 | - Thống nhất API contract và mô hình dữ liệu giữa Frontend và Backend.<br>&emsp; + Làm rõ thông tin sự kiện, đăng ký, trạng thái và cách phản hồi lỗi.<br>- Xây dựng môi trường Backend và cơ sở dữ liệu local phục vụ ứng dụng.<br>&emsp; + Thiết lập dữ liệu sự kiện mẫu theo cách không ghi đè bản ghi đã có; xây dựng API đọc danh sách và chi tiết sự kiện từ cơ sở dữ liệu. | 15/10/2026 | 15/10/2026 | [AWS: DynamoDB Local](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html); [AWS SAM: API local](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/using-sam-cli-local-start-api.html) |
| 6 | - Hoàn thiện chức năng đăng ký và đọc kết quả.<br>&emsp; + Kết hợp giữ chỗ, chống trùng email trong cùng sự kiện và kiểm tra sức chứa trong giao dịch dữ liệu.<br>- Tích hợp Frontend với Backend và bổ sung quản trị sự kiện.<br>&emsp; + Thêm, sửa, xóa và mở/đóng đăng ký, đồng thời bảo toàn các chỗ đã sử dụng.<br>- Bổ sung đăng nhập, quản lý phiên và kiểm tra quyền quản trị tại Backend.<br>- Rà soát cấu hình, tình huống lỗi, hồ sơ kiểm thử và cập nhật tài liệu chạy ứng dụng local. | 16/10/2026 | 16/10/2026 | [AWS: giao dịch DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transactions.html); [OWASP: kiểm soát quyền truy cập](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) |

### Kết quả đạt được tuần 3:

* **Giao diện và danh sách:** Có màn hình danh sách theo thiết kế thống nhất, hỗ trợ tìm kiếm không dấu, kết hợp bộ lọc và hiển thị trạng thái sự kiện. Các thành phần giao diện được dùng chung và bố trí phù hợp với màn hình nhỏ.
* **Luồng người tham gia:** Có luồng chi tiết sự kiện → form đăng ký → kết quả với dữ liệu mô phỏng. Form kiểm tra thông tin, giữ dữ liệu khi lỗi và chặn sự kiện không còn nhận đăng ký; tài liệu Frontend mô tả cách chạy và thử các trạng thái chính.
* **Backend và dữ liệu:** Có API contract, mô hình dữ liệu, dữ liệu sự kiện mẫu và API đọc danh sách, chi tiết từ DynamoDB Local. Cơ chế tạo dữ liệu mẫu giữ lại bản ghi đã tồn tại; cấu hình lưu trữ và hướng dẫn chạy Backend local đã có.
* **Tích hợp và quản trị:** Luồng đăng ký local đã kết nối hai phía, lưu và đọc lại kết quả từ cơ sở dữ liệu. Giao dịch dữ liệu gắn giữ chỗ với chống trùng và kiểm tra sức chứa. Quản trị viên có đăng nhập và quản lý sự kiện; Backend kiểm tra quyền, chặn giảm sức chứa dưới số chỗ đã dùng và chặn xóa sự kiện đã có chỗ sử dụng.
* **Kiểm thử và rà soát:** Hồ sơ các đợt triển khai trước ghi nhận kiểm thử Backend, tranh chỗ/chống trùng, API, trình duyệt và giao diện trên nhiều độ rộng đã đạt. Lần rà soát này đối chiếu mã nguồn, cấu hình và tài liệu; chưa chạy lại kiểm thử tích hợp vì Docker không kết nối được.
* **Phạm vi hoàn thành:** Ứng dụng local đã bao phủ luồng người tham gia và quản trị. Chưa triển khai lên AWS; email xác nhận và xác thực người tham gia khi đọc kết quả vẫn chưa có.


