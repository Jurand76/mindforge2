export interface Article {
  slug: string;
  category: "psychologia" | "technologia" | "ciekawostki" | "marketing";
  title: string;
  description: string;
  date: string;
  image: string;
  featured?: boolean;
}

export const CATEGORY_NAMES: Record<Article["category"], string> = {
  psychologia: "Psychologia",
  technologia: "Technologia",
  ciekawostki: "Ciekawostki",
  marketing: "Marketing",
};

export const CATEGORY_COLORS: Record<Article["category"], string> = {
  psychologia: "#7c3aed",
  technologia: "#2563eb",
  ciekawostki: "#059669",
  marketing: "#ea580c",
};

export const CATEGORY_IMAGES: Record<Article["category"], string> = {
  psychologia: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=faces",
  technologia: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop",
  ciekawostki: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=800&fit=crop",
  marketing: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
};

export const featuredArticles: Article[] = [
  {
    slug: "bledy-poznawcze",
    category: "psychologia",
    title: "Błędy poznawcze, które wpływają na Twoje decyzje",
    description: "Jak nasz mózg oszukuje nas każdego dnia? Przegląd najczęstszych błędów poznawczych.",
    date: "2026-07-10",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=800&fit=crop",
    featured: true,
  },
  {
    slug: "astro-wprowadzenie",
    category: "technologia",
    title: "Astro — nowoczesny framework do budowy stron",
    description: "Dlaczego Astro to świetny wybór do blogów i stron contentowych.",
    date: "2026-07-18",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=800&fit=crop",
  },
  {
    slug: "kosmos-ciekawostki",
    category: "ciekawostki",
    title: "10 ciekawostek o kosmosie, które Cię zaskoczą",
    description: "Kosmos jest dziwniejszy niż nam się wydaje. Fakty, od których zakręci Ci się w głowie.",
    date: "2026-07-08",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=800&fit=crop",
  },
  {
    slug: "psychologia-kolorow-marketing",
    category: "marketing",
    title: "Psychologia kolorów w marketingu",
    description: "Jak barwy wpływają na sprzedaż i dlaczego czerwony przycisk konwertuje lepiej.",
    date: "2026-07-05",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
  },
  {
    slug: "pierwszy-wpis",
    category: "technologia",
    title: "Startujemy z MindForge — pierwszy wpis",
    description: "Nowy blog o psychologii, technologii, marketingu i ciekawostkach właśnie wystartował.",
    date: "2026-07-15",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=800&fit=crop",
  },
];

