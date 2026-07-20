# MindForge Design System

Pelna specyfikacja designu po wszystkich zmianach. Stan na 2026-07-20.

---

## Kierunek wizualny

Blog na pograniczu psychologii, technologii, marketingu i ciekawostek. Design jest:

- czysty i czytelny,
- editorialowy z wyrazistym hero gridem,
- ciemny header i footer kontrastujacy z jasnym tlem,
- duze fotografie jako element dominujacy,
- minimalna ilosc kolorow — akcenty tylko na kategorie,
- oparty na Tailwind CSS v4.

---

## Kolorystyka

### Kolory globalne (Tailwind `@theme` w `global.css`)

| Token | Wartosc | Uzycie |
|---|---|---|
| `--color-accent` | `#b9a38f` (cieply bez/taupe) | Hover linkow, akcenty |
| `--color-black` | `#111111` | Kolor tekstu |
| `--color-muted` | `#777777` | Tekst drugorzedny (daty, opisy) |
| `--color-border` | `#eeeeee` | Ramki, separatory |
| `--color-overlay` | `rgba(0,0,0,0.35)` | Overlay na zdjeciach |

### Kolory kategorii (zdefiniowane w `data/content.ts`)

| Kategoria | HEX | Opis |
|---|---|---|
| Psychologia | `#7c3aed` | Fiolet |
| Technologia | `#2563eb` | Niebieski |
| Ciekawostki | `#059669` | Zielony |
| Marketing | `#ea580c` | Pomaranczowy |

Uzywane jako tlo badge'y kategorii w hero gridzie, na stronie artykulu i w innych komponentach.

### Kolory stale (hardcoded)

| Wartosc | Uzycie |
|---|---|
| `#060606` | Tlo footera, nawigacji i sekcji Services |
| `#f0f0f0` | Tlo strony (body), tlo hero grida, tlo kategorii |
| `#e5e5e5` | Ramki w edytorze, obramowania na stronie artykulu |
| `#2d6a4f` | Lewy border blockquote w artykulach |
| `#f0f5f0` | Tlo blockquote w artykulach |
| `#2563eb` | Kolor linkow w tekscie artykulu |
| `#1e1e1e` | Tlo blokow kodu |
| `#e0e0e0` | Tekst w blokach kodu |
| `#d4d4d4` | Separator na homepage (miedzy hero a sekcjami) |

---

## Typografia

### Fonty (Google Fonts, ladowane w `BaseLayout`)

| Font | Wagi | Uzycie |
|---|---|---|
| **Inter** | 300, 400, 500, 600 | Podstawowy font bezszeryfowy (body, menu, daty, UI) |
| **Montserrat** | 400, 500, 600 | Tytuly artykulow, naglowki, prose |
| **Playfair Display** | 400, 400i, 600, 600i, 700, 700i | Font szeryfowy (utility `.serif`) |
| **Cormorant Garamond** | 400-700 + italiki | Font szeryfowy (fallback w `.serif`) |

### Stosy fontow (CSS variables)

```css
--font-sans: "Inter", "Helvetica Neue", Arial, sans-serif;
--font-serif: "Playfair Display", "Cormorant Garamond", Georgia, serif;
--font-signature: "Italianno", "Allura", cursive;
```

- `--font-sans`: Podstawowy font calej strony
- `--font-serif`: Klasa `.serif` do wyroznionych naglowkow
- `--font-signature`: Klasa `.signature` (uzywana do stylizacji loga)

### Rozmiary i style tekstu

| Element | Styl |
|---|---|
| Body | 16px, line-height 1.6, Inter, `#111` |
| Naglowki h1-h6 | line-height 1.15 |
| Linki | `color: inherit`, hover: `--color-accent`, transition 0.25s |
| Menu nawigacji | 11px, uppercase, letter-spacing 0.15em, biale na ciemnym tle |
| Badge kategorii | 9-10px, uppercase, letter-spacing 0.1-0.15em, biale na kolorowym tle |
| Prose (artykuly) | Montserrat, 1rem, line-height 1.65, margin-bottom 1.6em |
| Prose naglowki h3 | 1.2rem, uppercase, font-weight 800, margin 1.8em 0 0.4em |
| Tytul hero (duzy) | 2-3xl, font-extrabold, bialy z text-shadow outline |
| Tytuly w listach | lg-xl, font-bold, Montserrat, hover: accent-color |

---

## Layout i struktura stron

### Wspolny szkielet: `BaseLayout.astro`

Stosowany na homepage, kategoriach, stronie O mnie:

