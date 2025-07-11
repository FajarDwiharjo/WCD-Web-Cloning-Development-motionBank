fajar dwiharjo-24130500010-wcd

# 🏦 Motion Bank Clone (React + Vite + Tailwind)

This is a clone of the Motion Bank landing page built with:

- ⚛️ React (TypeScript)
- ⚡ Vite
- 💨 TailwindCSS
- 📦 npm

---

## 🚀 Getting Started

### 1. Clone the repo or extract the ZIP

```bash
git clone https://github.com/your-username/motion-bank-clone.git
# or simply extract the ZIP you received
cd motion-bank-clone
```

### 2. Install dependencies

Make sure you have **Node.js** installed (recommend ≥ v16). Then run:

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

> Open your browser and go to `http://localhost:5173`

---

## 🧱 Project Structure

```bash
src/
├── assets/              # Static images and SVGs
├── components/          # Reusable UI components
├── pages/               # Main route pages (Home, Blog, FAQ, etc.)
├── router/              # React Router configuration
├── App.tsx              # App entry component
├── main.tsx             # Vite entry point
└── index.css            # Global Tailwind styles
```

---

## 🧼 Scripts

```bash
npm run dev      # Start dev server  
npm run build    # Build for production  
npm run preview  # Preview production build
```

---

## 📝 Notes

- All pages are currently **Tailwind-styled placeholders**
- Routing is managed via `react-router-dom`
- Components like `bannerslider` have been merged and redundant files removed

---

## 📄 License

MIT – feel free to use or modify as needed!


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
