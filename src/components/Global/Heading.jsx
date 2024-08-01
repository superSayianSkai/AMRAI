import { FaDna } from "react-icons/fa";

const Heading = () => {
  return (
    <div className="justify-between w-[100%] flex items-center gap-2 px-12 py-2">
      <div className="flex items-center justify-center gap-2">
        <FaDna className="text-3xl text-white" />
        <h1 className="border-2text-center text-2xl font-extrabold text-white">
          AMRAI
        </h1>

      </div>

    </div>
  );
};

export default Heading;