```
┌─────────────────────────────┐
│  Logo (head2.jpg banner)    │  ← Logo.astro
│  Nawigacja (#060606 ciemna) │  ← Navigation.astro
├─────────────────────────────┤
│                             │
│  <slot />  (zawartosc)      │
│                             │
├─────────────────────────────┤
│  Stopka (#060606 ciemna)    │  ← Footer.astro
└─────────────────────────────┘
```

Szerokosc max: 1600px, centrowana, padding boczny `px-4 md:px-8`.

### Homepage (`/`)

```
┌─ HeroEditorialGrid (5 kafle: 1 duzy 2x2 + 4 male) ───┐
│  Tlo: #f0f0f0, pt-12                                    │
│  Kafle: grid-cols-2 md:grid-cols-4, gap-3              │
│  Kazdy kafel: zdjecie + overlay tytulu + ramka_2.png   │
├─ Separator (border-t #d4d4d4, mt-40px) ────────────────┤
├─ FeaturedStories (karuzela, tytul "Starsze artykuly") ─┤
└─ ServicesSection (ciemna sekcja, 4 kolumny) ───────────┘
```

### Strona kategorii (`/kategoria/[category]`)

```
┌─ Header z BaseLayout (Logo + Nawigacja) ───────────────┐
├─ Lista artykulow (tlo: #f0f0f0, pt-12 pb-16) ──────────┤
│  Kazdy artykul:                                          │
│  ┌──────────┬─────────────────────────────────┐         │
│  │ 150x150  │ Badge kat. + data                │         │
│  │ zdjecie  │ Tytul (Montserrat, bold)         │         │
│  │          │ Opis (text-muted, line-clamp-2)   │         │
│  │          │ Tagi                               │         │
│  └──────────┴─────────────────────────────────┘         │
│  Obrazek: /articles/{slug}/menu_image.jpg               │
│  Fallback: CATEGORY_IMAGES z data/content.ts            │
└─────────────────────────────────────────────────────────┘
```

### Strona artykulu (`/blog/[slug]`)

```
┌─ Header z BaseLayout (Logo + Nawigacja) ───────────────┐
├─ Kontener (max-w 1600px, biale tlo, pt-30px) ──────────┤
│  ┌─ Top image (top_image.jpg, full-width) ──────────┐   │
│  │  Badge kategorii (absolutne, lewy dol)            │   │
│  ├─ Header artykulu ────────────────────────────────┤   │
│  │  h1: 3rem, Montserrat, bold                       │   │
│  │  Autor / Data / Czas czytania                      │   │
│  │  Tagi                                               │   │
│  ├─ Tresc (.prose-custom) ───────────────────────────┤   │
│  │  Akapity: Montserrat, 1rem, margin 1em/1.6em      │   │
│  │  Pierwszy akapit: drop cap (4.5rem, float left)    │   │
│  │  h2: 1.8rem + kwadracik ::before (#b9a38f)        │   │
│  │  h3: 1.2rem, uppercase, 800 weight                │   │
│  │  Blockquote: zielony border + tlo                   │   │
│  ├─ Footer: link powrotu + "Wiecej z {kategorii}" ───┤   │
└─────────────────────────────────────────────────────────┘
```

### Edytor (`/edytor`)

```
┌─ Header z BaseLayout (Logo + Nawigacja) ───────────────┐
├─ Layout: grid-cols-1 lg:grid-cols-5 ──────────────────┤
│  Panel boczny (1/5):                                     │
│  ├─ Lista artykulow do wyboru                            │
│  └─ Przycisk "+ Nowy"                                    │
│                                                            │
│  Edytor (4/5):                                            │
│  ├─ Formularz: tytul, kategoria, data, autor,           │
│  │             opis, slug, tagi                           │
│  ├─ EasyMDE (toolbar + CodeMirror + podglad)             │
│  │   Toolbar: bold, italic, strikethrough, heading,      │
│  │   code, quote, listy, link, image, upload,            │
│  │   table, hr, custom-image (MF), undo, redo,           │
│  │   preview, side-by-side, fullscreen, guide            │
│  │   Upload obrazkow: POST /api/upload-image             │
│  └─ Przyciski: Zapisz, Pobierz MDX, Podglad              │
└─────────────────────────────────────────────────────────┘
```

---

## Komponenty

### Lista wszystkich komponentow (src/components/)

