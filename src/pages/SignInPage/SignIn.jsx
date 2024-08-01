import { Link } from "react-router-dom";
import { FaDna } from "react-icons/fa";
import Heading from "../../components/Global/Heading";
const SignUp = () => {
  return (
    <div className="p-10 bg-black text-white min-h-[100vh] flex items-center relative flex-col">
      <Heading/>

      <div className="bg-white text-black min-w-[400px] flex flex-col items-center gap-4 py-8 px-9 rounded-xl shadow-gray-500 shadow-2xl mt-12">
        <h2 className="text-3xl font-bold capitalize">SIGN IN</h2>
        <form className="flex flex-col gap-2 w-[100%]">
          <input
            className="text-black rounded-xl  px-3 py-2 border-2 border-black placeholder:text-sm"
            type="text"
            placeholder="Username"
          />

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <input
                className="text-black rounded-xl px-3 py-2 border-2 border-black placeholder:text-sm"
                type="text"
                placeholder="Password"
              />

            </div>
          </div>
        </form>

        <button className="w-[100%] bg-black text-white px-5 py-3 rounded-lg font-extrabold hover:text-black hover:bg-white hover:border-2 border-black">
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
