// Translations
const translations = {
    ru: {
        nav: {
            home: "Главная",
            about: "Обо мне",
            experience: "Опыт",
            education: "Образование",
            portfolio: "Портфолио",
            contact: "Контакты"
        },
        hero: {
            subtitle: "Веб-разработчик | UX/UI дизайнер | Фрилансер",
            btnWorks: "Мои работы",
            btnContact: "Связаться"
        },
        about: {
            title: "Обо мне",
            heading: "Веб-разработчик с 3-летним опытом",
            text1: "Привет! Я Даниил, веб-разработчик с более чем 3-летним опытом, специализируюсь на backend-разработке. Создаю надёжные и масштабируемые веб-приложения, продумывая архитектуру и бизнес-логику.",
            text2: "Хотя моя основная зона ответственности — серверная часть, также имею опыт работы с frontend'ом, в частности с React.js. Постоянно развиваюсь, изучаю современные технологии и стремлюсь писать чистый, поддерживаемый код.",
            stats: {
                projects: "Завершенных проектов",
                years: "Года опыта",
                clients: "Довольных клиентов"
            }
        },
        experience: {
            title: "Опыт работы",
            present: "Настоящее время",
            jobs: [
                {
                    date: "2024 - Настоящее время",
                    title: "Преподаватель",
                    company: "Техникум",
                    description: ["Обеспечение безопасности веб приложений,", "Разработка кода информационных систем"]
                },
                {
                    date: "2023 - Настоящее время",
                    title: "Frontend Developer",
                    company: "Freelance",
                    description: ["Создание адаптивных веб-сайтов и интерфейсов для клиентов агентства. Работа с HTML5, CSS3, JavaScript и различными CMS. Участие в полном цикле разработки проектов."]
                },
                {
                    date: "2023 - Настоящее время",
                    title: "Junior Web Developer",
                    company: "Freelance",
                    description: ["Работа над различными проектами как фрилансер. Разработка лендингов, корпоративных сайтов и интернет-магазинов. Постоянное обучение и совершенствование навыков."]
                }
            ]
        },
        education: {
            title: "Образование",
            items: [
                {
                    date: "2020 - 2024",
                    title: "Среднее Профессиональное Образование",
                    company: "Техникум",
                    description: "Специальность: Информационные системы и программирование"
                },
                {
                    date: "2025",
                    title: "Курсы повышения квалификации",
                    company: "",
                    description: "Безопасность беспроводных сетей"
                },
                {
                    date: "2025",
                    title: "Курсы повышения квалификации",
                    company: "",
                    description: "Основы администрирования ОС Linux"
                },
                {
                    date: "2025",
                    title: "Курсы повышения квалификации",
                    company: "",
                    description: "Основы деятельности эксперта регионального этапа Чемпионата по профессиональному мастерству, \"Профессионалы\" (включая стажировку по компетенции)"
                },
                {
                    date: "2025",
                    title: "Курс профессиональной переподготовки",
                    company: "",
                    description: "«Педагог СПО в условиях реализации ФГОС нового поколения»"
                }
            ]
        },
        portfolio: {
            title: "Портфолио",
            filterAll: "Все проекты",
            filterWeb: "Веб-разработка",
            filterApp: "Приложения"
        },
        technologies: {
            title: "Технологии"
        },
        workflow: {
            title: "Процесс работы",
            items: [
                {
                    title: "Обсуждение",
                    description: "Анализ требований и постановка задач"
                },
                {
                    title: "Планирование",
                    description: "Проектирование архитектуры и создание плана"
                },
                {
                    title: "Разработка",
                    description: "Реализация функционала и написание кода"
                },
                {
                    title: "Тестирование",
                    description: "Проверка качества и исправление ошибок"
                },
                {
                    title: "Деплой",
                    description: "Развертывание и запуск проекта"
                },
                {
                    title: "Поддержка",
                    description: "Обслуживание и дальнейшее развитие"
                }
            ]
        },
        githubStats: {
            title: "Статистика GitHub",
            repositories: "Репозиториев",
            commits: "Коммитов",
            stars: "Звёзд",
            contributors: "Контрибьюторов",
            visitProfile: "Посетить GitHub профиль"
        },
        certificates: {
            title: "Сертификаты и Награды"
        },
        qrcode: {
            title: "Сканируйте QR-код для быстрого доступа",
            description: "Отсканируйте код для сохранения ссылки"
        },
        testimonials: {
            title: "Отзывы",
            items: [
                {
                    text: "Даниил проделал потрясающую работу над нашим корпоративным сайтом. Он не только создал красивый и современный дизайн, но и оптимизировал производительность, что значительно улучшило пользовательский опыт.",
                    author: "Александра Петрова",
                    position: "Директор по маркетингу, ООО \"ТехноПром\""
                },
                {
                    text: "Работать с Даниилом было одно удовольствие. Он профессионально подошел к реализации нашего проекта, учитывал все пожелания и предлагал свои креативные решения. Результат превзошел все ожидания!",
                    author: "Дмитрий Смирнов",
                    position: "Основатель стартапа \"GreenTech\""
                },
                {
                    text: "Даниил - настоящий профессионал своего дела. Он не только отличный разработчик, но и прекрасный командный игрок. Его вклад в наш проект был неоценим, и мы обязательно будем сотрудничать с ним в будущем.",
                    author: "Михаил Козлов",
                    position: "CTO, Digital Solutions"
                }
            ]
        },
        contact: {
            title: "Контакты",
            address: "Адрес",
            phone: "Телефон",
            email: "Email",
            hours: "Часы работы",
            hoursWeek: "Пн-Пт: 9:00 - 18:00",
            hoursWeekend: "Сб-Вс: Выходной",
            formName: "Ваше имя",
            formEmail: "Ваш email",
            formSubject: "Тема",
            formMessage: "Ваше сообщение",
            formSubmit: "Отправить сообщение"
        },
        footer: {
            copyright: "Все права защищены."
        },
        form: {
            success: "Спасибо! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.",
            error: "Произошла ошибка при отправке сообщения",
            errorNetwork: "Ошибка сети",
            fillRequired: "Пожалуйста, заполните все обязательные поля",
            invalidEmail: "Пожалуйста, введите корректный email",
            sending: "Отправка сообщения..."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            education: "Education",
            portfolio: "Portfolio",
            contact: "Contact"
        },
        hero: {
            subtitle: "Web Developer | UX/UI Designer | Freelancer",
            btnWorks: "My Works",
            btnContact: "Contact Me"
        },
        about: {
            title: "About Me",
            heading: "Web Developer with 3 Years of Experience",
            text1: "Hello! I'm Daniil, a web developer with over 3 years of experience, specializing in backend development. I create reliable and scalable web applications, thinking through architecture and business logic.",
            text2: "Although my main area of responsibility is the server side, I also have experience working with the frontend, particularly with React.js. I constantly develop, study modern technologies and strive to write clean, maintainable code.",
            stats: {
                projects: "Completed Projects",
                years: "Years of Experience",
                clients: "Happy Clients"
            }
        },
        experience: {
            title: "Work Experience",
            present: "Present",
            jobs: [
                {
                    date: "2024 - Present",
                    title: "Teacher",
                    company: "Technical College",
                    description: ["Ensuring web application security,", "Developing information systems code"]
                },
                {
                    date: "2023 - Present",
                    title: "Frontend Developer",
                    company: "Freelance",
                    description: ["Creating responsive websites and interfaces for agency clients. Working with HTML5, CSS3, JavaScript and various CMS. Participating in the full development cycle of projects."]
                },
                {
                    date: "2023 - Present",
                    title: "Junior Web Developer",
                    company: "Freelance",
                    description: ["Working on various projects as a freelancer. Developing landing pages, corporate websites and online stores. Continuous learning and skill improvement."]
                }
            ]
        },
        education: {
            title: "Education",
            items: [
                {
                    date: "2020 - 2024",
                    title: "Secondary Vocational Education",
                    company: "Technical College",
                    description: "Specialty: Information Systems and Programming"
                },
                {
                    date: "2025",
                    title: "Professional Development Courses",
                    company: "",
                    description: "Wireless Network Security"
                },
                {
                    date: "2025",
                    title: "Professional Development Courses",
                    company: "",
                    description: "Linux OS Administration Basics"
                },
                {
                    date: "2025",
                    title: "Professional Development Courses",
                    company: "",
                    description: "Basics of Expert Activity at the Regional Stage of the Professional Skills Championship, \"Professionals\" (including internship in the competency)"
                },
                {
                    date: "2025",
                    title: "Professional Retraining Course",
                    company: "",
                    description: "\"Vocational Education Teacher in the Context of Implementing the New Generation Federal State Educational Standards\""
                }
            ]
        },
        portfolio: {
            title: "Portfolio",
            filterAll: "All Projects",
            filterWeb: "Web Development",
            filterApp: "Applications"
        },
        technologies: {
            title: "Technologies"
        },
        workflow: {
            title: "Work Process",
            items: [
                {
                    title: "Discussion",
                    description: "Requirements analysis and task setting"
                },
                {
                    title: "Planning",
                    description: "Architecture design and plan creation"
                },
                {
                    title: "Development",
                    description: "Feature implementation and code writing"
                },
                {
                    title: "Testing",
                    description: "Quality check and bug fixing"
                },
                {
                    title: "Deployment",
                    description: "Project deployment and launch"
                },
                {
                    title: "Support",
                    description: "Maintenance and further development"
                }
            ]
        },
        githubStats: {
            title: "GitHub Statistics",
            repositories: "Repositories",
            commits: "Commits",
            stars: "Stars",
            contributors: "Contributors",
            visitProfile: "Visit GitHub Profile"
        },
        certificates: {
            title: "Certificates and Awards"
        },
        qrcode: {
            title: "Scan QR code for quick access",
            description: "Scan the code to save the link"
        },
        testimonials: {
            title: "Testimonials",
            items: [
                {
                    text: "Daniil did an amazing job on our corporate website. He not only created a beautiful and modern design, but also optimized performance, which significantly improved the user experience.",
                    author: "Alexandra Petrova",
                    position: "Marketing Director, TechnoProm LLC"
                },
                {
                    text: "Working with Daniil was a pleasure. He professionally approached the implementation of our project, took into account all wishes and offered his creative solutions. The result exceeded all expectations!",
                    author: "Dmitry Smirnov",
                    position: "Founder of GreenTech Startup"
                },
                {
                    text: "Daniil is a true professional in his field. He is not only an excellent developer, but also a great team player. His contribution to our project was invaluable, and we will definitely work with him in the future.",
                    author: "Mikhail Kozlov",
                    position: "CTO, Digital Solutions"
                }
            ]
        },
        contact: {
            title: "Contact",
            address: "Address",
            phone: "Phone",
            email: "Email",
            hours: "Working Hours",
            hoursWeek: "Mon-Fri: 9:00 AM - 6:00 PM",
            hoursWeekend: "Sat-Sun: Closed",
            formName: "Your Name",
            formEmail: "Your Email",
            formSubject: "Subject",
            formMessage: "Your Message",
            formSubmit: "Send Message"
        },
        footer: {
            copyright: "All rights reserved."
        },
        form: {
            success: "Thank you! Your message has been sent. I will contact you soon.",
            error: "An error occurred while sending the message",
            errorNetwork: "Network error",
            fillRequired: "Please fill in all required fields",
            invalidEmail: "Please enter a valid email",
            sending: "Sending message..."
        }
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'ru';

// Portfolio data with translations
const portfolioData = {
    1: {
        ru: {
            title: "Корпоративный портал",
            category: "Веб-разработка",
            description: "Разработка комплексного корпоративного портала с системой управления документами, календарем событий и внутренними сервисами.",
            viewProject: "Посмотреть проект"
        },
        en: {
            title: "Corporate Portal",
            category: "Web Development",
            description: "Development of a comprehensive corporate portal with document management system, event calendar and internal services.",
            viewProject: "View Project"
        },
        image: "/source/Corporate.jpg",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
        link: "#",
        github: "https://github.com/example/corporate-portal"
    },
    2: {
        ru: {
            title: "REST API для системы вендинга",
            category: "Backend",
            description: "RESTful API для системы управления вендинговыми автоматами на платформе .NET 8.0. Реализована аутентификация через JWT, работа с базой данных MySQL через Entity Framework Core, документация через Swagger/OpenAPI. Архитектура построена на принципах Repository/Service Pattern с использованием Dependency Injection, DTOs для передачи данных, BCrypt для хеширования паролей.",
            viewProject: "Посмотреть проект"
        },
        en: {
            title: "REST API for Vending System",
            category: "Backend",
            description: "RESTful API for vending machine management system built on .NET 8.0 platform. Features JWT authentication, MySQL database with Entity Framework Core, Swagger/OpenAPI documentation. Architecture follows Repository/Service Pattern with Dependency Injection, DTOs for data transfer, BCrypt for password hashing.",
            viewProject: "View Project"
        },
        image: "/source/rest.jpg",
        technologies: [".NET 8.0", "ASP.NET Core", "C#", "MySQL 8.0", "Entity Framework Core", "JWT", "Swagger", "BCrypt"],
        link: "#",
        github: "https://github.com/codnix21/VendingSystem/tree/master/src/VendingSystem.API"
    },
    3: {
        ru: {
            title: "Интернет-магазин",
            category: "Веб-разработка",
            description: "Полноценный интернет-магазин с каталогом товаров, корзиной, системой оплаты и личным кабинетом пользователя.",
            viewProject: "Посмотреть проект"
        },
        en: {
            title: "E-commerce Store",
            category: "Web Development",
            description: "Full-featured online store with product catalog, shopping cart, payment system and user account.",
            viewProject: "View Project"
        },
        image: "/source/vue.jpg",
        technologies: ["Vue.js", "Laravel", "MySQL", "Stripe API", "Redis"],
        link: "#",
        github: "https://github.com/example/e-commerce"
    },
    4: {
        ru: {
            title: "Telegram Bot для ERP системы",
            category: "Приложения",
            description: "Telegram бот для управления ERP системой прямо из мессенджера. Безопасная авторизация, статистика дашборда, управление заказами, просмотр товаров и остатков на складах. Интуитивное меню с кнопками для быстрой навигации, inline-кнопки для деталей, навигация по страницам. Валидация всех входных данных через Zod, санитизация текста, подтверждения для важных действий.",
            viewProject: "Посмотреть проект"
        },
        en: {
            title: "Telegram Bot for ERP System",
            category: "Applications",
            description: "Telegram bot for managing ERP system directly from messenger. Secure authentication, dashboard statistics, order management, product viewing and warehouse stock. Intuitive menu with buttons for quick navigation, inline buttons for details, page navigation. Validation of all input data through Zod, text sanitization, confirmations for important actions.",
            viewProject: "View Project"
        },
        image: "/source/chat.jpg",
        technologies: ["TypeScript", "Node.js 18+", "node-telegram-bot-api", "Axios", "Zod", "dotenv", "tsx"],
        link: "#",
        github: "https://github.com/codnix21/telegram-bot"
    },
    5: {
        ru: {
            title: "ERP система",
            category: "Веб-разработка",
            description: "Полнофункциональная ERP система для управления бизнес-процессами. Frontend: React 19 + TypeScript, Tailwind CSS 4, Vite 7, React Query, Zustand, React Router, React Hook Form + Zod, Axios. Backend: Node.js + TypeScript, Fastify 5, Prisma 7, PostgreSQL, JWT авторизация, Zod валидация, Winston логирование, bcrypt 6, ExcelJS, PDFKit, Nodemailer.",
            viewProject: "Открыть демо",
            tryDemo: "Попробовать демо"
        },
        en: {
            title: "ERP System",
            category: "Web Development",
            description: "Full-featured ERP system for business process management. Frontend: React 19 + TypeScript, Tailwind CSS 4, Vite 7, React Query, Zustand, React Router, React Hook Form + Zod, Axios. Backend: Node.js + TypeScript, Fastify 5, Prisma 7, PostgreSQL, JWT authentication, Zod validation, Winston logging, bcrypt 6, ExcelJS, PDFKit, Nodemailer.",
            viewProject: "Open Demo",
            tryDemo: "Try Demo"
        },
        image: "/source/Corporate.jpg",
        technologies: ["React 19", "TypeScript", "Tailwind CSS 4", "Vite 7", "React Query", "Zustand", "React Router", "Node.js", "Fastify 5", "Prisma 7", "PostgreSQL", "JWT", "Zod"],
        link: "#",
        github: "https://github.com/example/erp-system",
        // Укажите URL вашего демо-приложения:
        // - Локально: "http://localhost:5173"
        // - На поддомене: "https://erp-demo.resume.codnix.ru"
        // - В подпапке: "https://resume.codnix.ru/erp-demo"
        demoUrl: "", // ИЗМЕНИТЕ НА ВАШ URL (например: "https://erp-demo.resume.codnix.ru")
        hasDemo: true // Флаг для отображения iframe
    }
};

// Функция валидации email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Функция экранирования HTML (защита от XSS)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Дополнительная проверка preloader (основной скрипт в head)
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.display !== 'none') {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            if (preloader) {
                preloader.style.display = 'none';
            }
        }, 50);
    }
});

