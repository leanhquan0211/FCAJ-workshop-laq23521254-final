---
title: "Tuần 5: Thiết kế lại giao diện và tùy chỉnh hiển thị"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.5. </b> "
---

### Mục tiêu tuần 5:

* Thiết kế lại bố cục và thống nhất cách hiển thị trên các màn hình Frontend.
* Bổ sung tùy chỉnh giao diện, ghi nhớ và khôi phục lựa chọn của người dùng.
* Cải thiện điều hướng, thao tác bằng bàn phím và trải nghiệm trên màn hình nhỏ.
* Kiểm tra giao diện, cập nhật tài liệu thiết kế và hoàn thiện bàn giao.

### Các công việc cần triển khai trong tuần này:

| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 4 | - Rà soát giao diện hiện có và cập nhật hệ thiết kế theo ảnh tham chiếu.<br>&emsp; + Thống nhất màu sắc, kiểu chữ, chất liệu kính và các thiết lập hiển thị dùng chung.<br>- Tổ chức lại trang danh sách sự kiện và khung điều hướng.<br>&emsp; + Chuyển sang header ngang, giữ menu theo vai trò và trình bày danh sách quản trị, vé cá nhân bằng Card grid.<br>- Thiết kế lại màn hình đăng nhập, đăng ký với phần giới thiệu và form tách biệt, phù hợp desktop và mobile.<br>- Xây dựng logo, icon và đồ họa SVG nhiều lớp; bổ sung cánh hoa nền, chuyển động trang trí và chất liệu Liquid Glass cho các bề mặt. | 28/10/2026 | 28/10/2026 | [MDN: đồ họa SVG](https://developer.mozilla.org/en-US/docs/Web/SVG); [MDN: hiệu ứng kính](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter) |
| 6 | - Hoàn thiện bộ điều khiển sáng/tối, trong suốt, neon, bóng nổi, sắc màu và bo góc.<br>&emsp; + Bổ sung bảng tùy chỉnh gọn trên mobile, bộ mặc định, lưu lựa chọn và nút khôi phục màu.<br>- Cải thiện hiệu ứng chuyển trang, cuộn đến danh sách và thao tác chọn danh mục kết hợp bộ lọc.<br>- Điều chỉnh dropdown ở chế độ tối, tương phản chữ, thao tác bàn phím, focus và chế độ giảm chuyển động.<br>- Kiểm tra bố cục, các điều khiển và khả năng giữ lựa chọn sau tải lại trên hai theme.<br>&emsp; + Rà soát build/lint và kiểm tra trình duyệt bằng phản hồi mô phỏng; cập nhật tài liệu thiết kế, hướng dẫn và bàn giao thay đổi Frontend. | 30/10/2026 | 30/10/2026 | [MDN: lưu tùy chọn trong trình duyệt](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage); [MDN: giảm chuyển động](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion); [MDN: cuộn đến nội dung](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) |

### Kết quả đạt được tuần 5:

* **Bố cục và điều hướng:** Trang sự kiện có phần giới thiệu, danh mục, bộ lọc và danh sách Card; khung ứng dụng dùng header ngang với menu theo vai trò. Danh sách quản trị và vé cá nhân chuyển sang Card grid. Màn đăng nhập, đăng ký có phần giới thiệu riêng và form kính, bố trí phù hợp desktop và mobile.
* **Hệ thiết kế và đồ họa:** Chất liệu Liquid Glass, màu sắc và kiểu chữ được áp dụng thống nhất. Có logo hoa, đồ họa quạt, cánh hoa và icon SVG mô phỏng chiều sâu; lớp trang trí nằm sau nội dung và không cản thao tác.
* **Tùy chỉnh hiển thị:** Có bộ điều khiển sáng/tối và năm thuộc tính hiển thị, nhớ lựa chọn theo trình duyệt và khôi phục trước khi hiển thị trang. Mặc định mới là giao diện sáng, trong suốt 90%, neon 45%, bóng nổi 35%, sắc màu 24° và bo góc 0%; lựa chọn đã lưu được giữ lại. Nút khôi phục màu chỉ đặt lại sắc màu.
* **Tương tác và khả năng truy cập:** Chuyển trang và cuộn đến kết quả mượt hơn; chọn danh mục đồng bộ với bộ lọc. Dropdown dễ đọc ở hai theme; bảng tùy chỉnh mobile, menu và điều khiển hỗ trợ bàn phím, Escape và trả focus. Chế độ giảm chuyển động dừng hiệu ứng trang trí, chuyển trang và cuộn mượt.
* **Kiểm tra giao diện:** Báo cáo đã có ghi nhận build thành công, lint không có lỗi và còn hai cảnh báo Fast Refresh cũ. Các lượt kiểm tra bố cục, tùy chỉnh, lưu lựa chọn, bàn phím và giảm chuyển động dùng phản hồi mô phỏng trong trình duyệt riêng, không ghi database; chưa thay thế kiểm thử tích hợp Backend thật. Kiểm tra tương phản chỉ bao phủ các cặp màu đã thử, chưa phải chứng nhận toàn diện.
* **Tài liệu và bàn giao:** Đã cập nhật tài liệu thiết kế, cấu hình và bằng chứng kiểm tra; hợp nhất và đẩy thay đổi Frontend lên nhánh chung. Các luồng đăng nhập, đặt vé và quản trị sẵn có được giữ; chưa triển khai AWS.


