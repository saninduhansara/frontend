import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import uploadfile from "../../utils/mediaUpload";




export default function UpdateProductPage() {
    const location = useLocation()
    const [productID,setProductID] = useState(location.state.productId)
    const [productName,setProductName] = useState(location.state.name)
    const [alternativeNames,setAlternativeNames] = useState(location.state.altNames.join(","))
    const [labelledPrice,setLabelledPrice] = useState(location.state.labelledPrice)
    const [price,setPrice] = useState(location.state.price)
    const [images,setImages] = useState([])
    const [description,setDescription] = useState(location.state.description)
    const [stock,setStock] = useState(location.state.stock)
    const [isAvailable,setIsAvailable] = useState(location.state.isAvailable)
    const [category,setCategory] = useState(location.state.category)

    
    

    const navigate = useNavigate()


    async function handleSubmit(){

        const promisesArray =[]
        for (let i=0; i<images.length; i++){
            const promise = uploadfile(images[i])
            promisesArray[i] = promise
        }
        const responses = await Promise.all(promisesArray)
        console.log(responses)
        

        const altNamesInArray = alternativeNames.split(",")
        const productData = {
            productId: productID,
            name: productName,
            altNames: altNamesInArray,
            labelledPrice: labelledPrice,
            price: price,
            images: responses,
            description: description,
            stock: stock,
            isAvailable: isAvailable,
            category: category
        }

        if(responses.length == 0){
            productData.images = location.state.images
        }

        const token = localStorage.getItem("token")
        if(token == null){
            window.location.href = "/login"
            return
        }


        axios.put(import.meta.env.VITE_BACKEND_URL+"/api/products/"+productID, productData,
            {
                headers: {
                    Authorization: "Bearer "+token
                }

            }
    )
        .then(
            (res)=>{
                console.log("Product added successfully")
                console.log(res.data)
                toast.success("Product added successfully")
                navigate("/admin/products")

            }
            
        )
        .catch(
            (error)=>{
            console.log("Error adding product:", error)
            toast.error("Error adding product")
        })

    }

    
    

    return(
        <div className="w-full h-full flex justify-center items-center">

            <div className="w-[600px]  border-[3px] rounded-[15px] flex flex-wrap justify-between p-[40px]">
                <div className="w-[200px] flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold" >Product ID</label>
                    <input 
                        disabled
                        type="text" 
                        value={productID} 
                        onChange={(e)=>{setProductID(e.target.value)}} 
                        className="shadow-2xl w-full border-[1px] h-[40px] rounded-md">
                    </input>
                </div>

                <div className="w-[300px]  flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold" >Product Name</label>
                    <input 
                        type="text" 
                        value={productName}
                        onChange={(e)=>{setProductName(e.target.value)}}
                        className="shadow-2xl w-full border-[1px] h-[40px] rounded-md">
                    </input>
                </div>

                <div className="w-[500px]  flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold" >Alternative Names</label>
                    <input 
                        type="text" 
                        value={alternativeNames}
                        onChange={(e)=>{setAlternativeNames(e.target.value)}}
                        className="shadow-2xl w-full border-[1px] h-[40px] rounded-md">
                    </input>
                </div>

                <div className="w-[200px]  flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold" >Labelled Price</label>
                    <input 
                        type="number" 
                        value={labelledPrice}
                        onChange={(e)=>{setLabelledPrice(e.target.value)}}
                        className="shadow-2xl w-full border-[1px] h-[40px] rounded-md">
                    </input>
                </div>

                <div className="w-[200px]  flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold" >Price</label>
                    <input 
                        type="number" 
                        value={price}
                        onChange={(e)=>{setPrice(e.target.value)}}
                        className="shadow-2xl w-full border-[1px] h-[40px] rounded-md">
                    </input>
                </div>

                <div className="w-[500px]  flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold" >Images</label>
                    <input 
                        multiple
    
                        type="file" 
                
                        onChange={(e)=>{
                            setImages(e.target.files)
                        }}
                        className="shadow-2xl w-full border-[1px] h-[40px] rounded-md">
                    </input>
                </div>

                <div className="w-[500px]  flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold" >Description</label>
                    <textarea 
                        value={description}
                        onChange={(e)=>{setDescription(e.target.value)}}
                        className="shadow-2xl w-full border-[1px] h-[40px] rounded-md">
                    </textarea>
                </div>

                <div className="w-[200px]  flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold" >Stock</label>
                    <input 
                        type="number" 
                        value={stock}
                        onChange={(e)=>{setStock(e.target.value)}}
                        className="shadow-2xl w-full border-[1px] h-[40px] rounded-md">
                    </input>
                </div>

                <div className="w-[200px]  flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold" >Is Available</label>
                    <select 
                        value={isAvailable}
                        onChange={(e)=>{setIsAvailable(e.target.value === "true")}} 
                        className="w-full border-[1px] h-[40px] rounded-md">
                        <option value={true}>Available</option>
                        <option value={false}>Not Available</option>
                    </select>
                </div>

                <div className="w-[500px]  flex flex-col gap-[5px]">
                    <label className="text-sm font-semibold" >Category</label>
                    <select 
                        value={category}
                        onChange={(e)=>{setCategory(e.target.value)}} 
                        className="w-full border-[1px] h-[40px] rounded-md">
                        <option value="cream">Cream</option>
                        <option value="facewash">Facewash</option>
                        <option value="soap">Soap</option>
                        <option value="fragrance">Fragrance</option>
                    </select>
                </div>

                <div className="w-full flex justify-center flex-row py-[20px] gap-5">
                    <Link to="/admin/products" className="w-[200px] h-[50px] rounded-md bg-white text-black border-[2px]  flex items-center justify-center">
                        Cancel
                    </Link>
                    <button onClick={handleSubmit} className="w-[200px] h-[50px] rounded-md bg-black text-white border-[2px]  flex items-center justify-center">
                        Update Product
                    </button>
                </div>
                
            </div>
        </div>
    )
}
