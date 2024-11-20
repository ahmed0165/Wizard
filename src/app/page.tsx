// src/app/page.tsx
// import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
// import { CartProvider } from "../context/CartContext";
// import Footer from "./components/Footer";

export const metadata = {
  title: {
    template: "%s / Wizard",
    default: "Wizard",
  },
  description: "Luxurious multi store delivery app",
};

export default function HomePage() {
  return (
    <div className="h-screen">
      <Banner />
      <Categories />
    </div>
  );
}
