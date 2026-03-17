import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    /* ================= EN ================= */
    en: {
      translation: {
        /* ===== COMMON ===== */
        common: {
          upload: "Upload file",
          choose_file: "Choose file",
          analyze: "Analyze report",
          result: "Result",
          history: "History",
          download: "Download",
        },

        /* ===== AUTH ===== */
        auth: {
          email:"Email",
          password:"Password",
          welcome: "Password",
          register_new: "Create new account",
          processing: "Processing...",
          no_account: "Don't have an account?",
          has_account: "Already have an account?",
          register_now: "Register now",
          back_home: "Back to Home",
          or_continue: "Or continue with",
          login: "Login",
          login_required: "Please login to use this feature",
          login_now: "Login now",
          logout: "Logout",
        },

          /* ===== HOME ===== */
        home: {
          welcome_title: "Welcome to AI Finance",
          welcome_description: "Login to experience intelligent financial analysis with AI",
          feature_analysis: "Smart Analysis",
          feature_analysis_desc: "AI analyzes financial data in seconds",
          feature_secure: "Absolute Security",
          feature_secure_desc: "Your data is encrypted and protected",
          feature_fast: "Fast Results",
          feature_fast_desc: "Get detailed reports instantly",
          ready_to_start: "Ready to start?",
          login_to_continue: "Login to continue using premium features",
          benefit_1: "📈 In-depth financial data analysis",
          benefit_2: "💡 Smart investment suggestions",
          benefit_3: "📊 Detailed, easy-to-understand reports",
          benefit_4: "🔄 Sync data anytime, anywhere",
          login_now: "Login now",
          login_note: "Free & No credit card required",
          ssl_badge: "SSL Security",
          uptime_badge: "99.9% Uptime",
          support_badge: "24/7 Support",
          welcome_back: "Welcome back!",
          upload_prompt: "Upload your financial file to start analysis",
          tip_title: "💡 Pro tip",
          tip_description: "Excel file should have columns: Revenue, Expenses, Profit, Time",
          support_title: "📌 Support",
          support_description: "Chat with AI Chatbot for 24/7 assistance",
        },
        /* ===== UPLOAD ===== */
        upload: {
          title: "Upload file",
          hint: "Drag & drop financial report here or click to choose file",
          analyzing: "Analyzing...",
        },

        /* ===== RESULT ===== */
        result: {
          empty: "AI has not analyzed any report yet",
          empty_hint: "Upload a file and click Analyze report",
          completed: "AI Analysis Complete",
        },

        /* ===== FOOTER ===== */
        footer: {
          desc:
            "AI-powered platform for analyzing financial reports, extracting insights, risks, and growth opportunities.",
          product: "Product",
          upload: "Upload Report",
          analysis: "AI Analysis",
          history: "History",
          legal: "Legal",
          terms: "Terms of Service",
          privacy: "Privacy Policy",
          contact: "Contact",
          copyright: "© 2026 AI Finance. All rights reserved.",
        },

        /* ===== PRIVACY ===== */
        privacy: {
          back: "Back to Home",
          title: "Privacy Policy",
          intro:
            "AI Finance respects your privacy. This policy explains how we collect, use, and protect your information.",

          collect_title: "1. Information We Collect",
          collect_items: [
            "Uploaded financial reports (PDF, Excel)",
            "Chatbot questions and interactions",
            "Basic usage analytics (non-personal)",
          ],

          use_title: "2. How We Use Your Data",
          use_items: [
            "Analyze financial reports using AI",
            "Provide insights, risk analysis, and recommendations",
            "Improve system performance and accuracy",
          ],

          protect_title: "3. Data Protection",
          protect_desc:
            "Uploaded files are processed securely and are not shared with third parties.",

          ai_title: "4. AI Disclaimer",
          ai_desc:
            "AI-generated insights are for informational purposes only and do not constitute financial advice.",

          change_title: "5. Changes to This Policy",
          change_desc:
            "We may update this policy from time to time. Continued use means acceptance.",
        },

        /* ===== TERMS ===== */
        terms: {
          back: "Back to Home",
          title: "Terms of Service",
          intro:
            "By accessing or using AI Finance, you agree to the following terms and conditions.",

          service_title: "1. Service Description",
          service_desc:
            "AI Finance provides AI-powered analysis of financial reports to support decision-making and learning purposes.",

          user_title: "2. User Responsibilities",
          user_items: [
            "You must own or have permission to upload the files",
            "You are responsible for how you use AI-generated insights",
            "You must not misuse or overload the system",
          ],

          advice_title: "3. No Financial Advice",
          advice_desc:
            "The platform does not provide professional financial, legal, or investment advice.",

          liability_title: "4. Limitation of Liability",
          liability_desc:
            "AI Finance is not liable for any direct or indirect loss.",

          termination_title: "5. Termination",
          termination_desc:
            "We reserve the right to suspend or terminate access if users violate these terms.",
        },
      },
    },

    /* ================= VI ================= */
    vi: {
      translation: {
        /* ===== COMMON ===== */
        common: {
          upload: "Tải file",
          choose_file: "Chọn file",
          analyze: "Phân tích báo cáo",
          result: "Kết quả",
          history: "Lịch sử",
          download: "Tải về",
        },

        /* ===== AUTH ===== */
        auth: {
          email:"Email",
          password:"Mật khẩu",
          welcome: "Chào mừng",
          register_new: "Tạo tài khoản mới",
          processing: "Đang xử lý...",
          no_account: "Chưa có tài khoản?",
          has_account: "Đã có tài khoản?",
          register_now: "Đăng ký ngay",
          back_home: "Quay về trang chủ",
          or_continue: "Hoặc tiếp tục với",
          login: "Đăng nhập",
          login_required: "Vui lòng đăng nhập để sử dụng tính năng này",
          login_now: "Đăng nhập ngay",
          logout: "Đăng xuất",
        },

         /* ===== HOME ===== */
        home: {
          welcome_title: "Chào mừng đến với AI Finance",
          welcome_description: "Đăng nhập để trải nghiệm phân tích tài chính thông minh với AI",
          feature_analysis: "Phân tích thông minh",
          feature_analysis_desc: "AI phân tích dữ liệu tài chính trong vài giây",
          feature_secure: "Bảo mật tuyệt đối",
          feature_secure_desc: "Dữ liệu của bạn được mã hóa và bảo vệ",
          feature_fast: "Kết quả nhanh chóng",
          feature_fast_desc: "Nhận báo cáo chi tiết ngay lập tức",
          ready_to_start: "Sẵn sàng bắt đầu?",
          login_to_continue: "Đăng nhập để tiếp tục sử dụng các tính năng cao cấp",
          benefit_1: "📈 Phân tích dữ liệu tài chính chuyên sâu",
          benefit_2: "💡 Gợi ý đầu tư thông minh",
          benefit_3: "📊 Báo cáo chi tiết, dễ hiểu",
          benefit_4: "🔄 Đồng bộ dữ liệu mọi lúc mọi nơi",
          login_now: "Đăng nhập ngay",
          login_note: "Miễn phí & Không cần thẻ tín dụng",
          ssl_badge: "SSL Bảo mật",
          uptime_badge: "99.9% Uptime",
          support_badge: "24/7 Hỗ trợ",
          welcome_back: "Chào mừng trở lại!",
          upload_prompt: "Tải lên file tài chính để bắt đầu phân tích",
          tip_title: "💡 Mẹo nhỏ",
          tip_description: "File Excel nên có các cột: Doanh thu, Chi phí, Lợi nhuận, Thời gian",
          support_title: "📌 Hỗ trợ",
          support_description: "Nhắn tin với Chatbot AI để được trợ giúp 24/7",
        },


        /* ===== UPLOAD ===== */
        upload: {
          title: "Tải file",
          hint: "Kéo thả báo cáo tài chính vào đây hoặc bấm để chọn file",
          analyzing: "Đang phân tích...",
        },

        /* ===== RESULT ===== */
        result: {
          empty: "AI chưa phân tích báo cáo nào",
          empty_hint: "Upload file và bấm Phân tích báo cáo",
          completed: "AI đã phân tích xong",
        },

        /* ===== FOOTER ===== */
        footer: {
          desc:
            "Nền tảng AI phân tích báo cáo tài chính, trích xuất insight, rủi ro và cơ hội tăng trưởng.",
          product: "Sản phẩm",
          upload: "Tải báo cáo",
          analysis: "Phân tích AI",
          history: "Lịch sử",
          legal: "Pháp lý",
          terms: "Điều khoản dịch vụ",
          privacy: "Chính sách bảo mật",
          contact: "Liên hệ",
          copyright: "© 2026 AI Finance. Đã đăng ký bản quyền.",
        },

        /* ===== PRIVACY ===== */
        privacy: {
          back: "Quay về trang chủ",
          title: "Chính sách bảo mật",
          intro:
            "AI Finance tôn trọng quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi thu thập và bảo vệ dữ liệu.",

          collect_title: "1. Thông tin chúng tôi thu thập",
          collect_items: [
            "Báo cáo tài chính được tải lên (PDF, Excel)",
            "Câu hỏi và tương tác với chatbot",
            "Dữ liệu thống kê sử dụng cơ bản",
          ],

          use_title: "2. Cách chúng tôi sử dụng dữ liệu",
          use_items: [
            "Phân tích báo cáo tài chính bằng AI",
            "Cung cấp insight và phân tích rủi ro",
            "Cải thiện hiệu suất hệ thống",
          ],

          protect_title: "3. Bảo mật dữ liệu",
          protect_desc:
            "File tải lên được xử lý an toàn và không chia sẻ với bên thứ ba.",

          ai_title: "4. Tuyên bố AI",
          ai_desc:
            "Kết quả AI chỉ mang tính tham khảo, không phải lời khuyên tài chính.",

          change_title: "5. Thay đổi chính sách",
          change_desc:
            "Chính sách có thể được cập nhật theo thời gian.",
        },

        /* ===== TERMS ===== */
        terms: {
          back: "Quay về trang chủ",
          title: "Điều khoản dịch vụ",
          intro:
            "Khi truy cập hoặc sử dụng AI Finance, bạn đồng ý với các điều khoản và điều kiện sau.",

          service_title: "1. Mô tả dịch vụ",
          service_desc:
            "AI Finance cung cấp phân tích báo cáo tài chính bằng AI nhằm hỗ trợ học tập và ra quyết định.",

          user_title: "2. Trách nhiệm người dùng",
          user_items: [
            "Bạn phải sở hữu hoặc có quyền tải lên các tệp",
            "Bạn chịu trách nhiệm với cách sử dụng kết quả AI",
            "Không được lạm dụng hoặc gây quá tải hệ thống",
          ],

          advice_title: "3. Không phải tư vấn tài chính",
          advice_desc:
            "Nền tảng không cung cấp tư vấn tài chính, pháp lý hay đầu tư.",

          liability_title: "4. Giới hạn trách nhiệm",
          liability_desc:
            "AI Finance không chịu trách nhiệm cho bất kỳ tổn thất nào.",

          termination_title: "5. Chấm dứt dịch vụ",
          termination_desc:
            "Chúng tôi có quyền tạm ngưng hoặc chấm dứt truy cập nếu vi phạm.",
        },
      },
    },
  },

  lng: "vi",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
