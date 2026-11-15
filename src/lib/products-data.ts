// بيانات «تعرف على منتجاتنا» لشركة الراعبي للتجارة — مصدر كل معلومة هو الكتالوج/الداتاشيت الرسمي للمصنّع.
// لإضافة منتج: أضف كائناً في PRODUCTS بنفس البنية، وارفع صورته وملفه ثم استورد مؤشراتهما هنا.
import img_grasen_ac_7kw_png from "@/assets/products/raebi/grasen-ac-7kw.png.asset.json";
import pdf_grasen_ac_7kw_pdf from "@/assets/products/raebi/grasen-ac-7kw.pdf.asset.json";
import img_grasen_dc_30_40kw_jpg from "@/assets/products/raebi/grasen-dc-30-40kw.jpg.asset.json";
import pdf_grasen_dc_30_40kw_pdf from "@/assets/products/raebi/grasen-dc-30-40kw.pdf.asset.json";
import img_grasen_dc_60_240kw_jpg from "@/assets/products/raebi/grasen-dc-60-240kw.jpg.asset.json";
import pdf_grasen_dc_60_240kw_pdf from "@/assets/products/raebi/grasen-dc-60-240kw.pdf.asset.json";
import img_trina_vertex_n_720w_png from "@/assets/products/raebi/trina-vertex-n-720w.png.asset.json";
import pdf_trina_vertex_n_720w_pdf from "@/assets/products/raebi/trina-vertex-n-720w.pdf.asset.json";
import img_trina_vertex_n_715w_png from "@/assets/products/raebi/trina-vertex-n-715w.png.asset.json";
import pdf_trina_vertex_n_715w_pdf from "@/assets/products/raebi/trina-vertex-n-715w.pdf.asset.json";
import img_huasun_n_type_png from "@/assets/products/raebi/huasun-n-type.png.asset.json";
import pdf_huasun_n_type_pdf from "@/assets/products/raebi/huasun-n-type.pdf.asset.json";
import img_dyness_stack100_webp from "@/assets/products/raebi/dyness-stack100.webp.asset.json";
import pdf_dyness_stack100_pdf from "@/assets/products/raebi/dyness-stack100.pdf.asset.json";
import img_dyness_powerrack_jpg from "@/assets/products/raebi/dyness-powerrack.jpg.asset.json";
import pdf_dyness_powerrack_pdf from "@/assets/products/raebi/dyness-powerrack.pdf.asset.json";
import img_luxpower_battery_webp from "@/assets/products/raebi/luxpower-battery.webp.asset.json";
import pdf_luxpower_battery_pdf from "@/assets/products/raebi/luxpower-battery.pdf.asset.json";
import img_luxpower_sna3_6kw_webp from "@/assets/products/raebi/luxpower-sna3-6kw.webp.asset.json";
import pdf_luxpower_sna3_6kw_pdf from "@/assets/products/raebi/luxpower-sna3-6kw.pdf.asset.json";
import img_luxpower_sna_12kw_webp from "@/assets/products/raebi/luxpower-sna-12kw.webp.asset.json";
import pdf_luxpower_sna_12kw_pdf from "@/assets/products/raebi/luxpower-sna-12kw.pdf.asset.json";
import img_sungrow_sg50cx_p2_png from "@/assets/products/raebi/sungrow-sg50cx-p2.png.asset.json";
import pdf_sungrow_sg50cx_p2_pdf from "@/assets/products/raebi/sungrow-sg50cx-p2.pdf.asset.json";
import img_sungrow_sg40cx_p2_png from "@/assets/products/raebi/sungrow-sg40cx-p2.png.asset.json";
import pdf_sungrow_sg40cx_p2_pdf from "@/assets/products/raebi/sungrow-sg40cx-p2.pdf.asset.json";
import img_atess_large_projects_png from "@/assets/products/raebi/atess-large-projects.png.asset.json";
import pdf_atess_large_projects_pdf from "@/assets/products/raebi/atess-large-projects.pdf.asset.json";
import logoGrasen from "@/assets/brand/makers-new/logo-grasen.png.asset.json";
import logoTrina from "@/assets/brand/makers-new/logo-trina.png.asset.json";
import logoHuasun from "@/assets/brand/makers-new/logo-huasun.png.asset.json";
import logoDyness from "@/assets/brand/makers-new/logo-dyness.png.asset.json";
import logoLuxpower from "@/assets/brand/makers-new/logo-luxpower.png.asset.json";
import logoSungrow from "@/assets/brand/makers-new/logo-sungrow.png.asset.json";
import logoAtess from "@/assets/brand/makers-new/logo-atess.png.asset.json";

export type ProductCategory = "ev-chargers" | "panels" | "batteries" | "inverters" | "grid-inverters";
export type SpecGroup = { title: string; rows: [string, string][] };
export type ModelTable = { models: string[]; rows: { label: string; values: string[] }[] };
export type ProductFile = { kind: "Catalog" | "Datasheet" | "User Manual" | "Installation Manual" | "Certificate"; label: string; url: string };

export type Product = {
  id: string;
  /** معرّف السلسلة الأصلية عندما يكون هذا المنتج موديلاً محدداً منها (للفيديو والملفات). */
  baseId?: string;
  category: ProductCategory;
  brand: string;
  name: string;
  model: string;
  power: string; // أبرز قدرة/مواصفة تظهر على البطاقة
  description: string;
  about: string;
  features: string[];
  uses: string[];
  suitableFor: string;
  specs: SpecGroup[];
  modelTable?: ModelTable;
  compatible?: { items: string[]; source: string };
  image: string;
  files: ProductFile[];
  certificates?: string;
};

export const CATEGORIES: { id: ProductCategory; title: string; emoji: string; subtitle: string }[] = [
  { id: "ev-chargers", title: "شواحن السيارات الكهربائية", emoji: "🚗", subtitle: "شواحن GRASEN منزلية AC وسريعة DC" },
  { id: "panels", title: "الألواح الشمسية", emoji: "☀️", subtitle: "ألواح Trina Solar وHuasun عالية الكفاءة" },
  { id: "batteries", title: "بطاريات الليثيوم", emoji: "🔋", subtitle: "أنظمة تخزين Dyness وبطاريات Luxpower" },
  { id: "inverters", title: "المحولات الهجينة (الإنفرترات)", emoji: "⚡", subtitle: "إنفرترات Luxpower الهجينة" },
  { id: "grid-inverters", title: "المحولات المرتبطة بالشبكة", emoji: "🏭", subtitle: "Sungrow وATESS للمشاريع الكبيرة" },
];

/** العلامات التجارية التي تتعامل بها الراعبي — لكل علامة صفحة خاصة على /brands/<slug>. */
export type Brand = { slug: string; brand: string; nameAr: string; logo: string; accent: string; website: string; about: string; founded?: string; hq?: string; tagline: string };
export const BRANDS: Brand[] = [
  { slug: "grasen", brand: "GRASEN", nameAr: "جراسين", logo: logoGrasen.url, accent: "#10a0b0", website: "https://grasen.com/", founded: "2010", hq: "لويانغ، الصين", tagline: "محطات شحن السيارات الكهربائية: شاحن منزلي AC وشواحن سريعة DC.", about: "تأسست GRASEN عام 2010 لتطوير وتصنيع معدات شحن المركبات الكهربائية وحلول التنمية المستدامة. تدير الشركة مجمعاً صناعياً في لويانغ ومراكز بحث وتطوير في لويانغ وبكين وشيآن. تشمل منتجاتها شواحن التيار المستمر السريعة والشواحن الجدارية للتيار المتردد مع برمجيات اتصال وإدارة للشحن." },
  { slug: "trina-solar", brand: "Trina Solar", nameAr: "ترينا سولار", logo: logoTrina.url, accent: "#0080d0", website: "https://www.trinasolar.com/", founded: "1997", hq: "تشانغتشو، الصين", tagline: "ألواح Vertex N عالية القدرة بتقنية N-Type.", about: "تأسست ترينا سولار عام 1997 وتعمل في المنتجات الكهروضوئية وتخزين الطاقة وحلول الأنظمة وخدمات الطاقة الرقمية. تشمل أعمالها البحث والتطوير وإنتاج وبيع الألواح الشمسية، إلى جانب حلول التتبع وتوليد الطاقة الموزعة." },
  { slug: "huasun", brand: "Huasun", nameAr: "هواسن", logo: logoHuasun.url, accent: "#0070c0", website: "https://www.huasunsolar.com/", founded: "2020", hq: "شوانتشنغ، آنهوي، الصين", tagline: "ألواح HJT من النوع N بكفاءة عالية.", about: "تتخصص هواسن في البحث والتطوير والإنتاج واسع النطاق لمنتجات الخلايا غير المتجانسة HJT عالية الكفاءة من النوع n. تغطي سلسلة أعمالها سبائك ورقائق السيليكون وخلايا وألواح HJT، وتهدف إلى تقديم حلول طاقة شمسية نظيفة عالية الأداء وفعالة التكلفة." },
  { slug: "dyness", brand: "Dyness", nameAr: "داينس", logo: logoDyness.url, accent: "#00a0e0", website: "https://www.dyness.com", founded: "2017", hq: "سوتشو، الصين", tagline: "أنظمة تخزين الطاقة Stack100 وPowerRack.", about: "تأسست داينس عام 2017 وتتخصص في البحث والتطوير والإنتاج وبيع أنظمة تخزين الطاقة. توزع منتجاتها في أكثر من 100 دولة ومنطقة، وأُنشئ مقرها العالمي في سوتشو عام 2023." },
  { slug: "luxpower", brand: "Luxpower", nameAr: "لاكس باور", logo: logoLuxpower.url, accent: "#4caf7d", website: "https://luxpowertek.com/", founded: "2017", hq: "شنتشن، الصين", tagline: "إنفرترات هجينة SNA وبطاريات ليثيوم.", about: "تطوّر لوكس باور تك حلولاً ذكية لإدارة الطاقة وتخزينها للتطبيقات السكنية والتجارية في المناطق المتصلة بالشبكة وخارجها. تأسست الشركة عام 2017 مع التركيز على تطوير حلول تخزين الطاقة." },
  { slug: "sungrow", brand: "Sungrow", nameAr: "سنجرو", logo: logoSungrow.url, accent: "#f07000", website: "https://www.sungrowpower.com", founded: "1997", tagline: "إنفرترات مرتبطة بالشبكة للمشاريع التجارية.", about: "تأسست صن جرو عام 1997 وتعمل في حلول الطاقة المتجددة. تشمل منتجاتها عواكس الطاقة الشمسية وأنظمة تخزين الطاقة وحلول شحن المركبات الكهربائية." },
  { slug: "atess", brand: "ATESS", nameAr: "أتيس", logo: logoAtess.url, accent: "#d01010", website: "https://www.atesspower.com", hq: "شنتشن، الصين", tagline: "أنظمة طاقة هجينة كبيرة للمشاريع من 30 إلى 150 kW.", about: "توفر ATESS حلول تخزين الطاقة الشمسية وشحن المركبات الكهربائية للأسواق العالمية. تهدف الشركة إلى إتاحة الطاقة النظيفة بأسعار مناسبة وتعزيز استقلال الأفراد والمجتمعات في الطاقة." },
];
export function findBrand(slug: string) {
  return BRANDS.find((b) => b.slug === slug);
}

const sheet = (url: string): ProductFile[] => [{ kind: "Datasheet", label: "الكتالوج / Datasheet الرسمي", url }];

