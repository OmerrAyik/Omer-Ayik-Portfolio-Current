import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation function
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.get_in_touch': 'Get in Touch',

    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.description': 'Building modern, high-performance web apps with React & TypeScript. Clean code, pixel-perfect design, seamless experiences.',
    'hero.download_cv': 'Download CV',
    'hero.view_projects': 'View Projects',

    // About Section
    'about.title_prefix': 'About',
    'about.title_highlight': 'Me',
    'about.download_cv': 'Download CV',
    'about.contact_info': 'Contact Information',
    'about.paragraph1': 'Graduated from Istanbul Topkapı University with a degree in Management Information Systems (GPA: 3.10). As a React and JavaScript-focused Front-End Developer, I have contributed to corporate projects with expertise in component-based architecture.',
    'about.paragraph2': 'I specialize in developing user interfaces, implementing REST API integrations, and creating responsive interfaces that prioritize performance and user experience. I value teamwork and am committed to writing sustainable, clean code.',
    'about.paragraph3': 'With experience in corporate aviation systems and freelance projects, I bring a comprehensive understanding of modern web development practices and agile methodologies.',
    'about.location_label': 'Location',
    'about.phone_label': 'Phone',
    'about.email_label': 'Email',
    'about.location_value': 'Istanbul, Bağcılar, Turkey',
    'about.phone_value': '+90 533 199 24 89',
    'about.email_value': 'ayik3456@gmail.com',
    'about.years_experience': 'Years Experience',
    'about.projects_completed': 'Projects Completed',

    // Skills Section
    'skills.title_prefix': 'Technical',
    'skills.title': 'Skills',
    'skills.frontend_frameworks': 'Frontend Frameworks & Libraries',
    'skills.styling_ui': 'Styling & UI',
    'skills.react_ecosystem': 'React Ecosystem',
    'skills.backend_integration': 'Backend & Integration',
    'skills.tools_design': 'Tools & Design',
    'skills.development_practices': 'Development Practices',
    'skills.core_competencies': 'Core Competencies',
    'skills.subtitle': 'A comprehensive toolkit of modern technologies and best practices',
    'skills.comp1': 'Component-Based Architecture',
    'skills.comp2': 'REST API Integration',
    'skills.comp3': 'Responsive Web Design',
    'skills.comp4': 'Performance Optimization',
    'skills.comp5': 'Agile Development',
    'skills.comp6': 'Team Collaboration',

    // Experience Section
    'experience.title_prefix': 'Work',
    'experience.title': 'Experience',
    'experience.subtitle': 'Professional journey and contributions to impactful projects',

    // Experience Content
    'experience.job1_title': 'Front-End Developer',
    'experience.job1_company': 'Avsos.ai / SunExpress Airlines Project',
    'experience.job1_period': 'February 2025 - August 2025',
    'experience.job1_location': 'Turkey',
    'experience.job1_resp1': 'Worked on SunExpress Airlines\' in-flight food and beverage service management system corporate web application',
    'experience.job1_resp2': 'Developed improvements and new features for operational modules including Inventory, Fresh Foods, Orders, Post Management, Missing Orders, Flights, Combos, and Barset using React.js',
    'experience.job1_resp3': 'Managed component state and lifecycle with React Hooks (useState, useEffect)',
    'experience.job1_resp4': 'Developed dynamic and data-driven user interfaces by fetching asynchronous data from REST APIs',
    'experience.job1_resp5': 'Actively participated in sprint planning and code reviews using Agile methodologies',

    'experience.job2_title': 'Freelance Web Developer',
    'experience.job2_company': 'Self-Employed',
    'experience.job2_period': 'December 2023 - Present',
    'experience.job2_location': 'Remote',
    'experience.job2_resp1': 'Designed and developed user-focused, modern, and performant web interfaces',
    'experience.job2_resp2': 'Created responsive and aesthetic web projects using HTML, CSS, JavaScript, React, jQuery, and Bootstrap',
    'experience.job2_resp3': 'Analyzed client needs through direct communication and provided customized solutions',
    'experience.job2_resp4': 'Prioritized time management, adherence to delivery deadlines, and customer satisfaction in freelance projects',

    'experience.job3_title': 'IT Staff',
    'experience.job3_company': 'Kağıthane Kaymakamlığı (District Governorship)',
    'experience.job3_period': 'July 2024 - August 2024',
    'experience.job3_location': 'Istanbul, Turkey',
    'experience.job3_resp1': 'Developed applications using Web APIs and participated in integration processes with existing systems',
    'experience.job3_resp2': 'Worked on user interface development in web-based projects',
    'experience.job3_resp3': 'Provided technical support in the IT Department and contributed to resolving user issues',

    'experience.job4_title': 'Supervisor',
    'experience.job4_company': '2K İnsan Kaynakları (Human Resources)',
    'experience.job4_period': 'December 2022 - July 2024',
    'experience.job4_location': 'Istanbul, Turkey',
    'experience.job4_resp1': 'Managed team operations and coordinated human resources activities',
    'experience.job4_resp2': 'Oversaw recruitment processes and employee onboarding procedures',
    'experience.job4_resp3': 'Implemented efficiency improvements in HR workflows and documentation',

    // Education Section
    'education.title': 'Education',
    'education.languages': 'Languages',
    'education.academic_background': 'Academic Background',
    'education.edu1_degree': 'Bachelor of Management Information Systems',
    'education.edu1_school': 'Istanbul Topkapı University',
    'education.edu1_period': '2020 - 2024',
    'education.edu1_gpa': '3.10 / 4.00',
    'education.edu1_desc': 'Comprehensive education in information systems management, software development, and business processes.',
    'education.edu1_high1': 'Management Information Systems',
    'education.edu1_high2': 'Software Development',
    'education.edu1_high3': 'Database Management',
    'education.edu1_high4': 'System Analysis & Design',
    'education.edu2_degree': 'Information Technologies',
    'education.edu2_school': 'Edip İplik Vocational Technical High School',
    'education.edu2_period': '2016 - 2020',
    'education.edu2_gpa': '93.22 / 100',
    'education.edu2_achievement': 'Graduated 1st in School',
    'education.edu2_desc': 'Specialized technical education in information technologies with focus on programming and web development.',
    'education.edu2_high1': 'Web Development',
    'education.edu2_high2': 'Programming Fundamentals',
    'education.edu2_high3': 'Network Technologies',
    'education.edu2_high4': 'Database Systems',
    'education.lang1_name': 'English',
    'education.lang1_level': 'B2 (Upper Intermediate)',
    'education.lang1_institution': 'British Time Language Schools',
    'education.lang1_desc': 'Proficient in both written and spoken English. Capable of effective communication in professional environments including technical discussions and customer meetings.',
    'education.lang2_name': 'Turkish',
    'education.lang2_level': 'Native',
    'education.lang2_desc': 'Native speaker with excellent communication skills.',

    // Certifications Section
    'certifications.title': 'Certifications',
    'certifications.references': 'References',
    'certifications.professional_certifications': 'Professional Certifications',
    'certifications.professional_references': 'Professional References',
    'certifications.cert1_title': 'English Language Proficiency (B2)',
    'certifications.cert1_level': 'Upper Intermediate',
    'certifications.cert1_institution': 'British Time Language Schools',
    'certifications.cert1_desc': 'Certified proficiency in English communication for professional and technical environments.',
    'certifications.cert2_title': 'Advanced Web Development',
    'certifications.cert2_level': 'Complete Course',
    'certifications.cert2_institution': 'Udemy Platform',
    'certifications.cert2_desc': 'Comprehensive training from beginner to advanced level in modern web development technologies including JavaScript, jQuery, Bootstrap, HTML5, and CSS3.',
    'certifications.cert3_title': 'Website Usability',
    'certifications.cert3_institution': 'BTK Academy Platform',
    'certifications.cert3_desc': 'Specialized training in user experience, accessibility, and website usability best practices.',
    'certifications.cert4_title': 'Website Design Fundamentals',
    'certifications.cert4_institution': 'METU (Middle East Technical University)',
    'certifications.cert4_desc': 'Foundational principles of web design, layout, and visual communication.',
    'certifications.ref1_name': 'Salih Enver Yurter',
    'certifications.ref1_position': 'Founding Partner at Avsos.ai',
    'certifications.ref1_email': 'enveryurter@gmail.com',
    'certifications.ref2_name': 'Resul Çağdaş',
    'certifications.ref2_position': 'IT Staff at Kağıthane Kaymakamlığı',
    'certifications.ref2_email': 'resulcagdas@gmail.com',

    // Projects Section
    'projects.title_prefix': 'Featured',
    'projects.title': 'Projects',
    'projects.view_project': 'View Project',
    'projects.key_features': 'Key Features',
    'projects.subtitle': 'Showcase of recent work and personal projects',
    'projects.view_github': 'View More on GitHub',
    'projects.erikliteknik_title': 'Kombi Servis',
    'projects.erikliteknik_desc': 'Professional heating and cooling services website with service booking system, modern design, and customer-focused functionality for HVAC services.',
    'projects.alparslantekno_title': 'Alparslan Tekno',
    'projects.alparslantekno_desc': 'Cutting-edge technology company website with modern design, showcasing innovative solutions and technology services for digital transformation.',
    'projects.digitalev_title': 'Digital Evin Agency',
    'projects.digitalev_desc': 'Web development agency website showcasing premium website projects, UI/UX design services, and modern web development solutions for brands.',

    // Project Features
    'projects.erikliteknik_feature1': 'HVAC service booking system',
    'projects.erikliteknik_feature2': 'Professional service presentation',
    'projects.erikliteknik_feature3': 'Customer-focused functionality',
    'projects.erikliteknik_feature4': 'Modern responsive design',
    'projects.erikliteknik_feature5': 'Fast loading performance',
    'projects.alparslantekno_feature1': 'Technology solutions showcase',
    'projects.alparslantekno_feature2': 'Innovative services presentation',
    'projects.alparslantekno_feature3': 'Modern corporate design',
    'projects.alparslantekno_feature4': 'Digital transformation focus',
    'projects.alparslantekno_feature5': 'Performance optimized',
    'projects.digitalev_feature1': 'Web agency portfolio',
    'projects.digitalev_feature2': 'Premium project showcase',
    'projects.digitalev_feature3': 'UI/UX design services',
    'projects.digitalev_feature4': 'Client project examples',
    'projects.digitalev_feature5': 'Modern web development',

    // Contact Section
    'contact.title_prefix': 'Get In',
    'contact.title_highlight': 'Touch',
    'contact.subtitle': 'Have a project in mind or want to discuss opportunities? Feel free to reach out!',
    'contact.info_title': 'Contact Information',
    'contact.connect_title': 'Connect With Me',
    'contact.open_title': 'Open to Opportunities',
    'contact.open_desc': 'Currently available for freelance projects and full-time positions. Let\'s create something amazing together!',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.send_message': 'Send Message',
    'contact.form_name': 'Your Name',
    'contact.form_email': 'Your Email',
    'contact.form_subject': 'Subject',
    'contact.form_message': 'Message',

    // Footer
    'footer.copyright': '© 2025 Ömer Ayık. All rights reserved.'
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.skills': 'Yetenekler',
    'nav.experience': 'Deneyim',
    'nav.projects': 'Projeler',
    'nav.education': 'Eğitim',
    'nav.contact': 'İletişim',
    'nav.get_in_touch': 'İletişime Geç',

    // Hero Section
    'hero.greeting': 'Merhaba, Ben',
    'hero.description': 'React ve TypeScript ile modern, yüksek performanslı web uygulamaları geliştiriyorum. Temiz kod, kusursuz tasarım, sorunsuz deneyimler.',
    'hero.download_cv': 'CV İndir',
    'hero.view_projects': 'Projeleri Gör',

    // About Section
    'about.title_prefix': 'Hakkımda',
    'about.title_highlight': '',
    'about.download_cv': 'CV İndir',
    'about.contact_info': 'İletişim Bilgileri',
    'about.paragraph1': 'İstanbul Topkapı Üniversitesi Yönetim Bilişim Sistemleri bölümünden (GPA: 3.10) mezunuyum. React ve JavaScript odaklı bir Front-End Geliştirici olarak, bileşen tabanlı mimari uzmanlığıyla kurumsal projelere katkıda bulundum.',
    'about.paragraph2': 'Kullanıcı arayüzleri geliştirmek, REST API entegrasyonları uygulamak ve performans ile kullanıcı deneyimini önceliklendiren duyarlı arayüzler oluşturmakta uzmanlaşıyorum. Takım çalışmasını değer veriyor ve sürdürülebilir, temiz kod yazmaya bağlıyım.',
    'about.paragraph3': 'Kurumsal havacılık sistemleri ve freelance projelerdeki deneyimimle, modern web geliştirme pratikleri ve agile metodolojileri hakkında kapsamlı bir anlayış getiriyorum.',
    'about.location_label': 'Konum',
    'about.phone_label': 'Telefon',
    'about.email_label': 'E-posta',
    'about.location_value': 'İstanbul, Bağcılar, Türkiye',
    'about.phone_value': '+90 533 199 24 89',
    'about.email_value': 'ayik3456@gmail.com',
    'about.years_experience': 'Yıllık Deneyim',
    'about.projects_completed': 'Tamamlanan Proje',

    // Skills Section
    'skills.title_prefix': 'Teknik',
    'skills.title': 'Yetenekler',
    'skills.frontend_frameworks': 'Frontend Frameworks & Kütüphaneler',
    'skills.styling_ui': 'Styling & UI',
    'skills.react_ecosystem': 'React Ekosistemi',
    'skills.backend_integration': 'Backend & Entegrasyon',
    'skills.tools_design': 'Araçlar & Tasarım',
    'skills.development_practices': 'Geliştirme Pratikleri',
    'skills.core_competencies': 'Temel Yetkinlikler',
    'skills.subtitle': 'Modern teknolojiler ve en iyi uygulamalardan oluşan kapsamlı bir araç seti',
    'skills.comp1': 'Bileşen Tabanlı Mimari',
    'skills.comp2': 'REST API Entegrasyonu',
    'skills.comp3': 'Duyarlı Web Tasarım',
    'skills.comp4': 'Performans Optimizasyonu',
    'skills.comp5': 'Agile Geliştirme',
    'skills.comp6': 'Takım Çalışması',

    // Experience Section
    'experience.title_prefix': 'İş',
    'experience.title': 'Deneyimi',
    'experience.subtitle': 'Profesyonel yolculuk ve etkili projelere katkılar',

    // Experience Content
    'experience.job1_title': 'Front-End Geliştirici',
    'experience.job1_company': 'Avsos.ai / SunExpress Airlines Projesi',
    'experience.job1_period': 'Şubat 2025 - Ağustos 2025',
    'experience.job1_location': 'Türkiye',
    'experience.job1_resp1': 'SunExpress Airlines\'ın uçuş içi yiyecek ve içecek hizmet yönetim sistemi kurumsal web uygulaması geliştirme projemde çalıştım',
    'experience.job1_resp2': 'React.js kullanarak Envanter, Taze Gıdalar, Siparişler, Post Yönetimi, Eksik Siparişler, Uçuşlar, Kombolar ve Barset gibi operasyonel modüller için iyileştirmeler ve yeni özellikler geliştirdim',
    'experience.job1_resp3': 'React Hooks (useState, useEffect) ile bileşen durumunu ve yaşam döngüsünü etkin bir şekilde yönettim',
    'experience.job1_resp4': 'REST API\'lerden asenkron veri çekerek dinamik ve veri odaklı kullanıcı arayüzleri oluşturdum',
    'experience.job1_resp5': 'Agile metodolojilerini kullanarak sprint planlamasına ve kod incelemelerine aktif olarak katıldım',

    'experience.job2_title': 'Freelance Web Geliştirici',
    'experience.job2_company': 'Kendi İşim',
    'experience.job2_period': 'Aralık 2023 - Mevcut',
    'experience.job2_location': 'Uzaktan',
    'experience.job2_resp1': 'Kullanıcı odaklı, modern ve performanslı web arayüzleri tasarladım ve geliştirdim',
    'experience.job2_resp2': 'HTML, CSS, JavaScript, React, jQuery ve Bootstrap kullanarak duyarlı ve estetik web projeleri oluşturdum',
    'experience.job2_resp3': 'Doğrudan iletişim yoluyla müşteri ihtiyaçlarını analiz ettim ve özel çözümler sundum',
    'experience.job2_resp4': 'Freelance projelerde zaman yönetimini, teslim tarihlerine uyumu ve müşteri memnuniyetini önceliklendirdim',

    'experience.job3_title': 'IT Personeli',
    'experience.job3_company': 'Kağıthane Kaymakamlığı',
    'experience.job3_period': 'Temmuz 2024 - Ağustos 2024',
    'experience.job3_location': 'İstanbul, Türkiye',
    'experience.job3_resp1': 'Web API\'leri kullanarak uygulamalar geliştirdim ve mevcut sistemlerle entegrasyon süreçlerine katıldım',
    'experience.job3_resp2': 'Web tabanlı projelerde kullanıcı arayüzü geliştirme üzerinde çalıştım',
    'experience.job3_resp3': 'IT Departmanında teknik destek sağladım ve kullanıcı sorunlarının çözülmesine katkıda bulundum',

    'experience.job4_title': 'Supervisor',
    'experience.job4_company': '2K İnsan Kaynakları',
    'experience.job4_period': 'Aralık 2022 - Temmuz 2024',
    'experience.job4_location': 'İstanbul, Türkiye',
    'experience.job4_resp1': 'Ekip operasyonlarını yönettim ve insan kaynakları faaliyetlerini koordine ettim',
    'experience.job4_resp2': 'İşe alım süreçlerini ve çalışan oryantasyon prosedürlerini denetledim',
    'experience.job4_resp3': 'HR iş akışlarında ve dokümantasyonda verimlilik iyileştirmeleri uyguladım',

    // Education Section
    'education.title': 'Eğitim',
    'education.languages': 'Diller',
    'education.academic_background': 'Akademik Geçmiş',
    'education.edu1_degree': 'Yönetim Bilişim Sistemleri Lisans',
    'education.edu1_school': 'İstanbul Topkapı Üniversitesi',
    'education.edu1_period': '2020 - 2024',
    'education.edu1_gpa': '3.10 / 4.00',
    'education.edu1_desc': 'Bilgi sistemleri yönetimi, yazılım geliştirme ve iş süreçlerinde kapsamlı eğitim.',
    'education.edu1_high1': 'Yönetim Bilişim Sistemleri',
    'education.edu1_high2': 'Yazılım Geliştirme',
    'education.edu1_high3': 'Veritabanı Yönetimi',
    'education.edu1_high4': 'Sistem Analizi & Tasarımı',
    'education.edu2_degree': 'Bilişim Teknolojileri',
    'education.edu2_school': 'Edip İplik Mesleki ve Teknik Anadolu Lisesi',
    'education.edu2_period': '2016 - 2020',
    'education.edu2_gpa': '93.22 / 100',
    'education.edu2_achievement': 'Okul Birincisi Olarak Mezun',
    'education.edu2_desc': 'Programlama ve web geliştirme odaklı bilişim teknolojilerinde uzmanlaşmış teknik eğitim.',
    'education.edu2_high1': 'Web Geliştirme',
    'education.edu2_high2': 'Programlama Temelleri',
    'education.edu2_high3': 'Ağ Teknolojileri',
    'education.edu2_high4': 'Veritabanı Sistemleri',
    'education.lang1_name': 'İngilizce',
    'education.lang1_level': 'B2 (Üst Orta)',
    'education.lang1_institution': 'British Time Dil Okulları',
    'education.lang1_desc': 'Yazılı ve sözlü İngilizce\'de yetkin. Teknik tartışmalar ve müşteri toplantıları dahil profesyonel ortamlarda etkili iletişim kurabilme yeteneği.',
    'education.lang2_name': 'Türkçe',
    'education.lang2_level': 'Ana Dil',
    'education.lang2_desc': 'Mükemmel iletişim becerilerine sahip ana dil konuşmacısı.',

    // Certifications Section
    'certifications.title': 'Sertifikalar',
    'certifications.references': 'Referanslar',
    'certifications.professional_certifications': 'Profesyonel Sertifikalar',
    'certifications.professional_references': 'Profesyonel Referanslar',
    'certifications.cert1_title': 'İngilizce Dil Yeterliliği (B2)',
    'certifications.cert1_level': 'Üst Orta Düzey',
    'certifications.cert1_institution': 'British Time Dil Okulları',
    'certifications.cert1_desc': 'Profesyonel ve teknik ortamlar için İngilizce iletişim yeterliliği sertifikası.',
    'certifications.cert2_title': 'İleri Seviye Web Geliştirme',
    'certifications.cert2_level': 'Tam Kurs',
    'certifications.cert2_institution': 'Udemy Platformu',
    'certifications.cert2_desc': 'JavaScript, jQuery, Bootstrap, HTML5 ve CSS3 dahil modern web geliştirme teknolojilerinde başlangıçtan ileri seviyeye kapsamlı eğitim.',
    'certifications.cert3_title': 'Web Sitesi Kullanılabilirliği',
    'certifications.cert3_institution': 'BTK Akademi Platformu',
    'certifications.cert3_desc': 'Kullanıcı deneyimi, erişilebilirlik ve web sitesi kullanılabilirliği en iyi uygulamalarında uzmanlaşmış eğitim.',
    'certifications.cert4_title': 'Web Sitesi Tasarım Temelleri',
    'certifications.cert4_institution': 'ODTÜ (Orta Doğu Teknik Üniversitesi)',
    'certifications.cert4_desc': 'Web tasarımının temel ilkeleri, düzen ve görsel iletişim.',
    'certifications.ref1_name': 'Salih Enver Yurter',
    'certifications.ref1_position': 'Avsos.ai Kurucu Ortak',
    'certifications.ref1_email': 'enveryurter@gmail.com',
    'certifications.ref2_name': 'Resul Çağdaş',
    'certifications.ref2_position': 'Kağıthane Kaymakamlığı IT Personeli',
    'certifications.ref2_email': 'resulcagdas@gmail.com',

    // Projects Section
    'projects.title_prefix': 'Öne Çıkan',
    'projects.title': 'Projeler',
    'projects.view_project': 'Projeyi Gör',
    'projects.key_features': 'Öne Çıkan Özellikler',
    'projects.subtitle': 'Son çalışmalar ve kişisel projelerin vitrini',
    'projects.view_github': 'GitHub\'da Daha Fazla Gör',
    'projects.erikliteknik_title': 'Kombi Servis',
    'projects.erikliteknik_desc': 'Profesyonel ısıtma ve soğutma hizmetleri web sitesi, servis rezervasyon sistemi, modern tasarım ve müşteri odaklı fonksiyonellik ile HVAC hizmetleri.',
    'projects.alparslantekno_title': 'Alparslan Tekno',
    'projects.alparslantekno_desc': 'Modern tasarımlı, yenilikçi çözümler ve teknoloji hizmetlerini sergileyen, dijital dönüşüm için öncü teknoloji şirketi web sitesi.',
    'projects.digitalev_title': 'Digital Evin Ajansı',
    'projects.digitalev_desc': 'Premium web site projelerini, UI/UX tasarım hizmetlerini ve markalar için modern web geliştirme çözümlerini sergileyen web geliştirme ajansı sitesi.',

    // Project Features
    'projects.erikliteknik_feature1': 'HVAC servis rezervasyon sistemi',
    'projects.erikliteknik_feature2': 'Profesyonel hizmet sunumu',
    'projects.erikliteknik_feature3': 'Müşteri odaklı fonksiyonellik',
    'projects.erikliteknik_feature4': 'Modern duyarlı tasarım',
    'projects.erikliteknik_feature5': 'Hızlı yükleme performansı',
    'projects.alparslantekno_feature1': 'Teknoloji çözümleri sergileme',
    'projects.alparslantekno_feature2': 'Yenilikçi hizmetler sunumu',
    'projects.alparslantekno_feature3': 'Modern kurumsal tasarım',
    'projects.alparslantekno_feature4': 'Dijital dönüşüm odaklı',
    'projects.alparslantekno_feature5': 'Performans optimize',
    'projects.digitalev_feature1': 'Web ajansı portfolyosu',
    'projects.digitalev_feature2': 'Premium proje sergileme',
    'projects.digitalev_feature3': 'UI/UX tasarım hizmetleri',
    'projects.digitalev_feature4': 'Müşteri proje örnekleri',
    'projects.digitalev_feature5': 'Modern web geliştirme',

    // Contact Section
    'contact.title_prefix': 'İletişime',
    'contact.title_highlight': 'Geç',
    'contact.subtitle': 'Aklınızda bir proje mi var veya fırsatları görüşmek mi istiyorsunuz? İletişime geçin!',
    'contact.info_title': 'İletişim Bilgileri',
    'contact.connect_title': 'Benimle Bağlantı Kur',
    'contact.open_title': 'Fırsatlara Açık',
    'contact.open_desc': 'Şu anda freelance projeler ve tam zamanlı pozisyonlar için müsaitim. Birlikte harika bir şey yaratalım!',
    'contact.email': 'E-posta',
    'contact.phone': 'Telefon',
    'contact.location': 'Konum',
    'contact.send_message': 'Mesaj Gönder',
    'contact.form_name': 'Adınız',
    'contact.form_email': 'E-posta Adresiniz',
    'contact.form_subject': 'Konu',
    'contact.form_message': 'Mesajınız',

    // Footer
    'footer.copyright': '© 2025 Ömer Ayık. Tüm hakları saklıdır.'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
