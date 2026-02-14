import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";


const sampleProducts = [
  {
    productId: "COS001",
    name: "Hydrating Face Cream",
    altNames: ["Moisturizing Cream", "Daily Face Hydrator"],
    labelledPrice: 3500,
    price: 2990,
    images: ["/images/face-cream.jpg"],
    description: "A lightweight hydrating face cream enriched with aloe vera and vitamin E for daily skin nourishment.",
    stock: 120,
    isAvailable: true,
    category: "cosmetics"
  },
  {
    productId: "COS002",
    name: "Matte Finish Foundation",
    altNames: ["Liquid Foundation", "Full Coverage Base"],
    labelledPrice: 4200,
    price: 3890,
    images: ["/images/foundation.jpg"],
    description: "Long-lasting matte foundation that provides full coverage and a smooth finish.",
    stock: 75,
    isAvailable: true,
    category: "cosmetics"
  },
  {
    productId: "COS003",
    name: "Waterproof Mascara",
    altNames: ["Lash Booster", "Volume Mascara"],
    labelledPrice: 2800,
    price: 2500,
    images: ["/images/mascara.jpg"],
    description: "Smudge-proof and waterproof mascara for longer, fuller-looking lashes.",
    stock: 200,
    isAvailable: true,
    category: "cosmetics"
  },
  {
    productId: "COS004",
    name: "Vitamin C Serum",
    altNames: ["Brightening Serum", "Glow Serum"],
    labelledPrice: 5000,
    price: 4490,
    images: ["/images/vitamin-c-serum.jpg"],
    description: "Powerful vitamin C serum that brightens skin and reduces dark spots.",
    stock: 60,
    isAvailable: true,
    category: "cosmetics"
  },
  {
    productId: "COS005",
    name: "Rose Lipstick",
    altNames: ["Matte Lip Color", "Long Wear Lipstick"],
    labelledPrice: 2200,
    price: 1990,
    images: ["/images/lipstick.jpg"],
    description: "Highly pigmented matte lipstick with long-lasting color and smooth application.",
    stock: 150,
    isAvailable: true,
    category: "cosmetics"
  },
  {
    productId: "COS006",
    name: "Herbal Shampoo",
    altNames: ["Natural Hair Cleanser", "Anti-Dandruff Shampoo"],
    labelledPrice: 1800,
    price: 1600,
    images: ["/images/shampoo.jpg"],
    description: "Herbal shampoo formulated with natural extracts to strengthen hair and reduce dandruff.",
    stock: 90,
    isAvailable: true,
    category: "cosmetics"
  },
  {
    productId: "COS007",
    name: "Sunscreen SPF 50+",
    altNames: ["Sunblock Cream", "UV Protection Lotion"],
    labelledPrice: 3200,
    price: 2890,
    images: ["/images/sunscreen.jpg"],
    description: "Broad-spectrum SPF 50+ sunscreen that protects against UVA and UVB rays.",
    stock: 110,
    isAvailable: true,
    category: "cosmetics"
  }
];


export default function ProductsAdminPage() {
    const [products,setProducts] = useState(sampleProducts)
    const [a,setA] = useState(0)
    // back end data retrieved
    useEffect(
        () => {
    axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((response) => {
            setProducts(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
        }, [a]
    );

    const navigate = useNavigate();

    return(
        <div className="w-full h-full border-[3px]"> 
            <table>
                <thead>
                    <tr>
                        <th className="p-[10px]">Image</th>
                        <th className="p-[10px]">Product ID</th>
                        <th className="p-[10px]">Name</th>
                        <th className="p-[10px]">Price</th>
                        <th className="p-[10px]">Labelled Price</th>
                        <th className="p-[10px]">Stock</th>
                        <th className="p-[10px]">Category</th>
                        <th className="p-[10px]"></th>

                    </tr>

                </thead>
                <tbody>
                    {
                      products.map(
                        (product,index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                        <img className="w-[50px] h-[50px] " src={product.images[0]} alt={product.name}/>
                                    </td>
                                    <td className="p-[10px]">{product.productId}</td>
                                    <td className="p-[10px]">{product.name}</td>
                                    <td className="p-[10px]">{product.price}</td>
                                    <td className="p-[10px]">{product.labelledPrice}</td> 
                                    <td className="p-[10px]">{product.stock}</td>
                                    <td className="p-[10px]">{product.category}</td>
                                    <td className="p-[10px]">
                                        <TbTrash className=" bg-red-500 p-[7px] text-3xl rounded-full text-white shadow-2xl shadow-black cursor-pointer " onClick={
                                            ()=>{
                                               const token = localStorage.getItem("token")
                                               if (token == null){
                                                navigate("/login")
                                                return
                                               }
                                               axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/products/"+product.productId,{
                                                headers: {
                                                    Authorization: `Bearer ${token}`
                                                }

                                               }).then(

                                                (res)=>{
                                                    console.log("Peoduct deleted successfully")
                                                    console.log(res.data)
                                                    toast.success("Product deleted successfully")
                                                    setA(a+1)
                                                    
                                                }
                                               ).catch(
                                                (error)=>{
                                                    console.error("Error deleting product")
                                                    toast.error("Failed to delete product")

                                                }
                                               )
                                            }
                                        }/>
                                        
                                    </td>
                                </tr>
                            )
                        }
                      )  
                    }

                </tbody>
            </table>
            <Link to="/admin/newproduct" className="fixed right-[60px] bottom-[60px] p-[20px] text-white bg-black rounded-full shadow-2xl cursor-pointer">
                <BiPlus className="text-3xl"/>
            </Link>
            
        </div>
    )
}