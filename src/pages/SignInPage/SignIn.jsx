import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthState } from "../../context/Context";
import axios from "axios";
import gif from "../../assets/Animation - 1729852667769.gif";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setToken, token } = AuthState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation;
  const from = location.state?.from?.pathname || "/amrai";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate]);

  const signinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    console.log("loading");
    try {
      const response = await axios.post(
        "https://amr-ai-api.onrender.com/api/v1/user/signin",
        {
          email,
          password,
        }
      );
      setLoading(true);

      console.log(response.data.data.user);
      setUser(response.data.data.user);
      localStorage.setItem("userData", JSON.stringify(response.data.data.user));
      setToken(response.data.data.token);
      localStorage.setItem("tokenData", response.data.data.token);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="h-[100vh] flex items-center justify-center relative flex-col bg-white">
      <h1 className="text-[50px] font-bold mt-2">AMRAI</h1>
      <div className=" text-black min-w-[400px] flex flex-col items-center gap-4 py-8 px-9 mt-12">
        <h2 className="text-2xl font-bold capitalize">SIGN IN</h2>
        <form onSubmit={signinHandler} className="flex flex-col gap-2 w-[100%]">
          <input
            required
            className="text-black rounded-xl  px-3 py-2 border-[1px] outline-none border-black placeholder:text-sm"
            type="email"
            value={email}
            placeholder="user@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <input
                required
                className="text-black rounded-xl px-3 py-2 border-[1px] outline-none border-black placeholder:text-sm"
                type="text"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
             <button className="w-[100%] bg-black text-white px-5 py-3 rounded-lg font-extrabold hover:text-black hover:bg-white hover:border-2 border-black flex items-center justify-center  h-[50px]">
            {!loading && !error ? (
              <p>Proceed</p>
            ) : error ? (
              <p>Try again</p>
            ) : (
              <img src={gif} className="" alt="Loading" />
            )}
          </button>
        </form>

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
