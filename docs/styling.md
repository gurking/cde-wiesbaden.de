# Nuxt UI & Tailwind Theme Specification: CD Español Wiesbaden

Diese Spezifikation dient als Grundlage für die technische Umsetzung mit Nuxt 3 und Nuxt UI. Sie deckt sowohl den Light Mode als auch den Dark Mode ab.

## 1. Farbpalette (Tailwind Configuration)

Die Farben basieren auf dem Vereinslogo und der "Heritage"-Identität.

```javascript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'cde-navy': {
          DEFAULT: '#07182E',
          '50': '#E6E8EA',
          '100': '#CDD1D6',
          '200': '#9BA3AD',
          '300': '#697585',
          '400': '#37475C',
          '500': '#07182E', // Primary
          '600': '#061426',
          '700': '#050F1D',
          '800': '#040B15',
          '900': '#03060C',
        },
        'cde-coral': {
          DEFAULT: '#F0544F', // CTA Accent
          light: '#F47672',
          dark: '#D94C47',
        },
        'cde-red': '#B72023', // Logo Red
        'cde-yellow': '#EFB810', // Logo Yellow
      }
    }
  }
}
```

## 2. Nuxt UI Configuration (app.config.ts)

Konfiguration der Standard-Komponenten für ein konsistentes Look-and-Feel.

```typescript
// app.config.ts
export default defineAppConfig({
  ui: {
    primary: 'cde-navy',
    gray: 'slate',
    button: {
      default: {
        color: 'primary',
        variant: 'solid'
      },
      rounded: 'rounded-sm', // Klassischer, sportlicher Look
    },
    card: {
      rounded: 'rounded-none', // Kantiger Heritage-Look
      background: 'bg-white dark:bg-cde-navy-900',
    },
    input: {
      rounded: 'rounded-none',
    }
  }
})
```

## 3. Theme-Logik (Light vs. Dark)

| Element | Light Mode | Dark Mode |
| :--- | :--- | :--- |
| **Background** | `#FFFFFF` | `#07182E` (cde-navy) |
| **Primary Text** | `#07182E` | `#FFFFFF` |
| **Secondary Text** | `#475569` (slate-600) | `#94A3B8` (slate-400) |
| **Navigation** | Glassmorphism (White/80) | Glassmorphism (Navy/80) |
| **CTA Button** | Coral Background | Coral Background |
| **Cards** | Border: Navy 10% | Border: White 10% |

## 4. Typografie

- **Font Family:** Inter (oder Helvetica Neue falls lokal verfügbar)
- **Headings:** Bold, Uppercase, Italic für dynamische Sektionen.
- **Body:** Regular für maximale Lesbarkeit.

## 5. Spezielle Assets

- **Logo:** `{{DATA:IMAGE:IMAGE_11}}`
- **Pattern:** Die textile Streifen-Struktur (`{{DATA:IMAGE:IMAGE_22}}`) sollte als subtiler Overlay (Opacity 5-10%) in Hero-Sektionen oder als Hintergrund für News-Karten verwendet werden.

```css
/* Beispiel für das Heritage-Pattern */
.heritage-pattern {
  background-image: url('/path-to-stripes.jpg');
  background-blend-mode: overlay;
  opacity: 0.05;
}
```