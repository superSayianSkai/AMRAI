import { Link } from "react-router-dom";
import { FaDna } from "react-icons/fa";
const SignUp = () => {
  return (
    <div className="p-10 bg-black text-white min-h-[100vh] flex justify-center items-center gap-5 relative flex-col">
      <div className="[justify-self-start w-[100%] flex items-center gap-2 ">
        <FaDna className="text-3xl" />
        <h1 className="border-2text-center text-2xl font-extrabold">AMRAI</h1>
      </div>
      <div className="bg-white text-black min-w-[400px] flex flex-col items-center gap-7 py-8 px-9 rounded-xl shadow-gray-500 shadow-2xl">
        <h2 className="text-3xl font-bold capitalize">
          Customize your data input
        </h2>
        <form className="flex flex-col gap-5 w-[100%]">
          <div className="flex flex-col gap-2">
            <p>Name your company and create teams</p>
            <input
              className="text-black rounded-full px-3 py-2 border-2 border-black placeholder:text-sm"
              type="text"
              placeholder="Company's name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Manage your teams efficiently</p>
            <div className="flex flex-col gap-2">
              <input
                className="text-black rounded-full px-3 py-2 border-2 border-black placeholder:text-sm "
                type="text"
                placeholder="Research Team"
              />

              <input
                className="text-black rounded-full px-3 py-2 border-2 border-black placeholder:text-sm"
                type="text"
                placeholder="Analysis Team"
              />
            </div>
            <a
              href="#"
              className="text-blue-500 text-[13px] italic hover:underline"
            >
              Add a new team ?
            </a>
          </div>
        </form>

        <button className="w-[100%] bg-black text-white px-5 py-3 rounded-lg font-extrabold hover:text-black hover:bg-white hover:border-2 border-black">
          Proceed
        </button>
        <p>
          Already have an account ?{" "}
          <Link to=".signIn" className="text-blue-700 hover:underline">
            sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
