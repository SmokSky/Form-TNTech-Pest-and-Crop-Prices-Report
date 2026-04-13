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

1. Làm theo [gas/README.md](gas/README.md): tạo Sheet, Script properties (`SUBMIT_TOKEN`, `SPREADSHEET_ID`), deploy Web App.
2. Mở [assets/config.js](assets/config.js), điền `WEB_APP_URL` và `SUBMIT_TOKEN` (khớp Script properties).
3. **Đăng nhập Google:** [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials → **Create credentials** → OAuth client ID → **Web application**. Thêm **Authorized JavaScript origins** (ví dụ `http://localhost:8080`, `https://YOUR_USER.github.io`). Dán **Client ID** vào `GOOGLE_CLIENT_ID` trong `assets/config.js`.

Tham chiếu mẫu: [assets/config.example.js](assets/config.example.js).

**Lưu ý:** Hàng tiêu đề Sheet là bộ cột tiếng Việt (~15 cột, có cột JSON cuối) trong `FLAT_REPORT_HEADERS` — xem [docs/COLUMN_SCHEMA.md](docs/COLUMN_SCHEMA.md) và [gas/Code.gs](gas/Code.gs). Nếu đang dùng bảng cũ (**A1 = `timestamp`** hoặc cột `truong_khu_vuc`), script có thể ghi tiêu đề mới khi điều kiện nâng cấp được thỏa; nếu không, tạo tab mới hoặc chỉnh tay cho khớp.

## Tài liệu

- [docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md) — kế hoạch, kiến trúc, checklist.
- [docs/COLUMN_SCHEMA.md](docs/COLUMN_SCHEMA.md) — cột Sheet / CSV.
- Mẫu dữ liệu: [docs/Pest_and_Crop_Prices_Report_Sample.csv](docs/Pest_and_Crop_Prices_Report_Sample.csv).

## Kiểm tra tích hợp (QA)

1. **curl** — xem lệnh mẫu trong [gas/README.md](gas/README.md); mong đợi `{"ok":true}` và một dòng mới trên Sheet.
2. **Trình duyệt** — hoàn tất wizard, xác nhận thông báo thành công và dòng mới.
3. **Thiết bị thật** — thử một tay, ngoài trời, mạng 3G/4G; nút đủ lớn (tối thiểu ~48px) và thông báo lỗi đọc được.
4. **Lỗi có chủ đích** — sai token: thông báo từ chối; tắt mạng: thông báo lỗi mạng/máy chủ.

## Cấu trúc repo

| Đường dẫn | Mô tả |
|-----------|--------|
| `index.html` | Trang chính + Tailwind CDN |
| `assets/app.js` | Luồng động: khu vực → **chọn nhóm cây** → ND nòng cốt → form chi tiết (năng suất; **giá / loại giá không bắt buộc**, mỗi dòng: loại giá và giá trên hai hàng riêng) → **Chi tiết bổ sung** → xác nhận; `report.version` = 8; `selected_groups`, `chi_tiet_bo_sung` |
| `assets/config.js` | URL Web App + token (điền sau deploy) |
| `gas/Code.gs` | Dán vào Apps Script |
| `docs/` | Kế hoạch, schema, CSV mẫu |