export const PRODUCTS: Product[] = [
{
  "id": "grasen-ac-7kw",
  "category": "ev-chargers",
  "brand": "GRASEN",
  "name": "شاحن جداري منزلي ذكي GRASEN بقدرة 7 كيلوواط",
  "model": "Smart AC Charger — 7kW",
  "power": "7 kW",
  "description": "شاحن تيار متردد أحادي الطور بواجهة Type 2 للتحكم الذكي بالشحن المنزلي.",
  "about": "ينتمي هذا الطراز إلى سلسلة Smart AC Charger من GRASEN. يوفر إصدار 7 كيلوواط شحناً أحادي الطور بتيار 32 أمبير. يتوفر بمقبس Type 2 أو كابل Type 2، مع شاشة لعرض حالة الشحن. يدعم التطبيق وبطاقة RFID وموازنة الأحمال الديناميكية.",
  "features": [
    "شاشة LCD مقاس 2.8 بوصة",
    "مقبس Type 2 أو كابل متصل",
    "تشغيل عبر بطاقة RFID أو تطبيق الهاتف",
    "اتصال Ethernet وWi-Fi",
    "دعم OCPP 1.6J وOCPP 2.0.1",
    "حماية تسرب AC ‏30 mA وDC ‏6 mA"
  ],
  "uses": [
    "كراجات المنازل",
    "مواقف المجمعات السكنية",
    "مواقف الشركات"
  ],
  "suitableFor": "مناسب للشحن المنزلي لسيارة متوافقة مع Type 2 بعد التحقق من التغذية الكهربائية.",
  "specs": [
    {
      "title": "الدخل",
      "rows": [
        [
          "الجهد",
          "230 V ±20%؛ أحادي الطور"
        ],
        [
          "التردد",
          "50/60 Hz"
        ]
      ]
    },
    {
      "title": "الخرج",
      "rows": [
        [
          "القدرة",
          "7 kW"
        ],
        [
          "التيار",
          "32 A؛ أحادي الطور"
        ]
      ]
    },
    {
      "title": "الموصلات والشحن",
      "rows": [
        [
          "الواجهة",
          "Type 2 cable / Type 2 socket"
        ],
        [
          "عدد المنافذ",
          "1"
        ],
        [
          "الشاشة",
          "2.8-inch LCD"
        ]
      ]
    },
    {
      "title": "الحماية والاتصال",
      "rows": [
        [
          "حماية التسرب",
          "AC 30 mA / DC 6 mA"
        ],
        [
          "الشبكة",
          "Ethernet / Wi-Fi؛ 4G اختياري"
        ],
        [
          "البروتوكول",
          "OCPP 1.6J / OCPP 2.0.1"
        ],
        [
          "التشغيل",
          "RFID / Mobile APP / زر فعلي"
        ],
        [
          "موازنة الأحمال",
          "حتى 252 شاحناً لكل LAN"
        ]
      ]
    },
    {
      "title": "البيانات العامة",
      "rows": [
        [
          "الأبعاد (عرض × عمق × ارتفاع)",
          "288 × 141 × 380 mm"
        ],
        [
          "الحماية",
          "IP55 / IK10"
        ],
        [
          "الرطوبة",
          "≤95%"
        ]
      ]
    },
    {
      "title": "الضمان",
      "rows": [
        [
          "المدة",
          "26 شهراً؛ تتوفر خيارات تمديد وفق كتالوج الشركة، وتُراجع شروط العرض عند الشراء."
        ]
      ]
    }
  ],
  "certificates": "CE; EN IEC 61851-1; EN IEC 61851-21-2; IEC61008-1; IEC62955",
  "image": img_grasen_ac_7kw_png.url,
  "files": sheet(pdf_grasen_ac_7kw_pdf.url)
},
{
  "id": "grasen-dc-30-40kw",
  "category": "ev-chargers",
  "brand": "GRASEN",
  "name": "شاحن GRASEN سريع للتيار المستمر 30–40 كيلوواط",
  "model": "R 40 / R Series Wallbox DC Charger",
  "power": "30–40 kW",
  "description": "شاحن تيار مستمر سريع بواجهات شحن متعددة وإدارة متصلة لتطبيقات المواقف التجارية.",
  "about": "تتيح سلسلة R Wallbox تركيباً جدارياً أو على قاعدة. يحدد الكتالوج إصدارين بقدرتي 30 و40 كيلوواط بمنفذين. تدعم شاشة اللمس والتطبيق إدارة جلسات الشحن. تتوفر واجهات CCS وGB/T وCHAdeMO بحسب التهيئة.",
  "features": [
    "شاشة لمس LCD مقاس 8 بوصات",
    "منفذا شحن بحسب الكتالوج",
    "اتصال 4G وEthernet",
    "دعم بروتوكول OCPP 1.6J",
    "تشغيل بالتطبيق وبطاقة RFID",
    "تبريد بالهواء القسري"
  ],
  "uses": [
    "مواقف السيارات العامة",
    "مراكز التسوق",
    "مواقف الشركات والأساطيل",
    "الفنادق والمجمعات السكنية"
  ],
  "suitableFor": "مناسب لمواقع الشحن التي تتوفر فيها تغذية كهربائية ملائمة ومتوافقة مع قدرة الشاحن.",
  "specs": [
    {
      "title": "الدخل",
      "rows": [
        [
          "الجهد",
          "400 V ±15%"
        ],
        [
          "نظام التغذية",
          "TN-S"
        ],
        [
          "التردد",
          "45–65 Hz"
        ],
        [
          "معامل القدرة",
          "≥0.99"
        ]
      ]
    },
    {
      "title": "الخرج",
      "rows": [
        [
          "الكفاءة",
          "≥94%"
        ],
        [
          "الجهد المقنن حسب الموصل",
          "CHAdeMO: 500 V DC; CCS1/CCS2: 1000 V DC; GB/T: 1000 V DC"
        ],
        [
          "التيار",
          "125 A حسب الموصل والتهيئة"
        ]
      ]
    },
    {
      "title": "الموصلات والشحن",
      "rows": [
        [
          "الموصلات",
          "CCS1 / CCS2 / GB/T / CHAdeMO بحسب التهيئة"
        ],
        [
          "عدد المنافذ",
          "2"
        ],
        [
          "طول الكابل",
          "5 m أو 7 m"
        ],
        [
          "الشاشة",
          "8-inch LCD touch"
        ]
      ]
    },
    {
      "title": "الحماية والاتصال",
      "rows": [
        [
          "الشبكة",
          "4G / Ethernet"
        ],
        [
          "البروتوكول",
          "OCPP 1.6J"
        ],
        [
          "طرق التشغيل",
          "Mobile APP / RFID"
        ]
      ]
    },
    {
      "title": "البيانات العامة",
      "rows": [
        [
          "الأبعاد (عرض × عمق × ارتفاع)",
          "690 × 357 × 1686 mm"
        ],
        [
          "حرارة التشغيل",
          "−30 إلى +50 °C"
        ],
        [
          "حرارة التخزين",
          "−35 إلى +55 °C"
        ],
        [
          "الرطوبة",
          "≤95% دون تكاثف"
        ],
        [
          "الحماية",
          "IP54"
        ],
        [
          "التبريد",
          "هواء قسري"
        ]
      ]
    },
    {
      "title": "الضمان",
      "rows": [
        [
          "المدة",
          "26 شهراً؛ تتوفر خيارات تمديد وفق كتالوج الشركة، وتُراجع شروط العرض عند الشراء."
        ]
      ]
    }
  ],
  "modelTable": {
    "models": [
      "30 kW",
      "40 kW"
    ],
    "rows": [
      {
        "label": "القدرة",
        "values": [
          "30 kW",
          "40 kW"
        ]
      },
      {
        "label": "عدد المنافذ",
        "values": [
          "2",
          "2"
        ]
      },
      {
        "label": "الموصلات المتاحة حسب التهيئة",
        "values": [
          "CCS1 / CCS2 / GB/T / CHAdeMO",
          "CCS1 / CCS2 / GB/T / CHAdeMO"
        ]
      },
      {
        "label": "الجهد المقنن (ليس نطاق جهد الخرج)",
        "values": [
          "CHAdeMO 500 V DC; CCS1/CCS2 وGB/T 1000 V DC",
          "CHAdeMO 500 V DC; CCS1/CCS2 وGB/T 1000 V DC"
        ]
      },
      {
        "label": "نطاق جهد الخرج",
        "values": [
          "None",
          "None"
        ]
      }
    ]
  },
  "certificates": "NTC CE; DIN70121; DIN70122; ISO15118",
  "image": img_grasen_dc_30_40kw_jpg.url,
  "files": sheet(pdf_grasen_dc_30_40kw_pdf.url)
},
{
  "id": "grasen-dc-60-240kw",
  "category": "ev-chargers",
  "brand": "GRASEN",
  "name": "شاحن GRASEN سريع للتيار المستمر حتى 240 كيلوواط",
  "model": "R 240 / R Series Fast DC Charger",
  "power": "60–240 kW",
  "description": "شاحن تيار مستمر سريع بواجهات شحن متعددة وإدارة متصلة لتطبيقات المواقف التجارية.",
  "about": "تقدم سلسلة R للشحن السريع بنية معيارية وقدرة تصل إلى 240 كيلوواط. يصف الكتالوج فئتين للهيكل ضمن نطاق 40–240 كيلوواط، مع تداخل عند 160 كيلوواط. تدعم إدارة الشحن عبر OCPP والتطبيق وبطاقات RFID. يجب تثبيت القدرة والموصلات المطلوبة في عرض المورد قبل الطلب.",
  "features": [
    "شاشة لمس LCD مقاس 8 بوصات",
    "منفذا شحن بحسب الكتالوج",
    "اتصال 4G وEthernet",
    "دعم بروتوكول OCPP 1.6J",
    "تشغيل بالتطبيق وبطاقة RFID",
    "تبريد بالهواء القسري"
  ],
  "uses": [
    "مواقف السيارات العامة",
    "مراكز التسوق",
    "مواقف الشركات والأساطيل",
    "الفنادق والمجمعات السكنية"
  ],
  "suitableFor": "مناسب لمواقع الشحن التي تتوفر فيها تغذية كهربائية ملائمة ومتوافقة مع قدرة الشاحن.",
  "specs": [
    {
      "title": "الدخل",
      "rows": [
        [
          "الجهد",
          "400 V ±15% / 440 V ±10% / 480 V ±10%"
        ],
        [
          "نظام التغذية",
          "TN-S"
        ],
        [
          "التردد",
          "45–65 Hz"
        ],
        [
          "معامل القدرة",
          "≥0.99"
        ]
      ]
    },
    {
      "title": "الخرج",
      "rows": [
        [
          "الكفاءة",
          "≥94%"
        ],
        [
          "الجهد المقنن حسب الموصل",
          "CHAdeMO: 500 V DC; CCS1/CCS2: 1000 V DC; GB/T: 1000 V DC"
        ],
        [
          "التيار",
          "CHAdeMO: 125 A; CCS1/CCS2: 400 A max; GB/T: 250 A"
        ]
      ]
    },
    {
      "title": "الموصلات والشحن",
      "rows": [
        [
          "الموصلات",
          "CCS1 / CCS2 / GB/T / CHAdeMO بحسب التهيئة"
        ],
        [
          "عدد المنافذ",
          "2"
        ],
        [
          "طول الكابل",
          "5 m أو 7 m"
        ],
        [
          "الشاشة",
          "8-inch LCD touch"
        ]
      ]
    },
    {
      "title": "الحماية والاتصال",
      "rows": [
        [
          "الشبكة",
          "4G / Ethernet"
        ],
        [
          "البروتوكول",
          "OCPP 1.6J"
        ],
        [
          "طرق التشغيل",
          "Mobile APP / RFID / POS"
        ]
      ]
    },
    {
      "title": "البيانات العامة",
      "rows": [
        [
          "الأبعاد (عرض × عمق × ارتفاع)",
          "40–160 kW: 700 × 490 × 1696 mm; 160–240 kW: 750 × 605 × 1805 mm"
        ],
        [
          "حرارة التشغيل",
          "−30 إلى +50 °C"
        ],
        [
          "حرارة التخزين",
          "−35 إلى +55 °C"
        ],
        [
          "الرطوبة",
          "≤95% دون تكاثف"
        ],
        [
          "الحماية",
          "IP54"
        ],
        [
          "التبريد",
          "هواء قسري"
        ]
      ]
    },
    {
      "title": "الضمان",
      "rows": [
        [
          "المدة",
          "26 شهراً؛ تتوفر خيارات تمديد وفق كتالوج الشركة، وتُراجع شروط العرض عند الشراء."
        ]
      ]
    }
  ],
  "modelTable": {
    "models": [
      "40–160 kW (نطاق رسمي)",
      "160–240 kW (نطاق رسمي)"
    ],
    "rows": [
      {
        "label": "القدرة",
        "values": [
          "40–160 kW (نطاق رسمي)",
          "160–240 kW (نطاق رسمي)"
        ]
      },
      {
        "label": "عدد المنافذ",
        "values": [
          "2",
          "2"
        ]
      },
      {
        "label": "الموصلات المتاحة حسب التهيئة",
        "values": [
          "CCS1 / CCS2 / GB/T / CHAdeMO",
          "CCS1 / CCS2 / GB/T / CHAdeMO"
        ]
      },
      {
        "label": "الجهد المقنن (ليس نطاق جهد الخرج)",
        "values": [
          "CHAdeMO 500 V DC; CCS1/CCS2 وGB/T 1000 V DC",
          "CHAdeMO 500 V DC; CCS1/CCS2 وGB/T 1000 V DC"
        ]
      },
      {
        "label": "نطاق جهد الخرج",
        "values": [
          "None",
          "None"
        ]
      }
    ]
  },
  "certificates": "TUV CE; DIN70121; DIN70122; ISO15118",
  "image": img_grasen_dc_60_240kw_jpg.url,
  "files": sheet(pdf_grasen_dc_60_240kw_pdf.url)
},
{
  "id": "trina-vertex-n-720w",
  "category": "panels",
  "brand": "Trina Solar",
  "name": "لوح ترينا فيرتكس N ثنائي الوجه 720 واط",
  "model": "TSM-NEG21C.20",
  "power": "720 W",
  "description": "لوح شمسي ثنائي الوجه بقدرة 720 واط وتقنية N-type i-TOPCon وزجاج مزدوج.",
  "about": "ينتمي هذا اللوح إلى سلسلة TSM-NEG21C.20 ذات القدرات من 695 إلى 720 واط، وتبلغ قدرته الاسمية 720 واط عند STC. يستخدم خلايا أحادية البلورة من النوع N بتقنية i-TOPCon وبنية زجاج مزدوج ثنائية الوجه. يساعد تصميم الجهد المنخفض على رفع قدرة السلسلة وخفض تكاليف مكونات النظام والكلفة المستوية للطاقة. وتساهم تقنية الخلايا النصفية والقطع غير الإتلافي في تقليل النقاط الساخنة والشقوق الدقيقة.",
  "features": [
    "تقنية i-TOPCon من النوع N على منصة خلايا 210 مم.",
    "تقنية قطع غير إتلافية وتغليف عالي الكثافة لتقليل الشقوق الدقيقة.",
    "الخلايا النصفية تقلل مخاطر النقاط الساخنة.",
    "أداء ممتاز عند الإشعاع المنخفض وفق تحقق طرف ثالث.",
    "إنتاج إضافي من الوجه الخلفي بنسبة 10%–20% تبعاً لانعكاسية السطح.",
    "بنية زجاج مزدوج مع ضمان قدرة لمدة 30 سنة."
  ],
  "uses": [
    "أنظمة التوليد ثنائية الوجه للاستفادة من انعكاسية السطح",
    "مشروعات تستهدف خفض تكاليف مكونات النظام والكلفة المستوية للطاقة",
    "توليد الطاقة في ظروف الإشعاع المنخفض"
  ],
  "suitableFor": "أنظمة كهروضوئية ثنائية الوجه تستهدف خفض BOS وLCOE والاستفادة من الأداء عند الإشعاع المنخفض.",
  "specs": [
    {
      "title": "الخصائص الكهربائية (STC)",
      "rows": [
        [
          "القدرة القصوى Pmax",
          "720 W"
        ],
        [
          "جهد القدرة القصوى Vmp",
          "41.3 V"
        ],
        [
          "تيار القدرة القصوى Imp",
          "17.44 A"
        ],
        [
          "جهد الدائرة المفتوحة Voc",
          "49.4 V"
        ],
        [
          "تيار القصر Isc",
          "18.49 A"
        ],
        [
          "كفاءة اللوح",
          "23.2%"
        ],
        [
          "شروط STC",
          "1000 W/m²؛ حرارة الخلية 25 °C؛ AM1.5"
        ],
        [
          "اختيار القدرة",
          "0 ~ +5 W"
        ],
        [
          "تفاوت قياس القدرة",
          "±3%"
        ]
      ]
    },
    {
      "title": "الخصائص الميكانيكية",
      "rows": [
        [
          "نوع الخلايا",
          "سيليكون أحادي البلورة N-type i-TOPCon"
        ],
        [
          "عدد الخلايا",
          "132"
        ],
        [
          "الأبعاد",
          "2384 × 1303 × 33 mm"
        ],
        [
          "الوزن",
          "38.3 kg"
        ],
        [
          "الزجاج الأمامي",
          "2.0 mm؛ زجاج مقوّى حرارياً بطبقة مضادة للانعكاس"
        ],
        [
          "الزجاج الخلفي",
          "2.0 mm؛ زجاج مقوّى حرارياً بطبقة بيضاء"
        ],
        [
          "الإطار",
          "سبيكة ألومنيوم مؤكسد"
        ],
        [
          "صندوق التوصيل",
          "IP68"
        ],
        [
          "الموصل",
          "MC4 EVO2 / TS4 Plus / TS4؛ حسب النشرة الإقليمية"
        ],
        [
          "الكابل",
          "4.0 mm²؛ تركيب رأسي 350/280 mm؛ طول قابل للتخصيص"
        ],
        [
          "معامل ثنائية الوجه",
          "80 ± 5%"
        ]
      ]
    },
    {
      "title": "الحرارة والحدود",
      "rows": [
        [
          "درجة حرارة التشغيل الاسمية للخلية NOCT",
          "43 ± 2 °C"
        ],
        [
          "معامل حرارة Pmax",
          "-0.29%/°C"
        ],
        [
          "معامل حرارة Voc",
          "-0.24%/°C"
        ],
        [
          "معامل حرارة Isc",
          "+0.04%/°C"
        ],
        [
          "نطاق حرارة التشغيل",
          "-40 ~ +85 °C"
        ],
        [
          "أقصى جهد للنظام",
          "1500 V DC (IEC / UL)"
        ],
        [
          "أقصى مصهر تسلسلي",
          "35 A"
        ]
      ]
    },
    {
      "title": "الضمان والتعبئة",
      "rows": [
        [
          "ضمان المنتج",
          "12 سنة"
        ],
        [
          "ضمان القدرة",
          "30 سنة"
        ],
        [
          "القدرة المضمونة بعد السنة الأولى",
          "99%"
        ],
        [
          "القدرة المضمونة في السنة 30",
          "87.4%"
        ],
        [
          "عدد الألواح لكل منصة/صندوق",
          "33"
        ],
        [
          "عدد الألواح لكل حاوية",
          "594"
        ],
        [
          "نوع الحاوية",
          "40′"
        ],
        [
          "التدهور السنوي للقدرة",
          "0.4%"
        ]
      ]
    }
  ],
  "modelTable": {
    "models": [
      "TSM-NEG21C.20 (695 W)",
      "TSM-NEG21C.20 (700 W)",
      "TSM-NEG21C.20 (705 W)",
      "TSM-NEG21C.20 (710 W)",
      "TSM-NEG21C.20 (715 W)",
      "TSM-NEG21C.20 (720 W)"
    ],
    "rows": [
      {
        "label": "Pmax (W)",
        "values": [
          "695",
          "700",
          "705",
          "710",
          "715",
          "720"
        ]
      },
      {
        "label": "Vmp (V)",
        "values": [
          "40.3",
          "40.5",
          "40.7",
          "40.9",
          "41.1",
          "41.3"
        ]
      },
      {
        "label": "Imp (A)",
        "values": [
          "17.25",
          "17.29",
          "17.33",
          "17.36",
          "17.40",
          "17.44"
        ]
      },
      {
        "label": "Voc (V)",
        "values": [
          "48.3",
          "48.6",
          "48.8",
          "49.0",
          "49.2",
          "49.4"
        ]
      },
      {
        "label": "Isc (A)",
        "values": [
          "18.28",
          "18.32",
          "18.36",
          "18.40",
          "18.44",
          "18.49"
        ]
      },
      {
        "label": "الكفاءة",
        "values": [
          "22.4%",
          "22.5%",
          "22.7%",
          "22.9%",
          "23.0%",
          "23.2%"
        ]
      }
    ]
  },
  "certificates": "IEC61215; IEC61730; IEC61701; IEC62716; ISO9001; ISO14001; ISO14064; ISO45001; ISO14067; ISO14025",
  "image": img_trina_vertex_n_720w_png.url,
  "files": sheet(pdf_trina_vertex_n_720w_pdf.url)
},
{
  "id": "trina-vertex-n-715w",
  "category": "panels",
  "brand": "Trina Solar",
  "name": "لوح ترينا فيرتكس N ثنائي الوجه 715 واط",
  "model": "TSM-NEG21C.20",
  "power": "715 W",
  "description": "لوح شمسي ثنائي الوجه بقدرة 715 واط وتقنية N-type i-TOPCon وزجاج مزدوج.",
  "about": "ينتمي هذا اللوح إلى سلسلة TSM-NEG21C.20 ذات القدرات من 695 إلى 720 واط، وتبلغ قدرته الاسمية 715 واط عند STC. يستخدم خلايا أحادية البلورة من النوع N بتقنية i-TOPCon وبنية زجاج مزدوج ثنائية الوجه. يساعد تصميم الجهد المنخفض على رفع قدرة السلسلة وخفض تكاليف مكونات النظام والكلفة المستوية للطاقة. وتساهم تقنية الخلايا النصفية والقطع غير الإتلافي في تقليل النقاط الساخنة والشقوق الدقيقة.",
  "features": [
    "تقنية i-TOPCon من النوع N على منصة خلايا 210 مم.",
    "تقنية قطع غير إتلافية وتغليف عالي الكثافة لتقليل الشقوق الدقيقة.",
    "الخلايا النصفية تقلل مخاطر النقاط الساخنة.",
    "أداء ممتاز عند الإشعاع المنخفض وفق تحقق طرف ثالث.",
    "إنتاج إضافي من الوجه الخلفي بنسبة 10%–20% تبعاً لانعكاسية السطح.",
    "بنية زجاج مزدوج مع ضمان قدرة لمدة 30 سنة."
  ],
  "uses": [
    "أنظمة التوليد ثنائية الوجه للاستفادة من انعكاسية السطح",
    "مشروعات تستهدف خفض تكاليف مكونات النظام والكلفة المستوية للطاقة",
    "توليد الطاقة في ظروف الإشعاع المنخفض"
  ],
  "suitableFor": "أنظمة كهروضوئية ثنائية الوجه تستهدف خفض BOS وLCOE والاستفادة من الأداء عند الإشعاع المنخفض.",
  "specs": [
    {
      "title": "الخصائص الكهربائية (STC)",
      "rows": [
        [
          "القدرة القصوى Pmax",
          "715 W"
        ],
        [
          "جهد القدرة القصوى Vmp",
          "41.1 V"
        ],
        [
          "تيار القدرة القصوى Imp",
          "17.40 A"
        ],
        [
          "جهد الدائرة المفتوحة Voc",
          "49.2 V"
        ],
        [
          "تيار القصر Isc",
          "18.44 A"
        ],
        [
          "كفاءة اللوح",
          "23.0%"
        ],
        [
          "شروط STC",
          "1000 W/m²؛ حرارة الخلية 25 °C؛ AM1.5"
        ],
        [
          "اختيار القدرة",
          "0 ~ +5 W"
        ],
        [
          "تفاوت قياس القدرة",
          "±3%"
        ]
      ]
    },
    {
      "title": "الخصائص الميكانيكية",
      "rows": [
        [
          "نوع الخلايا",
          "سيليكون أحادي البلورة N-type i-TOPCon"
        ],
        [
          "عدد الخلايا",
          "132"
        ],
        [
          "الأبعاد",
          "2384 × 1303 × 33 mm"
        ],
        [
          "الوزن",
          "38.3 kg"
        ],
        [
          "الزجاج الأمامي",
          "2.0 mm؛ زجاج مقوّى حرارياً بطبقة مضادة للانعكاس"
        ],
        [
          "الزجاج الخلفي",
          "2.0 mm؛ زجاج مقوّى حرارياً بطبقة بيضاء"
        ],
        [
          "الإطار",
          "سبيكة ألومنيوم مؤكسد"
        ],
        [
          "صندوق التوصيل",
          "IP68"
        ],
        [
          "الموصل",
          "MC4 EVO2 / TS4 Plus / TS4؛ حسب النشرة الإقليمية"
        ],
        [
          "الكابل",
          "4.0 mm²؛ تركيب رأسي 350/280 mm؛ طول قابل للتخصيص"
        ],
        [
          "معامل ثنائية الوجه",
          "80 ± 5%"
        ]
      ]
    },
    {
      "title": "الحرارة والحدود",
      "rows": [
        [
          "درجة حرارة التشغيل الاسمية للخلية NOCT",
          "43 ± 2 °C"
        ],
        [
          "معامل حرارة Pmax",
          "-0.29%/°C"
        ],
        [
          "معامل حرارة Voc",
          "-0.24%/°C"
        ],
        [
          "معامل حرارة Isc",
          "+0.04%/°C"
        ],
        [
          "نطاق حرارة التشغيل",
          "-40 ~ +85 °C"
        ],
        [
          "أقصى جهد للنظام",
          "1500 V DC (IEC / UL)"
        ],
        [
          "أقصى مصهر تسلسلي",
          "35 A"
        ]
      ]
    },
    {
      "title": "الضمان والتعبئة",
      "rows": [
        [
          "ضمان المنتج",
          "12 سنة"
        ],
        [
          "ضمان القدرة",
          "30 سنة"
        ],
        [
          "القدرة المضمونة بعد السنة الأولى",
          "99%"
        ],
        [
          "القدرة المضمونة في السنة 30",
          "87.4%"
        ],
        [
          "عدد الألواح لكل منصة/صندوق",
          "33"
        ],
        [
          "عدد الألواح لكل حاوية",
          "594"
        ],
        [
          "نوع الحاوية",
          "40′"
        ],
        [
          "التدهور السنوي للقدرة",
          "0.4%"
        ]
      ]
    }
  ],
  "modelTable": {
    "models": [
      "TSM-NEG21C.20 (695 W)",
      "TSM-NEG21C.20 (700 W)",
      "TSM-NEG21C.20 (705 W)",
      "TSM-NEG21C.20 (710 W)",
      "TSM-NEG21C.20 (715 W)",
      "TSM-NEG21C.20 (720 W)"
    ],
    "rows": [
      {
        "label": "Pmax (W)",
        "values": [
          "695",
          "700",
          "705",
          "710",
          "715",
          "720"
        ]
      },
      {
        "label": "Vmp (V)",
        "values": [
          "40.3",
          "40.5",
          "40.7",
          "40.9",
          "41.1",
          "41.3"
        ]
      },
      {
        "label": "Imp (A)",
        "values": [
          "17.25",
          "17.29",
          "17.33",
          "17.36",
          "17.40",
          "17.44"
        ]
      },
      {
        "label": "Voc (V)",
        "values": [
          "48.3",
          "48.6",
          "48.8",
          "49.0",
          "49.2",
          "49.4"
        ]
      },
      {
        "label": "Isc (A)",
        "values": [
          "18.28",
          "18.32",
          "18.36",
          "18.40",
          "18.44",
          "18.49"
        ]
      },
      {
        "label": "الكفاءة",
        "values": [
          "22.4%",
          "22.5%",
          "22.7%",
          "22.9%",
          "23.0%",
          "23.2%"
        ]
      }
    ]
  },
  "certificates": "IEC61215; IEC61730; IEC61701; IEC62716; ISO9001; ISO14001; ISO14064; ISO45001; ISO14067; ISO14025",
  "image": img_trina_vertex_n_715w_png.url,
  "files": sheet(pdf_trina_vertex_n_715w_pdf.url)
},
{
  "id": "huasun-n-type",
  "category": "panels",
  "brand": "Huasun",
  "name": "لوح هواسن هيمالايا G12 ثنائي الوجه 730 واط",
  "model": "HS-210-B132DS730",
  "power": "730 W",
  "description": "لوح شمسي ثنائي الوجه بقدرة 730 واط وتقنية HJT وزجاج مزدوج.",
  "about": "ينتمي هذا اللوح إلى سلسلة هيمالايا G12 بقدرات من 700 إلى 730 واط. يستخدم 132 خلية نصفية بتقنية HJT وبنية زجاج مزدوج ثنائية الوجه. تعزز مادة الإحكام PIB مقاومة الرطوبة وتقلل نفاذية الهواء. تذكر النشرة ملاءمته لمشروعات المرافق وخفض تكاليف مكونات النظام والكلفة المستوية للطاقة.",
  "features": [
    "تقنية HJT تجمع عملية gettering وتقنية السيليكون البلوري لتحسين الكفاءة والقدرة.",
    "كفاءة تصل إلى 23.5% للطراز 730 واط.",
    "بنية ثنائية الوجه متناظرة بمعامل 90 ± 5%.",
    "إحكام بمادة PIB لتحسين مقاومة الرطوبة ونفاذية الهواء.",
    "تصميم بخلايا نصفية وزجاج مزدوج بسماكة 2.0 مم.",
    "مناسب لمشروعات المرافق مع خفض تكاليف BOS وLCOE."
  ],
  "uses": [
    "مشروعات توليد الطاقة الشمسية على مستوى المرافق",
    "أنظمة التوليد ثنائية الوجه للاستفادة من الإشعاع الخلفي",
    "مشروعات تستهدف خفض تكاليف مكونات النظام والكلفة المستوية للطاقة"
  ],
  "suitableFor": "مشروعات المرافق والأنظمة ثنائية الوجه التي تستهدف خفض BOS وLCOE.",
  "specs": [
    {
      "title": "الخصائص الكهربائية (STC)",
      "rows": [
        [
          "القدرة القصوى Pmax",
          "730 W"
        ],
        [
          "جهد القدرة القصوى Vmp",
          "42.32 V"
        ],
        [
          "تيار القدرة القصوى Imp",
          "17.26 A"
        ],
        [
          "جهد الدائرة المفتوحة Voc",
          "50.37 V"
        ],
        [
          "تيار القصر Isc",
          "18.35 A"
        ],
        [
          "كفاءة اللوح",
          "23.5%"
        ],
        [
          "شروط STC",
          "1000 W/m²؛ حرارة الخلية 25 °C؛ AM1.5"
        ],
        [
          "اختيار القدرة",
          "0 ~ +5 W"
        ],
        [
          "تفاوت قياس القدرة",
          "0 ~ +3%"
        ]
      ]
    },
    {
      "title": "الخصائص الميكانيكية",
      "rows": [
        [
          "نوع الخلايا",
          "HJT، خلايا نصفية ثنائية الوجه"
        ],
        [
          "عدد الخلايا",
          "132 (6 × 22)"
        ],
        [
          "الأبعاد",
          "2384 × 1303 × 33 mm"
        ],
        [
          "الوزن",
          "37.9 kg"
        ],
        [
          "الزجاج الأمامي",
          "2.0 mm؛ زجاج مزدوج"
        ],
        [
          "الزجاج الخلفي",
          "2.0 mm؛ زجاج مزدوج"
        ],
        [
          "الإطار",
          "سبيكة ألومنيوم مؤكسد"
        ],
        [
          "صندوق التوصيل",
          "IP68"
        ],
        [
          "الموصل",
          "PV-H1 / MC4 / other"
        ],
        [
          "الكابل",
          "4 mm²؛ +350/-250 mm أو حسب الطلب؛ مقاوم للأشعة فوق البنفسجية"
        ],
        [
          "معامل ثنائية الوجه",
          "90 ± 5%"
        ],
        [
          "الحمل الساكن الأقصى (أمامي/خلفي)",
          "5400 / 2400 Pa"
        ]
      ]
    },
    {
      "title": "الحرارة والحدود",
      "rows": [
        [
          "درجة حرارة التشغيل الاسمية للخلية NOCT",
          "44 ± 2 °C"
        ],
        [
          "معامل حرارة Pmax",
          "-0.24%/°C"
        ],
        [
          "معامل حرارة Voc",
          "-0.22%/°C"
        ],
        [
          "معامل حرارة Isc",
          "+0.04%/°C"
        ],
        [
          "نطاق حرارة التشغيل",
          "-40 ~ +85 °C"
        ],
        [
          "أقصى جهد للنظام",
          "1500 V DC (IEC)"
        ],
        [
          "أقصى مصهر تسلسلي",
          "35 A"
        ]
      ]
    },
    {
      "title": "الضمان والتعبئة",
      "rows": [
        [
          "ضمان المنتج",
          "15 سنة"
        ],
        [
          "ضمان القدرة",
          "30 سنة"
        ],
        [
          "القدرة المضمونة بعد السنة الأولى",
          "99%"
        ],
        [
          "القدرة المضمونة في السنة 30",
          "90.3%"
        ],
        [
          "عدد الألواح لكل منصة/صندوق",
          "33"
        ],
        [
          "عدد الألواح لكل حاوية",
          "594"
        ],
        [
          "نوع الحاوية",
          "40′ HQ"
        ],
        [
          "عدد المنصات لكل حاوية",
          "18"
        ]
      ]
    }
  ],
  "modelTable": {
    "models": [
      "HS-210-B132DS700",
      "HS-210-B132DS705",
      "HS-210-B132DS710",
      "HS-210-B132DS715",
      "HS-210-B132DS720",
      "HS-210-B132DS725",
      "HS-210-B132DS730"
    ],
    "rows": [
      {
        "label": "Pmax (W)",
        "values": [
          "700",
          "705",
          "710",
          "715",
          "720",
          "725",
          "730"
        ]
      },
      {
        "label": "Vmp (V)",
        "values": [
          "41.78",
          "41.87",
          "41.96",
          "42.05",
          "42.14",
          "42.23",
          "42.32"
        ]
      },
      {
        "label": "Imp (A)",
        "values": [
          "16.76",
          "16.84",
          "16.93",
          "17.02",
          "17.10",
          "17.18",
          "17.26"
        ]
      },
      {
        "label": "Voc (V)",
        "values": [
          "49.77",
          "49.87",
          "49.97",
          "50.07",
          "50.17",
          "50.27",
          "50.37"
        ]
      },
      {
        "label": "Isc (A)",
        "values": [
          "17.81",
          "17.90",
          "17.99",
          "18.08",
          "18.17",
          "18.26",
          "18.35"
        ]
      },
      {
        "label": "الكفاءة",
        "values": [
          "22.5%",
          "22.7%",
          "22.9%",
          "23.0%",
          "23.2%",
          "23.3%",
          "23.5%"
        ]
      }
    ]
  },
  "certificates": "IEC61215; IEC61730; ISO9001:2015; ISO14001:2015; ISO45001:2018; IEC62941:2019",
  "image": img_huasun_n_type_png.url,
  "files": sheet(pdf_huasun_n_type_pdf.url)
},
{
  "id": "dyness-stack100",
  "category": "batteries",
  "brand": "Dyness",
  "name": "داينس STACK100 للتخزين عالي الجهد",
  "model": "STACK100 / S51100 + SBDU100",
  "power": "15.36–76.8 kWh",
  "description": "نظام بطاريات فوسفات حديد الليثيوم عالي الجهد قابل للتكديس دون رفوف.",
  "about": "يعتمد STACK100 على وحدات S51100 ووحدة تحكم SBDU100. يتيح تركيب 3 إلى 15 وحدة في المجموعة الواحدة دون تمديدات بين الوحدات. يدعم حتى 12 مجموعة بالتوازي لتوسعة تخزين الطاقة. يتضمن نظام إطفاء بالهباء الجوي وتبريداً بالهواء القسري.",
  "features": [
    "تركيب تكديسي دون رفوف",
    "سعة الوحدة 5.12 kWh",
    "عمق تفريغ 95%",
    "شحن وتفريغ حتى 1C",
    "حتى 12 مجموعة بالتوازي",
    "إطفاء مدمج بالهباء الجوي"
  ],
  "uses": [
    "تخزين الطاقة الشمسية للمنازل",
    "التخزين التجاري والصناعي",
    "تطبيقات محطات الشحن",
    "تنظيم تردد الشبكة"
  ],
  "suitableFor": "المنازل والمشروعات التجارية والصناعية التي تتطلب نظام تخزين عالي الجهد قابلاً للتوسع.",
  "specs": [
    {
      "title": "الخلايا والطاقة",
      "rows": [
        [
          "الكيمياء",
          "LiFePO4 (LFP)"
        ],
        [
          "جهد الوحدة الاسمي",
          "51.2 V"
        ],
        [
          "سعة الوحدة",
          "100 Ah"
        ],
        [
          "طاقة الوحدة",
          "5.12 kWh"
        ],
        [
          "طاقة الوحدة القابلة للاستخدام",
          "4.864 kWh"
        ]
      ]
    },
    {
      "title": "الشحن والتفريغ",
      "rows": [
        [
          "مجال جهد النظام",
          "134.4–864 V"
        ],
        [
          "التيار الموصى به",
          "50 A (0.5C)"
        ],
        [
          "التيار الأقصى",
          "100 A (1C)"
        ],
        [
          "ذروة التفريغ عند 25°C",
          "125 A / 2 min"
        ],
        [
          "عمق التفريغ",
          "95%"
        ],
        [
          "العمر الدوري",
          "≥8000 دورة؛ 0.2C، 25°C، DoD 95%، EOL 70%"
        ]
      ]
    },
    {
      "title": "الاتصال والتوسع",
      "rows": [
        [
          "الاتصال",
          "CAN / RS485"
        ],
        [
          "واجهة المستخدم",
          "WiFi + APP"
        ],
        [
          "الوحدات لكل مجموعة",
          "3–15"
        ],
        [
          "المجموعات المتوازية",
          "حتى 12"
        ]
      ]
    },
    {
      "title": "المواصفات العامة",
      "rows": [
        [
          "أبعاد المجموعة (عرض/عمق/ارتفاع)",
          "590 × 390 × (233 + 133n) mm؛ n عدد الوحدات"
        ],
        [
          "وزن المجموعة",
          "22 + 47n kg؛ n عدد الوحدات"
        ],
        [
          "الحماية",
          "IP20"
        ],
        [
          "حرارة الشحن",
          "0–55°C؛ اختيارياً -20–55°C"
        ],
        [
          "حرارة التفريغ",
          "-20–55°C"
        ],
        [
          "التبريد",
          "هواء قسري"
        ],
        [
          "التركيب",
          "تكديس دون كابلات بين الوحدات"
        ]
      ]
    },
    {
      "title": "الضمان",
      "rows": [
        [
          "مدة الضمان",
          "10 سنوات؛ حسب خطاب ضمان Dyness"
        ]
      ]
    }
  ],
  "modelTable": {
    "models": [
      "3 وحدات",
      "4 وحدات",
      "5 وحدات",
      "6 وحدات",
      "7 وحدات",
      "8 وحدات",
      "9 وحدات",
      "10 وحدات",
      "11 وحدات",
      "12 وحدات",
      "13 وحدات",
      "14 وحدات",
      "15 وحدات"
    ],
    "rows": [
      {
        "label": "عدد الوحدات",
        "values": [
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ]
      },
      {
        "label": "الجهد الاسمي (V)",
        "values": [
          "153.6",
          "204.8",
          "256",
          "307.2",
          "358.4",
          "409.6",
          "460.8",
          "512",
          "563.2",
          "614.4",
          "665.6",
          "716.8",
          "768"
        ]
      },
      {
        "label": "الطاقة (kWh)",
        "values": [
          "15.36",
          "20.48",
          "25.6",
          "30.72",
          "35.84",
          "40.96",
          "46.08",
          "51.2",
          "56.32",
          "61.44",
          "66.56",
          "71.68",
          "76.8"
        ]
      },
      {
        "label": "الطاقة القابلة للاستخدام (kWh)",
        "values": [
          "14.592",
          "19.456",
          "24.32",
          "29.184",
          "34.048",
          "38.912",
          "43.776",
          "48.64",
          "53.504",
          "58.368",
          "63.232",
          "68.096",
          "72.96"
        ]
      },
      {
        "label": "وحدة التحكم",
        "values": [
          "SBDU100",
          "SBDU100",
          "SBDU100",
          "SBDU100",
          "SBDU100",
          "SBDU100",
          "SBDU100",
          "SBDU100",
          "SBDU100",
          "SBDU100",
          "SBDU100",
          "SBDU100",
          "SBDU100"
        ]
      }
    ]
  },
  "compatible": {
    "items": [
      "KOSTAL",
      "Ingeteam",
      "Solis",
      "GoodWe",
      "Growatt",
      "Solplanet",
      "SAJ",
      "Deye",
      "Hoymiles",
      "Solinteg"
    ],
    "source": "الكتالوج الرسمي للمصنّع"
  },
  "certificates": "CE-EMC / CE-RED / IEC62619 / IEC63056 / IEC62477 / IEC62040 / UN38.3؛ راجع النشرة للقائمة الكاملة",
  "image": img_dyness_stack100_webp.url,
  "files": sheet(pdf_dyness_stack100_pdf.url)
},
{
  "id": "dyness-powerrack",
  "category": "batteries",
  "brand": "Dyness",
  "name": "داينس PowerRack HV4 للتركيب الرفّي",
  "model": "PowerRack HV4 (HV51100 + BDU100)",
  "power": "35.84 / 56.32 kWh",
  "description": "بطارية رفّية عالية الجهد للاستخدام الداخلي في المنشآت التجارية والصناعية.",
  "about": "النسخة المختارة هي PowerRack HV4 المدرجة رسمياً على موقع Dyness الألماني، وليست HV4F. تستخدم وحدات HV51100 مع وحدة تحكم BDU100. تتوفر التهيئتان المنشورتان بسبع وحدات أو إحدى عشرة وحدة على التوالي. صُممت لزيادة الاستهلاك الذاتي للطاقة الشمسية وتوفير الاحتياط وتقليل أحمال الذروة.",
  "features": [
    "خلايا LiFePO4",
    "إدارة بطارية BMS ذكية",
    "خزانة مخصصة لعدة وحدات",
    "جهد مرتفع لكفاءة النظام",
    "توسع حتى 15 وحدة متسلسلة",
    "اتصال CAN"
  ],
  "uses": [
    "زيادة الاستهلاك الذاتي للطاقة الشمسية",
    "الطاقة الاحتياطية",
    "خفض أحمال الذروة"
  ],
  "suitableFor": "المنشآت التجارية والصناعية المتوسطة ذات مساحة تركيب داخلية.",
  "specs": [
    {
      "title": "الخلايا والطاقة",
      "rows": [
        [
          "الكيمياء",
          "LiFePO4"
        ],
        [
          "جهد الوحدة",
          "51.2 V"
        ],
        [
          "سعة الوحدة والنظام",
          "100 Ah"
        ],
        [
          "طاقة الوحدة",
          "5.12 kWh"
        ]
      ]
    },
    {
      "title": "الشحن والتفريغ",
      "rows": [
        [
          "تيار الشحن الموصى به",
          "50 A"
        ],
        [
          "تيار التفريغ الموصى به",
          "50 A"
        ],
        [
          "العمر الدوري",
          ">6000 دورة؛ 0.2C، 25°C، DoD 95%"
        ]
      ]
    },
    {
      "title": "الاتصال والتوسع",
      "rows": [
        [
          "الاتصال",
          "CAN"
        ],
        [
          "التوسع",
          "حتى 15 وحدة على التوالي"
        ],
        [
          "وحدة التحكم المطلوبة",
          "BDU100"
        ]
      ]
    },
    {
      "title": "المواصفات العامة",
      "rows": [
        [
          "أبعاد الوحدة (عرض/عمق/ارتفاع)",
          "481 × 535 × 140 mm"
        ],
        [
          "وزن الوحدة",
          "43.5 kg"
        ],
        [
          "الحماية",
          "IP20"
        ],
        [
          "حرارة الشحن",
          "0–55°C"
        ],
        [
          "حرارة التفريغ",
          "-10–55°C"
        ],
        [
          "التركيب",
          "رفّي، داخلي"
        ]
      ]
    }
  ],
  "modelTable": {
    "models": [
      "PowerRack HV4-7s",
      "PowerRack HV4-11s"
    ],
    "rows": [
      {
        "label": "عدد الوحدات",
        "values": [
          "7",
          "11"
        ]
      },
      {
        "label": "الطاقة (kWh)",
        "values": [
          "35.84",
          "56.32"
        ]
      },
      {
        "label": "السعة (Ah)",
        "values": [
          "100",
          "100"
        ]
      },
      {
        "label": "الجهد الاسمي (V)",
        "values": [
          "358.4",
          "563.2"
        ]
      },
      {
        "label": "جهد التشغيل (V)",
        "values": [
          "313.6–403.2",
          "492.8–633.6"
        ]
      },
      {
        "label": "القدرة الاسمية (kW)",
        "values": [
          "21.5",
          "33.79"
        ]
      },
      {
        "label": "أقصى قدرة (kW)",
        "values": [
          "35.84",
          "56.32"
        ]
      },
      {
        "label": "الوزن (kg)",
        "values": [
          "397.5",
          "646.5"
        ]
      },
      {
        "label": "الأبعاد ع×ع×ر (mm)",
        "values": [
          "548 × 568 × 1412",
          "548 × 568 × 2012"
        ]
      }
    ]
  },
  "compatible": {
    "items": [
      "Goodwe",
      "Solis",
      "SAJ",
      "Sinexcel",
      "Hoymiles",
      "Growatt",
      "Ecatus",
      "Sermatec",
      "ATESS",
      "Sunways"
    ],
    "source": "الكتالوج الرسمي للمصنّع"
  },
  "certificates": "UN38.3 / CE-EMC",
  "image": img_dyness_powerrack_jpg.url,
  "files": sheet(pdf_dyness_powerrack_pdf.url)
},
{
  "id": "luxpower-battery",
  "category": "batteries",
  "brand": "Luxpower",
  "name": "بطاريات لوكس باور Li-5 وLi-10 منخفضة الجهد",
  "model": "Li-5 / Li-10",
  "power": "5.12 / 10.496 kWh",
  "description": "بطاريات LiFePO4 بجهد 51.2 فولت للتركيب الرفّي أو الجداري مع إدارة ذكية.",
  "about": "اختيرت سلسلة Li الرفّية ذات حوامل التثبيت الجدارية المرفقة. تشمل Li-5 بسعة 100 أمبير ساعة وLi-10 بسعة 205 أمبير ساعة. تتيح النشرة ربط حتى 50 وحدة دون موزع وحتى 256 وحدة مع موزع. تدعم المراقبة والتحديث عن بعد والتكامل مع عواكس LuxpowerTek.",
  "features": [
    "خلايا LFP",
    "حوامل جدارية مرفقة",
    "WiFi وBluetooth مدمجان",
    "إطفاء مدمج",
    "مراقبة وتحديث عن بعد",
    "حتى 50 وحدة بالتوازي دون موزع"
  ],
  "uses": [
    "تخزين الطاقة الشمسية المنزلية",
    "تغذية الأحمال الاحتياطية أثناء انقطاع الشبكة",
    "أنظمة هجينة منخفضة الجهد"
  ],
  "suitableFor": "الأنظمة المنزلية الهجينة ذات عاكس متوافق ببطارية 51.2 فولت ومكان تركيب داخلي.",
  "specs": [
    {
      "title": "الخلايا والطاقة",
      "rows": [
        [
          "الكيمياء",
          "LiFePO4 (LFP)"
        ],
        [
          "الجهد الاسمي",
          "51.2 V"
        ],
        [
          "الطاقة الاسمية",
          "Li-5: 5.12 kWh؛ Li-10: 10.496 kWh"
        ],
        [
          "السعة",
          "Li-5: 100 Ah؛ Li-10: 205 Ah"
        ]
      ]
    },
    {
      "title": "الشحن والتفريغ",
      "rows": [
        [
          "التيار الموصى به",
          "Li-5: 50 A؛ Li-10: 105 A"
        ],
        [
          "التيار المستمر الأقصى",
          "Li-5: 100 A؛ Li-10: 140 A"
        ],
        [
          "المعدل",
          "Li-5: 1C؛ Li-10: 0.7C"
        ],
        [
          "العمر الدوري",
          "≥6000 دورة"
        ],
        [
          "شروط اختبار الضمان",
          "25°C، DoD 90%، 0.5C؛ ليس تصريحاً بعمق التفريغ الأقصى"
        ]
      ]
    },
    {
      "title": "الاتصال والتوازي",
      "rows": [
        [
          "الاتصال",
          "CAN / RS485"
        ],
        [
          "لاسلكي",
          "WiFi / Bluetooth مدمجان"
        ],
        [
          "التوازي حسب النشرة",
          "50 وحدة دون موزع؛ 256 وحدة مع موزع"
        ]
      ]
    },
    {
      "title": "المواصفات العامة",
      "rows": [
        [
          "الحماية",
          "IP20"
        ],
        [
          "حرارة الشحن",
          "0–55°C"
        ],
        [
          "حرارة التفريغ",
          "-20–55°C"
        ],
        [
          "حرارة التخزين",
          "-10–35°C"
        ],
        [
          "الرطوبة",
          "5–85% RH دون تكاثف"
        ],
        [
          "التركيب",
          "رفّي أو جداري؛ الحوامل مرفقة"
        ]
      ]
    },
    {
      "title": "الضمان",
      "rows": [
        [
          "الضمان",
          "10 سنوات / 6000 دورة؛ بشروط النشرة"
        ]
      ]
    }
  ],
  "modelTable": {
    "models": [
      "Li-5",
      "Li-10"
    ],
    "rows": [
      {
        "label": "الطاقة (kWh)",
        "values": [
          "5.12",
          "10.496"
        ]
      },
      {
        "label": "السعة (Ah)",
        "values": [
          "100",
          "205"
        ]
      },
      {
        "label": "الجهد الاسمي (V)",
        "values": [
          "51.2",
          "51.2"
        ]
      },
      {
        "label": "أقصى تيار مستمر (A)",
        "values": [
          "100",
          "140"
        ]
      },
      {
        "label": "التيار الموصى به (A)",
        "values": [
          "50",
          "105"
        ]
      },
      {
        "label": "الأبعاد ع×ر×ع (mm)",
        "values": [
          "438 × 165 × 546",
          "440 × 229 × 600"
        ]
      },
      {
        "label": "الوزن (kg)",
        "values": [
          "49.4",
          "79"
        ]
      },
      {
        "label": "الشهادات",
        "values": [
          "CE; UN38.3; IEC62619",
          "None"
        ]
      }
    ]
  },
  "compatible": {
    "items": [
      "LuxpowerTek"
    ],
    "source": "الكتالوج الرسمي للمصنّع"
  },
  "certificates": "Li-5: CE / UN38.3 / IEC62619؛ Li-10: قيد التحديد (TBD) في النشرة",
  "image": img_luxpower_battery_webp.url,
  "files": sheet(pdf_luxpower_battery_pdf.url)
},
{
  "id": "luxpower-sna3-6kw",
  "category": "inverters",
  "brand": "Luxpower",
  "name": "انفرتر لوكس باور SNA بقدرة 3–6 كيلوواط",
  "model": "SNA 3K / SNA 4K / SNA 5K / SNA 6K",
  "power": "3–6 kW",
  "description": "انفرتر أحادي الطور يجمع الطاقة الشمسية والبطارية والشبكة مع مدخل مولد لدعم التغذية الاحتياطية.",
  "about": "تتوفر سلسلة SNA بقدرات 3 و4 و5 و6 كيلوواط لتطبيقات التخزين والطاقة الاحتياطية. تعمل مع بطاريات 48 فولت من الليثيوم أو الرصاص الحمضي. تتضمن متتبعين مستقلين للطاقة الشمسية ومنفذاً مخصصاً للمولد أو اقتران التيار المتردد أو إدارة الأحمال الذكية. تدعم المراقبة عبر تطبيق LUX وتوصيل ما يصل إلى 18 وحدة على التوازي.",
  "features": [
    "متتبعان مستقلان MPPT",
    "قدرة ألواح تصل إلى 9.6 كيلوواط في موديل 6K",
    "شحن وتفريغ حتى 140 أمبير في موديل 6K",
    "توصيل حتى 18 وحدة على التوازي",
    "مراقبة على مدار الساعة عبر تطبيق LUX",
    "منفذ مخصص للمولد أو اقتران التيار المتردد أو الأحمال الذكية"
  ],
  "uses": [
    "تخزين الطاقة الشمسية للمنازل",
    "تغذية احتياطية عند انقطاع الشبكة",
    "أنظمة شمسية مع مولد احتياطي"
  ],
  "suitableFor": "أنظمة منزلية وتجارية صغيرة بجهد 230 فولت أحادي الطور، في موقع داخلي محمي وبأحمال ضمن القدرة الاسمية.",
  "specs": [
    {
      "title": "دخل الألواح الشمسية",
      "rows": [
        [
          "قدرة الألواح القصوى",
          "3K: 6000 W؛ 4K/5K: 8000 W؛ 6K: 9600 W"
        ],
        [
          "أقصى جهد دخل شمسي",
          "500 V"
        ],
        [
          "نطاق MPPT",
          "120–385 V"
        ],
        [
          "عدد متتبعات MPPT",
          "2"
        ],
        [
          "أقصى تيار لكل MPPT",
          "17/17 A"
        ],
        [
          "تيار القصر لكل MPPT",
          "25/25 A"
        ]
      ]
    },
    {
      "title": "البطارية",
      "rows": [
        [
          "النوع",
          "ليثيوم أيون / رصاص حمضي"
        ],
        [
          "الجهد الاسمي",
          "48 V"
        ],
        [
          "نطاق الجهد",
          "38.4–60 V"
        ],
        [
          "أقصى تيار شحن / تفريغ",
          "3K: 70 A؛ 4K: 90 A؛ 5K: 110 A؛ 6K: 140 A"
        ]
      ]
    },
    {
      "title": "خرج التيار المتردد",
      "rows": [
        [
          "القدرة الاسمية",
          "3000 / 4000 / 5000 / 6000 W"
        ],
        [
          "قدرة الاندفاع",
          "ضعف القدرة الاسمية لمدة 5 s"
        ],
        [
          "الجهد",
          "230 V"
        ],
        [
          "التردد",
          "50/60 Hz"
        ],
        [
          "الكفاءة القصوى",
          "95.0%"
        ],
        [
          "كفاءة MPPT القصوى",
          "99.9%"
        ],
        [
          "زمن التحويل",
          "<7 ms (مفرد) / <20 ms (متوازٍ)"
        ]
      ]
    },
    {
      "title": "دخل الشبكة والمولد",
      "rows": [
        [
          "جهد الشبكة الاسمي",
          "230 V"
        ],
        [
          "قدرة دخل الشبكة",
          "3K/4K/5K: 8000 W أقصى؛ 6K: 9000 W أقصى"
        ],
        [
          "تيار التمرير المستمر الأقصى",
          "3K/4K/5K: 35 A؛ 6K: 40 A"
        ],
        [
          "جهد المولد",
          "220/230/240 V"
        ],
        [
          "تيار المولد",
          "32 A اسمي"
        ],
        [
          "قدرة المولد",
          "7370 W اسمي"
        ],
        [
          "تردد المولد",
          "50/60 Hz"
        ]
      ]
    },
    {
      "title": "المواصفات العامة",
      "rows": [
        [
          "الأبعاد (عرض × ارتفاع × عمق)",
          "330 × 505 × 135 mm"
        ],
        [
          "الوزن",
          "14.5 kg"
        ],
        [
          "درجة الحماية",
          "IP20"
        ],
        [
          "درجة حرارة التشغيل",
          "0–50 °C"
        ],
        [
          "الاتصال",
          "RS485 / Wi-Fi / CAN"
        ],
        [
          "العرض",
          "LCD + LED"
        ],
        [
          "التوازي",
          "حتى 18 وحدة"
        ]
      ]
    },
    {
      "title": "الضمان",
      "rows": [
        [
          "مدة الضمان وفق ورقة البيانات",
          "2 years"
        ]
      ]
    }
  ],
  "modelTable": {
    "models": [
      "SNA 3K",
      "SNA 4K",
      "SNA 5K",
      "SNA 6K"
    ],
    "rows": [
      {
        "label": "قدرة الخرج (W)",
        "values": [
          "3000",
          "4000",
          "5000",
          "6000"
        ]
      },
      {
        "label": "أقصى دخل ألواح (W)",
        "values": [
          "6000",
          "8000",
          "8000",
          "9600"
        ]
      },
      {
        "label": "أقصى تيار شحن (A)",
        "values": [
          "70",
          "90",
          "110",
          "140"
        ]
      },
      {
        "label": "أقصى تيار تفريغ (A)",
        "values": [
          "70",
          "90",
          "110",
          "140"
        ]
      },
      {
        "label": "تيار الخرج (A)",
        "values": [
          "13.5",
          "17.5",
          "22",
          "26.5"
        ]
      },
      {
        "label": "أقصى دخل AC (W)",
        "values": [
          "8000",
          "8000",
          "8000",
          "9000"
        ]
      },
      {
        "label": "أقصى تيار تمرير (A)",
        "values": [
          "35",
          "35",
          "35",
          "40"
        ]
      }
    ]
  },
  "certificates": "IEC 62109-1/2; IEC 61683; EN 61000; MEA; PEA",
  "image": img_luxpower_sna3_6kw_webp.url,
  "files": sheet(pdf_luxpower_sna3_6kw_pdf.url)
},
{
  "id": "luxpower-sna-12kw",
  "category": "inverters",
  "brand": "Luxpower",
  "name": "انفرتر لوكس باور SNA بقدرة 12 كيلوواط",
  "model": "SNA 12K",
  "power": "12 kW",
  "description": "انفرتر أحادي الطور يجمع الطاقة الشمسية والبطارية والشبكة مع مدخل مولد لدعم التغذية الاحتياطية.",
  "about": "يوفر SNA 12K قدرة خرج اسمية تبلغ 12 كيلوواط بجهد 230 فولت أحادي الطور. يدعم ألواحاً بقدرة إجمالية تصل إلى 24 كيلوواط عبر متتبعين مستقلين. يضم منفذاً منفصلاً للمولد ومنافذ للأحمال الذكية والأحمال الاحتياطية. تدعم ورقة البيانات المختارة توصيل ثلاث وحدات على التوازي.",
  "features": [
    "قدرة ألواح قصوى 24 كيلوواط",
    "متتبعان مستقلان MPPT",
    "شحن وتفريغ البطارية حتى 250 أمبير",
    "تيار تمرير مستمر حتى 100 أمبير",
    "تحويل احتياطي أقل من 10 مللي ثانية",
    "منفذ مولد مستقل حتى 15 كيلوواط"
  ],
  "uses": [
    "تخزين الطاقة الشمسية للمنازل",
    "تغذية احتياطية عند انقطاع الشبكة",
    "أنظمة شمسية مع مولد احتياطي"
  ],
  "suitableFor": "أنظمة منزلية وتجارية صغيرة بجهد 230 فولت أحادي الطور، في موقع داخلي محمي وبأحمال ضمن القدرة الاسمية.",
  "specs": [
    {
      "title": "دخل الألواح الشمسية",
      "rows": [
        [
          "قدرة الألواح القصوى",
          "24000 W (12000/12000)"
        ],
        [
          "أقصى جهد دخل شمسي",
          "480 V"
        ],
        [
          "نطاق MPPT",
          "120–385 V"
        ],
        [
          "عدد متتبعات MPPT",
          "2"
        ],
        [
          "أقصى تيار لكل MPPT",
          "35/35 A"
        ],
        [
          "تيار القصر لكل MPPT",
          "44/44 A"
        ]
      ]
    },
    {
      "title": "البطارية",
      "rows": [
        [
          "النوع",
          "ليثيوم أيون / رصاص حمضي"
        ],
        [
          "الجهد الاسمي",
          "48/51.2 V"
        ],
        [
          "نطاق الجهد",
          "46.4–60 / 38.4–60 V (كما ورد في ورقة البيانات)"
        ],
        [
          "أقصى تيار شحن / تفريغ",
          "250 A"
        ]
      ]
    },
    {
      "title": "خرج التيار المتردد",
      "rows": [
        [
          "القدرة الاسمية",
          "12000 W"
        ],
        [
          "قدرة الاندفاع",
          "ضعف القدرة الاسمية لمدة 5 s"
        ],
        [
          "الجهد",
          "230 V"
        ],
        [
          "التردد",
          "50/60 Hz"
        ],
        [
          "الكفاءة القصوى",
          "90.0%"
        ],
        [
          "كفاءة MPPT القصوى",
          "99.0%"
        ],
        [
          "زمن التحويل",
          "<10 ms (مفرد ومتوازٍ)"
        ]
      ]
    },
    {
      "title": "دخل الشبكة والمولد",
      "rows": [
        [
          "جهد الشبكة الاسمي",
          "230 V"
        ],
        [
          "قدرة دخل الشبكة",
          "24000 W اسمي"
        ],
        [
          "تيار التمرير المستمر الأقصى",
          "100 A"
        ],
        [
          "جهد المولد",
          "230 V"
        ],
        [
          "تيار المولد",
          "63 A أقصى"
        ],
        [
          "قدرة المولد",
          "حتى 15000 W وفق الصفحة الأولى"
        ],
        [
          "تردد المولد",
          "50/60 Hz"
        ]
      ]
    },
    {
      "title": "المواصفات العامة",
      "rows": [
        [
          "الأبعاد (عرض × ارتفاع × عمق)",
          "530 × 830 × 150 mm"
        ],
        [
          "الوزن",
          "40 kg"
        ],
        [
          "درجة الحماية",
          "IP20"
        ],
        [
          "درجة حرارة التشغيل",
          "0–45 °C"
        ],
        [
          "الاتصال",
          "RS485 / Wi-Fi / CAN"
        ],
        [
          "العرض",
          "LCD + RGB"
        ],
        [
          "التوازي",
          "حتى 3 وحدات"
        ]
      ]
    },
    {
      "title": "الضمان",
      "rows": [
        [
          "مدة الضمان وفق ورقة البيانات",
          "2 years"
        ]
      ]
    }
  ],
  "certificates": "CE",
  "image": img_luxpower_sna_12kw_webp.url,
  "files": sheet(pdf_luxpower_sna_12kw_pdf.url)
},
{
  "id": "sungrow-sg50cx-p2",
  "category": "grid-inverters",
  "brand": "Sungrow",
  "name": "عاكس صن جرو SG50CX-P2 ثلاثي الطور",
  "model": "SG50CX-P2",
  "power": "50 kW",
  "description": "عاكس سلاسل شمسي متصل بالشبكة ثلاثي الطور بقدرة 50 كيلوواط وأربعة متتبعات MPPT.",
  "about": "ينتمي هذا العاكس إلى سلسلة SG36/40/50CX-P2 للأعمال. يدعم تحسين الأداء عند التظليل الديناميكي واستعادة PID المدمجة. يتيح تشخيص منحنيات التيار والجهد ومراقبة أعطال الشبكة للصيانة عن بُعد. يتميز بحماية IP66 ومقاومة تآكل C5.",
  "features": [
    "أربعة متتبعات MPPT مستقلة",
    "سلسلتان لكل متتبع MPPT",
    "تحسين ديناميكي للتظليل واستعادة PID",
    "تشخيص ذكي لمنحنيات التيار والجهد",
    "حماية زيادة الجهد DC Type I+II وAC Type II",
    "دعم الحماية من القوس الكهربائي AFCI"
  ],
  "uses": [
    "منظومات الأسطح التجارية المتصلة بالشبكة",
    "توليد الطاقة الشمسية للمنشآت الصناعية",
    "مشروعات الطاقة الشمسية للأعمال"
  ],
  "suitableFor": "المنشآت التجارية والصناعية التي تحتاج عاكساً شمسياً ثلاثي الطور متصلاً بالشبكة.",
  "specs": [
    {
      "title": "دخل التيار المستمر",
      "rows": [
        [
          "القدرة الشمسية القصوى الموصى بها",
          "70 kWp"
        ],
        [
          "أقصى جهد دخل",
          "1100 V"
        ],
        [
          "نطاق MPPT",
          "160–1000 V"
        ],
        [
          "عدد MPPT",
          "4"
        ],
        [
          "السلاسل لكل MPPT",
          "2"
        ],
        [
          "أقصى تيار دخل",
          "120 A (4 × 30 A)"
        ],
        [
          "أقصى تيار قصر",
          "160 A (4 × 40 A)"
        ]
      ]
    },
    {
      "title": "خرج التيار المتردد",
      "rows": [
        [
          "القدرة الاسمية",
          "50 kW"
        ],
        [
          "أقصى قدرة ظاهرية",
          "55 kVA"
        ],
        [
          "الجهد الاسمي",
          "220/380 V; 230/400 V; 3/N/PE"
        ],
        [
          "نطاق الجهد",
          "312–480 V"
        ],
        [
          "التردد",
          "50/60 Hz"
        ],
        [
          "معامل القدرة",
          ">0.99; adjustable 0.8 leading–0.8 lagging"
        ],
        [
          "THD",
          "<3% at rated power"
        ]
      ]
    },
    {
      "title": "الكفاءة",
      "rows": [
        [
          "الكفاءة القصوى",
          "98.5%"
        ],
        [
          "الكفاءة الأوروبية",
          "98.3%"
        ]
      ]
    },
    {
      "title": "الحماية",
      "rows": [
        [
          "درجة الحماية",
          "IP66"
        ],
        [
          "مقاومة التآكل",
          "C5"
        ],
        [
          "حماية زيادة الجهد",
          "DC Type I+II / AC Type II"
        ],
        [
          "حمايات مدمجة",
          "عكس قطبية DC، قصر AC، تسرب التيار، مراقبة الأرضي، AFCI"
        ]
      ]
    },
    {
      "title": "بيانات عامة",
      "rows": [
        [
          "الأبعاد (عرض × ارتفاع × عمق)",
          "645 × 575 × 245 mm"
        ],
        [
          "الوزن",
          "41 kg"
        ],
        [
          "حرارة التشغيل",
          "-30 to +60 °C"
        ],
        [
          "التبريد",
          "هواء قسري ذكي"
        ],
        [
          "الاتصال",
          "RS485; WLAN/Ethernet optional"
        ],
        [
          "العرض",
          "LED; Bluetooth + APP"
        ]
      ]
    }
  ],
  "modelTable": {
    "models": [
      "SG36CX-P2",
      "SG40CX-P2",
      "SG50CX-P2"
    ],
    "rows": [
      {
        "label": "القدرة المقننة (kW)",
        "values": [
          "36",
          "40",
          "50"
        ]
      },
      {
        "label": "أقصى قدرة ظاهرية (kVA)",
        "values": [
          "40",
          "44",
          "55"
        ]
      },
      {
        "label": "أقصى ألواح موصى بها (kWp)",
        "values": [
          "50.4",
          "56",
          "70"
        ]
      },
      {
        "label": "الوزن (kg)",
        "values": [
          "40",
          "40",
          "41"
        ]
      }
    ]
  },
  "certificates": "IEC 62109; IEC 61727; IEC 62116; VDE-AR-N 4105:2018; EN 50549-1; G99; IEC 63027",
  "image": img_sungrow_sg50cx_p2_png.url,
  "files": sheet(pdf_sungrow_sg50cx_p2_pdf.url)
},
{
  "id": "sungrow-sg40cx-p2",
  "category": "grid-inverters",
  "brand": "Sungrow",
  "name": "عاكس صن جرو SG40CX-P2 ثلاثي الطور",
  "model": "SG40CX-P2",
  "power": "40 kW",
  "description": "عاكس سلاسل شمسي متصل بالشبكة ثلاثي الطور بقدرة 40 كيلوواط وأربعة متتبعات MPPT.",
  "about": "ينتمي هذا العاكس إلى سلسلة SG36/40/50CX-P2 للأعمال. يدعم تحسين الأداء عند التظليل الديناميكي واستعادة PID المدمجة. يتيح تشخيص منحنيات التيار والجهد ومراقبة أعطال الشبكة للصيانة عن بُعد. يتميز بحماية IP66 ومقاومة تآكل C5.",
  "features": [
    "أربعة متتبعات MPPT مستقلة",
    "سلسلتان لكل متتبع MPPT",
    "تحسين ديناميكي للتظليل واستعادة PID",
    "تشخيص ذكي لمنحنيات التيار والجهد",
    "حماية زيادة الجهد DC Type I+II وAC Type II",
    "دعم الحماية من القوس الكهربائي AFCI"
  ],
  "uses": [
    "منظومات الأسطح التجارية المتصلة بالشبكة",
    "توليد الطاقة الشمسية للمنشآت الصناعية",
    "مشروعات الطاقة الشمسية للأعمال"
  ],
  "suitableFor": "المنشآت التجارية والصناعية التي تحتاج عاكساً شمسياً ثلاثي الطور متصلاً بالشبكة.",
  "specs": [
    {
      "title": "دخل التيار المستمر",
      "rows": [
        [
          "القدرة الشمسية القصوى الموصى بها",
          "56 kWp"
        ],
        [
          "أقصى جهد دخل",
          "1100 V"
        ],
        [
          "نطاق MPPT",
          "160–1000 V"
        ],
        [
          "عدد MPPT",
          "4"
        ],
        [
          "السلاسل لكل MPPT",
          "2"
        ],
        [
          "أقصى تيار دخل",
          "120 A (4 × 30 A)"
        ],
        [
          "أقصى تيار قصر",
          "160 A (4 × 40 A)"
        ]
      ]
    },
    {
      "title": "خرج التيار المتردد",
      "rows": [
        [
          "القدرة الاسمية",
          "40 kW"
        ],
        [
          "أقصى قدرة ظاهرية",
          "44 kVA"
        ],
        [
          "الجهد الاسمي",
          "220/380 V; 230/400 V; 3/N/PE"
        ],
        [
          "نطاق الجهد",
          "312–480 V"
        ],
        [
          "التردد",
          "50/60 Hz"
        ],
        [
          "معامل القدرة",
          ">0.99; adjustable 0.8 leading–0.8 lagging"
        ],
        [
          "THD",
          "<3% at rated power"
        ]
      ]
    },
    {
      "title": "الكفاءة",
      "rows": [
        [
          "الكفاءة القصوى",
          "98.5%"
        ],
        [
          "الكفاءة الأوروبية",
          "98.3%"
        ]
      ]
    },
    {
      "title": "الحماية",
      "rows": [
        [
          "درجة الحماية",
          "IP66"
        ],
        [
          "مقاومة التآكل",
          "C5"
        ],
        [
          "حماية زيادة الجهد",
          "DC Type I+II / AC Type II"
        ],
        [
          "حمايات مدمجة",
          "عكس قطبية DC، قصر AC، تسرب التيار، مراقبة الأرضي، AFCI"
        ]
      ]
    },
    {
      "title": "بيانات عامة",
      "rows": [
        [
          "الأبعاد (عرض × ارتفاع × عمق)",
          "645 × 575 × 245 mm"
        ],
        [
          "الوزن",
          "40 kg"
        ],
        [
          "حرارة التشغيل",
          "-30 to +60 °C"
        ],
        [
          "التبريد",
          "هواء قسري ذكي"
        ],
        [
          "الاتصال",
          "RS485; WLAN/Ethernet optional"
        ],
        [
          "العرض",
          "LED; Bluetooth + APP"
        ]
      ]
    }
  ],
  "modelTable": {
    "models": [
      "SG36CX-P2",
      "SG40CX-P2",
      "SG50CX-P2"
    ],
    "rows": [
      {
        "label": "القدرة المقننة (kW)",
        "values": [
          "36",
          "40",
          "50"
        ]
      },
      {
        "label": "أقصى قدرة ظاهرية (kVA)",
        "values": [
          "40",
          "44",
          "55"
        ]
      },
      {
        "label": "أقصى ألواح موصى بها (kWp)",
        "values": [
          "50.4",
          "56",
          "70"
        ]
      },
      {
        "label": "الوزن (kg)",
        "values": [
          "40",
          "40",
          "41"
        ]
      }
    ]
  },
  "certificates": "IEC 62109; IEC 61727; IEC 62116; VDE-AR-N 4105:2018; EN 50549-1; G99; IEC 63027",
  "image": img_sungrow_sg40cx_p2_png.url,
  "files": sheet(pdf_sungrow_sg40cx_p2_pdf.url)
},
{
  "id": "atess-large-projects",
  "category": "grid-inverters",
  "brand": "ATESS",
  "name": "عاكس ATESS الهجين للمشروعات التجارية والصناعية — سلسلة HPS30/50/100/120/150",
  "model": "HPS30/50/100/120/150",
  "power": "30–150 kW",
  "description": "سلسلة عواكس هجينة متكاملة تجمع الطاقة الشمسية والبطارية والشبكة والأحمال للتطبيقات التجارية والصناعية.",
  "about": "اخترنا سلسلة HPS30/50/100/120/150 الهجينة من ATESS. تجمع العاكس الشمسي ومنظم الشحن وخزانة التجاوز في حل واحد. تدعم التشغيل المتصل والمنفصل عن الشبكة مع انتقال تلقائي خلال 10 مللي ثانية. وفق نشرة يوليو 2024، يمكن توصيل أربع وحدات بالتوازي للوصول إلى 600 كيلوواط.",
  "features": [
    "حل هجين متكامل للطاقة الشمسية والبطاريات",
    "انتقال تلقائي بين الشبكة والتشغيل المستقل خلال 10 ms",
    "شاشة لمس LCD",
    "أنماط تشغيل قابلة للبرمجة",
    "دعم التحكم عن بُعد بمولد الديزل",
    "توصيل أربع وحدات بالتوازي وفق النشرة المرفقة"
  ],
  "uses": [
    "تخزين الطاقة للمنشآت التجارية والصناعية",
    "خفض ذروة الطلب والاستهلاك الذاتي",
    "التغذية الاحتياطية عند انقطاع الشبكة",
    "أنظمة هجينة مع مولد ديزل"
  ],
  "suitableFor": "مشروعات تجارية وصناعية تحتاج تخزين الطاقة والتشغيل الاحتياطي؛ التركيب في بيئة مناسبة لحماية IP20.",
  "specs": [
    {
      "title": "دخل التيار المستمر",
      "rows": [
        [
          "أقصى جهد دائرة مفتوحة للألواح",
          "1000 V DC"
        ],
        [
          "نطاق MPPT",
          "480–800 V DC"
        ],
        [
          "قدرة الألواح القصوى حسب ترتيب الطرازات",
          "45/75/150/180/225 kWp"
        ],
        [
          "نطاق جهد البطارية",
          "352–600 V"
        ],
        [
          "شرط جهد MPPT",
          "أعلى من أقصى جهد البطارية بمقدار 50–200 V"
        ]
      ]
    },
    {
      "title": "خرج التيار المتردد",
      "rows": [
        [
          "القدرة الاسمية حسب ترتيب الطرازات",
          "30/50/100/120/150 kW"
        ],
        [
          "القدرة الظاهرية",
          "33/55/110/132/165 kVA"
        ],
        [
          "الجهد الاسمي",
          "400 V; 3/N/PE"
        ],
        [
          "نطاق الجهد",
          "360–440 V"
        ],
        [
          "التردد",
          "50/60 Hz"
        ],
        [
          "نطاق التردد",
          "45–55 / 55–65 Hz"
        ],
        [
          "معامل القدرة",
          "0.8 lagging–0.8 leading"
        ],
        [
          "THDI متصل بالشبكة",
          "<3%"
        ],
        [
          "THDU خارج الشبكة",
          "≤2% linear load"
        ]
      ]
    },
    {
      "title": "الحماية",
      "rows": [
        [
          "درجة الحماية",
          "IP20"
        ],
        [
          "حماية الصواعق",
          "Type II"
        ]
      ]
    },
    {
      "title": "بيانات عامة",
      "rows": [
        [
          "الأبعاد والوزن",
          "حسب جدول الطرازات"
        ],
        [
          "حرارة التشغيل",
          "-25 to +55 °C"
        ],
        [
          "التبريد",
          "هواء قسري"
        ],
        [
          "الاتصال",
          "RS485/CAN"
        ],
        [
          "العرض",
          "شاشة لمس"
        ],
        [
          "المحول المدمج",
          "نعم"
        ],
        [
          "زمن الانتقال",
          "≤10 ms"
        ]
      ]
    }
  ],
  "modelTable": {
    "models": [
      "HPS30",
      "HPS50",
      "HPS100",
      "HPS120",
      "HPS150"
    ],
    "rows": [
      {
        "label": "القدرة المقننة (kW)",
        "values": [
          "30",
          "50",
          "100",
          "120",
          "150"
        ]
      },
      {
        "label": "القدرة الظاهرية (kVA)",
        "values": [
          "33",
          "55",
          "110",
          "132",
          "165"
        ]
      },
      {
        "label": "أقصى ألواح (kWp)",
        "values": [
          "45",
          "75",
          "150",
          "180",
          "225"
        ]
      },
      {
        "label": "التيار المقنن (A)",
        "values": [
          "43",
          "72",
          "144",
          "173",
          "217"
        ]
      },
      {
        "label": "الأبعاد ع×ر×ع (mm)",
        "values": [
          "700 × 1660 × 600",
          "950 × 1860 × 750",
          "1200 × 1900 × 800",
          "1200 × 1900 × 800",
          "1200 × 1900 × 800"
        ]
      },
      {
        "label": "الوزن (kg)",
        "values": [
          "355",
          "610",
          "948",
          "1025",
          "1230"
        ]
      }
    ]
  },
  "certificates": "CE; MEA; PEA; UKCA; AS 4777.2; EN 61000-6-2:2019; EN 61000-6-4:2019; EN62109-1:2010; EN62109-2:2011; EN 50549-1:2019; NRS 097-2-1:2017; G99; VDE-AR-N 4105:2018",
  "image": img_atess_large_projects_png.url,
  "files": sheet(pdf_atess_large_projects_pdf.url)
}
];

