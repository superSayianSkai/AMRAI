import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthState } from "../../context/Context";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setToken, token } = AuthState();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const signinHandler = async () => {
    // e.preventDefault()
    console.log("loading");
    try {
      const response = await axios.post(
        "https://amr-ai-api.onrender.com/api/v1/user/signin",
        {
          email,
          password,
        }
      );

      console.log(response.data.data.user);
      setUser(response.data.data.user);
      localStorage.setItem("userData", JSON.stringify(response.data.data.user));
      setToken(response.data.data.token);
      localStorage.setItem("tokenData", response.data.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-10 min-h-[100vh] flex items-center relative flex-col bg-white">
      <h1 className="text-[50px] font-bold mt-2">AMR</h1>
      <div className=" text-black min-w-[400px] flex flex-col items-center gap-4 py-8 px-9 mt-12">
        <h2 className="text-2xl font-bold capitalize">SIGN IN</h2>
        <form className="flex flex-col gap-2 w-[100%]">
          <input
            className="text-black rounded-xl  px-3 py-2 border-[1px] outline-none border-black placeholder:text-sm"
            type="email"
            value={email}
            placeholder="user@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <input
                className="text-black rounded-xl px-3 py-2 border-[1px] outline-none border-black placeholder:text-sm"
                type="text"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>

        <button
          onClick={() => signinHandler()}
          className="w-[100%] bg-black text-white px-5 py-3 rounded-lg font-extrabold hover:text-black hover:bg-white hover:border-2 border-black"
        >
          Proceed
        </button>
        <p className="flex gap-1">
          Dont have an account?
          <Link to="/signUp" className="text-blue-700 hover:underline">
            sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
