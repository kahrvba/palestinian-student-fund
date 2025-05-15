"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar" | "tr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "Who Are We?",
    "nav.news": "Latest News",
    "nav.programs": "Our Programs",
    "nav.success": "Success Stories",
    "nav.apply": "Apply for Grants",
    "nav.activities": "Previous Activities",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact Us",

    "hero.title": "Empowering Palestinian Students Worldwide",
    "hero.subtitle":
      "Providing scholarships, university admissions assistance, and academic support to help Palestinian students achieve their educational dreams.",
    "hero.cta.apply": "Apply for Scholarship",
    "hero.cta.explore": "Explore Programs",


    "about.widgt": "Values",
    "about.title":"Our Values",
    "about.subtitle":"PSSF",
    "about.identity": "National Belonging",
    "about.identity.desc": "We operate from a deep commitment to the Palestinian cause, striving to instill national identity in everything we do.",
    "about.identity2":"Academic Excellence",
    "about.identity2.desc":"We support scientific and academic talent and encourage the continuous pursuit of excellence and knowledge",
    "about.identity3":"Justice and Equal Opportunity",
    "about.identity3.desc":"We believe in the necessity of providing opportunities to society based on competence and merit, without discrimination.",
    "about.identity4":"Transparency and Integrity",
    "about.identity4.desc":"We conduct our work with a spirit of clarity and accountability, maintaining mutual trust with our partners.",
    "about.identity5":"Sustainability",
    "about.identity5.desc":"We plan and operate with a forward-looking spirit that ensures a long-term positive impact on Palestinian society.",
    "about.identity6":"Youth Empowerment",
    "about.identity6.desc":"We believe in the importance of supporting and empowering young Palestinian academic talent, as they are the primary engine for building the future and achieving sustainable national development.",
    "about.identity7":"Initiative",
    "about.identity7.desc":"We constantly strive to identify student needs, present projects that meet these needs, and encourage students to launch community initiatives.",
    "about.cta":"About Us",

    "about.hero.title": "Who Are We?",
    "about.hero.description": "The Palestinian Support Fund is an independent, non-profit development entity that aims to support higher education in Palestine by investing in the potential of young academics. The Fund focuses on providing programs and initiatives that contribute to bridging the gap between educational outcomes and community needs by providing scholarships and facilitating access to nationally prioritized majors. It also works to create a knowledge network that brings together Palestinian talents within the country and abroad, within a comprehensive development vision.",
    "about.mission.tag": "Our Mission",
    "about.mission.title": "Empowering Through Education",
    "about.mission.text": "The Palestinian Support Fund aims to support outstanding Palestinian students to complete their postgraduate studies in vital specializations needed by Palestinian society, by offering targeted scholarships. The Fund seeks to achieve an effective link between the education sector and the requirements of economic and social development in Palestine. It also works to establish a network of Palestinian academic competencies inside and outside the country to support scientific research and contribute to the development of national institutions. The Fund believes in the importance of enhancing the role of youth in community activities through educational and awareness programs aimed at consolidating the concepts of interaction, social harmony, and national belonging.",
    "about.vision.tag": "Our Vision",
    "about.vision.title": "Building Future Leaders",
    "about.vision.text": "To elevate young Palestinian academic competencies across various fields essential to society and empower them to play a vital, effective role in building a strong, sustainable, and prosperous future for the State of Palestine.",
    "about.foundation.tag": "Foundation Identity",
    "about.foundation.title": "Our Story",
    "about.foundation.text1": "Established in 2015 in Istanbul, Turkey, the Palestinian Student Support Fund was founded by a group of educators and professionals who recognized the challenges faced by Palestinian students seeking higher education opportunities.",
    "about.foundation.text2": "What began as a small initiative providing scholarships to a handful of students has grown into a comprehensive support organization that has helped hundreds of Palestinian students access quality education across the globe.",
    "about.foundation.text3": "Our foundation is registered as a non-profit educational organization in Turkey, operating with full transparency and accountability to our donors and partners.",
    "about.team.tag": "Administrative Structure",
    "about.team.title": "Our Team",
    "about.team.viewAll": "View Full Team",
    "about.team.member1.name": "Dr. Mahmoud Abbas",
    "about.team.member1.title": "Executive Director",
    "about.team.member1.description": "Former university professor with 20+ years of experience in educational administration.",
    "about.team.member2.name": "Dr. Layla Khalid",
    "about.team.member2.title": "Academic Director",
    "about.team.member2.description": "Specializes in international education policy and student mentorship programs.",
    "about.team.member3.name": "Omar Farooq",
    "about.team.member3.title": "Financial Director",
    "about.team.member3.description": "Expert in non-profit financial management and scholarship fund administration.",

    "work.badget":"Educate. Empower. Connect.",
    "work.title":"The Foundation's areas of work",
    "work.subtitle":"Empowering Palestinian Youth Through Education, Innovation, and Connection",
    "card1.title":"Scholarships and Academic Support",
    "Card1.desc":"Providing scholarships to Palestinian youth in specializations needed by the labor market and society inside and outside Palestine.",
    "Card2.title":"Capacity Building and Professional Development",
    "Card2.desc":"Organizing training workshops, professional development programs, and consultations to prepare youth for the labor market and enhance their leadership and technical skills.",
    "Card3.title":"Scientific Research and Knowledge Contribution",
    "Card3.desc":"Funding and encouraging applied research related to national development, and establishing partnerships with universities and research centers.",
    "Card4.title":"Strengthening National Identity and Community Participation",
    "Card4.desc":"Implementing cultural, educational, and awareness programs aimed at instilling national values ​​and activating the role of youth in public life.",
    "Card5.title": "Building a network of Palestinian competencies",
    "Card5.desc": "linking local Palestinian competencies abroad, and activating bridges of communication between academics, researchers, and relevant institutions.",

    "footer.rights": "All rights reserved.",
    "footer.programs": "Programs",
    "footer.about": "About",
    "footer.contact": "Contact",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "من نحن؟",
    "nav.news": "آخر الأخبار",
    "nav.programs": "برامجنا",
    "nav.success": "قصص النجاح",
    "nav.apply": "التقدم للمنح",
    "nav.activities": "الأنشطة السابقة",
    "nav.testimonials": "الشهادات",
    "nav.contact": "اتصل بنا",

    "about.widgt": "القيم",
    "about.title":"قيمنا",
    "about.subtitle":"PSSF",
    "about.identity": "الانتماء الوطني",
    "about.identity.desc": "نعمل انطلاقًا من التزامنا الراسخ بالقضية الفلسطينية، ونسعى جاهدين لترسيخ الهوية الوطنية في كل ما نقوم به.",
    "about.identity2":"التميز الأكاديمي",
    "about.identity2.desc":"ندعم المواهب العلمية والأكاديمية، ونشجع على السعي الدائم نحو التميز والمعرفة.",
    "about.identity3":"العدالة وتكافؤ الفرص",
    "about.identity3.desc":"نؤمن بضرورة توفير الفرص للمجتمع على أساس الكفاءة والجدارة، دون تمييز.",
    "about.identity4":"الشفافية والنزاهة",
    "about.identity4.desc":"نؤدي عملنا بروح من الوضوح والمساءلة، محافظين على الثقة المتبادلة مع شركائنا.",
    "about.identity5":"الاستدامة",
    "about.identity5.desc":"نخطط ونعمل بروح استشرافية تضمن أثرًا إيجابيًا طويل الأمد على المجتمع الفلسطيني.",
    "about.identity6":"تمكين الشباب",
    "about.identity6.desc":"نؤمن بأهمية دعم وتمكين المواهب الأكاديمية الفلسطينية الشابة، فهم المحرك الأساسي لبناء المستقبل وتحقيق التنمية الوطنية المستدامة.",
    "about.identity7":"المبادرة",
    "about.identity7.desc":"نسعى باستمرار لتحديد احتياجات الطلاب، وتقديم مشاريع تلبي هذه الاحتياجات، وتشجيعهم على إطلاق مبادرات مجتمعية.",
    "about.cta":"من نحن",



    "hero.title": "تمكين الطلاب الفلسطينيين حول العالم",
    "hero.subtitle":
      "تقديم المنح الدراسية والمساعدة في القبول الجامعي والدعم الأكاديمي لمساعدة الطلاب الفلسطينيين على تحقيق أحلامهم التعليمية.",
    "hero.cta.apply": "التقدم للمنحة",
    "hero.cta.explore": "استكشاف البرامج",
    "about.hero.title": "من نحن؟",
    "about.hero.description": "صندوق الإسناد الفلسطيني هو كيان تنموي مستقل وغير ربحي، يهدف إلى دعم مسيرة التعليم العالي في فلسطين عبر الاستثمار في الطاقات الشبابية الأكاديمية. يركّز الصندوق على تقديم برامج ومبادرات تساهم في سد الفجوة بين مخرجات التعليم واحتياجات المجتمع، من خلال توفير منح دراسية، وتيسير الوصول إلى التخصصات ذات الأولوية الوطنية. كما يعمل على خلق شبكة معرفية تجمع بين الكفاءات الفلسطينية داخل الوطن وفي الشتات، ضمن رؤية تنموية شاملة",
    "about.mission.tag": "رسالتنا",
    "about.mission.title": "التمكين من خلال التعليم",
    "about.mission.text": "يُعنى صندوق الإسناد الفلسطيني بدعم الطلبة الفلسطينيين المتميزين لإكمال دراساتهم العليا في التخصصات الحيوية التي يحتاجها المجتمع الفلسطيني، من خلال تقديم منح دراسية موجهة. ويسعى الصندوق إلى تحقيق الربط الفعّال بين قطاع التعليم ومتطلبات التنمية الاقتصادية والاجتماعية في فلسطين. كما يعمل على تأسيس شبكة من الكفاءات الأكاديمية الفلسطينية داخل الوطن وخارجه، لدعم البحث العلمي والمساهمة في تطوير المؤسسات الوطنية. ويؤمن الصندوق بأهمية تعزيز دور الشباب في النشاط المجتمعي، عبر برامج تعليمية وتوعوية تهدف إلى ترسيخ مفاهيم التفاعل، والانسجام الاجتماعي، والانتماء الوطني",
    "about.vision.tag": "رؤيتنا",
    "about.vision.title": "بناء قادة المستقبل",
    "about.vision.text": "كفاءات أكاديمية فلسطينية شابة في المجالات التي يحتاجها المجتمع الفلسطيني والمساهمة الفعالة في بناء مستقبل مستدام وقوي للدولة الفلسطينية، مع التركيز على دعم الهوية الوطنية وتعزيز المشاركة المجتمعية.",
    "about.foundation.tag": "هوية المؤسسة",
    "about.foundation.title": "قصتنا",
    "about.foundation.text1": "تأسس صندوق دعم الطلاب الفلسطينيين في عام 2015 في إسطنبول، تركيا، على يد مجموعة من المربين والمهنيين الذين أدركوا التحديات التي يواجهها الطلاب الفلسطينيون الساعون للحصول على فرص التعليم العالي.",
    "about.foundation.text2": "ما بدأ كمبادرة صغيرة لتقديم المنح الدراسية لعدد قليل من الطلاب نما ليصبح مؤسسة دعم شاملة ساعدت مئات الطلاب الفلسطينيين في الوصول إلى تعليم عالي الجودة في جميع أنحاء العالم.",
    "about.foundation.text3": "مؤسستنا مسجلة كمنظمة تعليمية غير ربحية في تركيا، تعمل بشفافية ومسؤولية كاملة تجاه المانحين والشركاء.",
    "about.team.tag": "الهيكل الإداري",
    "about.team.title": "فريقنا",
    "about.team.viewAll": "عرض الفريق بالكامل",
    "about.team.member1.name": "د. محمود عباس",
    "about.team.member1.title": "المدير التنفيذي",
    "about.team.member1.description": "أستاذ جامعي سابق مع أكثر من 20 عام من الخبرة في الإدارة التعليمية.",
    "about.team.member2.name": "د. ليلى خالد",
    "about.team.member2.title": "المدير الأكاديمي",
    "about.team.member2.description": "متخصصة في سياسة التعليم الدولي وبرامج إرشاد الطلاب.",
    "about.team.member3.name": "عمر فاروق",
    "about.team.member3.title": "المدير المالي",
    "about.team.member3.description": "خبير في الإدارة المالية للمنظمات غير الربحية وإدارة صناديق المنح الدراسية.",

    "work.badget":"التعليم، التمكين، التواصل.",
    "work.title":"مجالات عمل المؤسسة",
    "work.subtitle": "تمكين الشباب الفلسطيني من خلال التعليم والابتكار والتواصل",
    "card1.title":"المنح الدراسية والدعم الأكاديمي",
    "Card1.desc":"توفير منح دراسية للشباب الفلسطيني في تخصصات يحتاجها سوق العمل والمجتمع داخل فلسطين وخارجها.",
    "Card2.title":"بناء القدرات والتطوير المهني",
    "Card2.desc":"تنظيم ورش عمل تدريبية وبرامج تطوير مهني واستشارات لإعداد الشباب لسوق العمل وتعزيز مهاراتهم القيادية والتقنية.",
    "Card3.title":"البحث العلمي والمساهمة المعرفية",
    "Card3.desc":" تمويل وتشجيع البحوث التطبيقية المتعلقة بالتنمية الوطنية، وإقامة شراكات مع الجامعات ومراكز البحوث.",
    "Card4.title":"تعزيز الهوية الوطنية والمشاركة المجتمعية",
    "Card4.desc":"تنفيذ برامج ثقافية وتعليمية وتوعوية تهدف إلى ترسيخ القيم الوطنية وتفعيل دور الشباب في الحياة العامة.",
    "Card5.title": "بناء شبكة كفاءات فلسطينية",
    "Card5.desc": "ربط الكفاءات الفلسطينية المحلية بالخارج، وتفعيل جسور التواصل بين الأكاديميين والباحثين والمؤسسات ذات العلاقة.",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.programs": "البرامج",
    "footer.about": "عن المؤسسة",
    "footer.contact": "اتصل بنا",
  },
  tr: {
    "nav.home": "Ana Sayfa",
    "nav.about": "Biz Kimiz?",
    "nav.news": "Son Haberler",
    "nav.programs": "Programlarımız",
    "nav.success": "Başarı Hikayeleri",
    "nav.apply": "Burs Başvurusu",
    "nav.activities": "Önceki Etkinlikler",
    "nav.testimonials": "Referanslar",
    "nav.contact": "İletişim",

    "hero.title": "Dünya Çapında Filistinli Öğrencileri Güçlendirme",
    "hero.subtitle":
      "Filistinli öğrencilerin eğitim hayallerini gerçekleştirmelerine yardımcı olmak için burslar, üniversite kabul yardımı ve akademik destek sağlıyoruz.",
    "hero.cta.apply": "Bursa Başvur",
    "hero.cta.explore": "Programları Keşfet",

    "about.title": "Biz Kimiz?",
    "about.subtitle":
      "Filistin Öğrenci Destek Fonu, burslar, üniversite kabul yardımı ve kapsamlı akademik destek yoluyla dünya çapındaki Filistinli öğrencilere eğitim fırsatları sağlamaya adanmıştır.",
    "about.identity": "Vakıf Kimliği",
    "about.identity.desc":
      "Türkiye'de kurulmuş olan vakfımız, hedefli destek programları ve uluslararası ortaklıklar aracılığıyla Filistinli öğrenciler için eğitim boşluklarını kapatmaktadır.",
    "about.structure": "İdari Yapı",
    "about.structure.desc":
      "Sınırlar ötesinde eğitim eşitliğine ve öğrenci başarısına bağlı deneyimli eğitimciler ve profesyoneller tarafından yönetilmektedir.",
    "about.partners": "Ortaklar",
    "about.partners.desc":
      "Fırsatları genişletmek için dünya çapındaki üniversiteler, araştırma kurumları ve eğitim kuruluşlarıyla işbirliği yapıyoruz.",
    "about.cta": "Hakkımızda Daha Fazla Bilgi",
    "about.vision.title": "Vizyonumuz",
    "about.vision.text": "To produce young Palestinian academics in fields needed by Palestinian society and to contribute effectively to building a sustainable and strong future for the Palestinian state, with a focus on supporting national identity and enhancing community participation.",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.programs": "Programlar",
    "footer.about": "Hakkımızda",
    "footer.contact": "İletişim",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "ar", "tr"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
      document.documentElement.lang = savedLanguage
      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr"
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