export const stories: Article[] = [
  {
    slug: "bledy-poznawcze",
    category: "psychologia",
    title: "Błędy poznawcze, które wpływają na Twoje decyzje",
    description: "Jak nasz mózg oszukuje nas każdego dnia i jak się przed tym bronić.",
    date: "2026-07-10",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&h=800&fit=crop",
  },
  {
    slug: "astro-wprowadzenie",
    category: "technologia",
    title: "Astro — framework do budowy stron",
    description: "Zero JS domyślnie, content collections i partial hydration.",
    date: "2026-07-18",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=800&fit=crop",
  },
  {
    slug: "kosmos-ciekawostki",
    category: "ciekawostki",
    title: "Kosmiczne ciekawostki",
    description: "Dzień na Wenus trwa dłużej niż rok. I inne fakty o Wszechświecie.",
    date: "2026-07-08",
    image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=800&h=800&fit=crop",
  },
  {
    slug: "psychologia-kolorow-marketing",
    category: "marketing",
    title: "Psychologia kolorów w marketingu",
    description: "Jak barwy wpływają na sprzedaż i dlaczego czerwony przycisk konwertuje lepiej.",
    date: "2026-07-05",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop",
  },
  {
    slug: "efekt-halo",
    category: "psychologia",
    title: "Efekt halo — jak pierwsze wrażenie zniekształca ocenę",
    description: "Jedna cecha potrafi zdominować całościową ocenę człowieka lub produktu.",
    date: "2026-06-25",
    image: "https://images.unsplash.com/photo-1529539795054-3c162aab037a?w=800&h=800&fit=crop",
  },
  {
    slug: "tailwind-v4-nowosci",
    category: "technologia",
    title: "Tailwind CSS v4 — co nowego?",
    description: "Nowy silnik, brak konfiguracji, CSS-first. Przegląd najważniejszych zmian.",
    date: "2026-06-18",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=800&fit=crop",
  },
  {
    slug: "efekt-motyla",
    category: "ciekawostki",
    title: "Efekt motyla — jak małe zmiany tworzą wielkie skutki",
    description: "Teoria chaosu wyjaśnia, dlaczego trzepot skrzydeł motyla może wywołać huragan.",
    date: "2026-06-10",
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&h=800&fit=crop",
  },
  {
    slug: "social-proof-marketing",
    category: "marketing",
    title: "Social proof — dlaczego opinie innych nas przekonują",
    description: "Jak recenzje, gwiazdki i liczniki wpływają na decyzje zakupowe konsumentów.",
    date: "2026-06-03",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
  },
  {
    slug: "dysonans-poznawczy",
    category: "psychologia",
    title: "Dysonans poznawczy — gdy umysł walczy sam ze sobą",
    description: "Dlaczego ludzie racjonalizują złe decyzje zamiast je zmienić.",
    date: "2026-05-28",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&h=800&fit=crop",
  },
  {
    slug: "rust-programming",
    category: "technologia",
    title: "Dlaczego Rust zdobywa serca programistów",
    description: "Bezpieczeństwo pamięci bez garbage collectora. Analiza fenomenu języka Rust.",
    date: "2026-05-20",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910ecde?w=800&h=800&fit=crop",
  },
  {
    slug: "ocean-ciekawostki",
    category: "ciekawostki",
    title: "10 rzeczy, których nie wiesz o oceanach",
    description: "Znamy mniej niż 5% głębin oceanicznych. Co kryje się pod powierzchnią?",
    date: "2026-05-15",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=800&fit=crop",
  },
  {
    slug: "neuromarketing-zakupy",
    category: "marketing",
    title: "Neuromarketing — co dzieje się w mózgu podczas zakupów",
    description: "Jak sklepy i reklamy wykorzystują neurobiologię, żeby zwiększyć sprzedaż.",
    date: "2026-05-08",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=800&fit=crop",
  },
  {
    slug: "ai-psychologia",
    category: "technologia",
    title: "AI i psychologia — czy sztuczna inteligencja rozumie emocje?",
    description: "Modele językowe potrafią analizować sentyment, ale czy naprawdę czują?",
    date: "2026-04-30",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=800&fit=crop",
  },
];

export const journalEntries: Article[] = [
  {
    slug: "pierwszy-wpis",
    category: "technologia",
    title: "Pierwszy wpis na MindForge",
    description: "Startujemy z nowym blogiem. Oto co planujemy publikować w nadchodzących tygodniach.",
    date: "2026-07-15",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=800&fit=crop",
  },
  {
    slug: "bledy-poznawcze",
    category: "psychologia",
    title: "Efekt potwierdzenia — dlaczego widzisz to, w co wierzysz",
    description: "Confirmation bias to jeden z najgroźniejszych błędów poznawczych. Jak go rozpoznać?",
    date: "2026-07-10",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=800&fit=crop",
  },
  {
    slug: "psychologia-kolorow-marketing",
    category: "marketing",
    title: "CTA w kolorze czerwonym — case study",
    description: "Zmiana koloru przycisku zwiększyła konwersję o 34%. Analizujemy dlaczego.",
    date: "2026-07-05",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
  },
];

export interface Service {
  title: string;
  description: string;
  category: Article["category"];
}

export const services: Service[] = [
  {
    title: "Psychologia",
    description: "Mechanizmy umysłu, błędy poznawcze i narzędzia do lepszego rozumienia siebie i innych.",
    category: "psychologia",
  },
  {
    title: "Technologia",
    description: "Nowoczesne frameworki, narzędzia programistyczne i trendy w świecie IT.",
    category: "technologia",
  },
  {
    title: "Ciekawostki",
    description: "Fascynujące fakty ze świata nauki, kosmosu i przyrody, które poszerzają horyzonty.",
    category: "ciekawostki",
  },
  {
    title: "Marketing",
    description: "Psychologia sprzedaży, strategie reklamowe i case studies skutecznych kampanii.",
    category: "marketing",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop",
];
