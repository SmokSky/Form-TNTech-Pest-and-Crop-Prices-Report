# Form báo cáo dịch hại & giá cả (TN Tech)

Trang tĩnh (GitHub Pages): wizard mobile-first, Tailwind CSS; lưu báo cáo qua **Google Apps Script** vào **Google Sheet**.

## Chạy cục bộ

Cần HTTP server (tránh lỗi module/CORS khi mở file trực tiếp):

```bash
cd /path/to/Form-TNTech-Pest-and-Crop-Prices-Report
python3 -m http.server 8080
```

Mở `http://localhost:8080`.

## Cấu hình

1. **Google Sheet + Apps Script (tự tạo ngoài repo):** Tạo spreadsheet, mở **Extensions → Apps Script**, dán mã nhận POST (JSON), đặt Script properties `SUBMIT_TOKEN` và `SPREADSHEET_ID`, **Deploy → Web app** (Execute as: Me; quyền truy cập theo nhu cầu). Script nên ghi một dòng mỗi lần POST và có thể tạo hàng tiêu đề khi Sheet còn trống hoặc đang nâng cấp từ bảng cũ (**A1 = `timestamp`**).
2. Mở [assets/config.js](assets/config.js), điền `WEB_APP_URL` và `SUBMIT_TOKEN` (khớp Script properties).
3. **Đăng nhập Google:** [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials → **Create credentials** → OAuth client ID → **Web application**. Thêm **Authorized JavaScript origins** (ví dụ `http://localhost:8080`, `https://YOUR_USER.github.io`). Dán **Client ID** vào `GOOGLE_CLIENT_ID` trong `assets/config.js`.

Tham chiếu mẫu: [assets/config.example.js](assets/config.example.js).

**Lưu ý Sheet:** Thường dùng ~15 cột tiếng Việt (thời gian, khu vực, người báo cáo, cờ nhóm cây, khối chi tiết lúa/rau/trái, chi tiết bổ sung, cột JSON sao lưu). Nếu bảng cũ không khớp, tạo tab mới hoặc chỉnh tiêu đề cho đúng script của bạn.

## Kiểm tra tích hợp (QA)

1. **curl** — `POST` tới `WEB_APP_URL` với `Content-Type: text/plain;charset=utf-8` và body JSON `{ "token", "khu_vuc", "reporter_email", "reporter_name", "report" }`; mong đợi `{"ok":true}` và một dòng mới trên Sheet.
2. **Trình duyệt** — hoàn tất wizard, xác nhận thông báo thành công và dòng mới.
3. **Thiết bị thật** — thử một tay, ngoài trời, mạng 3G/4G; nút đủ lớn (tối thiểu ~48px) và thông báo lỗi đọc được.
4. **Lỗi có chủ đích** — sai token: thông báo từ chối; tắt mạng: thông báo lỗi mạng/máy chủ.

## Cấu trúc repo

| Đường dẫn | Mô tả |
|-----------|--------|
| `index.html` | Trang chính + Tailwind CDN |
| `assets/app.js` | Luồng động: khu vực → **chọn nhóm cây** → ND nòng cốt → form chi tiết (năng suất; **giá / loại giá không bắt buộc**, mỗi dòng: loại giá và giá trên hai hàng riêng) → **Chi tiết bổ sung** → xác nhận; `report.version` = 8; `selected_groups`, `chi_tiet_bo_sung` |
| `assets/config.js` | URL Web App + token (điền sau deploy) |
