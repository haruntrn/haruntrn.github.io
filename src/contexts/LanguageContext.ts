// TITLE: LanguageContext.tsx

import { createContext, useContext, type ReactNode } from "react";

export type Language = "en" | "tr";

export interface TranslationKeys {
  switchLang: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroTitleEnd: string;
  heroSub: string;
  heroCta: string;
  heroSubCta: string;
  sectorsTitle: string;
  sectors: string[];
  servicesTitle: string;
  services: { title: string; desc: string; span: number }[];
  infraTitle: string;
  infraSub: string;
  infra: { title: string; desc: string }[];
  testiTitle: string;
  testimonials: { quote: string; author: string }[];
  stats: { value: string; label: string }[];
  finalTitle: string;
  footerLinks1: string[];
  footerLinks2: string[];
  footerRights: string;
}

interface LanguageContextType {
  t: TranslationKeys;
  toggleLanguage: () => void;
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    switchLang: "TR",
    heroTitle: "Structured",
    heroTitleHighlight: " U.S. Market Entry ",
    heroTitleEnd: "for Industrial Companies",
    heroSub:
      "Market entry strategy, distributor development, and scalable sales pipeline building in the United States.",
    heroCta: "Start Your U.S. Market Entry Strategy",
    heroSubCta: "Initial consultation at no cost.",
    sectorsTitle: "Industries We Work With",
    sectors: [
      "Industrial Materials and Equipments",
      "Manufacturing",
      "Engineering",
      "Packaging",
      "B2B Industrial Companies",
    ],
    servicesTitle: "Our Services",
    services: [
      {
        title: "Compliance & Incentive Advisory",
        desc: "Guidance on U.S. product standards, regulatory compliance, and applicable incentive or grant programs supporting international market entry.",
        span: 2,
      },
      {
        title: "Market Entry Strategy",
        desc: "Structured planning for entering the U.S. market, including target segment selection, pricing positioning, and go-to-market channel strategy.",
        span: 1,
      },
      {
        title: "Sales & Distributor Development",
        desc: "Identification and qualification of potential distributors, partners, and key sales channels to build a scalable distribution network in the U.S.",
        span: 1,
      },
      {
        title: "Sales Pipeline Development",
        desc: "Creation of a focused B2B sales pipeline through targeted outreach, opportunity qualification, and structured deal development.",
        span: 1,
      },
      {
        title: "Marketplace Channel Expansion",
        desc: "Development of additional sales channels through major U.S. marketplaces such as Amazon, Walmart, and eBay.",
        span: 1,
      },
    ],
    infraTitle: "U.S. Market Infrastructure",
    infraSub:
      "Access to key commercial infrastructure required to support successful entry and growth in the U.S. market.",
    infra: [
      {
        title: "Distribution & Sales Channels",
        desc: "Connections with distributors, sales partners, and industry networks across key sectors.",
      },
      {
        title: "Logistics & Fulfillment Infrastructure",
        desc: "Access to third-party logistics (3PL), warehousing, and distribution solutions supporting nationwide operations.",
      },
      {
        title: "E-commerce Marketplaces",
        desc: "Sales channel development through major U.S. platforms including Amazon, Walmart, and eBay.",
      },
      {
        title: "Operational & Market Partners",
        desc: "Collaboration with logistics providers, service partners, and market intermediaries supporting U.S. market expansion.",
      },
    ],
    testiTitle: "Market Entry Success",
    testimonials: [
      {
        quote:
          "The structured market entry approach helped us better understand the U.S. distribution landscape and identify potential distributor partners aligned with our product positioning.",
        author: "Packaging Manufacturer",
      },
      {
        quote:
          "Through a structured evaluation of pricing, positioning, and market segments, we gained much clearer direction on how to approach the U.S. market and potential business partners.",
        author: "Industrial Materials Company",
      },
      {
        quote:
          "The process helped us start building a focused sales pipeline in the U.S. market and identify potential partners to support long-term growth.",
        author: "Manufacturing Firm",
      },
    ],
    stats: [
      { value: "50+", label: "Potential distributors identified" },
      { value: "6 Months", label: "Structured market entry program" },
      { value: "50", label: "U.S. states with market coverage" },
      { value: "Millions", label: "Potential online buyers via marketplaces" },
    ],
    finalTitle: "Ready to Enter the U.S. Market?",
    footerLinks1: ["Home", "Services", "Market Entry Program"],
    footerLinks2: ["Insights", "Contact"],
    footerRights: "© 2026 AGASPERA LLC. All rights reserved.",
  },
  tr: {
    switchLang: "EN",
    heroTitle: "Endüstriyel Şirketler İçin",
    heroTitleHighlight: " Yapılandırılmış ",
    heroTitleEnd: "ABD Pazarına Giriş",
    heroSub:
      "ABD pazarına giriş stratejisi, distribütör ağı geliştirme ve sürdürülebilir satış fırsatları oluşturma.",
    heroCta: "ABD Pazar Giriş Stratejinizi Başlatın",
    heroSubCta: "İlk danışma görüşmesi ücretsizdir.",
    sectorsTitle: "Çalıştığımız Sektörler",
    sectors: [
      "Endüstriyel Malzemeler ve Ekipmanlar",
      "Üretim ve İmalat",
      "Mühendislik",
      "Ambalaj ve Paketleme",
      "B2B Endüstriyel Şirketler",
    ],
    servicesTitle: "Hizmetlerimiz",
    services: [
      {
        title: "Standart ve Teşvik Danışmanlığı",
        desc: "ABD ürün standartları, regülasyonlar ve uluslararası pazara girişte kullanılabilecek teşvik ve hibe programları konusunda rehberlik.",
        span: 2,
      },
      {
        title: "Pazar Giriş Stratejisi",
        desc: "Hedef pazar segmentlerinin belirlenmesi, fiyatlandırma konumlandırması ve ABD pazarı için doğru satış kanallarının oluşturulmasını kapsayan yapılandırılmış plan.",
        span: 1,
      },
      {
        title: "Satış ve Distribütör Geliştirme",
        desc: "ABD pazarında ölçeklenebilir bir satış ağı oluşturmak için potansiyel distribütörlerin ve iş ortaklarının belirlenmesi, değerlendirilmesi ve geliştirilmesi.",
        span: 1,
      },
      {
        title: "Satış Pipeline Geliştirme",
        desc: "Hedefli müşteri erişimi, fırsat değerlendirme ve satış süreçlerinin yapılandırılması ile güçlü bir B2B satış pipeline oluşturulması.",
        span: 1,
      },
      {
        title: "E-Ticaret Kanal Geliştirme",
        desc: "Amazon, Walmart ve eBay gibi büyük ABD pazar yerleri üzerinden ek satış kanallarının oluşturulması ve yönetimi.",
        span: 1,
      },
    ],
    infraTitle: "ABD Pazar Altyapısı",
    infraSub:
      "ABD pazarına giriş ve büyüme sürecini destekleyen ticari altyapıya erişim.",
    infra: [
      {
        title: "Dağıtım ve Satış Kanalları",
        desc: "Distribütörler, satış partnerleri ve sektör ağları ile bağlantı.",
      },
      {
        title: "Lojistik ve Depolama",
        desc: "ABD genelinde operasyonları destekleyen 3PL depolama ve dağıtım.",
      },
      {
        title: "E-Ticaret Platformları",
        desc: "Amazon, Walmart ve eBay üzerinde kanal geliştirme.",
      },
      {
        title: "Operasyonel İş Ortakları",
        desc: "Lojistik sağlayıcılar, servis partnerleri ve ticari aracılar.",
      },
    ],
    testiTitle: "Referans / Başarı Hikayeleri",
    testimonials: [
      {
        quote:
          "Yapılandırılmış pazar giriş yaklaşımı sayesinde ABD distribütör yapısını daha iyi anlayarak ürün konumlandırmamıza uygun potansiyel iş ortaklarını belirleyebildik.",
        author: "Ambalaj Üreticisi",
      },
      {
        quote:
          "Fiyatlandırma, pazar segmentleri ve konumlandırma üzerine yapılan yapılandırılmış analiz sayesinde ABD pazarına nasıl yaklaşmamız gerektiğini çok daha net gördük.",
        author: "Endüstriyel Malzeme Şirketi",
      },
      {
        quote:
          "Bu süreç ABD pazarında hedefli bir satış pipeline oluşturmamıza ve uzun vadeli büyümeyi destekleyecek potansiyel iş ortaklarını belirlememize yardımcı oldu.",
        author: "Üretim Şirketi",
      },
    ],
    stats: [
      { value: "50+", label: "Potansiyel distribütör analizi" },
      { value: "6 Ay", label: "Yapılandırılmış pazar giriş programı" },
      { value: "50", label: "Eyalette pazar erişimi" },
      { value: "Milyon+", label: "E-ticaret platformu alıcısı" },
    ],
    finalTitle: "ABD Pazarına Girmeye Hazır mısınız?",
    footerLinks1: ["Ana Sayfa", "Hizmetler", "Pazar Giriş Programı"],
    footerLinks2: ["İçgörüler", "İletişim"],
    footerRights: "© 2026 AGASPERA LLC. Tüm hakları saklıdır.",
  },
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export interface LanguageProviderProps {
  children: ReactNode;
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
