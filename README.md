# AWS Certified AI Practitioner Study Portal

Ứng dụng web tĩnh hỗ trợ học tập chứng chỉ AWS Certified AI Practitioner bao gồm 28 ghi chú ôn thi (Study Notes) và 7 đề thi thử (350 câu hỏi luyện tập) có lời giải chi tiết.

## Hướng dẫn chạy ứng dụng bằng Docker

Để chạy ứng dụng nhanh chóng bằng Docker mà không cần cài đặt gì thêm ở máy thật, bạn có thể thực hiện theo các bước dưới đây:

### 1. Build Docker Image
Chạy lệnh sau tại thư mục gốc của dự án để build image có tên `aws-ai-app`:
```bash
docker build -t aws-ai-app .
```

### 2. Khởi chạy Docker Container
Chạy container từ image vừa build, map cổng `3636` của máy thật vào cổng `80` của container Nginx:
```bash
docker run -d -p 3636:80 --name aws-ai-web aws-ai-app
```
Sau khi chạy thành công, bạn có thể truy cập ứng dụng tại địa chỉ: [http://localhost:3636](http://localhost:3636).

### 3. Dừng và Xóa Container
Khi không muốn chạy ứng dụng nữa, bạn có thể dừng và dọn dẹp container bằng tổ hợp lệnh:
```bash
docker stop aws-ai-web && docker rm aws-ai-web
```
