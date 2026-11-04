# Yêu cầu cho Worklog 12 tuần

Tài liệu này áp dụng cho toàn bộ Worklog từ Tuần 1 đến Tuần 12 của AWS FCAJ Workshop. Đây là ghi chú làm việc cục bộ, đã được thêm vào `.gitignore`. Chỉ cập nhật tuần được giao và chỉ ghi các công việc có căn cứ; không tự điền trước các tuần còn lại.

## Vị trí dự án hiện tại

- Project Worklog hiện dùng thư mục `N:\OneDrive\UIT\TTDN\fcaj-workshop\fcaj-workshop-final`, tương ứng `fcaj-workshop/fcaj-workshop-final`.
- Nội dung Worklog nằm trong `content/1-Worklog/` tính từ thư mục hiện tại của project. Đọc và chỉnh sửa các trang tuần, trang tổng quan, kiểm tra Git và chạy Hugo tại project này.
- Thư mục `N:\OneDrive\UIT\TTDN\fcj-workshop-template` là vị trí cũ; các lần cập nhật tiếp theo thực hiện tại `fcaj-workshop-final`.
- Repository ứng dụng vẫn là project riêng tại `N:\OneDrive\UIT\TTDN\fcaj-workshop\FCAJ-23521254-23521225`. Chỉ đọc mã nguồn, báo cáo hoặc tài liệu ở đó để đối chiếu khi viết Worklog; không đặt trang báo cáo vào repository ứng dụng.
- `README_WORKLOG.md` là hướng dẫn cục bộ được Git bỏ qua. Khi chuyển thư mục hoặc tạo bản sao mới, cần mang theo file này để giữ đầy đủ quy tắc đã thống nhất.

## Phạm vi và cấu trúc

- Mỗi tuần dùng hai file `_index.md` (tiếng Anh) và `_index.vi.md` (tiếng Việt) trong thư mục tuần tương ứng. Hai bản phải tương đương về ngày, công việc, kết quả, mức độ hoàn thành và tài liệu tham khảo.
- Giữ cấu trúc thư mục, front matter, metadata và các cú pháp template cần thiết. Giữ bố cục mục tiêu, bảng công việc và kết quả đạt được. Không tạo phần warning; bỏ warning mẫu khi biên tập trang Worklog.
- Không sửa Proposal, Workshop, BlogsPosted, cấu hình website, navigation hoặc các tuần khác nếu yêu cầu chỉ liên quan đến một tuần.

## Tiêu đề tuần và trang tổng quan

- Đặt tiêu đề ngắn gọn theo nội dung chính đã thực hiện trong tuần, phản ánh đúng mức độ nghiên cứu hoặc triển khai. Không dùng tên công việc mẫu hoặc đặt tiêu đề cho phần chưa làm.
- Khi cập nhật một tuần, đồng bộ tên trong trường `title` của trang tuần và nhãn liên kết tại `content/1-Worklog/_index.md`, `content/1-Worklog/_index.vi.md`. Tên tiếng Anh và tiếng Việt phải tương đương; giữ nguyên thư mục, URL, số thứ tự và các metadata khác.
- Tiêu đề trang tuần có dạng `Tuần N: Nội dung chính` hoặc `Week N: Main Topic`. Trong danh sách tổng quan, số tuần đứng trước liên kết, còn nhãn liên kết chỉ ghi nội dung chính.

Các tuần đã có nội dung:

| Tuần | Tiêu đề tiếng Việt | Tiêu đề tiếng Anh |
| --- | --- | --- |
| 1 | Nghiên cứu đề tài và kiến trúc serverless | Project Research and Serverless Architecture |
| 2 | Chuẩn bị môi trường và khởi tạo ứng dụng local | Local Environment and Initial Application Setup |
| 3 | Tích hợp luồng đăng ký và quản trị sự kiện | Registration Flow Integration and Event Administration |
| 4 | Xây dựng bộ kiểm thử và tích hợp luồng người mua | Test Lab Development and Buyer Flow Integration |
| 5 | Thiết kế lại giao diện và tùy chỉnh hiển thị | Interface Redesign and Appearance Customization |
| 6 | Triển khai hạ tầng AWS bằng Terraform và thu hồi tài nguyên | AWS Infrastructure Deployment with Terraform and Resource Teardown |

## Trình bày nội dung

- Bảng có một dòng cho mỗi ngày làm việc được xác thực. Ghi thứ bằng số, ví dụ thứ 4 ghi `4`. Ngày bắt đầu và ngày hoàn thành phản ánh đúng công việc thực tế; không tự tạo ngày, giờ hoặc tên người tham gia.
- Trong ô công việc, mỗi đầu việc chính bắt đầu bằng dấu `-`. Nếu có ý nhỏ, đặt ý đó trên dòng riêng và bắt đầu bằng dấu `+`. Dùng `<br>` để xuống dòng trong ô bảng theo cách của template.
- Ô công việc chỉ liệt kê việc đã làm. Đưa toàn bộ kết quả, nhận định và điều còn cần nghiên cứu vào mục Kết quả đạt được / Week Achievements bên dưới bảng. Tránh lặp một ý ở nhiều chỗ.
- Mục Kết quả đạt được tổng hợp theo nội dung công việc, không ghi ngày trong nhãn hoặc đầu các gạch đầu dòng. Ngày báo cáo chỉ ghi trong bảng công việc.
- Chỉ in đậm từ hoặc cụm từ làm tiêu đề ở đầu dòng, chẳng hạn nhãn mở đầu một gạch đầu dòng trong mục kết quả. Không in đậm cụm từ nằm giữa câu hoặc toàn bộ phần diễn giải.
- Không dùng dấu ngoặc kép trong nội dung Worklog. Giữ dấu ngoặc kép bắt buộc trong front matter hoặc cú pháp template.
- Viết tự nhiên, ngắn gọn và cụ thể bằng ngôn ngữ của từng bản. Không biến Worklog thành Proposal hoàn chỉnh và không thêm nội dung ngoài chủ đề AWS FCAJ workshop.
- Viết trực tiếp về công việc và kết quả. Không thêm lời dẫn giải thích cách phân bổ ngày báo cáo, ghép tuần báo cáo với tuần kỹ thuật hoặc quá trình soạn báo cáo.

