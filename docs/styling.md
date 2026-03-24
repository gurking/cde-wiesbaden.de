# Technical Design Specifications: CD Español Wiesbaden (CDE)

## 1. Project Overview
A modern, heritage-focused club website for CD Español Wiesbaden (CDE), nicknamed "Las Cortinas". The design focuses on a "Modern Alchemist" aesthetic, blending 1981 heritage with modern UI patterns.

## 2. Visual Identity & Brand
- **Brand Colors:**
    - **Primary (Heritage Blue):** `#1D2D44` (Deep, professional navy)
    - **Accent (Heritage Coral):** `#F0544F` (Vibrant coral/red from the "HERENCIA" style)
    - **Base:** `#FFFFFF` (White)
    - **Neutral:** Slate/Gray tones for secondary text and borders.
- **Typography:**
    - **Font Family:** Inter (as a modern alternative to Helvetica Neue, highly compatible with NuxtUI/Tailwind).
    - **Headings:** Bold, uppercase, often italicized for dynamic "sports" feel.
    - **Body:** Clean, legible sans-serif.
- **Core Visual Element:** "Las Cortinas" vertical stripes. Use the textile texture ({{DATA:IMAGE:IMAGE_16}}) as a subtle background overlay or section hero background.

## 3. Tech Stack Recommendation (Tailwind / NuxtUI)
Since you are using Nuxt and NuxtUI, you should leverage the `app.config.ts` and `tailwind.config.js` for global styling.

### Tailwind Configuration (Example)
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        heritage: {
          blue: '#1D2D44',
          coral: '#F0544F',
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'sans-serif'],
      }
    }
  }
}
```

## 4. Component Guidelines
- **Header:** Sticky, glassmorphism effect (backdrop-blur), containing the official Logo ({{DATA:IMAGE:IMAGE_6}}), Language Switcher (DE/ES/EN), and external link to Flyeralarm Shop.
- **Buttons:**
    - **Primary:** Heritage Coral background, white text, rounded-sm to rounded-md.
    - **Secondary:** Outline style or Heritage Blue.
- **Cards:** Clean white backgrounds with subtle borders or very soft shadows. Use the coral accent for small tags (e.g., "1. Mannschaft").
- **Footer:** Deep Heritage Blue background, white/slate text, organized in columns (Links, Legal, Membership).

## 5. Implementation Notes
- **Stripes Pattern:** Implement as a CSS repeating linear gradient or use the provided image as a background-cover with low opacity.
- **Heritage Hero:** Use the fabric texture as a background for high-impact sections to reinforce the "Cortinas" identity.
- **NuxtUI Components:** Use `<UButton>`, `<UNavbar>`, and `<UCard>` but override their default primary color with the Heritage Coral in your `app.config.ts`.
