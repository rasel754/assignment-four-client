
# 🛒 Script & Scroll – Stationery Shop Frontend

This is the frontend of the Script & Scroll stationery e-commerce website, built using **React**, **Redux**, **Tailwind CSS**, and **DaisyUI**.

---

## ⚙️ Tech Stack

- React (Vite)
- Redux Toolkit (State Management)
- React Router DOM
- Axios (API requests)
- Tailwind CSS
- DaisyUI (UI components)

---

## 📁 Folder Structure

```
/src
  /components      → Reusable UI components
  /pages           → All page components (home, product, cart, etc.)
  /redux           → Redux slices and store
  /utils           → Helper utilities
  /router          → All route declarations
  /layout          → Layout wrappers (main, dashboard, etc.)
  /App.tsx         → Root component
```

---

## ✨ Features

- Browse products
- View product details
- Add/remove from cart
- Order placement
- Authentication (User/Admin)
- Admin dashboard (Manage products/orders)
- Mobile responsive UI

---

## 🧰 Installation

```bash
git clone https://github.com/your-username/script-and-scroll.git
cd script-and-scroll/frontend
npm install
```

---

## 🌐 Run the App

```bash
npm run dev
```

---

## 📦 Environment Variables

Create a `.env` file in the `frontend` folder:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

> Make sure this URL matches your backend server URL.

---

## 📷 Screenshots

| Home Page | Product Details | Dashboard |
|-----------|------------------|-----------|
| ![](./screenshots/home.png) | ![](./screenshots/product.png) | ![](./screenshots/dashboard.png) |

---

## 🧠 Folder Highlights

- `redux/`: All global states (cart, auth, products).
- `components/`: Reusable UI components (Navbar, Footer, ProductCard).
- `pages/`: Page-level components (Home, AllProducts, ProductDetails, etc.)
- `router/`: Defines public and private routes.
- `layout/`: Layout wrappers for user and admin dashboard views.

---

## 🛠️ Developer Tips

- Ensure backend is running before frontend to prevent API errors.
- Use Redux DevTools for state debugging.
- Tailwind makes it easy to customize – don’t hesitate to adjust themes!

---

## 📃 License

This project is licensed under the MIT License.
