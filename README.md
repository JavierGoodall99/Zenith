## Zenith

A Vite + React 19 single-page storefront demo with cinematic loading, rich navigation between landing, catalog, product detail, cart, checkout, and account views, plus favourites and search.

### Features
- Cinematic splash via [components/Loading.tsx](components/Loading.tsx) before the app renders.
- Central view/router logic and state for cart, favourites, and search in [App.tsx](App.tsx#L25-L143).
- Hero + narrative marketing section flowing into a curated collection and marquee on the landing view.
- Product grid with search, product detail pages, cart management, and favourites toggle.
- Simple account/login and checkout flows for end-to-end journey coverage.

### Tech Stack
- React 19 + TypeScript
- Vite 6
- Node >= 18 (recommended for Vite 6)

### Getting Started
1) Install dependencies:
```
npm install
```
2) Run the dev server:
```
npm run dev
```
3) Build for production:
```
npm run build
```
4) Preview the production build:
```
npm run preview
```

### Project Map
- [App.tsx](App.tsx) — top-level state, navigation, and view rendering.
- [data.ts](data.ts) — product catalogue seed data consumed across views.
- [components/Header.tsx](components/Header.tsx) — global nav, search input, cart badge.
- [components/Products.tsx](components/Products.tsx) — product grid with search + add-to-cart.
- [components/ProductDetail.tsx](components/ProductDetail.tsx) — detail view with size selection, favourite toggle, and add-to-cart.
- [components/Cart.tsx](components/Cart.tsx) — quantity updates and line-item removal.
- [components/Favourites.tsx](components/Favourites.tsx) — saved items with add-to-cart shortcuts.
- [components/Checkout.tsx](components/Checkout.tsx) — checkout scaffold.
- [components/Login.tsx](components/Login.tsx) / [components/Account.tsx](components/Account.tsx) — auth/account placeholders.

### App Flow
- Landing view stitches together [components/Hero.tsx](components/Hero.tsx), [components/Narrative.tsx](components/Narrative.tsx), [components/Collection.tsx](components/Collection.tsx), [components/Marquee.tsx](components/Marquee.tsx), and [components/Footer.tsx](components/Footer.tsx).
- Navigation is event-driven through `onNavigate` handlers passed to components, switching the `view` state in [App.tsx](App.tsx#L41-L129).
- Cart count, favourites, and search query live in [App.tsx](App.tsx#L25-L143) and are threaded into child components as props.

### Notes
- Styling relies on className tokens already present in components; adjust Tailwind/postcss settings as needed.
- No backend/API calls; data comes from [data.ts](data.ts). Replace or extend to integrate a real API.