export const CATALOG_PRODUCTS: Product[] = PRODUCTS;

export function productsByBrand(brand: string) {
  return CATALOG_PRODUCTS.filter((p) => p.brand === brand);
}

export function productsByCategory(cat: ProductCategory) {
  return CATALOG_PRODUCTS.filter((p) => p.category === cat);
}
export function findProduct(id: string) {
  return CATALOG_PRODUCTS.find((p) => p.id === id) ?? CATALOG_PRODUCTS.find((p) => p.baseId === id);
}

/** يطابق نص التوافق الرسمي مع منتجات الكتالوج (بالعلامة التجارية أو الموديل) — بدون أي تخمين. */
export function matchCompatibleProducts(product: Product, text: string): Product[] {
  const t = text.toUpperCase();
  return PRODUCTS.filter((p) => {
    if (p.id === product.id || p.category === product.category) return false;
    const brand = p.brand.toUpperCase();
    const model = p.model.toUpperCase();
    return t.includes(brand) || (model.length > 3 && t.includes(model));
  });
}

/** أهم المواصفات للبطاقة السريعة — تُبنى من المواصفات الموثقة فقط. */
export function quickSpecs(product: Product, limit = 6): [string, string][] {
  return product.specs.flatMap((g) => g.rows).slice(0, limit);
}