document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            const isActive = navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive);
            hamburger.innerHTML = isActive 
                ? '<i class="fas fa-times" aria-hidden="true"></i>' 
                : '<i class="fas fa-bars" aria-hidden="true"></i>';
            
            // Закрытие меню при клике на ссылку
            if (isActive) {
                navLinks.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        navLinks.classList.remove('active');
                        hamburger.setAttribute('aria-expanded', 'false');
                        hamburger.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
                    }, { once: true });
                });
            }
        });
        
        // Закрытие меню при нажатии Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
            }
        });
    }

    // Theme Toggle with localStorage
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
        // Загружаем сохраненную тему при загрузке страницы (если еще не применена)
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' && !document.body.classList.contains('dark-mode')) {
            document.documentElement.classList.add('dark-mode');
            document.body.classList.add('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        } else if (savedTheme === 'light' && document.body.classList.contains('dark-mode')) {
            document.documentElement.classList.remove('dark-mode');
            document.body.classList.remove('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
        
        themeToggle.addEventListener('click', function() {
            const isDark = document.body.classList.contains('dark-mode');
            
            if (isDark) {
                // Переключаем на светлую тему
                document.documentElement.classList.remove('dark-mode');
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            } else {
                // Переключаем на темную тему
                document.documentElement.classList.add('dark-mode');
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }
            
            const icon = themeToggle.querySelector('i');
            if (icon) {
                if (isDark) {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                } else {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                }
            }
        });
    }

    // Language Toggle - функция перевода
    const languageToggle = document.querySelector('.language-toggle');
    
    // Функция для применения переводов
    function applyTranslations(lang) {
        const t = translations[lang];
        if (!t) return;
        
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Навигация
        const navLinks = document.querySelectorAll('.nav-links a');
        if (navLinks.length >= 6) {
            navLinks[0].textContent = t.nav.home;
            navLinks[1].textContent = t.nav.about;
            navLinks[2].textContent = t.nav.experience;
            navLinks[3].textContent = t.nav.education;
            navLinks[4].textContent = t.nav.portfolio;
            navLinks[5].textContent = t.nav.contact;
        }
        
        // Hero секция
        const heroSubtitle = document.querySelector('#hero p');
        if (heroSubtitle) {
            heroSubtitle.setAttribute('data-lang', lang);
            heroSubtitle.textContent = t.hero.subtitle;
        }
        
        const heroBtns = document.querySelectorAll('#hero .btn');
        if (heroBtns.length >= 2) {
            heroBtns[0].textContent = t.hero.btnWorks;
            heroBtns[1].textContent = t.hero.btnContact;
        }
        
        // Секции
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            const text = title.textContent.trim();
            if (text.includes('Обо мне') || text.includes('About')) {
                title.textContent = t.about.title;
            } else if (text.includes('Опыт') || text.includes('Experience')) {
                title.textContent = t.experience.title;
            } else if (text.includes('Образование') || text.includes('Education')) {
                title.textContent = t.education.title;
            } else if (text.includes('Портфолио') || text.includes('Portfolio')) {
                title.textContent = t.portfolio.title;
            } else if (text.includes('Отзывы') || text.includes('Testimonials')) {
                title.textContent = t.testimonials.title;
            } else if (text.includes('Сертификаты') || text.includes('Certificates')) {
                title.textContent = t.certificates.title;
            } else if (text.includes('Контакты') || text.includes('Contact')) {
                title.textContent = t.contact.title;
            }
        });
        
        // QR Code Section
        const qrTitle = document.querySelector('#qrcode h3');
        const qrDescription = document.querySelector('#qrcode p');
        if (qrTitle) qrTitle.textContent = t.qrcode.title;
        if (qrDescription) qrDescription.textContent = t.qrcode.description;
        
        // Обо мне секция
        const aboutHeading = document.querySelector('#about h3');
        if (aboutHeading) aboutHeading.textContent = t.about.heading;
        
        const aboutTexts = document.querySelectorAll('#about .about-text p');
        if (aboutTexts.length >= 2) {
            aboutTexts[0].textContent = t.about.text1;
            aboutTexts[1].textContent = t.about.text2;
        }
        
        // Статистика
        const statTexts = document.querySelectorAll('.stat-text');
        if (statTexts.length >= 3) {
            statTexts[0].textContent = t.about.stats.projects;
            statTexts[1].textContent = t.about.stats.years;
            statTexts[2].textContent = t.about.stats.clients;
        }
        
        // Портфолио фильтры
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach((btn, index) => {
            const filter = btn.getAttribute('data-filter');
            if (filter === 'all') btn.textContent = t.portfolio.filterAll;
            else if (filter === 'web') btn.textContent = t.portfolio.filterWeb;
            else if (filter === 'app') btn.textContent = t.portfolio.filterApp;
        });
        
        // Портфолио проекты (названия в overlay)
        const portfolioLinks = document.querySelectorAll('.portfolio-link');
        portfolioLinks.forEach(link => {
            const projectId = link.getAttribute('data-id');
            if (projectId && portfolioData[projectId]) {
                const project = portfolioData[projectId];
                const projectData = project[lang] || project.ru;
                const titleEl = link.querySelector('.portfolio-title');
                const categoryEl = link.querySelector('.portfolio-category');
                
                if (titleEl) titleEl.textContent = projectData.title;
                if (categoryEl) {
                    // Определяем категорию на основе фильтра
                    const category = link.closest('.portfolio-item')?.getAttribute('data-category');
                    if (category === 'web') {
                        categoryEl.textContent = `${projectData.category} (${project.technologies.slice(0, 2).join(', ')})`;
                    } else if (category === 'app') {
                        categoryEl.textContent = project.technologies.slice(0, 2).join(', ');
                    }
                }
            }
        });
        
        // Опыт работы (Timeline)
        const timelineItems = document.querySelectorAll('.timeline-item');
        if (timelineItems.length > 0 && t.experience.jobs) {
            timelineItems.forEach((item, index) => {
                if (t.experience.jobs[index]) {
                    const job = t.experience.jobs[index];
                    const dateEl = item.querySelector('.timeline-date');
                    const titleEl = item.querySelector('.timeline-title');
                    const companyEl = item.querySelector('h4');
                    const descEls = item.querySelectorAll('.timeline-content p');
                    
                    if (dateEl) {
                        let dateText = job.date;
                        if (lang === 'en') {
                            dateText = dateText.replace('Настоящее время', t.experience.present);
                        }
                        dateEl.textContent = dateText;
                    }
                    if (titleEl) titleEl.textContent = job.title;
                    if (companyEl) companyEl.textContent = job.company;
                    if (descEls.length > 0 && job.description) {
                        descEls.forEach((descEl, descIndex) => {
                            if (job.description[descIndex]) {
                                descEl.textContent = job.description[descIndex];
                            }
                        });
                    }
                }
            });
        }
        
        // Образование
        const educationCards = document.querySelectorAll('.education-card');
        if (educationCards.length > 0 && t.education.items) {
            educationCards.forEach((card, index) => {
                if (t.education.items[index]) {
                    const edu = t.education.items[index];
                    const dateEl = card.querySelector('.education-date');
                    const titleEl = card.querySelector('.education-title');
                    const companyEl = card.querySelector('h4');
                    const descEl = card.querySelector('p');
                    
                    if (dateEl) dateEl.textContent = edu.date;
                    if (titleEl) titleEl.textContent = edu.title;
                    if (companyEl) companyEl.textContent = edu.company;
                    if (descEl) descEl.textContent = edu.description;
                }
            });
        }
        
        // Отзывы
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        if (testimonialSlides.length > 0 && t.testimonials.items) {
            testimonialSlides.forEach((slide, index) => {
                if (t.testimonials.items[index]) {
                    const testimonial = t.testimonials.items[index];
                    const textEl = slide.querySelector('.testimonial-text p');
                    const authorEl = slide.querySelector('.author-info h4');
                    const positionEl = slide.querySelector('.author-info p');
                    
                    if (textEl) textEl.textContent = testimonial.text;
                    if (authorEl) authorEl.textContent = testimonial.author;
                    if (positionEl) positionEl.textContent = testimonial.position;
                }
            });
        }
        
        // Технологии
        const technologiesTitle = document.querySelector('#technologies .section-title');
        if (technologiesTitle && t.technologies) {
            technologiesTitle.textContent = t.technologies.title;
        }

        // Workflow
        const workflowTitle = document.querySelector('#workflow .section-title');
        if (workflowTitle && t.workflow) {
            workflowTitle.textContent = t.workflow.title;
        }
        
        const workflowItems = document.querySelectorAll('.workflow-item');
        if (workflowItems.length > 0 && t.workflow.items) {
            workflowItems.forEach((item, index) => {
                if (t.workflow.items[index]) {
                    const titleEl = item.querySelector('h3');
                    const descEl = item.querySelector('p');
                    if (titleEl) titleEl.textContent = t.workflow.items[index].title;
                    if (descEl) descEl.textContent = t.workflow.items[index].description;
                }
            });
        }

        // GitHub Stats
        const githubStatsTitle = document.querySelector('#github-stats .section-title');
        if (githubStatsTitle && t.githubStats) {
            githubStatsTitle.textContent = t.githubStats.title;
        }
        
        const githubStatLabels = document.querySelectorAll('.github-stat-label');
        if (githubStatLabels.length > 0 && t.githubStats) {
            githubStatLabels[0].textContent = t.githubStats.repositories;
            githubStatLabels[1].textContent = t.githubStats.commits;
            githubStatLabels[2].textContent = t.githubStats.stars;
            githubStatLabels[3].textContent = t.githubStats.contributors;
        }
        
        const githubCtaBtn = document.querySelector('.github-cta .btn');
        if (githubCtaBtn && t.githubStats) {
            githubCtaBtn.innerHTML = `<i class="fab fa-github"></i> ${t.githubStats.visitProfile}`;
        }
        
        // Контакты
        const contactItems = document.querySelectorAll('.contact-item h3');
        contactItems.forEach((item, index) => {
            const text = item.textContent.trim();
            if (text.includes('Адрес') || text.includes('Address')) {
                item.textContent = t.contact.address;
            } else if (text.includes('Телефон') || text.includes('Phone')) {
                item.textContent = t.contact.phone;
            } else if (text.includes('Email')) {
                item.textContent = t.contact.email;
            } else if (text.includes('Часы') || text.includes('Hours')) {
                item.textContent = t.contact.hours;
                const nextP = item.nextElementSibling;
                if (nextP && nextP.tagName === 'P') {
                    nextP.textContent = t.contact.hoursWeek;
                    const nextP2 = nextP.nextElementSibling;
                    if (nextP2 && nextP2.tagName === 'P') {
                        nextP2.textContent = t.contact.hoursWeekend;
                    }
                }
            }
        });
        
        // Форма контактов
        const formName = document.getElementById('name');
        if (formName) formName.placeholder = t.contact.formName;
        
        const formEmail = document.getElementById('email');
        if (formEmail) formEmail.placeholder = t.contact.formEmail;
        
        const formSubject = document.getElementById('subject');
        if (formSubject) formSubject.placeholder = t.contact.formSubject;
        
        const formMessage = document.getElementById('message');
        if (formMessage) formMessage.placeholder = t.contact.formMessage;
        
        const formSubmit = document.querySelector('#contactForm button[type="submit"]');
        if (formSubmit) {
            const btnText = formSubmit.querySelector('.btn-text');
            if (btnText) {
                btnText.textContent = t.contact.formSubmit;
            } else {
                formSubmit.textContent = t.contact.formSubmit;
            }
        }
        
        // Footer
        const footerLinks = document.querySelectorAll('.footer-links a');
        if (footerLinks.length >= 5) {
            footerLinks[0].textContent = t.nav.home;
            footerLinks[1].textContent = t.nav.about;
            footerLinks[2].textContent = t.nav.experience;
            footerLinks[3].textContent = t.nav.portfolio;
            footerLinks[4].textContent = t.nav.contact;
        }
        
        // Обновляем атрибут lang у html
        document.documentElement.setAttribute('lang', lang);
    }
    
    if (languageToggle) {
        // Применяем сохраненный язык при загрузке
        applyTranslations(currentLang);
        
        // Переключение языка
        languageToggle.addEventListener('click', function() {
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            applyTranslations(newLang);
            
            // Перезапускаем эффект печатания с новым текстом
            if (window.typingTimer) {
                clearTimeout(window.typingTimer);
            }
            const heroSubtitle = document.querySelector('#hero p');
            if (heroSubtitle) {
                heroSubtitle.classList.remove('typing');
                setTimeout(() => {
                    initTypingEffect();
                }, 200);
            }
        });
    }

    // Smooth Scrolling for Anchor Links with Intersection Observer
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.getAttribute('href') === '#') return;
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Обновляем URL без перезагрузки страницы
                history.pushState(null, null, this.getAttribute('href'));
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (hamburger) {
                        hamburger.setAttribute('aria-expanded', 'false');
                        hamburger.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
                    }
                }
            }
        });
    });
    
    // Подсветка активного пункта меню при прокрутке
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    function highlightActiveSection() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);

    // Scroll Progress Bar
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        window.addEventListener('scroll', function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            scrollProgress.style.width = scrolled + '%';
        });
    }
    
    // Header Scroll Effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Parallax Effect
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        document.querySelectorAll('.section').forEach((section, index) => {
            if (index % 2 === 0) {
                section.style.backgroundPositionY = `-${scrollPosition * 0.2}px`;
            } else {
                section.style.backgroundPositionY = `${scrollPosition * 0.2}px`;
            }
        });
    });

    // Portfolio Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Portfolio Modal
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    const portfolioModal = document.getElementById('portfolioModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');

    if (portfolioModal && modalBody) {
        portfolioLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const projectId = this.getAttribute('data-id');
                const project = portfolioData[projectId];
                
                if (project) {
                    // Получаем переводы для текущего языка
                    const lang = currentLang || 'ru';
                    const projectData = project[lang] || project.ru;
                    const categoryLabel = lang === 'ru' ? 'Категория:' : 'Category:';
                    const techLabel = lang === 'ru' ? 'Технологии:' : 'Technologies:';
                    const githubLabel = lang === 'ru' ? 'GitHub:' : 'GitHub:';
                    
                    // Проверяем, есть ли демо-версия с iframe
                    if (project.hasDemo && project.demoUrl) {
                        modalBody.innerHTML = `
                            <div class="modal-header">
                                <h3>${projectData.title}</h3>
                                <p><strong>${categoryLabel}</strong> ${projectData.category}</p>
                            </div>
                            <div class="modal-demo-container">
                                <iframe 
                                    src="${project.demoUrl}" 
                                    class="modal-iframe"
                                    frameborder="0"
                                    allow="fullscreen"
                                    loading="lazy"
                                    title="${projectData.title} Demo"
                                ></iframe>
                            </div>
                            <div class="modal-text">
                                <p>${projectData.description}</p>
                                <div class="modal-tech">
                                    <strong>${techLabel}</strong>
                                    <div class="tech-tags">
                                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                                    </div>
                                </div>
                                <div class="modal-links" style="margin-top: 20px; display: flex; gap: 15px; flex-wrap: wrap;">
                                    ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fab fa-github"></i> ${githubLabel} GitHub</a>` : ''}
                                    ${project.link && project.link !== '#' ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn">${projectData.viewProject}</a>` : ''}
                                </div>
                            </div>
                        `;
                    } else {
                        // Обычное модальное окно без iframe
                    modalBody.innerHTML = `
                        <img src="${project.image}" alt="${projectData.title}" class="modal-img">
                        <div class="modal-text">
                            <h3>${projectData.title}</h3>
                            <p><strong>${categoryLabel}</strong> ${projectData.category}</p>
                            <p>${projectData.description}</p>
                            <div class="modal-tech">
                                    <strong>${techLabel}</strong>
                                    <div class="tech-tags">
                                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                                </div>
                                <div class="modal-links" style="margin-top: 20px; display: flex; gap: 15px; flex-wrap: wrap;">
                                    ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fab fa-github"></i> ${githubLabel} GitHub</a>` : ''}
                                    ${project.link !== '#' ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn">${projectData.viewProject}</a>` : ''}
                                </div>
                        </div>
                    `;
                    }
                    
                    portfolioModal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        if (closeModal) {
            closeModal.addEventListener('click', function() {
                portfolioModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }

        window.addEventListener('click', function(e) {
            if (e.target === portfolioModal) {
                portfolioModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Testimonials Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    if (testimonialSlides.length > 0) {
        let currentSlide = 0;
        
        function showSlide(index) {
            if (testimonialSlides[index]) {
                testimonialSlides.forEach(slide => slide.style.display = 'none');
                testimonialSlides[index].style.display = 'block';
            }
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }
        
        // Initialize first slide
        showSlide(currentSlide);
        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
    }

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Валидация полей
            const name = contactForm.elements['name'].value.trim();
            const email = contactForm.elements['email'].value.trim();
            const message = contactForm.elements['message'].value.trim();
            
            // Получаем переводы для текущего языка
            const lang = currentLang || 'ru';
            const t = translations[lang]?.form || translations.ru.form;
            
            // Валидация длины полей (защита от переполнения)
            if (name.length > 100) {
                formResponse.innerHTML = `<div style="color: var(--danger);">Имя слишком длинное (максимум 100 символов)</div>`;
                return;
            }
            
            if (email.length > 255) {
                formResponse.innerHTML = `<div style="color: var(--danger);">Email слишком длинный</div>`;
                return;
            }
            
            if (message.length > 5000) {
                formResponse.innerHTML = `<div style="color: var(--danger);">Сообщение слишком длинное (максимум 5000 символов)</div>`;
                return;
            }
            
            // Проверка обязательных полей
            if (!name || !email || !message) {
                formResponse.innerHTML = `<div style="color: var(--danger);">${t.fillRequired}</div>`;
                return;
            }
            
            // Проверка email
            if (!validateEmail(email)) {
                formResponse.innerHTML = `<div style="color: var(--danger);">${t.invalidEmail}</div>`;
                return;
            }
            
            // Показываем индикатор загрузки
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
            const btnLoader = submitBtn ? submitBtn.querySelector('.btn-loader') : null;
            
            if (submitBtn) {
                if (btnText) btnText.style.display = 'none';
                if (btnLoader) btnLoader.style.display = 'inline-block';
                submitBtn.disabled = true;
            }
            
            formResponse.innerHTML = `<div style="color: var(--primary);"><i class="fas fa-spinner fa-spin"></i> ${t.sending}</div>`;
            
            // Собираем данные формы
            const formData = new FormData(contactForm);
            
            // Реальная отправка данных
            fetch('send.php', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(t.errorNetwork);
                }
                return response.json();
            })
            .then(data => {
                // Безопасное отображение сообщений (защита от XSS)
                const safeMessage = escapeHtml(data.message || t.success);
                const safeError = escapeHtml(data.message || t.error);
                
                if (data.success) {
                    formResponse.innerHTML = `<div style="color: var(--secondary);"><i class="fas fa-check-circle"></i> ${safeMessage}</div>`;
                    contactForm.reset();
                    
                    // Автоматическое скрытие сообщения через 5 секунд
                    setTimeout(() => {
                        formResponse.innerHTML = '';
                    }, 5000);
                } else {
                    formResponse.innerHTML = `<div style="color: var(--danger);"><i class="fas fa-exclamation-circle"></i> ${safeError}</div>`;
                }
                
                // Восстанавливаем кнопку
                if (submitBtn) {
                    if (btnText) btnText.style.display = 'inline-block';
                    if (btnLoader) btnLoader.style.display = 'none';
                    submitBtn.disabled = false;
                }
            })
            .catch(error => {
                const safeErrorMessage = escapeHtml(error.message || 'Неизвестная ошибка');
                formResponse.innerHTML = `<div style="color: var(--danger);"><i class="fas fa-exclamation-circle"></i> ${t.error}: ${safeErrorMessage}</div>`;
                
                // Восстанавливаем кнопку
                if (submitBtn) {
                    if (btnText) btnText.style.display = 'inline-block';
                    if (btnLoader) btnLoader.style.display = 'none';
                    submitBtn.disabled = false;
                }
            });
        });
    }

    // Animate Skills on Scroll
    const skillProgress = document.querySelectorAll('.skill-progress');
    
    function animateSkills() {
        skillProgress.forEach(progress => {
            const width = progress.getAttribute('data-width') + '%';
            progress.style.width = '0';
            setTimeout(() => {
                progress.style.width = width;
            }, 100);
        });
    }
    
    // Animate Stats Counters
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    clearInterval(timer);
                    stat.textContent = target;
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 16);
        });
    }

    // Animate Timeline Items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateTimeline() {
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200);
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        observer.observe(skillsSection);
    }

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        observer.observe(statsSection);
    }

    const timelineSection = document.querySelector('.timeline');
    if (timelineSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateTimeline();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        observer.observe(timelineSection);
    }

    // Hero Particles
    const hero = document.getElementById('hero');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 15 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        hero.insertBefore(particle, hero.firstChild);
        
        // Анимация частиц
        animateParticle(particle);
    }
    
    function animateParticle(particle) {
        let x = parseFloat(particle.style.left);
        let y = parseFloat(particle.style.top);
        let xSpeed = (Math.random() - 0.5) * 0.2;
        let ySpeed = (Math.random() - 0.5) * 0.2;
        
        function move() {
            x += xSpeed;
            y += ySpeed;
            
            // Отскок от границ
            if (x <= 0 || x >= 100) xSpeed *= -1;
            if (y <= 0 || y >= 100) ySpeed *= -1;
            
            particle.style.left = `${x}%`;
            particle.style.top = `${y}%`;
            
            requestAnimationFrame(move);
        }
        
        move();
    }

    // Button hover effects
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = (e.clientX - rect.left) / btn.offsetWidth - 0.5;
            const y = (e.clientY - rect.top) / btn.offsetHeight - 0.5;
            
            btn.style.transform = `translate(${x * 10}px, ${y * 5}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
    
    // Typing effect for hero subtitle
    function initTypingEffect() {
        const heroSubtitle = document.querySelector('#hero p');
        if (!heroSubtitle) return;
        
        // Получаем текст в зависимости от текущего языка
        const lang = currentLang || 'ru';
        const subtitleText = translations[lang]?.hero?.subtitle || heroSubtitle.textContent;
        
        if (subtitleText && subtitleText.includes(' | ')) {
            const texts = subtitleText.split(' | ');
            let currentTextIndex = 0;
            let currentCharIndex = 0;
            let isDeleting = false;
            let typingTimeout = null;
            
            // Очищаем предыдущий таймер если есть
            if (window.typingTimer) {
                clearTimeout(window.typingTimer);
            }
            
            function typeText() {
                if (!heroSubtitle) return;
                
                const currentText = texts[currentTextIndex];
                if (!currentText) return;
                
                if (isDeleting) {
                    heroSubtitle.textContent = currentText.substring(0, currentCharIndex - 1);
                    currentCharIndex--;
                    
                    if (currentCharIndex === 0) {
                        isDeleting = false;
                        currentTextIndex = (currentTextIndex + 1) % texts.length;
                    }
                } else {
                    heroSubtitle.textContent = currentText.substring(0, currentCharIndex + 1);
                    currentCharIndex++;
                    
                    if (currentCharIndex === currentText.length) {
                        isDeleting = true;
                        typingTimeout = setTimeout(typeText, 1500);
                        window.typingTimer = typingTimeout;
                        return;
                    }
                }
                
                const speed = isDeleting ? 30 : 60;
                typingTimeout = setTimeout(typeText, speed);
                window.typingTimer = typingTimeout;
            }
            
            // Запускаем эффект печатания
            heroSubtitle.textContent = '';
            heroSubtitle.classList.add('typing');
            typeText();
        }
    }
    
    // Запускаем эффект печатания после загрузки страницы
    setTimeout(initTypingEffect, 600);
    
    // Дополнительная защита от DevTools
    let devtools = {open: false, orientation: null};
    const threshold = 160;
    
    setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                // Можно добавить предупреждение или редирект
            }
        } else {
            devtools.open = false;
        }
    }, 500);
    
    // Защита от просмотра исходного кода через Ctrl+U
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
    });
    
    // Улучшенная анимация появления элементов при скролле
    const fadeInObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, fadeInObserverOptions);
    
    // Применяем анимацию к карточкам портфолио и образования
    document.querySelectorAll('.portfolio-item, .education-card, .testimonial-slide').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(item);
    });
    
    // Share Buttons
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            
            let shareUrl = '';
            
            switch(platform) {
                case 'telegram':
                    shareUrl = `https://t.me/share/url?url=${url}&text=${title}`;
                    break;
                case 'vk':
                    shareUrl = `https://vk.com/share.php?url=${url}&title=${title}`;
                    break;
                case 'copy':
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.href).then(() => {
                            const originalHTML = this.innerHTML;
                            this.innerHTML = '<i class="fas fa-check"></i>';
                            setTimeout(() => {
                                this.innerHTML = originalHTML;
                            }, 2000);
                        });
                    }
                    return;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
    
    // QR Code Generation
    function generateQRCode() {
        const qrCanvas = document.getElementById('qrCodeCanvas');
        const qrImg = document.getElementById('qrCodeImg');
        if (!qrCanvas && !qrImg) return;
        
        const url = window.location.href;
        
        // Сначала пробуем через библиотеку QRCode
        if (typeof QRCode !== 'undefined' && qrCanvas) {
            try {
                QRCode.toCanvas(qrCanvas, url, {
                    width: 200,
                    margin: 2,
                    color: {
                        dark: '#2c3e50',
                        light: '#ffffff'
                    }
                }, function (error) {
                    if (error) {
                        // Если ошибка, используем API
                        generateQRCodeAPI(url);
                    } else {
                        qrCanvas.style.display = 'block';
                    }
                });
            } catch (e) {
                generateQRCodeAPI(url);
            }
        } else {
            // Если библиотека не загрузилась, используем API сразу
            generateQRCodeAPI(url);
        }
    }
    
    // Альтернативный способ через API
    function generateQRCodeAPI(url) {
        const qrImg = document.getElementById('qrCodeImg');
        const qrCanvas = document.getElementById('qrCodeCanvas');
        
        if (qrImg) {
            const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
            qrImg.src = apiUrl;
            qrImg.alt = 'QR Code';
            qrImg.style.display = 'block';
            
            if (qrCanvas) {
                qrCanvas.style.display = 'none';
            }
        }
    }
    
    // Генерируем QR-код после загрузки DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', generateQRCode);
    } else {
        generateQRCode();
    }
    
    // Если библиотека загрузится позже, пробуем еще раз
    let qrAttempts = 0;
    const qrInterval = setInterval(() => {
        qrAttempts++;
        if (typeof QRCode !== 'undefined') {
            const qrImg = document.getElementById('qrCodeImg');
            if (qrImg && qrImg.style.display === 'block') {
                // Если уже используется API, не переключаемся
                clearInterval(qrInterval);
                return;
            }
            generateQRCode();
            clearInterval(qrInterval);
        } else if (qrAttempts > 5) {
            // После 5 попыток используем API
            generateQRCodeAPI(window.location.href);
            clearInterval(qrInterval);
        }
    }, 500);
    
    // View Counter
    const viewCounter = document.getElementById('viewCounter');
    const viewCountSpan = document.getElementById('viewCount');
    if (viewCounter && viewCountSpan) {
        let views = parseInt(localStorage.getItem('pageViews') || '0');
        views++;
        localStorage.setItem('pageViews', views.toString());
        
        // Анимация счетчика
        let currentCount = 0;
        const targetCount = views;
        const duration = 1000;
        const step = targetCount / (duration / 16);
        
        const counter = setInterval(() => {
            currentCount += step;
            if (currentCount >= targetCount) {
                currentCount = targetCount;
                clearInterval(counter);
            }
            viewCountSpan.textContent = Math.floor(currentCount);
        }, 16);
    }
    
    // AOS-like Scroll Animations
    function initAOS() {
        const aosElements = document.querySelectorAll('[data-aos]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        aosElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    initAOS();
    
    // Certificate Items Animation
    const certificateItems = document.querySelectorAll('.certificate-item');
    if (certificateItems.length > 0) {
        const certObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                    certObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        certificateItems.forEach(item => {
            certObserver.observe(item);
        });
    }
    
    // Skills Filter
    const skillFilterBtns = document.querySelectorAll('.skill-filter-btn');
    const skillItems = document.querySelectorAll('.skill-item');
    
    if (skillFilterBtns.length > 0) {
        skillFilterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                skillFilterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                skillItems.forEach(item => {
                    const category = item.getAttribute('data-skill-category');
                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }

    // GitHub Stats Animation
    // GitHub Stats Animation
    const githubStatsSection = document.querySelector('#github-stats');
    if (githubStatsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadGitHubStats();
                    animateGitHubStats();
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        
        observer.observe(githubStatsSection);
    }

    // Technologies Animation
    const technologiesSection = document.querySelector('#technologies');
    if (technologiesSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateTechnologies();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        observer.observe(technologiesSection);
    }

    // Smooth scroll animations for all sections
    const allSections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    allSections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// GitHub Stats Functions
async function loadGitHubStats() {
    // Получаем все элементы статистики
    const statItems = document.querySelectorAll('.github-stat-item');
    if (statItems.length === 0) {
        return;
    }
    
    try {
        // Используем GitHub API для получения статистики
        const username = 'codnix21';
        
        // Получаем данные пользователя
        const response = await fetch(`https://api.github.com/users/${username}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Mozilla/5.0'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch GitHub stats: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Репозитории (первый элемент)
        const reposElement = statItems[0]?.querySelector('.github-stat-number');
        if (reposElement) {
            animateCounter(reposElement, data.public_repos || 0);
        }
        
        // Коммиты (второй элемент) - приблизительная оценка
        const commitsElement = statItems[1]?.querySelector('.github-stat-number');
        if (commitsElement) {
            const estimatedCommits = (data.public_repos || 0) * 10;
            animateCounter(commitsElement, estimatedCommits);
        }
        
        // Звезды (третий элемент)
        const starsElement = statItems[2]?.querySelector('.github-stat-number');
        if (starsElement) {
            // Получаем общее количество звезд из репозиториев
            try {
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/vnd.github.v3+json',
                        'User-Agent': 'Mozilla/5.0'
                    }
                });
                if (reposResponse.ok) {
                    const repos = await reposResponse.json();
                    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
                    animateCounter(starsElement, totalStars);
                } else {
                    animateCounter(starsElement, 0);
                }
            } catch (err) {
                animateCounter(starsElement, 0);
            }
        }
        
        // Контрибьюторы (четвертый элемент) - получаем из репозиториев
        const contributorsElement = statItems[3]?.querySelector('.github-stat-number');
        if (contributorsElement) {
            try {
                // Получаем все репозитории
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/vnd.github.v3+json',
                        'User-Agent': 'Mozilla/5.0'
                    }
                });
                
                if (reposResponse.ok) {
                    const repos = await reposResponse.json();
                    // Получаем уникальных контрибьюторов из всех репозиториев
                    const contributorsSet = new Set();
                    
                    // Для каждого репозитория получаем контрибьюторов (ограничиваемся первыми 5 репо для производительности)
                    const reposToCheck = repos.slice(0, 10);
                    
                    for (const repo of reposToCheck) {
                        try {
                            const contributorsResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/contributors?per_page=10`, {
                                method: 'GET',
                                headers: {
                                    'Accept': 'application/vnd.github.v3+json',
                                    'User-Agent': 'Mozilla/5.0'
                                }
                            });
                            
                            if (contributorsResponse.ok) {
                                const contributors = await contributorsResponse.json();
                                contributors.forEach(contributor => {
                                    if (contributor.login !== username) {
                                        contributorsSet.add(contributor.login);
                                    }
                                });
                            }
                        } catch (err) {
                            // Пропускаем репозиторий при ошибке
                            continue;
                        }
                    }
                    
                    animateCounter(contributorsElement, contributorsSet.size);
                } else {
                    // Если не удалось получить репозитории, используем подписчиков как fallback
                    animateCounter(contributorsElement, data.followers || 0);
                }
            } catch (err) {
                // При ошибке используем подписчиков как fallback
                animateCounter(contributorsElement, data.followers || 0);
            }
        }
        
    } catch (error) {
        // Устанавливаем значения по умолчанию при ошибке
        const statNumbers = document.querySelectorAll('.github-stat-number');
        statNumbers.forEach((el) => {
            if (el && (el.textContent === '0' || el.textContent.trim() === '')) {
                el.textContent = '—';
            }
        });
    }
}

function animateCounter(element, target) {
    if (!element) {
        return;
    }
    
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

function animateGitHubStats() {
    const statItems = document.querySelectorAll('.github-stat-item');
    statItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate');
        }, index * 100);
    });
}

// Принудительная загрузка статистики при загрузке страницы (если секция уже видна)
window.addEventListener('load', function() {
    const githubStatsSection = document.querySelector('#github-stats');
    if (githubStatsSection) {
        const rect = githubStatsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
            setTimeout(() => {
                loadGitHubStats();
                animateGitHubStats();
            }, 1000);
        }
    }
});

function animateTechnologies() {
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate');
        }, index * 50);
    });
}

function animateWorkflow() {
    const workflowItems = document.querySelectorAll('.workflow-item');
    workflowItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate');
        }, index * 100);
    });
}