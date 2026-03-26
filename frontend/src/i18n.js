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
          welcome: "Welcome",
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
          // auth.privacy: "",
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
        /* ===== CHATBOT ===== */
        chatbot: {
          welcome_message: "Hello! I'm AI Finance Assistant. How can I help you with finances or using the app?",
          title: "AI Assistant",
          status: "Online • Response in seconds",
          error_message: "Sorry, I'm having connection issues. Please try again later.",
          suggestions_title: "Quick suggestions:",
          input_placeholder: "Type your question...",
          footer_note: "AI may make mistakes. Verify important information.",
          loading: "Loading...",
          load_more:"Load more",
          today: "Today",
        },
        /* ===== PRIVACY ===== */
        privacy: {
          back: "Back to Home",
          last_updated: "Last updated",
          title: "Privacy Policy",
          intro: "AI Finance respects your privacy. This policy explains how we collect, use, and protect your information.",
          quick_nav: "Quick Navigation",
          "collect_title": "1. Information We Collect",
          "collect_desc": "We collect the following information to provide the best service:",
          "collect_items": [
            "Uploaded financial reports (PDF, Excel, CSV formats)",
            "Chatbot questions and interaction history",
            "Basic usage analytics (non-personal, anonymous data)",
            "Account information (email, name) when you register",
            "Device information and browser type for optimization"
          ],
          "use_title": "2. How We Use Your Data",
          "use_desc": "Your information is used to:",
          "use_items": [
            "Analyze financial reports using AI technology",
            "Provide insights, risk analysis, and personalized recommendations",
            "Improve system performance and accuracy",
            "Enhance user experience and interface",
            "Conduct research and development for new features"
          ],
          "protect_title": "3. Data Protection & Security",
          "protect_desc": "We implement advanced security measures to protect your data:",
          "encryption_title": "End-to-End Encryption",
          "encryption_desc": "Data is encrypted from your device to our servers using SSL 256-bit technology",
          "backup_title": "Regular Backups",
          "backup_desc": "Daily data backups to ensure safety and quick recovery",
          "access_title": "Access Control",
          "access_desc": "Only authorized personnel can access your data with strict protocols",
          "monitor_title": "24/7 Monitoring",
          "monitor_desc": "Continuous system monitoring to detect and prevent unauthorized access",
          "ai_title": "4. AI & Data Processing",
          "ai_desc": "Our AI systems process your financial data to generate insights and recommendations. All processing is automated and designed to maintain your privacy.",
          "ai_note": "AI processes only anonymized data and does not store personal information",
          "change_title": "5. Changes to This Policy",
          "change_desc": "We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any material changes via email or through our platform.",
          "change_notice": "We will notify you when important updates are available via email.",
          "contact_title": "Have questions about privacy?",
          "contact_desc": "Contact us for any questions regarding your privacy and data protection",
          "rights": "All rights reserved."  
        },

        /* ===== TERMS ===== */
        terms: {
          back: "Back to Home",
          effective_date: "Effective Date",
          title: "Terms of Service",
          intro:
            "By accessing or using AI Finance, you agree to the following terms and conditions.",
          quick_nav: "Quick Navigation",

          // Section 1: Service Description
          service_title: "1. Service Description",
          service_desc: "AI Finance provides AI-powered analysis of financial reports to support decision-making and learning purposes.",
          service_feature1: "AI Analysis",
          service_feature1_desc: "Intelligent financial data processing with advanced AI technology",
          service_feature2: "Data Security",
          service_feature2_desc: "End-to-end SSL 256-bit encryption for all transactions",
          // Section 2: User Responsibilities
          user_title: "2. User Responsibilities",
          user_desc: "When using the service, you agree to:",
          user_items: [
            "You must own or have permission to upload the files",
            "You are responsible for how you use AI-generated insights",
            "You must not misuse or overload the system",
            "You agree to provide accurate and truthful information",
            "You are responsible for maintaining account security"
          ],
          // Section 3: AI Advice Disclaimer
          advice_title: "3. No Financial Advice",
          advice_desc: "The platform does not provide professional financial, legal, or investment advice. All analyses and recommendations generated by AI are for informational and educational purposes only.",
          advice_note: "Always consult with qualified financial professionals before making investment decisions",
          // Section 4: Limitation of Liability
          liability_title: "4. Limitation of Liability",
          liability_desc: "AI Finance is not liable for any direct or indirect loss, damages, or costs arising from the use of our services. This includes but is not limited to:",
          liability_accuracy: "Data Accuracy",
          liability_accuracy_desc: "No responsibility for investment decisions based on AI analysis",
          liability_service: "Service Interruptions",
          liability_service_desc: "Regular maintenance may cause temporary service interruptions",
          liability_security: "Information Security",
          liability_security_desc: "Committed to data protection but not responsible for third-party attacks",
          // Section 5: Termination
          termination_title: "5. Termination",
          termination_desc: "We reserve the right to suspend or terminate access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
          termination_reasons: "Termination scenarios include:",
          termination_reason1: "Violation of terms of service",
          termination_reason2: "Inactivity for 12 consecutive months",
          termination_reason3: "Request from legal authorities",
          termination_reason4: "Discontinuation of service",
          // Acceptance Section
          acceptance_title: "By continuing to use the service",
          acceptance_desc: "You acknowledge that you have read, understood, and agree to be bound by all the above terms and conditions.",
          back_to_home: "Back to Home",
          rights: "All rights reserved.",

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

         /* ===== CHATBOT ===== */
         chatbot: {
          welcome_message: "Xin chào! Tôi là trợ lý AI của AI Finance. Tôi có thể giúp gì về tài chính hoặc cách dùng app?",
          title: "AI Assistant",
          status: "Online • Trả lời trong vài giây",
          error_message: "Xin lỗi, tôi đang gặp sự cố kết nối. Vui lòng thử lại sau.",
          suggestions_title: "Gợi ý nhanh:",
          input_placeholder: "Nhập câu hỏi của bạn...",
          footer_note: "AI có thể mắc lỗi. Hãy kiểm tra thông tin quan trọng.",
          loading: "Đang tải...",
          load_more:"Tải thêm",
          today: "Hôm nay",
        },
        /* ===== PRIVACY ===== */
        privacy: {
            "back": "Quay lại trang chủ",
            "last_updated": "Cập nhật lần cuối",
            "title": "Chính sách bảo mật",
            "intro": "AI Finance tôn trọng quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn.",
            "quick_nav": "Nội dung chính",
            "collect_title": "1. Thông tin chúng tôi thu thập",
            "collect_desc": "Chúng tôi thu thập các thông tin sau để cung cấp dịch vụ tốt nhất:",
            "collect_items": [
              "Báo cáo tài chính được tải lên (định dạng PDF, Excel, CSV)",
              "Câu hỏi và lịch sử tương tác với chatbot",
              "Dữ liệu phân tích sử dụng cơ bản (ẩn danh, không cá nhân hóa)",
              "Thông tin tài khoản (email, tên) khi bạn đăng ký",
              "Thông tin thiết bị và loại trình duyệt để tối ưu hóa"
            ],
            "use_title": "2. Cách chúng tôi sử dụng dữ liệu của bạn",
            "use_desc": "Thông tin của bạn được sử dụng để:",
            "use_items": [
              "Phân tích báo cáo tài chính bằng công nghệ AI",
              "Cung cấp thông tin chi tiết, phân tích rủi ro và đề xuất cá nhân hóa",
              "Cải thiện hiệu suất và độ chính xác của hệ thống",
              "Nâng cao trải nghiệm và giao diện người dùng",
              "Nghiên cứu và phát triển các tính năng mới"
            ],
            "protect_title": "3. Bảo vệ dữ liệu & An ninh",
            "protect_desc": "Chúng tôi áp dụng các biện pháp bảo mật tiên tiến để bảo vệ dữ liệu của bạn:",
            "encryption_title": "Mã hóa đầu cuối",
            "encryption_desc": "Dữ liệu được mã hóa từ thiết bị của bạn đến máy chủ với công nghệ SSL 256-bit",
            "backup_title": "Sao lưu định kỳ",
            "backup_desc": "Sao lưu dữ liệu hàng ngày để đảm bảo an toàn và phục hồi nhanh chóng",
            "access_title": "Kiểm soát truy cập",
            "access_desc": "Chỉ nhân viên được ủy quyền mới có thể truy cập dữ liệu của bạn với quy trình nghiêm ngặt",
            "monitor_title": "Giám sát 24/7",
            "monitor_desc": "Giám sát hệ thống liên tục để phát hiện và ngăn chặn truy cập trái phép",
            "ai_title": "4. AI & Xử lý dữ liệu",
            "ai_desc": "Hệ thống AI của chúng tôi xử lý dữ liệu tài chính của bạn để tạo ra thông tin chi tiết và đề xuất. Tất cả quá trình xử lý đều tự động và được thiết kế để bảo vệ quyền riêng tư của bạn.",
            "ai_note": "AI chỉ xử lý dữ liệu ẩn danh, không lưu trữ thông tin cá nhân",
            "change_title": "5. Thay đổi chính sách",
            "change_desc": "Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian để phản ánh những thay đổi trong thực tiễn của chúng tôi hoặc vì lý do pháp lý. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi quan trọng nào qua email hoặc qua nền tảng của chúng tôi.",
            "change_notice": "Chúng tôi sẽ thông báo khi có cập nhật quan trọng qua email.",
            "contact_title": "Có thắc mắc về quyền riêng tư?",
            "contact_desc": "Liên hệ với chúng tôi để được giải đáp về quyền riêng tư và bảo vệ dữ liệu của bạn",
            "rights": "Đã đăng ký bản quyền."
          },

        /* ===== TERMS ===== */
        terms: {
          back: "Quay lại trang chủ",
          effective_date: "Có hiệu lực từ",
          title: "Điều khoản sử dụng",
          intro: "Bằng việc truy cập hoặc sử dụng AI Finance, bạn đồng ý với các điều khoản và điều kiện sau đây.",
          quick_nav: "Điều khoản chính",
          // Section 1: Service Description
          service_title: "1. Mô tả dịch vụ",
          service_desc: "AI Finance cung cấp dịch vụ phân tích báo cáo tài chính bằng trí tuệ nhân tạo để hỗ trợ ra quyết định và phục vụ mục đích học tập.",
          service_feature1: "Phân tích AI",
          service_feature1_desc: "Xử lý dữ liệu tài chính thông minh với công nghệ AI tiên tiến",
          service_feature2: "Bảo mật dữ liệu",
          service_feature2_desc: "Mã hóa đầu cuối SSL 256-bit cho mọi giao dịch",
          // Section 2: User Responsibilities
          user_title: "2. Trách nhiệm người dùng",
          user_desc: "Khi sử dụng dịch vụ, bạn đồng ý:",
          user_items: [
            "Bạn phải sở hữu hoặc được phép tải lên các tệp tin",
            "Bạn chịu trách nhiệm về cách sử dụng các phân tích từ AI",
            "Bạn không được lạm dụng hoặc làm quá tải hệ thống",
            "Bạn đồng ý cung cấp thông tin chính xác và trung thực",
            "Bạn chịu trách nhiệm duy trì bảo mật tài khoản"
          ],
          // Section 3: AI Advice Disclaimer
          advice_title: "3. Không phải tư vấn tài chính",
          advice_desc: "Nền tảng không cung cấp tư vấn tài chính, pháp lý hoặc đầu tư chuyên nghiệp. Tất cả các phân tích và đề xuất do AI tạo ra chỉ nhằm mục đích cung cấp thông tin và học tập.",
          advice_note: "Luôn tham khảo ý kiến của chuyên gia tài chính có trình độ trước khi đưa ra quyết định đầu tư",
          // Section 4: Limitation of Liability
          liability_title: "4. Giới hạn trách nhiệm",
          liability_desc: "AI Finance không chịu trách nhiệm cho bất kỳ tổn thất trực tiếp, gián tiếp hoặc chi phí nào phát sinh từ việc sử dụng dịch vụ của chúng tôi. Bao gồm nhưng không giới hạn ở:",
          liability_accuracy: "Độ chính xác của dữ liệu",
          liability_accuracy_desc: "Không chịu trách nhiệm cho quyết định đầu tư dựa trên phân tích AI",
          liability_service: "Gián đoạn dịch vụ",
          liability_service_desc: "Bảo trì định kỳ có thể gây gián đoạn dịch vụ tạm thời",
          liability_security: "Bảo mật thông tin",
          liability_security_desc: "Cam kết bảo vệ dữ liệu nhưng không chịu trách nhiệm cho các cuộc tấn công từ bên thứ ba",
          // Section 5: Termination
          termination_title: "5. Chấm dứt hợp đồng",
          termination_desc: "Chúng tôi có quyền đình chỉ hoặc chấm dứt quyền truy cập vào dịch vụ ngay lập tức, mà không cần thông báo trước hoặc chịu trách nhiệm, vì bất kỳ lý do gì, bao gồm nhưng không giới hạn nếu bạn vi phạm Điều khoản.",
          termination_reasons: "Các trường hợp chấm dứt bao gồm:",
          termination_reason1: "Vi phạm điều khoản sử dụng",
          termination_reason2: "Không hoạt động trong 12 tháng liên tiếp",
          termination_reason3: "Theo yêu cầu của cơ quan pháp luật",
          termination_reason4: "Ngừng cung cấp dịch vụ",
          // Acceptance Section
          acceptance_title: "Bằng việc tiếp tục sử dụng dịch vụ",
          acceptance_desc: "Bạn xác nhận đã đọc, hiểu và đồng ý tuân thủ tất cả các điều khoản và điều kiện nêu trên.",
          back_to_home: "Quay lại trang chủ",
          rights: "Bản quyền đã đăng ký.",
        },
      },
    },
  },

  lng: "vi",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