function normalizeModel(text: string) {
  return text.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

const ARABIC_BRANDS: { pattern: RegExp; brand: string }[] = [
  { pattern: /جراسين|غراسين|GRASEN/i, brand: "GRASEN" },
  { pattern: /ترينا|TRINA/i, brand: "Trina Solar" },
  { pattern: /هواسن|هواسون|HUASUN/i, brand: "Huasun" },
  { pattern: /داينس|داينيس|DYNESS/i, brand: "Dyness" },
  { pattern: /لاكس\s*باور|لوكس\s*باور|LUX\s*POWER/i, brand: "Luxpower" },
  { pattern: /سنجرو|صن\s*جرو|SUNGROW/i, brand: "Sungrow" },
  { pattern: /أتيس|اتيس|ATESS/i, brand: "ATESS" },
];

/** فئات البحث: «inverters» تشمل الهجينة والمرتبطة بالشبكة. */
function poolFor(category?: ProductCategory) {
  if (!category) return PRODUCTS;
  if (category === "inverters") return PRODUCTS.filter((p) => p.category === "inverters" || p.category === "grid-inverters");
  return PRODUCTS.filter((p) => p.category === category);
}

/**
 * يعثر على منتج الكتالوج المطابق لنص بند المنظومة.
 * المطابقة بالموديل الرسمي أولاً، ثم بالقدرة للألواح، ثم بالعلامة التجارية داخل نفس الفئة.
 * لا تخمين: تعيد null إذا لم يوجد تطابق موثوق.
 */
export function findCatalogProductByText(text: string, category?: ProductCategory): Product | null {
  const norm = normalizeModel(text);
  const pool = poolFor(category);
  let best: Product | null = null;
  let bestLen = 0;
  for (const product of pool) {
    const tokens = [product.model, ...(product.modelTable?.models ?? [])].flatMap((m) => m.split(/[/|،,]/));
    for (const variant of tokens) {
      const token = normalizeModel(variant);
      if (token.length >= 5 && norm.includes(token) && token.length > bestLen) {
        best = product;
        bestLen = token.length;
      }
    }
  }
  if (best) return best;

  if (!category || category === "panels") {
    const watt = text.match(/(\d{3})\s*(?:وات|واط|W\b)/i);
    if (watt?.[1]) {
      const rating = watt[1];
      const panel = PRODUCTS.find((p) => p.category === "panels" && p.power.includes(rating));
      if (panel) return panel;
    }
  }

  const brandHit = ARABIC_BRANDS.find((b) => b.pattern.test(text));
  if (brandHit) return pool.find((p) => p.brand === brandHit.brand) ?? null;
  return null;
}

/** يطابق بند المنظومة المقترحة مع منتج الكتالوج الحقيقي، أو null إذا لم يوجد تطابق موثوق. */
export function findCatalogProductForSpec(text: string, category: ProductCategory, hint = ""): Product | null {
  void hint;
  return findCatalogProductByText(text, category);
}
