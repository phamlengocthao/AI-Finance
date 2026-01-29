# 📊 AI Financial Report Analyzer

Hệ thống web cho phép **upload báo cáo tài chính**, gửi lên **AI phân tích**, hiển thị kết quả trực quan và **lưu lịch sử phân tích theo từng người dùng**.

---

## 🚀 Công nghệ sử dụng

### Frontend

* **React**
* **Tailwind CSS**
* **React Router DOM**
* **Firebase Authentication**
* **i18next** (đa ngôn ngữ – có thể tắt nếu không dùng)

### Backend

* **Node.js (>= 18)**
* **Express.js**
* **Multer** (upload file)
* **Axios** (gọi AI API)
* **CORS**

### Database & Auth

* **Firebase Authentication** – đăng nhập người dùng
* **Firestore** – lưu lịch sử phân tích

---

## ✨ Tính năng chính

* 🔐 Đăng nhập / đăng xuất người dùng bằng Firebase
* 📤 Upload báo cáo tài chính (**PDF / Word / Excel**)
* 🤖 Gửi file lên Backend để AI phân tích
* 📊 Hiển thị kết quả phân tích trên giao diện
* 🕒 Lưu lịch sử phân tích theo từng user (Firestore)
* 📥 Download kết quả phân tích

---

## ⚙️ Yêu cầu môi trường

* **Node.js >= 18**
* **npm** hoặc **yarn**
* **Firebase project** đã bật:

  * Authentication
  * Firestore Database

---

## 📦 Cài đặt & Chạy project

### 1️⃣ Clone repository

```bash
git clone https://github.com/your-username/ai-financial-report-analyzer.git
cd ai-financial-report-analyzer
```

---

## 🖥️ Backend

### Cài đặt

```bash
cd backend
npm install
```

### Các package chính

* express
* cors
* multer
* axios

### Chạy backend

```bash
node server.js
```

👉 Backend chạy tại:

```
http://localhost:5000
```

---

## 🌐 Frontend

### Cài đặt

```bash
cd frontend
npm install
```

### Các package chính

* react
* react-router-dom
* firebase
* i18next
* tailwindcss

### Chạy frontend

```bash
npm run dev
```

👉 Frontend chạy tại:

```
http://localhost:5173
```

---

## 🔥 Firebase Configuration

Tạo file:

```bash
frontend/src/firebase.js
```

Ví dụ:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

⚠️ **Không push file firebase config thật lên GitHub** nếu là project private.

---

## 📂 Cấu trúc thư mục (tham khảo)

```
ai-financial-report-analyzer
│
├── backend
│   ├── server.js
│   ├── routes
│   └── services
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── firebase.js
│   │   └── App.jsx
│   └── tailwind.config.js
│
└── README.md
```

---

## 🧠 AI Model





✨ *Built for learning, demo & portfolio purposes.*
