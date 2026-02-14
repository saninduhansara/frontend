import { useState } from "react"

export default function ImageSlider(props) {

    const images = props.images
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    return(
        <div className="w-[400px] h-[500px] " >
            <img src = {images[activeImageIndex]} className="w-full h-[400px] object-cover" />
            <div className="w-full h-[90px] flex flex-row items-center justify-center gap-[2px]">
                {
                    images.map(
                        (image,index)=>{
                            return(
                                <img src={image} key={index} className = {activeImageIndex == index && "border-[5px]" ? "w-[90px] h-[100px] object-cover cursor-pointer border-2 border-blue-500" : "w-[90px] h-[100px] object-cover cursor-pointer"} onClick={()=>setActiveImageIndex(index)}/>
                            )

                        }
                    )
                }
            </div>

        </div>
    )
}