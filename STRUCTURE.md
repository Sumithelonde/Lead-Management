# Project Structure

Complete folder hierarchy for La Farine Patisserie & Café website.

```
la-farine-patisserie/
├── public/                          # Static assets
│   ├── favicon.ico                  # Browser tab icon
│   ├── placeholder.svg              # Placeholder image
│   └── robots.txt                   # SEO crawling rules
│
├── src/                             # Source code
│   ├── assets/                      # Bundled assets
│   │   └── images/                  # Image assets (add your images here)
│   │
│   ├── components/                  # React components
│   │   ├── 3d/                      # 3D-related components
│   │   │   ├── BakeryScene.tsx      # Fallback animated bakery illustration
│   │   │   └── SplineViewer.tsx     # Spline 3D scene wrapper
│   │   │
│   │   ├── layout/                  # Layout components
│   │   │   ├── Navbar.tsx           # Main navigation bar
│   │   │   ├── Footer.tsx           # Site footer
│   │   │   └── FloatingOrderButton.tsx # Mobile floating CTA
│   │   │
│   │   ├── menu/                    # Menu-related components
│   │   │   ├── MenuCard.tsx         # Individual menu item card
│   │   │   └── CategorySection.tsx  # Category with items grid
│   │   │
│   │   ├── sections/                # Page sections
│   │   │   ├── HeroSection.tsx      # Homepage hero with 3D
│   │   │   ├── WhyChooseUs.tsx      # Features/benefits section
│   │   │   ├── FeaturedMenu.tsx     # Bestsellers showcase
│   │   │   ├── AboutSection.tsx     # About preview section
│   │   │   ├── GallerySection.tsx   # Image gallery grid
│   │   │   └── ContactSection.tsx   # Contact form and info
│   │   │
│   │   ├── ui/                      # Shadcn UI components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── button.tsx           # Custom button variants
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   └── ... (other UI components)
│   │   │
│   │   └── NavLink.tsx              # Custom NavLink component
│   │
│   ├── data/                        # Data files
│   │   └── menu.ts                  # Complete menu data (categories & items)
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── use-mobile.tsx           # Mobile breakpoint detection
│   │   └── use-toast.ts             # Toast notification hook
│   │
│   ├── lib/                         # Utility libraries
│   │   └── utils.ts                 # cn() utility for classnames
│   │
│   ├── pages/                       # Route pages
│   │   ├── Index.tsx                # Homepage (/)
│   │   ├── Menu.tsx                 # Full menu page (/menu)
│   │   ├── About.tsx                # About page (/about)
│   │   ├── Contact.tsx              # Contact page (/contact)
│   │   └── NotFound.tsx             # 404 page
│   │
│   ├── App.tsx                      # Root component with routes
│   ├── App.css                      # Legacy CSS (can be removed)
│   ├── index.css                    # Design system & Tailwind config
│   ├── main.tsx                     # React entry point
│   └── vite-env.d.ts                # Vite type declarations
│
├── .gitignore                       # Git ignore rules
├── components.json                  # Shadcn configuration
├── eslint.config.js                 # ESLint rules
├── index.html                       # HTML entry point
├── package.json                     # Dependencies & scripts
├── postcss.config.js                # PostCSS configuration
├── README.md                        # Project documentation
├── SETUP.md                         # Setup instructions
├── STRUCTURE.md                     # This file
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── tsconfig.app.json                # App-specific TS config
├── tsconfig.node.json               # Node-specific TS config
└── vite.config.ts                   # Vite configuration
```

## File Responsibilities

### Core Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main app component, routing configuration |
| `src/main.tsx` | React DOM entry point |
| `src/index.css` | Design system tokens, global styles |
| `tailwind.config.ts` | Tailwind customizations, colors, fonts |

### Pages

| File | Route | Description |
|------|-------|-------------|
| `Index.tsx` | `/` | Homepage with all sections |
| `Menu.tsx` | `/menu` | Complete menu with search/filter |
| `About.tsx` | `/about` | Company story and values |
| `Contact.tsx` | `/contact` | Contact form and map |
| `NotFound.tsx` | `*` | 404 error page |

### Components

| Component | Purpose |
|-----------|---------|
| `Navbar.tsx` | Sticky navigation, mobile menu |
| `Footer.tsx` | Site footer with links and info |
| `FloatingOrderButton.tsx` | Mobile CTA button |
| `HeroSection.tsx` | Main hero with 3D element |
| `MenuCard.tsx` | Individual menu item display |
| `CategorySection.tsx` | Menu category with items |
| `SplineViewer.tsx` | 3D scene wrapper |
| `BakeryScene.tsx` | Animated fallback illustration |

### Data

| File | Content |
|------|---------|
| `menu.ts` | All menu categories and items |

## Adding New Components

1. Create file in appropriate folder:
   ```
   src/components/[type]/ComponentName.tsx
   ```

2. Use TypeScript and follow naming conventions:
   ```tsx
   export function ComponentName({ prop }: ComponentNameProps) {
     return <div>...</div>;
   }
   ```

3. Import in parent component:
   ```tsx
   import { ComponentName } from "@/components/[type]/ComponentName";
   ```

## Design System

The design system is centralized in two files:

- **`src/index.css`**: CSS variables for colors, shadows, animations
- **`tailwind.config.ts`**: Tailwind extensions using CSS variables

Always use semantic tokens (`bg-primary`, `text-muted-foreground`) instead of direct colors (`bg-brown-500`).
