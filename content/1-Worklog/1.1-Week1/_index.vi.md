---
title: "Worklog Tuần 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---
{{% notice warning %}}
Tuần 1 ghi nhận quá trình tìm hiểu và định hướng đề tài sơ bộ. Đề tài, kiến trúc và phạm vi chưa được chốt hoặc triển khai.
{{% /notice %}}

### Mục tiêu tuần 1:

* Tìm hiểu yêu cầu AWS FCAJ workshop và xác định thông tin cần chuẩn bị cho đề xuất dự án.
* Xem xét một đề tài thực tế trên AWS, kiến trúc ban đầu và phạm vi phù hợp với ngân sách.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| — | **Công việc đã làm:** Xem xét yêu cầu workshop, gồm các phần của đề xuất, sơ đồ kiến trúc và hướng dẫn AWS Well-Architected.<br>**Kết quả:** Xác định các nội dung cần chuẩn bị: tổng quan bài toán và giải pháp, mục tiêu và phạm vi, vấn đề cần giải quyết, kiến trúc sơ bộ, kế hoạch và timeline, ước tính chi phí, rủi ro và phương án giảm thiểu. Ghi nhận Security là ưu tiên cùng với Reliability, Performance Efficiency, Cost Optimization và Operational Excellence. | — | — | [Yêu cầu FCAJ workshop](https://hcm-rules.awsfcaj.com/3-project/); [AWS Well-Architected](https://aws.amazon.com/architecture/well-architected/) |
| — | **Công việc đã làm:** Xem xét nền tảng đăng ký sự kiện trực tuyến như một hướng đề tài dự kiến.<br>**Kết quả:** Phác thảo phạm vi chức năng có thể gồm hiển thị danh sách sự kiện, cho người dùng đăng ký, cho quản trị viên tạo sự kiện và điều chỉnh trạng thái đăng ký. Xác định đăng ký đồng thời và giới hạn số người tham gia là các vấn đề cần nghiên cứu thêm. | — | — | [Yêu cầu FCAJ workshop](https://hcm-rules.awsfcaj.com/3-project/) |
| — | **Công việc đã làm:** Nghiên cứu kiến trúc serverless tối giản cho hướng đề tài này.<br>**Kết quả:** Cân nhắc frontend tĩnh trên Amazon S3 → Amazon API Gateway → AWS Lambda → Amazon DynamoDB; Amazon CloudWatch hỗ trợ ghi log và giám sát, AWS IAM kiểm soát quyền truy cập. Terraform vẫn là công cụ quản lý hạ tầng bằng mã có thể xem xét. Khả năng mở rộng, phân quyền và tránh đăng ký vượt sức chứa vẫn cần được thiết kế thêm. | — | — | [S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html); [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html); [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html); [DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html); [CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html); [IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) |
| — | **Công việc đã làm:** So sánh phạm vi ban đầu với phương án dùng nhiều dịch vụ hơn trong điều kiện ngân sách hạn chế.<br>**Kết quả:** Ưu tiên tiếp tục nghiên cứu phương án serverless gọn nhẹ. ECS/Fargate, Application Load Balancer, RDS, NAT Gateway, WAF, Secrets Manager, Route 53 và CloudFront được cân nhắc để ngoài phạm vi ban đầu; chỉ bổ sung nếu yêu cầu sau này chứng minh cần thiết. Chưa hoàn thành dự toán chi phí chi tiết. | — | — | [AWS Pricing Calculator](https://calculator.aws/) |

### Kết quả đạt được tuần 1:

* Hình thành **hướng đề tài sơ bộ, chưa được phê duyệt**: **Thiết kế và triển khai nền tảng đăng ký sự kiện Serverless có khả năng tự động mở rộng và tối ưu chi phí trên AWS**.
* Xác định các chức năng dự kiến và những vấn đề còn mở về đăng ký đồng thời, sức chứa sự kiện, bảo mật và khả năng mở rộng.
* Xác định kiến trúc serverless tối giản để tiếp tục đánh giá và ghi nhận chi phí là một yếu tố thiết kế. Chưa triển khai hoặc đo đạc tài nguyên AWS trong giai đoạn này.
