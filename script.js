// Language switching functionality
let currentLanguage = 'en';

const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'Experience': 'Experience',
        'Skills': 'Skills',
        'Education': 'Education',
        'Projects': 'Projects',
        'Contact': 'Contact',
        
        // Hero Section
        'Hi, I\'m Ason Yue': 'Hi, I\'m Ason Yue',
        'Quality Assurance Engineer': 'Quality Assurance Engineer',
        'A Quality Assurance Engineer is a bridge between the developer and the customer - Ason Yue': 'A Quality Assurance Engineer is a bridge between the developer and the customer - Ason Yue',
        'View My Work': 'View My Work',
        'Get In Touch': 'Get In Touch',
        
        // Section Titles
        'Work Experience': 'Work Experience',
        'Skills & Technologies': 'Skills & Technologies',
        'Featured Projects': 'Featured Projects',
        'Get In Touch': 'Get In Touch',
        'Education': 'Education',
        
        // Experience
        'Quality Assurance Engineer': 'Quality Assurance Engineer',
        'Cybersecurity Consultant': 'Cybersecurity Consultant',
        'Full Time': 'Full Time',
        'Intern': 'Intern',
        'August 2025 - Present': 'August 2025 - Present',
        'February 2025 - June 2025': 'February 2025 - June 2025',
        'Company:': 'Company:',
        'Duration:': 'Duration:',
        'Type:': 'Type:',
        'Conduct comprehensive regression testing to validate newly implemented product features': 'Conduct comprehensive regression testing to validate newly implemented product features',
        'Perform cross-platform testing across web and mobile devices to ensure consistent functionality': 'Perform cross-platform testing across web and mobile devices to ensure consistent functionality',
        'Execute API testing to verify data accuracy and response validation': 'Execute API testing to verify data accuracy and response validation',
        'Facilitated requirements interviews between senior consultants and clients across banking, restaurant, and manufacturing industries': 'Facilitated requirements interviews between senior consultants and clients across banking, restaurant, and manufacturing industries',
        'Created cybersecurity assessment reports and system architecture diagrams using Microsoft Office tools and Visio': 'Created cybersecurity assessment reports and system architecture diagrams using Microsoft Office tools and Visio',
        'Co-developed a Zero Trust security platform using Django and Python for enterprise clients': 'Co-developed a Zero Trust security platform using Django and Python for enterprise clients',
        
        // Skills
        'Testing Skills': 'Testing Skills',
        'Testing Tools': 'Testing Tools',
        'Programming Languages': 'Programming Languages',
        
        // Contact
        'Let\'s work together!': 'Let\'s work together!',
        'I\'m always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!': 'I\'m always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!',
        
        // Footer
        'All rights reserved.': 'All rights reserved.',

        // Education
        'Bachelor\'s degree, Computer Science': 'Bachelor\'s degree, Computer Science',
        'Sep 2021 - Jul 2025': 'Sep 2021 - Jul 2025',
        'GPA: 3.876': 'GPA: 3.876',
        'Tamkang University Academic Award 2025': 'Tamkang University Academic Award 2025',
        'Activities & Societies:': 'Activities & Societies:',
        'Curriculum Planner in Tamkang University Start Up Club 2025': 'Curriculum Planner in Tamkang University Start Up Club 2025',
        'Core Member in Tamkang University Google Developer Student Club (GDSC) 2022': 'Core Member in Tamkang University Google Developer Student Club (GDSC) 2022',
        'Exchange Program, Computer Science': 'Exchange Program, Computer Science',
        'Aug 2023 - May 2024': 'Aug 2023 - May 2024',
        'Excellent Recommendation Letter from Student Success Center': 'Excellent Recommendation Letter from Student Success Center',
        'Work Experience:': 'Work Experience:',
        'Language Tutor, Writing Tutor & Student Ambassador - Excelled in 3 roles simultaneously': 'Language Tutor, Writing Tutor & Student Ambassador - Excelled in 3 roles simultaneously',
        'Projects:': 'Projects:',
        'Weather Forecast Android APP - Developed during exchange program using Kotlin and Android Studio': 'Weather Forecast Android APP - Developed during exchange program using Kotlin and Android Studio',

        // Rewards & Certifications
        'Rewards & Certifications': 'Rewards & Certifications',
        'Tamkang University Academic Award': 'Tamkang University Academic Award',
        'Outstanding academic performance with highest grade average GPA 3.876': 'Outstanding academic performance with highest grade average GPA 3.876',
        'Recognition for consistent excellence throughout university career': 'Recognition for consistent excellence throughout university career',
        'Completion of International Policy': 'Completion of International Policy',
        'Mandatory study abroad program completion': 'Mandatory study abroad program completion',
        'Full English-taught curriculum requirement': 'Full English-taught curriculum requirement',
        'On-campus residence hall accommodation': 'On-campus residence hall accommodation',
        'Graduation Certification': 'Graduation Certification',
        'Bachelor\'s degree in Computer Science completed': 'Bachelor\'s degree in Computer Science completed',
        'Official university graduation recognition': 'Official university graduation recognition',
        'Startup Club Certification': 'Startup Club Certification',
        'Curriculum Planner in Tamkang University Start Up Club': 'Curriculum Planner in Tamkang University Start Up Club',
        'Leadership role in entrepreneurship and innovation activities': 'Leadership role in entrepreneurship and innovation activities',
        'Organized startup workshops and mentoring programs': 'Organized startup workshops and mentoring programs',
        'Google Developer Student Club Certification': 'Google Developer Student Club Certification',
        'Core Member in Tamkang University Google Developer Student Club (GDSC)': 'Core Member in Tamkang University Google Developer Student Club (GDSC)',
        'Organized tech workshops and coding events': 'Organized tech workshops and coding events',
        'Mentored fellow students in Google technologies': 'Mentored fellow students in Google technologies',
        'Systex Corporation Internship Certification': 'Systex Corporation Internship Certification',
        'Cybersecurity Consultant Intern at Systex Corporation': 'Cybersecurity Consultant Intern at Systex Corporation',
        'Co-developed Zero Trust security platform using Django and Python': 'Co-developed Zero Trust security platform using Django and Python',
        'Created cybersecurity assessment reports and system architecture diagrams': 'Created cybersecurity assessment reports and system architecture diagrams',
        'Temple University Student Success Center Recommendation': 'Temple University Student Success Center Recommendation',
        'Excellent recommendation letter from Temple University Student Success Center': 'Excellent recommendation letter from Temple University Student Success Center',
        'Recognized for outstanding work performance and dedication': 'Recognized for outstanding work performance and dedication',
        'Demonstrated exceptional leadership and teamwork skills': 'Demonstrated exceptional leadership and teamwork skills',
        'Temple University Exchange Program Completion': 'Temple University Exchange Program Completion',
        'Successfully completed exchange program at Temple University': 'Successfully completed exchange program at Temple University',
        'Computer Science exchange program from Aug 2023 to May 2024': 'Computer Science exchange program from Aug 2023 to May 2024',
        'International academic and cultural experience': 'International academic and cultural experience',
        'Google Cloud Certification': 'Google Cloud Certification',
        'Google Digital Talent Taiwan certification program': 'Google Digital Talent Taiwan certification program',
        'Cloud computing and infrastructure management skills': 'Cloud computing and infrastructure management skills',
        'Professional cloud platform expertise': 'Professional cloud platform expertise',
        'Google Digital Marketing Certification': 'Google Digital Marketing Certification',
        'Digital marketing strategies and analytics': 'Digital marketing strategies and analytics',
        'Online advertising and campaign management': 'Online advertising and campaign management',
        'AWS Workshop Certificate': 'AWS Workshop Certificate',
        'Amazon Web Services workshop completion': 'Amazon Web Services workshop completion',
        'Cloud computing and AWS platform training': 'Cloud computing and AWS platform training',
        'Hands-on experience with AWS services': 'Hands-on experience with AWS services',
        'NVIDIA Workshop Certificate': 'NVIDIA Workshop Certificate',
        'NVIDIA workshop completion': 'NVIDIA workshop completion',
        'GPU computing and AI/ML training': 'GPU computing and AI/ML training',
        'Advanced graphics and parallel processing': 'Advanced graphics and parallel processing',

        // Project 1: Zero-Trust Questionnaire System
        'Zero-Trust Questionnaire System': 'Zero-Trust Questionnaire System',
        'Developed online zero-trust questionnaire system during internship at Systex Corporation': 'Developed online zero-trust questionnaire system during internship at Systex Corporation',
        'Collaborated with local team to improve cybersecurity consultant efficiency': 'Collaborated with local team to improve cybersecurity consultant efficiency',
        'Built using Django and Python for enterprise zero-trust assessments': 'Built using Django and Python for enterprise zero-trust assessments',

        // Project 2: Weather Forecast Android APP
        'Weather Forecast Android APP': 'Weather Forecast Android APP',
        'Developed Android weather app during exchange program at Temple University (USA)': 'Developed Android weather app during exchange program at Temple University (USA)',
        'Collaborated with local students to create real-time weather reporting system': 'Collaborated with local students to create real-time weather reporting system',
        'Built using Kotlin and Android Studio for mobile weather forecasting': 'Built using Kotlin and Android Studio for mobile weather forecasting',

        // Project 3: The Simon Game Web Application
        'The Simon Game Web Application': 'The Simon Game Web Application',
        'Developed interactive memory game web app using 3-tier architecture': 'Developed interactive memory game web app using 3-tier architecture',
        'Built with HTML/CSS/JS frontend, PHP backend, and MySQL database': 'Built with HTML/CSS/JS frontend, PHP backend, and MySQL database',
        'Implemented sequence memory game with top 5 leaderboard system': 'Implemented sequence memory game with top 5 leaderboard system'
    },
    zh: {
        // Navigation
        'Home': '首頁',
        'Experience': '工作經驗',
        'Skills': '技能',
        'Education': '教育',
        'Rewards & Certifications': '獎項與證照',
        'Projects': '專案',
        'Contact': '聯絡',
        
        // Hero Section
        'Hi, I\'m Ason Yue': '你好，我是茹俊熙',
        'Quality Assurance Engineer': '品質保證工程師',
        'A Quality Assurance Engineer is a bridge between the developer and the customer - Ason Yue': '品質保證工程師是開發者與客戶之間的橋樑 - 茹俊熙',
        'View My Work': '查看我的作品',
        'Get In Touch': '聯絡我',
        
        // Section Titles
        'Work Experience': '工作經驗',
        'Skills & Technologies': '技能與技術',
        'Featured Projects': '精選專案',
        'Get In Touch': '聯絡我',
        'Education': '教育',
        'Rewards & Certifications': '獎項與證照',
        
        // Experience
        'Quality Assurance Engineer': '品質保證工程師',
        'Cybersecurity Consultant': '資安顧問',
        'Full Time': '全職',
        'Intern': '實習',
        'August 2025 - Present': '2025年8月 - 至今',
        'February 2025 - June 2025': '2025年2月 - 2025年6月',
        'Company:': '公司：',
        'Duration:': '期間：',
        'Type:': '類型：',
        'Show More Rewards': '顯示更多獎項',
        'Show Less Rewards': '顯示較少獎項',
        'Conduct comprehensive regression testing to validate newly implemented product features': '執行全面回歸測試以驗證新實施的產品功能',
        'Perform cross-platform testing across web and mobile devices to ensure consistent functionality': '跨平台測試網頁和行動裝置的一致性',
        'Execute API testing to verify data accuracy and response validation': '執行API測試以驗證資料準確性和回應驗證',
        'Facilitated requirements interviews between senior consultants and clients across banking, restaurant, and manufacturing industries': '促進與銀行、餐廳和製造業客戶的高級顧問之間的需求會議',
        'Created cybersecurity assessment reports and system architecture diagrams using Microsoft Office tools and Visio': '使用Microsoft Office工具和Visio創建網路安全評估報告和系統架構圖',
        'Co-developed a Zero Trust security platform using Django and Python for enterprise clients': '與企業客戶合作開發使用Django和Python的零信任安全平台',
        
        // Skills
        'Testing Skills': '測試技能',
        'Testing Tools': '測試工具',
        'Programming Languages': '程式語言',
        
        // Contact
        'Let\'s work together!': '讓我們一起合作！',
        'I\'m always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!': '我總是對新的機會和令人興奮的專案感興趣。無論您有問題或只是想打個招呼，請隨時與我聯繫！',
        
        // Footer
        'All rights reserved.': '版權所有。',

        // Education
        'Bachelor\'s degree, Computer Science': '學士學位，資訊工程學系',
        'Sep 2021 - Jul 2025': '2021年9月 - 2025年7月',
        'GPA: 3.876': 'GPA：3.876',
        'Tamkang University Academic Award 2025': '淡江大學學術獎 2025',
        'Activities & Societies:': '活動與社團：',
        'Curriculum Planner in Tamkang University Start Up Club 2025': '淡江大學創業社課程規劃者 2025',
        'Core Member in Tamkang University Google Developer Student Club (GDSC) 2022': '淡江大學Google開發者學生俱樂部核心成員 2022',
        'Exchange Program, Computer Science': '交換計畫，資訊工程學系',
        'Aug 2023 - May 2024': '2023年8月 - 2024年5月',
        'Excellent Recommendation Letter from Student Success Center': '學生成功中心優秀推薦信',
        'Work Experience:': '工作經驗：',
        'Language Tutor, Writing Tutor & Student Ambassador - Excelled in 3 roles simultaneously': '語言導師、寫作導師和學生大使 - 同時在3個角色中表現卓越',
        'Projects:': '專案：',
        'Weather Forecast Android APP - Developed during exchange program using Kotlin and Android Studio': '天氣預報Android應用程式 - 在交換期間使用Kotlin和Android Studio開發',

        // Rewards & Certifications
        'Rewards & Certifications': '獎項與證照',
        'Tamkang University Academic Award': '淡江大學學業優良獎',
        'Outstanding academic performance with highest grade average GPA 3.876': '優異學業表現，最高成績平均GPA 3.876',
        'Recognition for consistent excellence throughout university career': '表彰大學期間持續的卓越表現',
        'Completion of International Policy': '國際政策完成證書',
        'Mandatory study abroad program completion': '必修海外留學課程完成',
        'Full English-taught curriculum requirement': '全英文授課課程要求',
        'On-campus residence hall accommodation': '校園宿舍住宿要求',
        'Graduation Certification': '畢業證書',
        'Bachelor\'s degree in Computer Science completed': '完成資訊工程學士學位',
        'Official university graduation recognition': '正式大學畢業認證',
        'Startup Club Certification': '創業社認證',
        'Curriculum Planner in Tamkang University Start Up Club': '淡江大學創業社課程規劃師',
        'Leadership role in entrepreneurship and innovation activities': '在創業與創新活動中的領導角色',
        'Organized startup workshops and mentoring programs': '組織創業工作坊和指導計畫',
        'Google Developer Student Club Certification': 'Google開發者學生俱樂部認證',
        'Core Member in Tamkang University Google Developer Student Club (GDSC)': '淡江大學Google開發者學生俱樂部核心成員',
        'Organized tech workshops and coding events': '組織技術工作坊和程式設計活動',
        'Mentored fellow students in Google technologies': '指導同學學習Google技術',
        'Systex Corporation Internship Certification': '精誠資訊實習認證',
        'Cybersecurity Consultant Intern at Systex Corporation': '精誠資訊資安顧問實習生',
        'Co-developed Zero Trust security platform using Django and Python': '使用Django和Python共同開發零信任安全平台',
        'Created cybersecurity assessment reports and system architecture diagrams': '創建資安評估報告和系統架構圖',
        'Temple University Student Success Center Recommendation': '天普大學學生成功中心推薦信',
        'Excellent recommendation letter from Temple University Student Success Center': '天普大學學生成功中心優秀推薦信',
        'Recognized for outstanding work performance and dedication': '因傑出的工作表現和奉獻精神而獲得認可',
        'Demonstrated exceptional leadership and teamwork skills': '展現卓越的領導力和團隊合作技能',
        'Temple University Exchange Program Completion': '天普大學交換計畫完成證書',
        'Successfully completed exchange program at Temple University': '成功完成天普大學交換計畫',
        'Computer Science exchange program from Aug 2023 to May 2024': '資訊工程學系交換計畫，2023年8月至2024年5月',
        'International academic and cultural experience': '國際學術和文化體驗',
        'Google Cloud Certification': 'Google雲端認證',
        'Google Digital Talent Taiwan certification program': 'Google數位人才台灣認證計畫',
        'Cloud computing and infrastructure management skills': '雲端運算和基礎設施管理技能',
        'Professional cloud platform expertise': '專業雲端平台專業知識',
        'Google Digital Marketing Certification': 'Google數位行銷認證',
        'Digital marketing strategies and analytics': '數位行銷策略和分析',
        'Online advertising and campaign management': '線上廣告和活動管理',
        'AWS Workshop Certificate': 'AWS工作坊證書',
        'Amazon Web Services workshop completion': 'Amazon Web Services工作坊完成',
        'Cloud computing and AWS platform training': '雲端運算和AWS平台培訓',
        'Hands-on experience with AWS services': 'AWS服務實務經驗',
        'NVIDIA Workshop Certificate': 'NVIDIA工作坊證書',
        'NVIDIA workshop completion': 'NVIDIA工作坊完成',
        'GPU computing and AI/ML training': 'GPU運算和AI/ML培訓',
        'Advanced graphics and parallel processing': '進階圖形和並行處理',

        // Project 1: Zero-Trust Questionnaire System
        'Zero-Trust Questionnaire System': '零信任問卷系統',
        'Developed online zero-trust questionnaire system during internship at Systex Corporation': '在精誠資訊實習期間開發線上零信任問卷系統',
        'Collaborated with local team to improve cybersecurity consultant efficiency': '與在地團隊合作提升資安顧問效率',
        'Built using Django and Python for enterprise zero-trust assessments': '使用Django和Python為企業零信任評估而建構',

        // Project 2: Weather Forecast Android APP
        'Weather Forecast Android APP': '天氣預報Android應用程式',
        'Developed Android weather app during exchange program at Temple University (USA)': '在美國天普大學交換期間開發Android天氣應用程式',
        'Collaborated with local students to create real-time weather reporting system': '與在地學生合作創建即時天氣回報系統',
        'Built using Kotlin and Android Studio for mobile weather forecasting': '使用Kotlin和Android Studio為行動天氣預報而建構',

        // Project 3: The Simon Game Web Application
        'The Simon Game Web Application': '西蒙遊戲網頁應用程式',
        'Developed interactive memory game web app using 3-tier architecture': '使用三層架構開發互動式記憶遊戲網頁應用程式',
        'Built with HTML/CSS/JS frontend, PHP backend, and MySQL database': '使用HTML/CSS/JS前端、PHP後端和MySQL資料庫建構',
        'Implemented sequence memory game with top 5 leaderboard system': '實作序列記憶遊戲與前五名排行榜系統'
    }
};

