import { Link, Route, Routes } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import ProductsAdminPage from "./admin/productsAdminPage";
import AddProductPage from "./admin/addProductPage";



export default function AdminPage() {
    return(
        <div className="w-full h-screen flex">
            <div className="w-[300px] h-full flex flex-col items-center  ">
                <span className="text-3xl font-bold my-5"> Admin Panel</span>
                <Link className="flex flex-row h-[60px] w-full items-center p-[20px] border text-xl gap-[5px] " to="/admin/products"> <FaBoxArchive /> Products</Link>
                <Link className="flex flex-row h-[60px] w-full items-center p-[20px] border text-xl gap-[5px]" to="/admin/orders"> <FaShoppingBag /> orders</Link>
                <Link className="flex flex-row h-[60px] w-full items-center p-[20px] border text-xl gap-[5px]" to="/admin/users"> <IoPeople /> users</Link>
                <Link className="flex flex-row h-[60px] w-full items-center p-[20px] border text-xl gap-[5px]" to="/admin/settings"> <IoMdSettings /> settings</Link>
            </div>
            <div className="w-[calc(100%-300px)]  h-full ">
                <Routes path="/">
                    <Route path="/" element={<h1>Dashboard</h1>}/>
                    <Route path="/products" element={<ProductsAdminPage/>}/>
                    <Route path="/orders" element={<h1>Orders</h1>}/>
                    <Route path="/newproduct" element={<AddProductPage/>}/>
                </Routes>
            </div>

        </div>
    )
}