# Setup Guide

A step-by-step guide to set up and run the La Farine Patisserie & Café website.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **bun**
- A code editor (VS Code recommended)

## Installation Steps

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd la-farine-patisserie
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using bun:
```bash
bun install
```

### 3. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:8080`

## Adding Spline 3D Scenes

To add your own 3D bakery models:

1. **Create a Spline Account**
   - Visit [spline.design](https://spline.design/)
   - Sign up for a free account

2. **Create or Find a 3D Scene**
   - Design your own bakery items (croissant, donut, coffee cup)
   - Or browse the Spline community for free assets

3. **Export the Scene**
   - Click "Export" in Spline
   - Choose "Web Embed"
   - Copy the scene URL

4. **Update the Component**
   - Open `src/components/3d/SplineViewer.tsx`
   - Use the SplineViewer component with your scene URL:

```tsx
<SplineViewer scene="https://prod.spline.design/your-scene-id/scene.splinecode" />
```

5. **Update HeroSection**
   - Open `src/components/sections/HeroSection.tsx`
   - Replace `<BakeryScene />` with:

```tsx
<SplineViewer 
  scene="your-spline-scene-url" 
  className="w-full h-full"
/>
```

## Editing Components

### Modifying Menu Items

Edit `src/data/menu.ts` to add, remove, or modify menu items:

```typescript
{
  id: "unique-id",
  name: "Item Name",
  description: "Item description",
  price: 199,
  category: "category-id",
  isVeg: true,
  isBestseller: true
}
```

### Customizing Colors

Edit `src/index.css` to modify the color palette:

```css
:root {
  --primary: 25 50% 30%;      /* Coffee brown */
  --accent: 35 80% 55%;        /* Golden caramel */
  --secondary: 38 45% 92%;     /* Warm cream */
}
```

### Adding New Pages

1. Create a new file in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation link in `src/components/layout/Navbar.tsx`

## Building for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Connect to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Manual Deploy

1. Run `npm run build`
2. Upload the `dist/` folder to your hosting provider

## Environment Variables

If you add backend features, create a `.env` file:

```env
VITE_API_URL=your-api-url
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill the process using port 8080
npx kill-port 8080
```

**Dependencies not found:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
# Check types
npm run build
```

### Getting Help

- Check the [React documentation](https://react.dev/)
- Visit the [Vite documentation](https://vitejs.dev/)
- Ask in the [Lovable Discord](https://discord.gg/lovable)

## Next Steps

After setup, you might want to:

1. Replace placeholder images with real photos
2. Add your Spline 3D scenes
3. Connect to a backend (Supabase) for orders
4. Add authentication for admin panel
5. Integrate payment processing
