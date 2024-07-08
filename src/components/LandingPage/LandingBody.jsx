import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-col min-w-[650px] justify-center items-center py-2 gap-3 text-center">
      <h1 className="text-[2.3rem] text-white line-">
        Introducing <span className="text-[3rem] leading-6">AMRAI</span>
      </h1>
      <p className="text-[14px] text-white">
        AMRAI is a powerful tool for inputting, analyzing, and visualizing
        genomic data. Our user-friendly platform helps you gain insights
        effortlessly.
      </p>
      <Link to=".signUp">
        <button className="border-[1px] border-black px-8 py-2 rounded-full bg-white text-black hover:bg-black hover:text-white hover:text-black hover:border-white h">
          Get started
        </button>
      </Link>
    </div>
  );
};

export default Body;
