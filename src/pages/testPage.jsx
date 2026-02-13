const url = "https://gksizmrizfcykivsjart.supabase.co"
const key = "sb_publishable_pg8nrtrofcmb1kuRhUM18Q_YMy5xaU-"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import toast from "react-hot-toast"
import uploadfile from "../utils/mediaUpload"

const supabase = createClient(url,key)

export default function TestPage(){

    const [file,setfile] = useState(null)

    function handleUpload(){
        uploadfile(file).then(
            (url)=>{
                console.log(url)
                toast.success("File uploaded successfully")
            }
        ).catch(
            (error) =>{
                console.error("Error uploading file:", error)
                toast.error(error)

            }
        )

    }

        return(
        <div className="w-full h-screen flex justify-center items-center">
            <input type="file" onChange={

                (e)=>{
            
                    setfile(e.target.files[0])
                }}/>
                <button onClick={handleUpload} className="bg-blue-500 text-white p-2 rounded-md ml-4 cursor-pointer ">
                    upload
                </button>
                    
        </div>
    )
} 