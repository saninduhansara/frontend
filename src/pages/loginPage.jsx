import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios  from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
    const [password,setpassword] = useState("")
    const [email,setemail] = useState("")
    const navigate = useNavigate()

    function login(){
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/login",{
            email: email,
            password: password
        }).then((res)=>{
            console.log(res.data)
            localStorage.setItem("token",res.data.token)
            //alert("Login Successful")
            toast.success("Login Successful")
            if (res.data.role == "admin"){
                navigate("/admin")

            }else if(res.data.role == "user"){
                navigate("/")

            }
        }).catch((err)=>{
            console.log(err)
            //alert("Login Failed")
            toast.error("Login Failed")
        })
     
    }
    return(
        <div className="w-full h-screen bg-[url(./loginbg.jpg)] bg-cover bg-center flex justify-center items-center">
            <div className="w-[500px] h-[500px] backdrop-blur-sm rounded-[30px] relative gap-[20px] text-white flex flex-col items-center justify-center">
                <h1 className="absolute top-[20px] text-2xl font-bold text-center my-5">Login</h1>
                <div className="w-[350px]  flex flex-col ">
                    <span className="text-lg ">Email</span>
                    <input onChange={
                        (e)=>{
                            setemail(e.target.value)
                        }
                    }type="text" className="w-[350px] h-[40px] border border-white rounded-xl"/>
                </div>
                <div className="w-[350px]  flex flex-col ">
                    <span className="text-lg ">Password</span>
                    <input onChange={
                        (e)=>{
                            setpassword(e.target.value)
                        }
                    } type="password" className="w-[350px] h-[40px] border border-white rounded-xl"/>
                </div>
                <button onClick={login} className="w-[350px] h-[40px] bg-blue-500 text-white rounded-xl mt-5">Login</button>
                <p>Don't have an account <Link to="/register" className="text-blue-500">sign up</Link> here</p>
                
            </div>
        </div>
    )
}