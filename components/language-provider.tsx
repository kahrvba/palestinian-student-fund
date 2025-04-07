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
    "nav.contact": "Contact Us",

    "hero.title": "Empowering Palestinian Students Worldwide",
    "hero.subtitle":
      "Providing scholarships, university admissions assistance, and academic support to help Palestinian students achieve their educational dreams.",
    "hero.cta.apply": "Apply for Scholarship",
    "hero.cta.explore": "Explore Programs",

    "about.title": "Who Are We?",
    "about.subtitle":
      "The Palestinian Student Support Fund is dedicated to providing educational opportunities for Palestinian students worldwide through scholarships, university admissions assistance, and comprehensive academic support.",
    "about.identity": "Foundation Identity",
    "about.identity.desc":
      "Established in Turkey, our foundation bridges educational gaps for Palestinian students through targeted support programs and international partnerships.",
    "about.structure": "Administrative Structure",
    "about.structure.desc":
      "Led by experienced educators and professionals committed to educational equity and student success across borders.",
    "about.partners": "Partners",
    "about.partners.desc":
      "Collaborating with universities, research institutions, and educational organizations worldwide to expand opportunities.",
    "about.cta": "Learn More About Us",

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
    "nav.contact": "اتصل بنا",

    "hero.title": "تمكين الطلاب الفلسطينيين حول العالم",
    "hero.subtitle":
      "تقديم المنح الدراسية والمساعدة في القبول الجامعي والدعم الأكاديمي لمساعدة الطلاب الفلسطينيين على تحقيق أحلامهم التعليمية.",
    "hero.cta.apply": "التقدم للمنحة",
    "hero.cta.explore": "استكشاف البرامج",

    "about.title": "من نحن؟",
    "about.subtitle":
      "صندوق دعم الطلاب الفلسطينيين مكرس لتوفير فرص تعليمية للطلاب الفلسطينيين في جميع أنحاء العالم من خلال المنح الدراسية والمساعدة في القبول الجامعي والدعم الأكاديمي الشامل.",
    "about.identity": "هوية المؤسسة",
    "about.identity.desc":
      "تأسست في تركيا، تعمل مؤسستنا على سد الفجوات التعليمية للطلاب الفلسطينيين من خلال برامج الدعم المستهدفة والشراكات الدولية.",
    "about.structure": "الهيكل الإداري",
    "about.structure.desc": "بقيادة مربين ومهنيين ذوي خبرة ملتزمين بالإنصاف التعليمي ونجاح الطلاب عبر الحدود.",
    "about.partners": "الشركاء",
    "about.partners.desc":
      "التعاون مع الجامعات والمؤسسات البحثية والمنظمات التعليمية في جميع أنحاء العالم لتوسيع الفرص.",
    "about.cta": "تعرف أكثر علينا",

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