| Komponent | Funkcja |
|---|---|
| `AboutSection.astro` | Sekcja "O mnie" na stronie /o-mnie |
| `CategorySection.astro` | Grid kart dla kategorii na homepage |
| `ContactSection.astro` | Formularz kontaktowy |
| `FeaturedStories.astro` | Karuzela z artykulami (strzalki, snap-x) |
| `Footer.astro` | Stopka: copyright + "Tworzone z pasja" na #060606 |
| `Gallery.astro` | Galeria zdjec "Selected Work" |
| `Header.astro` | Prosty header (tylko w BlogLayout, uzywany na /blog) |
| `HeroEditorialGrid.astro` | Glowny hero grid na homepage (5 kafle) |
| `JournalSection.astro` | Sekcja "Latest posts" (3 kolumny) |
| `Logo.astro` | Banner `head2.jpg` |
| `Navigation.astro` | Ciemny pasek nawigacji z linkami + hamburger mobile |
| `PostCard.astro` | Karta artykulu (uzywana na /blog) |
| `ServicesSection.astro` | Ciemna sekcja "Obszary tematyczne" (4 kolumny) |
| `Sidebar.astro` | Sidebar dla bloga (ostatnie posty per kategoria) |
| `SocialBar.astro` | Ikony social media |
| `StoryCard.astro` | Karta artykulu z overlayem (duza/mala) |

### Kluczowe komponenty — szczegoly

**HeroEditorialGrid** — siatka 5 kafli:
- Duzy kafel: `col-span-2 row-span-2`, zdjecie + bialy tytul z text-shadow + ramka_2.png
- 4 male kafle: kazdy `lg:aspect-square`, zdjecie + tytul + ramka
- Hover: `scale-105` na zdjeciu
- Tytuly: font-extrabold

**FeaturedStories** — karuzela:
- Poziomy scroll z `snap-x`, chowany scrollbar
- Karty 280px szerokosci (mobile), calc(25%-18px) na desktop
- Aspect-ratio 3/4, ramka_4.png jako overlay
- Strzalki przewijaja o 320px

**Navigation** — ciemny pasek (#060606):
- Linki: 11px, uppercase, letter-spacing 0.15em, biale
- Hover: biale tlo 10% opacity
- Mobile: hamburger menu przez checkbox hack

**Footer** — ciemny (#060606):
- Lewo: © 2026 MindForge
- Prawo: "Tworzone z pasja"

---

## Custom Image Syntax (MindForge)

Projekt uzywa wlasnej skladni do osadzania obrazkow w artykulach:

```
![]("sciezka", "wyrownanie", "podpis", float)
```

Przyklad:
```
![]("./pies.jpg", "right", "Moj pies Burek", true)
```

Parametry:
- **sciezka** — sciezka do obrazka (relatywna lub absolutna)
- **wyrownanie** — `left`, `right`, `center`
- **podpis** — tekst podpisu pod obrazkiem
- **float** — `true`/`false` — czy obrazek ma byc oplywany tekstem

Renderowany jest jako HTML div z odpowiednim stylowaniem (float lub display:table). Obslugiwany w stronie artykulu, podgladzie w edytorze i popupie.

W edytorze dostepny jest dedykowany przycisk "Wstaw obrazek MindForge" z formularzem.

---

## Responsywnosc

| Breakpoint | Zachowanie |
|---|---|
| Mobile (< 768px) | Grid 1 kolumna, hero kafle 2-kolumnowe, menu hamburger |
| Tablet (768px+) | Gridy 2-3 kolumny, hero kafle 4-kolumnowe |
| Desktop (1024px+) | Pelny layout, max-width 1600px centrowane |

- Obrazki: lazy loading, src fallback przez onerror
- Karuzela FeaturedStories: scroll horyzontalny na mobile
- Edytor: sidebar 1/5, editor 4/5 na desktop; stack na mobile

---

## API Endpoints

| Endpoint | Metoda | Opis |
|---|---|---|
| `/api/save` | POST | Zapisuje plik MDX do `src/content/blog/{slug}/index.mdx` |
| `/api/upload-image` | POST | Upload obrazka do `public/articles/{slug}/` |
| `/api/article/[slug]` | GET | Pobiera surowy artykul z dysku (frontmatter + body) |

---

## Pliki kluczowe dla designu

| Plik | Co zawiera |
|---|---|
| `src/styles/global.css` | Tailwind import, CSS custom properties, reset, utility classes |
| `src/data/content.ts` | Kolory kategorii, nazwy, obrazki, dane przykladowe |
| `src/layouts/BaseLayout.astro` | Glowny layout (logo + nav + footer), Google Fonts |
| `src/layouts/BlogLayout.astro` | Layout dla /blog (prostszy header) |
| `src/pages/index.astro` | Homepage |
| `src/pages/kategoria/[category].astro` | Strona kategorii |
| `src/pages/blog/[slug].astro` | Strona pojedynczego artykulu |
| `src/pages/edytor.astro` | Edytor MDX |
| `src/content.config.ts` | Schema kolekcji bloga |
