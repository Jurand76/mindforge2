# Specyfikacja strony inspirowanej eleganckim magazynem fotograficznym

Stwórz responsywną stronę internetową inspirowaną eleganckim magazynem fotograficznym i modowym.

## Kierunek wizualny

Design ma być:

- minimalistyczny,
- luksusowy,
- editorialowy,
- oparty na dużej ilości białej przestrzeni,
- utrzymany głównie w czerni, bieli i odcieniach szarości,
- z dużymi, kontrastowymi fotografiami,
- inspirowany magazynami modowymi i portfolio profesjonalnego fotografa.

Nie kopiuj konkretnego logo ani treści z referencji. Zachowaj jedynie podobny charakter wizualny, strukturę i proporcje.

## Układ strony

### 1. Górny pasek social media

Na samej górze, centralnie, umieść niewielkie ikony:

- Facebook,
- Instagram,
- Pinterest,
- TikTok lub X.

Ikony powinny być bardzo małe, czarne i rozmieszczone z dużym odstępem.

### 2. Logo

Pod ikonami umieść duże logo tekstowe wyśrodkowane na stronie.

Logo powinno składać się z:

- nazwy marki zapisanej dużym, odręcznym fontem typu signature,
- krótkiego podtytułu pod spodem, zapisanego wielkimi literami,
- zwiększonego letter-spacingu w podtytule.

Przykład:

```text
Atelier Noir
PHOTOGRAPHY & STORIES
```

Logo powinno mieć dużo wolnej przestrzeni nad i pod sobą.

### 3. Menu nawigacyjne

Pod logo umieść cienką linię oddzielającą i poziome menu.

Menu wyśrodkowane, napisane małą czcionką uppercase:

- Home
- Portfolio
- Stories
- About
- Journal
- Services
- Contact

Niektóre elementy mogą mieć rozwijane submenu.

Menu powinno być eleganckie i subtelne, bez dużych przycisków ani kolorowych elementów.

### 4. Główna sekcja editorial hero

Stwórz duży układ fotograficzny o szerokości około 1100–1200 px.

Sekcja powinna mieć formę asymetrycznej siatki:

- po lewej jedno duże zdjęcie zajmujące około 65–70% szerokości,
- po prawej dwa mniejsze zdjęcia ustawione jedno nad drugim,
- wszystkie zdjęcia powinny mieć identyczne odstępy między sobą,
- zdjęcia powinny być czarno-białe lub mocno odbarwione.

Na każdym zdjęciu umieść tekst jako overlay:

- niewielką etykietę kategorii,
- duży tytuł artykułu,
- opcjonalnie datę,
- opcjonalnie mały przycisk „Read story”.

Tekst powinien być biały, najlepiej z delikatnym ciemnym gradientem pod spodem dla czytelności.

Przykładowa zawartość dużego zdjęcia:

```text
EDITORIAL

Between Light and Silence

A visual story about movement, texture and emotion.

READ STORY
```

Mniejsze kafelki po prawej powinny mieć krótsze tytuły.

### 5. Sekcja „Featured Stories”

Pod główną sekcją dodaj nagłówek:

```text
Featured Stories
```

Nagłówek powinien być wyrównany do lewej, zapisany eleganckim fontem szeryfowym.

Pod nim umieść cztery karty artykułów w jednym rzędzie na desktopie.

Każda karta powinna zawierać:

- pionowe zdjęcie,
- niewielki pasek informacji lub ikon pod zdjęciem,
- kategorię,
- tytuł artykułu,
- krótki opis lub datę.

Zdjęcia mogą być czarno-białe, natomiast bardzo subtelne akcenty kolorystyczne mogą pojawić się w ikonach.

Na urządzeniach mobilnych karty powinny przechodzić do jednej kolumny lub poziomego slidera.

### 6. Dalsze sekcje

Dodaj również:

- sekcję „Latest Journal Entries”,
- sekcję „About the Photographer” z portretem i krótkim tekstem,
- prostą sekcję usług,
- galerię zdjęć,
- minimalistyczny formularz kontaktowy,
- stopkę z logo, linkami i ikonami social media.

## Typografia

Zastosuj trzy style fontów:

1. Font odręczny typu signature dla logo.
2. Elegancki font szeryfowy dla nagłówków i tytułów.
3. Minimalistyczny font bezszeryfowy dla menu, kategorii, dat i opisów.

Przykładowe darmowe fonty Google Fonts:

- logo: `Italianno`, `Allura` lub `Brittany Signature` jako alternatywa lokalna,
- nagłówki: `Cormorant Garamond`, `Playfair Display` lub `DM Serif Display`,
- tekst: `Montserrat`, `Inter` lub `Lato`.

## Kolorystyka

Użyj następującej palety:

```css
--background: #ffffff;
--text-primary: #111111;
--text-secondary: #777777;
--border: #eeeeee;
--overlay: rgba(0, 0, 0, 0.35);
--accent: #b9a38f;
```

Kolor akcentowy powinien być używany bardzo oszczędnie.

## Styl elementów

- brak mocno zaokrąglonych kart,
- brak dużych cieni,
- brak gradientów poza delikatnym overlayem na zdjęciach,
- cienkie linie oddzielające sekcje,
- duże marginesy pionowe,
- zdjęcia bez obramowania,
- przyciski prostokątne, czarne lub transparentne,
- subtelne animacje hover.

## Animacje

Dodaj delikatne efekty:

- lekkie powiększenie zdjęcia po najechaniu,
- płynne pojawianie się tekstu,
- subtelne przesunięcie overlayu,
- animację fade-in podczas przewijania,
- zmianę koloru linków w menu.

Animacje powinny trwać około 200–400 ms i nie mogą być agresywne.

## Responsywność

Na tabletach:

- duże zdjęcie pozostaje na górze,
- dwa mniejsze zdjęcia przechodzą pod nie i ustawiają się obok siebie.

Na telefonach:

- wszystkie kafelki ustawiają się jeden pod drugim,
- menu zmienia się w hamburger menu,
- logo jest mniejsze,
- odstępy zostają ograniczone,
- tekst na zdjęciach pozostaje czytelny.

## Wymagania techniczne

Stwórz projekt w:

- Astro lub Next.js,
- TypeScript,
- Tailwind CSS,
- z komponentową strukturą kodu.

Zaproponowana struktura komponentów:

```text
Header
SocialBar
Logo
Navigation
HeroEditorialGrid
StoryCard
FeaturedStories
JournalSection
AboutSection
ServicesSection
Gallery
ContactSection
Footer
```

Dane artykułów i galerii przechowuj w osobnych tablicach lub plikach danych, aby można je było łatwo edytować.

Zadbaj o:

- semantic HTML,
- dobre SEO,
- lazy loading obrazów,
- poprawne teksty alternatywne,
- dostępność klawiaturą,
- wysoką wydajność,
- brak poziomego scrollowania.

Przygotuj kompletną stronę startową z przykładowymi treściami i zdjęciami zastępczymi.

## Dodatkowa instrukcja dla OpenCode

```text
Najpierw pokaż plan komponentów, strukturę katalogów i główne decyzje stylistyczne. Następnie wygeneruj wszystkie potrzebne pliki. Nie ograniczaj się do pojedynczego komponentu hero — przygotuj kompletną, działającą stronę.
```

## Najważniejsze cechy wzoru

Najważniejsze cechy tego wzoru to:

- duże centralne logo,
- bardzo dużo bieli,
- cienkie menu,
- asymetryczny kolaż zdjęć,
- klasyczna typografia magazynowa.