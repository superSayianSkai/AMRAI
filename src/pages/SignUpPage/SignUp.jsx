import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthState } from "../../context/Context";
const SignUp = () => {
  const [fullName,setFullname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  const {setUser,setToken,token}=AuthState()

  useEffect(()=>{
    if(token){
      navigate("/")
    }
  },[token])

  const signupHandler=async()=>{
    try {
      const response= await axios.post("https://amr-ai-api.onrender.com/api/v1/user/signup",{
        email,
        password,
        fullName,
        organismOfInterest: "string"

      })

      console.log(response.data.data.user)
      setUser(response.data.data.user);
      localStorage.setItem("userData",JSON.stringify(response.data.data.user))
      setToken(response.data.data.token);
      localStorage.setItem("tokenData",response.data.data.token)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="p-10  text-white min-h-[100vh] flex items-center relative flex-col">
      <h1 className="text-[50px] font-bold mt-2">AMR</h1>
      <div className="text-black min-w-[400px] flex flex-col items-center gap-4 py-8 px-9 mt-8">
        <h2 className="text-2xl font-bold capitalize">SIGN UP</h2>
        <form className="flex flex-col gap-2 w-[100%]">
          <input
            className="text-black rounded-xl  px-3 py-2 border-[1px] border-black placeholder:text-sm outline-none"
            type="text"
            placeholder="FullName"
            value={fullName}
            onChange={(e)=>setFullname(e.target.value)}
          />

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <input
                className="text-black rounded-xl px-3 py-2 border-[1px] border-black placeholder:text-sm  outline-none"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />

              <input
                className="text-black rounded-xl px-3 py-2 border-[1px] border-black placeholder:text-sm outline-none"
                type="text"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
        </form>

        <button className="w-[100%] bg-black text-white px-5 py-3 rounded-lg font-extrabold hover:text-black hover:bg-white hover:border-2 border-black" onClick={()=>signupHandler()}>
          Proceed
        </button>
        <p className="flex gap-1">
          Already have an account?
          <Link to="/signIn" className="text-blue-700 hover:underline">
            sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
