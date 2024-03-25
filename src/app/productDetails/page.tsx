import BreadCrump from "../components/BreadCrumb";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import ProductDescription from "../components/ProductDescription";
import NavBar from "../components/navbar";
import TopSelling from "../components/topSelling";

export default function ProductDetails(){
    return(
        <>
        <NavBar />
        <BreadCrump />
        <ProductDescription />
        <TopSelling />
        <NewsLetter />
        <Footer />
        </>
    )
}