function switchLanguage(lang) {
    currentLanguage = lang;
    console.log('Switching to language:', lang);
    
    // Update navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        const key = link.getAttribute('data-en');
        if (key && translations[lang][key]) {
            link.textContent = translations[lang][key];
            console.log('Updated nav link:', key, 'to:', translations[lang][key]);
        }
    });
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        const key = element.getAttribute('data-en');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
            console.log('Updated element:', key, 'to:', translations[lang][key]);
        }
    });
    
    // Update button text
    const langToggle = document.getElementById('langToggle');
    const langText = langToggle.querySelector('.lang-text');
    langText.textContent = lang === 'en' ? '中文' : 'English';
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    
    // Clear any saved language preference to force English
    localStorage.removeItem('preferredLanguage');
    
    // Force English mode with a small delay to ensure page is loaded
    setTimeout(() => {
        currentLanguage = 'en';
        console.log('Initializing in English mode');
        switchLanguage('en');
    }, 100);
    
    // Add click event
    langToggle.addEventListener('click', function() {
        const newLang = currentLanguage === 'en' ? 'zh' : 'en';
        console.log('Button clicked, switching from', currentLanguage, 'to', newLang);
        switchLanguage(newLang);
    });
});

// Debug: Test if JavaScript is loading
console.log('Script.js loaded successfully!');

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-content, .skills-grid, .projects-grid, .contact-content, .rewards-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Add scroll reveal effect for project cards
function revealOnScroll() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}

// Initialize project cards with opacity 0
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

// Add scroll event listener for project cards
window.addEventListener('scroll', revealOnScroll);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
});

// Add hover effects for skill items
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.background = '#f0f9ff';
            item.style.borderLeft = '4px solid #2563eb';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.background = 'white';
            item.style.borderLeft = '4px solid transparent';
        });
    });
});

// Add loading animation for buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('btn-primary')) {
                // Add loading state
                const originalText = this.textContent;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                this.disabled = true;
                
                // Reset after 2 seconds (simulate loading)
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
});





// Mobile Rewards Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreRewards');
    const rewardsContent = document.querySelector('.rewards-content');
    
    if (showMoreBtn && rewardsContent) {
        showMoreBtn.addEventListener('click', function() {
            // Expand - show all rewards
            rewardsContent.classList.add('expanded');
            
            // Hide the button completely
            showMoreBtn.style.display = 'none';
        });
    }
});

// Test if JavaScript is working
console.log('End of script.js reached');

