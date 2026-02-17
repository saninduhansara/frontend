import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import ProductsPage from "./productsPage";
import ProductOverview from "./productOverview";
import CartPage from "./cart";
import CheckoutPage from "./checkoutPage";

export default function ClientWebPage() {

    return(
    <div className="w-full h-screen max-h-screen ">
       <Header/>
        <div className="w-full h-[calc(100%-100px)]">
            <Routes path="/" >
                <Route path="/" element={<h1>Home</h1>}/>
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/reviews" element={<h1>Reviews</h1>}/>
                <Route path="/about-us" element={<h1>About Us</h1>}/>
                <Route path="/contact" element={<h1>Contact</h1>}/>
                <Route path="/overview/:productId" element={<ProductOverview/>}/>
                <Route path = "/cart" element={<CartPage/>}/>
                <Route path="/checkout" element={<CheckoutPage/>}/>
                <Route path="/*" element={<h1>404 Not Found</h1>}/>
                
            </Routes>
        </div>
       
    </div>
    )
}