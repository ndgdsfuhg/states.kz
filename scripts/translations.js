const countryContent = {
  'KZ': {
    testimonials: [
      "Сауданы 218% арттырдық",
      "Айына 8,200,000 ₸ таптым"
    ],
    authors: [
      "— Әлия",
      "— Арман"
    ],
    advantages: [
      "Толық шешім",
      "Кәсіби операторлар",
      "CRM жүйесі",
      "Ашық есеп",
      "Дамуға көмек"
    ]
  },
  'US': {
    testimonials: [
      "Sales grew by 215%",
      "Earned $12,500"
    ],
    authors: [
      "— Michael",
      "— Sarah"
    ],
    advantages: [
      "Complete solution",
      "Professional operators",
      "CRM system",
      "Transparency",
      "Growth support"
    ]
  },
  'CN': {
    testimonials: [
      "销售额增长215%",
      "赚了56,000元"
    ],
    authors: [
      "— 张经理",
      "— 李女士"
    ],
    advantages: [
      "完整解决方案",
      "专业运营商",
      "CRM系统",
      "透明度",
      "成长支持"
    ]
  },
  'AR': {
    testimonials: [
      "زادت المبيعات 215٪",
      "ربحت 45,000 درهم"
    ],
    authors: [
      "— أحمد",
      "— نورا"
    ],
    advantages: [
      "حل كامل",
      "مشغلين محترفين",
      "نظام CRM",
      "شفافية",
      "دعم النمو"
    ]
  },
  'TR': {
    testimonials: [
      "Satışlar %215 arttı",
      "350,000₺ kazandım"
    ],
    authors: [
      "— Emre",
      "— Ayşe"
    ],
    advantages: [
      "Tam çözüm",
      "Profesyonel operatörler",
      "CRM sistemi",
      "Şeffaflık",
      "Büyüme desteği"
    ]
  }
};

const translations = {
  'ru': {
    title: "Колл-центр для США",
    description: "Профессиональные услуги колл-центра",
    heading: "Англоязычный колл-центр",
    tagline: "Для выхода на рынок США",
    block1: {
      heading: "Наши услуги",
      btn1: "Telegram",
      btn2: "WhatsApp"
    },
    block2: {
      heading: "Партнерам",
      btn: "Сотрудничество"
    },
    block3: {
      heading: "Отзывы",
      btn: "Контакты"
    },
    footer: "© 2025 states.kz",
    rtl: false
  },
  'kk': {
    title: "АҚШ-қа колл-центр",
    description: "Кәсіби колл-центр қызметі",
    heading: "Ағылшын тілді колл-центр",
    tagline: "АҚШ нарығына шығу үшін",
    block1: {
      heading: "Қызметтер",
      btn1: "Telegram",
      btn2: "WhatsApp"
    },
    block2: {
      heading: "Серіктестер",
      btn: "Ынтымақтастық"
    },
    block3: {
      heading: "Пікірлер",
      btn: "Байланыс"
    },
    footer: "© 2025 states.kz",
    rtl: false
  },
  'en': {
    title: "Call Center for US",
    description: "Professional call center services",
    heading: "English Call Center",
    tagline: "For US market entry",
    block1: {
      heading: "Our Services",
      btn1: "Telegram",
      btn2: "WhatsApp"
    },
    block2: {
      heading: "Partnership",
      btn: "Cooperation"
    },
    block3: {
      heading: "Testimonials",
      btn: "Contacts"
    },
    footer: "© 2025 states.kz",
    rtl: false
  },
  'ar': {
    title: "مركز اتصالات لأمريكا",
    description: "خدمات مركز اتصالات محترفة",
    heading: "مركز اتصالات بالإنجليزية",
    tagline: "للدخول للسوق الأمريكي",
    block1: {
      heading: "خدماتنا",
      btn1: "تلغرام",
      btn2: "واتساب"
    },
    block2: {
      heading: "للشركاء",
      btn: "تعاون"
    },
    block3: {
      heading: "آراء",
      btn: "اتصالات"
    },
    footer: "© 2025 states.kz",
    rtl: true
  },
  'zh': {
    title: "美国呼叫中心",
    description: "专业呼叫中心服务",
    heading: "英语呼叫中心",
    tagline: "进入美国市场",
    block1: {
      heading: "我们的服务",
      btn1: "电报",
      btn2: "WhatsApp"
    },
    block2: {
      heading: "合作伙伴",
      btn: "合作"
    },
    block3: {
      heading: "评价",
      btn: "联系方式"
    },
    footer: "© 2025 states.kz",
    rtl: false
  },
  'tr': {
    title: "ABD için Çağrı Merkezi",
    description: "Profesyonel çağrı merkezi hizmetleri",
    heading: "İngilizce Çağrı Merkezi",
    tagline: "ABD pazarına giriş için",
    block1: {
      heading: "Hizmetlerimiz",
      btn1: "Telegram",
      btn2: "WhatsApp"
    },
    block2: {
      heading: "Ortaklık",
      btn: "İşbirliği"
    },
    block3: {
      heading: "Referanslar",
      btn: "İletişim"
    },
    footer: "© 2025 states.kz",
    rtl: false
  }
};

function getRandomGrowth() {
  return Math.floor(Math.random() * 2) + 1;
}
