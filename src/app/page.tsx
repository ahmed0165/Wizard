// src/app/page.tsx
// import Header from "./components/Header";
import Banner from "./components/Banner";
import StoreList from "./components/StoreList";
import FeaturedProducts from "./components/FeaturedProducts";
// import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <StoreList />
      <FeaturedProducts />
      {/* <Footer /> */}
    </div>
  );
}
