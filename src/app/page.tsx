import Image from "next/image";
import NavBar from "./components/navbar";
import Main from "./components/main";
import NewProducts from "./components/newProducts";
import HotDeals from "./components/HotDeals";
import TopSelling from "./components/topSelling";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";


export default function Home() {
  return (
   <>
      <NavBar />
      <Main />
      <NewProducts />
      <HotDeals />
      <TopSelling />
      <NewsLetter />
      <Footer />
   </>
  );
}
