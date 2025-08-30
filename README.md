# Luxuria - Premium Furniture Store

A luxury furniture e-commerce website built with React (.jsx), Tailwind CSS, and a custom 8-point spacing system.

## 🎨 Design System

- **Colors**: Soft beige (#F6F1EC), deep black (#0B0B0B), muted warm gray (#7D7A75)
- **Typography**: Inter (body), Playfair Display (headings)
- **Spacing**: 8-point system (1=8px, 2=16px, 3=24px, 4=32px, 5=40px, 6=48px, 8=64px, 10=80px)
- **Typography Scale**: H1: 48px, H2: 32px, H3: 24px, H4: 20px, Body Large: 18px, Body: 16px, Small: 14px

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd luxuria-furniture-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## 📁 Project Structure

```
src/
├── assets/              # Generated luxury furniture images
├── components/
│   └── ui/             # Reusable UI components (.jsx only)
├── content/            # Text content files (.txt)
├── pages/              # Page components (.jsx only)
│   ├── Index.jsx       # Homepage with hero, featured products, new arrivals
│   ├── Categories.jsx  # Product category pages with filtering
│   ├── ProductDetail.jsx # Individual product pages
│   ├── Cart.jsx        # Shopping cart functionality
│   ├── Wishlist.jsx    # Saved items for later
│   └── NotFound.jsx    # 404 error page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles and design system
```

## 🛍️ Features

### Homepage
- Sticky navigation with category links and cart/wishlist access
- Full-width hero section with lifestyle imagery and CTAs
- Featured products grid (6 items, responsive)
- Horizontal scrolling new arrivals section
- Lifestyle inspiration section
- Newsletter signup footer

### E-commerce Functionality
- **Categories**: Browse by Living Room, Bedroom, Dining, Office, Outdoor
- **Product Details**: Full product information, image gallery, reviews
- **Shopping Cart**: Add/remove items, quantity updates, price calculations
- **Wishlist**: Save items for later, stock status tracking
- **Responsive Design**: Mobile-first approach with smooth interactions

### Design Features
- **Luxury Aesthetic**: Minimalist design with premium materials focus
- **8-Point Spacing System**: Consistent spacing throughout
- **Custom Typography Scale**: Hierarchical text sizing
- **Smooth Animations**: Hover effects, image scaling, transitions
- **Accessibility**: Semantic HTML, keyboard navigation, alt text

## 🎯 Pages & Routes

- `/` - Homepage
- `/categories/:category` - Category pages (living-room, bedroom, dining, office, outdoor, all)
- `/product/:id` - Individual product details
- `/cart` - Shopping cart
- `/wishlist` - Saved items
- `/404` - Not found page

## 🛠️ Technologies Used

- **React** (JSX only, no TypeScript)
- **Vite** (Build tool and dev server)
- **Tailwind CSS** (Styling with custom design system)
- **React Router** (Navigation)
- **Lucide React** (Icons)
- **Custom 8-point spacing system**

## 📱 Responsive Breakpoints

- Mobile: < 768px (1 column layouts)
- Tablet: 768px - 1024px (2 column layouts)
- Desktop: > 1024px (3-4 column layouts)

## 🎨 Content Files

Brand content is stored in `/src/content/*.txt`:
- `brand.txt` - Logo, taglines, hero content
- `products.txt` - Product names and pricing
- `navigation.txt` - Menu items and footer links

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Lovable

1. Open [Lovable](https://lovable.dev/projects/2b174622-2952-4660-9d80-1bc256e18cc8)
2. Click Share → Publish
3. Your site will be live on a Lovable subdomain

### Custom Domain

Navigate to Project > Settings > Domains in Lovable to connect your custom domain.

## 🔧 Development Notes

- All components use `.jsx` extension (no TypeScript)
- Design system is defined in `src/index.css` and `tailwind.config.ts`
- Images are imported as ES6 modules from `/src/assets/`
- Responsive images use lazy loading attributes
- Semantic HTML structure for accessibility
- Custom button and card variants for luxury design

## 📄 License

This project is private and proprietary.