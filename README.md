# PratiPlati landing

Javni sajt za PratiPlati. Next.js 16 (App Router), React 19, TypeScript, čist CSS bez Tailwind-a.
Aplikacija je poseban projekat i ovde se ne menja.

## Pokretanje

```bash
npm install
npm run dev        # lokalno na http://localhost:3000
npm run build      # produkcijski build (stranica se pravi statično)
npm run start      # pokreće produkcijski build
npm run typecheck  # provera tipova
```

## Struktura

| Putanja | Šta je |
| --- | --- |
| `src/app/layout.tsx` | HTML okvir, naslov, opis, pregled linka (og), font |
| `src/app/page.tsx` | Redosled sekcija na stranici |
| `src/app/icon.svg`, `src/app/opengraph-image.jpg` | Ikonica kartice i slika za pregled linka |
| `src/components/sections/` | Sekcije: Hero, HowItWorks, Overview, Reminders, Proof, Roles, Privacy, Faq, FinalCta, Offer, Footer |
| `src/components/Header.tsx` | Zaglavlje i meni za tablet i telefon |
| `src/components/OfferForm.tsx` | Forma „Zatražite ponudu“ (provera polja) |
| `src/components/video/` | Video prozor i dugmad koja ga otvaraju |
| `src/components/mock/` | Makete telefona i replika uplatnice |
| `src/components/art/` | Ilustracije od kvadratića (Pix), brojevi, veliki P, logo |
| `src/components/motion/` | Oblaci koji prate kursor, crtanje strelica |
| `src/styles/` | Globalni CSS po sekcijama; redosled uvoza je u `index.ts` i bitan je |
| `src/lib/site.ts` | Adresa sajta, link za prijavu, navigacija, naslov i opis |
| `public/media/` | Video |
| `dizajn/` | HTML prototip i arhiva ranijih dizajna (referenca, ne ide na sajt) |
| `materijali/` | Izvorni materijali: video, posteri, beleške za montažu |

## Gde se šta menja

* Tekst sekcije: odgovarajući fajl u `src/components/sections/`.
* Boje, razmaci, fontovi: `src/styles/01-tokens.css`.
* Link za prijavu i adresa sajta: `src/lib/site.ts`.
* Pikselne ikonice: niz `rows` u `<Pix />`, gde je `#` glavna boja, `a` druga, `b` treća, `.` prazno.

## Pravila dizajna

* Bez crtica između reči u tekstu.
* Plava boja dugmadi (`#3f8efc`) nikad za tekst, samo za dugmad i oblike.
* Dekoracije su zaobljene kockice kao u logou.
* Telefoni u pravim proporcijama 9:19.5.
* Svaka izmena se proverava na 1440, 1024, 768 i 390 piksela širine.

## Sledeći koraci

1. Forma: slanje na mejl preko serverske akcije (Resend), zaštita od spama.
2. Domen: postaviti `NEXT_PUBLIC_SITE_URL` (vidi `.env.example`), da pregled linka ima tačnu adresu.
3. Postavljanje na Vercel i povezivanje domena.
