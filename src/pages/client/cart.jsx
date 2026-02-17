import { useState } from "react"
import { addToCart, getCart, getTotal } from "../../utils/cart"
import { BiTrash } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

export default function CartPage(){
    
   const navigate = useNavigate()
    const [cart, setCart] = useState(getCart())
    return(
        <div className="w-full h-screen flex flex-col items-center py-[40px]">
            {
    cart.map((item) => {
        return (
            <div 
                key={item.productId}
                className="w-[800px] h-[100px] m-[10px] shadow-2xl flex flex-row items-center relative">
                    <img src = {item.image} className="w-[100px] h-[100px] object-cover"/>
                    <div className="w-[320px] h-full  flex flex-col justify-center pl-[10px]">
                        <span className="font-bold">{item.name}</span>
                        <span className="font-semibold">Price: {item.price.toFixed(2)}</span>
                    </div>
                    <div className="w-[190px] h-full  flex flex-row justify-center items-center ">
                        <button className="flex justify-center items-center w-[30px] rounded bg-blue-600 text-white cursor-pointer hover:bg-blue-400" onClick={
                            ()=>{
                                addToCart(item,-1)
                                setCart(getCart())

                            }
                        }>-</button>
                        <span className="mx-[10px]">{item.quantity}</span>
                        <button className="flex justify-center items-center w-[30px] rounded bg-blue-600 text-white  cursor-pointer hover:bg-blue-400" onClick={
                            ()=>{
                                addToCart(item,1)
                                setCart(getCart())

                            }
                        }>+</button>

                    </div>
                    <div className="w-[190px] h-full flex items-center justify-end pr-[10px]">
                        {/* total quantity * price */}
                        <span className="font-bold">{(item.quantity * item.price).toFixed(2)}</span>
                        <button className ="w-[30px] h-[30px] absolute bg-red-700 shadow rounded-full flex justify-center cursor-pointer items-center border-red-600 border-[2px] hover:bg-white hover:text-red-700 right-[-40px] " onClick={
                            ()=>{
                                addToCart(item,-item.quantity)
                                setCart(getCart())

                            }
                        }>
                            <BiTrash className="text-xl"></BiTrash>
                        </button>
                    </div>
            

            </div>
           
        )
        
    })
}
 <div className="w-[800px] h-[100px] m-[10px] p-[10px] shadow-2xl flex flex-row items-center justify-end relative">
    <span className="font-bold text-2xl ">
                            Total: {getTotal().toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <button className="absolute left-[10px] w-[150px] h-[50px] cursor-pointer rounded-lg shadow-2xl bg-blue-700 border-[2px] border-blue-700 text-white hover:bg-white hover:text-blue-700" 

                        onClick={() => {
                            navigate("/checkout", {state: {items:cart}})}}>
                            checkout

                        </button>
</div>

            
        </div>
    )
}