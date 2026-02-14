import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";

export default function ClientWebPage() {

    return(
    <div className="w-full h-screen max-h-screen ">
       <Header/>
        <div className="w-full h-[calc(100%-100px)] bg-amber-300">
            <Routes path="/" >
                <Route path="/" element={<h1>Home</h1>}/>
                <Route path="/products" element={<h1>Products</h1>}/>
                <Route path="/reviews" element={<h1>Reviews</h1>}/>
                <Route path="/about-us" element={<h1>About Us</h1>}/>
                <Route path="/contact" element={<h1>Contact</h1>}/>
                <Route path="/*" element={<h1>404 Not Found</h1>}/>
            
            </Routes>
        </div>
       
    </div>
    )
}