## Tính xác thực

- Phân biệt rõ việc đã nghiên cứu, phương án đang cân nhắc, quyết định đã chốt và công việc đã triển khai. Không biến đề tài dự kiến thành đề tài đã được phê duyệt.
- Không ghi rằng đã viết code, cấu hình AWS, triển khai, kiểm thử, đo hiệu năng, tính chi phí hay hoàn thành kết quả khác nếu chưa có bằng chứng.
- Không thêm hoạt động không liên quan hoặc dữ kiện không được cung cấp. Nếu thiếu ngày hoặc kết quả cụ thể, để trống hoặc diễn đạt đúng mức độ biết được theo khả năng của template.

## References

- Ghi tài liệu tham khảo cơ bản, có liên quan ngay trong dòng công việc tương ứng. Ưu tiên quy định [AWS FCAJ workshop](https://hcm-rules.awsfcaj.com/3-project/), [AWS Well-Architected](https://aws.amazon.com/architecture/well-architected/), tài liệu chính thức của dịch vụ AWS thực sự được tìm hiểu và [AWS Pricing Calculator](https://calculator.aws/) khi bàn về chi phí.
- Chỉ dùng URL gốc hoặc tài liệu chính thức, không có tham số theo dõi hay hậu tố `chatgpt.com`. Không nói đã kiểm tra liên kết nếu chưa thực sự kiểm tra.

## Dữ kiện riêng của Tuần 1

- Tuần 1 có hai ngày làm việc: thứ 4 ngày `30/09/2026` và thứ 6 ngày `02/10/2026`. Bảng có một dòng cho mỗi ngày; ngày bắt đầu và hoàn thành của từng dòng là ngày tương ứng.
- Ngày `30/09/2026` ghi việc tìm hiểu yêu cầu workshop và định hình bài toán đăng ký sự kiện. Ngày `02/10/2026` ghi việc nghiên cứu kiến trúc, các vấn đề kỹ thuật, phạm vi và chi phí.
- Công việc gồm tìm hiểu yêu cầu AWS FCAJ workshop; xem xét nền tảng đăng ký sự kiện trực tuyến; nghiên cứu kiến trúc serverless sơ bộ; cân nhắc phạm vi và chi phí.
- Hướng đề tài đăng ký sự kiện serverless vẫn là đề tài dự kiến, chưa được phê duyệt hoặc chốt phạm vi. Các chức năng, kiến trúc và dịch vụ AWS nêu trong kết quả chỉ là nội dung đang xem xét.
- Kiến trúc đang cân nhắc: Amazon S3 → Amazon API Gateway → AWS Lambda → Amazon DynamoDB; Amazon CloudWatch và AWS IAM hỗ trợ giám sát và quyền truy cập. Terraform là tùy chọn. Đăng ký đồng thời, giới hạn sức chứa, bảo mật, khả năng mở rộng và chi phí còn cần nghiên cứu thêm.
- Phương án ban đầu ưu tiên ít dịch vụ do ngân sách hạn chế. ECS/Fargate, Application Load Balancer, RDS, NAT Gateway, WAF, Secrets Manager, Route 53 và CloudFront được cân nhắc để ngoài phạm vi ban đầu, có thể xem xét lại khi có yêu cầu thực tế.

## Dữ kiện riêng của Tuần 2

- Tuần 2 có hai ngày làm việc: thứ 5 ngày `08/10/2026` và thứ 6 ngày `09/10/2026`. Bảng có một dòng cho mỗi ngày, với ngày bắt đầu và hoàn thành tương ứng.
- Ngày `08/10/2026` ghi phần đầu: chốt phạm vi MVP, kiểm tra công cụ, chuẩn bị cấu trúc và môi trường phát triển. Ngày `09/10/2026` ghi phần sau: DynamoDB Local, cấu hình và Lambda handler AWS SAM, giao diện HTML ban đầu.
- Chỉ ghi nhận kết quả đã có căn cứ. Không suy diễn rằng việc lưu dữ liệu đã được kiểm tra qua lần khởi động lại container, API đã chạy qua HTTP, frontend đã kết nối backend hoặc đã triển khai AWS khi các phần này chưa được xác minh.

## Kiểm tra trước khi hoàn tất mỗi tuần

- Hai bản ngôn ngữ có cùng số ngày, cùng nội dung chính và cùng trạng thái hoàn thành.
- Tiêu đề tuần ở hai ngôn ngữ phản ánh đúng nội dung và khớp với liên kết trong trang tổng quan Worklog.
- Bảng chỉ có công việc với dấu `-` và `+` khi cần; kết quả nằm dưới bảng.
- Chỉ có nhãn hoặc tiêu đề đầu dòng được in đậm; không có warning hay dấu ngoặc kép trong nội dung Worklog.
- Ngày, kết quả, nguồn tham khảo và mức độ triển khai đều có căn cứ; các tuần không được giao không bị chỉnh sửa.
