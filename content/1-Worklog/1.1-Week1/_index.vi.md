---
title: "Worklog Tuần 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---
### Mục tiêu tuần 1:

* Tìm hiểu yêu cầu AWS FCAJ workshop và xác định thông tin cần chuẩn bị cho đề xuất dự án.
* Xem xét một đề tài thực tế trên AWS, kiến trúc ban đầu và phạm vi phù hợp với ngân sách.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 4 | - Xem xét yêu cầu AWS FCAJ workshop và cấu trúc của một đề xuất dự án kỹ thuật.<br>&emsp; + Tìm hiểu các phần về bài toán, mục tiêu, phạm vi, kiến trúc sơ bộ, kế hoạch thực hiện, ước tính chi phí và rủi ro.<br>&emsp; + Nghiên cứu yêu cầu đối với sơ đồ kiến trúc AWS và các tiêu chí Well-Architected, đặc biệt chú ý đến Security.<br>- Tìm hiểu bài toán đăng ký sự kiện trực tuyến như một hướng đề tài.<br>&emsp; + Xem xét nhu cầu của người tham gia và quản trị viên về tìm sự kiện, đăng ký, tạo sự kiện và quản lý trạng thái đăng ký.<br>&emsp; + Xác định đăng ký đồng thời và giới hạn sức chứa là các vấn đề cần thiết kế thêm. | 30/09/2026 | 30/09/2026 | [Yêu cầu FCAJ workshop](https://hcm-rules.awsfcaj.com/3-project/); [AWS Well-Architected](https://aws.amazon.com/architecture/well-architected/) |
| 6 | - Nghiên cứu kiến trúc serverless tối giản cho hướng đề tài đăng ký sự kiện.<br>&emsp; + Tìm hiểu vai trò và luồng kết nối giữa Amazon S3, Amazon API Gateway, AWS Lambda và Amazon DynamoDB.<br>&emsp; + Cân nhắc Amazon CloudWatch để giám sát, AWS IAM để kiểm soát quyền truy cập và Terraform như công cụ hạ tầng tùy chọn.<br>- Xem xét các vấn đề kỹ thuật có thể ảnh hưởng đến kiến trúc.<br>&emsp; + Cân nhắc khả năng mở rộng, phân quyền, đăng ký đồng thời và cách tránh vượt quá sức chứa sự kiện.<br>- So sánh phạm vi serverless ban đầu với phương án dùng nhiều dịch vụ AWS hơn trong điều kiện ngân sách hạn chế.<br>&emsp; + Xem xét mức độ cần thiết của ECS/Fargate, Application Load Balancer, RDS, NAT Gateway, WAF, Secrets Manager, Route 53 và CloudFront ở giai đoạn đầu.<br>&emsp; + Tham khảo công cụ định giá AWS để chuẩn bị cho bước ước tính sau này, chưa xem số liệu chi phí là đã chốt. | 02/10/2026 | 02/10/2026 | [S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html); [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html); [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html); [DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html); [CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html); [IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html); [AWS Pricing Calculator](https://calculator.aws/) |

### Kết quả đạt được tuần 1:

* **Yêu cầu workshop:** Xác định các nội dung cần chuẩn bị cho đề xuất dự án: tổng quan bài toán và giải pháp, mục tiêu và phạm vi, vấn đề cần giải quyết, kiến trúc sơ bộ, kế hoạch và timeline, ước tính chi phí, rủi ro và phương án giảm thiểu. Khi tham khảo AWS Well-Architected, chú trọng Security cùng với Reliability, Performance Efficiency, Cost Optimization và Operational Excellence.
* **Hướng đề tài sơ bộ:** Xem xét Thiết kế và triển khai nền tảng đăng ký sự kiện Serverless có khả năng tự động mở rộng và tối ưu chi phí trên AWS như một đề tài dự kiến, chưa được phê duyệt. Các chức năng dự kiến gồm hiển thị danh sách sự kiện, cho người dùng đăng ký, cho quản trị viên tạo sự kiện và điều chỉnh trạng thái đăng ký. Đăng ký đồng thời và giới hạn sức chứa vẫn là các vấn đề cần thiết kế thêm.
* **Kiến trúc sơ bộ:** Xác định kiến trúc tối giản để tiếp tục đánh giá: frontend tĩnh trên Amazon S3 → Amazon API Gateway → AWS Lambda → Amazon DynamoDB. Amazon CloudWatch có thể hỗ trợ ghi log và giám sát, AWS IAM có thể quản lý quyền truy cập, còn Terraform vẫn là lựa chọn tùy ý. Khả năng mở rộng, phân quyền và tránh đăng ký vượt sức chứa vẫn cần nghiên cứu thêm.
* **Phạm vi và chi phí:** Ưu tiên tiếp tục nghiên cứu phương án serverless gọn nhẹ do ngân sách hạn chế. ECS/Fargate, Application Load Balancer, RDS, NAT Gateway, WAF, Secrets Manager, Route 53 và CloudFront được cân nhắc để ngoài phạm vi ban đầu; có thể bổ sung nếu yêu cầu sau này chứng minh cần thiết. Chưa hoàn thành dự toán chi phí chi tiết, triển khai hoặc đo đạc hệ thống.
