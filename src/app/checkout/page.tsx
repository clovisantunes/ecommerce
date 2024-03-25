import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";
import CheckoutComponent from "../../components/checkout";
import NavBar from "../../components/navbar";


export default function Checkout(){
    return(
        <>
            <NavBar />
            <CheckoutComponent />
            <NewsLetter />
            <Footer />
        </>
    )
}