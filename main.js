console.log("LANG SCRIPT LOADED");

const translations = {
  vn: {
    search: "Tìm kiếm",
    register: "Đăng Ký",
    login: "Đăng Nhập",

    welcome: "Chào mừng đến với",
    club: "Dream T Basketball Club",
    slogan:  "“NGHĨ LỚN - CHƠI LỚN”",
    join: "Tham gia CLB",

    home: "Trang Chủ",
    news: "Tin Tức",
    roadmap: "Lộ Trình",
    fee: "Học Phí",
    schedule: "Lịch Học",
    recruit: "Tuyển Dụng",
    contact: "Liên Hệ",

    features_title: "Vì sao chọn CLB chúng tôi?",
    feature1: "🏀 Huấn luyện bài bản theo lộ trình",
    feature2: "⏱ Lịch tập linh hoạt",
    feature3: "🎁 Quyền lợi & quà tặng thành viên",
    feature4: "🤖 AI Coach hỗ trợ 24/7",

    roadmap_title: "Lộ trình huấn luyện",
    beginner: "Beginner – Dành cho người mới bắt đầu",
    intermediate: "Intermediate – Nâng cao kỹ năng & chiến thuật",
    advanced: "Advanced – Huấn luyện thi đấu",

    news_title: "Tin tức & Hoạt động",
    news1: "🏀 Buổi tập cuối tuần sôi động",
    news2: "🎉 Mở lớp mới cho người mới",
    news3: "🏆 Tham gia giải phong trào"


  },

  en: {
    search: "Search",
    register: "Sign Up",
    login: "Sign In",

    welcome: "Welcome to",
    club: "Dream T Basketball Club",
    slogan: "\"THINK BIG – PLAY BIG\"",
    join: "Join the Club",

    home: "Home",
    news: "News",
    roadmap: "Training ",
    fee: "Tuition",
    schedule: "Schedule",
    recruit: "Careers",
    contact: "Contact",

    features_title: "Why choose our club?",
    feature1: "🏀 Structured training programs",
    feature2: "⏱ Flexible training schedule",
    feature3: "🎁 Member benefits & gifts",
    feature4: "🤖 AI Coach support 24/7",

    roadmap_title: "Training Roadmap",
    beginner: "Beginner – For newcomers",
    intermediate: "Intermediate – Skills & tactics improvement",
    advanced: "Advanced – Competitive training",

    news_title: "News & Activities",
    news1: "🏀 Exciting weekend training",
    news2: "🎉 New classes for beginners",
    news3: "🏆 Joining local tournaments"
  }
};

const langSwitch = document.getElementById("lang-switch");
const elements = document.querySelectorAll("[data-key]");

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

// load ngôn ngữ đã chọn
const savedLang = localStorage.getItem("lang") || "vn";
setLanguage(savedLang);
langSwitch.checked = savedLang === "en";

// gạt nút
langSwitch.addEventListener("change", () => {
  setLanguage(langSwitch.checked ? "en" : "vn");
});

// Tìm kiếm (Đơn giản) khi nhấn vào nút tìm kiếm hoặc nhấn Enter
document.querySelector('.search-btn').addEventListener('click', performSearch);
document.querySelector('.search').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        performSearch(); // Thực hiện tìm kiếm khi nhấn Enter
    }
});

function performSearch() {
    const searchText = document.querySelector('.search').value.toLowerCase(); // Lấy giá trị từ thanh tìm kiếm
    const allItems = document.querySelectorAll('.news-item, .feature, .roadmap-card'); // Tất cả các mục có thể tìm kiếm

    let found = false; // Biến để kiểm tra nếu có kết quả tìm thấy

    allItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchText)) {
            item.style.display = 'block'; // Hiện các mục có chứa từ khóa tìm kiếm
            if (!found) {
                item.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Cuộn đến mục đầu tiên tìm thấy
                found = true; // Đảm bảo chỉ cuộn một lần
            }
        } else {
            item.style.display = 'none'; // Ẩn các mục không chứa từ khóa
        }
    });

    // Thêm thông báo nếu không tìm thấy kết quả
    if (!found) {
        alert('Không có kết quả tìm kiếm!');
    }
}
// MENU MOBILE
const menuBtn = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.menu-mobile');
const overlay = document.querySelector('.menu-overlay');

// Hàm đóng/mở menu
function toggleMenu() {
  mobileMenu.classList.toggle('show');
  overlay.classList.toggle('active');
}

// Bấm vào 3 gạch
menuBtn.addEventListener('click', toggleMenu);

// Bấm vào vùng mờ (overlay) để tắt menu
overlay.addEventListener('click', toggleMenu);

// Bấm vào các link trong menu cũng tự đóng menu
document.querySelectorAll('.menu-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    overlay.classList.remove('active');
  });
});
// Đồng bộ ngôn ngữ giữa desktop và mobile
const langDesktop = document.getElementById("lang-switch");
const langMobile = document.getElementById("lang-switch-mobile");

function syncLanguage(e) {
    const isChecked = e.target.checked;
    langDesktop.checked = isChecked;
    langMobile.checked = isChecked;
    setLanguage(isChecked ? "en" : "vn");
}

langDesktop.addEventListener("change", syncLanguage);
langMobile.addEventListener("change", syncLanguage);
// Đóng menu khi chọn mục
document.querySelectorAll('.menu a, .mobile-extra button').forEach(el => {
  el.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});
