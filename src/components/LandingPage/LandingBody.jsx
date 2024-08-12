import { Link } from "react-router-dom";
const Body = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center pt-[7rem] md:pt-[2rem] lg:mt-[10rem]">
      <h1 className="flex flex-col text-center md:block text-black  max-w-[70rem]">
        <span className=" text-[2.5rem] lg:mr-4 md:text-[5rem] font-medium">
          Introducing
        </span>
        <span className="text-[3rem] leading-[3rem] mb-6  md:text-[150px] font-bold">
          AMRAI
        </span>
      </h1>
      <p className="mb-4 md:text-xl max-w-[40rem] text-gray-700 lg:my-[1rem] leading-[2rem] lg:leading-[2.6rem] whitespace-break-spaces">
        AMRAI  is a powerful tool for inputting, analyzing, and visualizing genomic
        data. Our user-friendly platform helps you gain insights effortlessly.
      </p>
      <Link to="/signIn">
        <button className="border-2 border-black rounded-full py-2 px-4 lg:hover:text-white lg:hover:bg-black max-md:active:text-white max-md:active:bg-black">Get Started</button>
      </Link>
    </div>
  );
};

export default Body;
