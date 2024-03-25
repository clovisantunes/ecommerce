import BreadCrump from "../components/BreadCrumb";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Session from "../components/Section";
import NavBar from "../components/navbar";


export default function Categories(){
    return(
        <>
        <NavBar />
        <BreadCrump />
        <Session />
        <NewsLetter />
        <Footer />
        </>
    )
}