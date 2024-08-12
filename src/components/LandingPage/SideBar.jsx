import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const SideBar = ({ setOpen }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "", stiffness: 300 }}
      className="absolute top-0 z-[10] bg-white left-0 w-full h-full px-4 py-10"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">AMR</h2>
        <button onClick={() => setOpen((prev) => !prev)}>
          <IoMdClose className="text-3xl" />
        </button>
      </div>
      <ul className="gap-10 flex flex-col text-2xl py-10">
        <li className="hover:underline">Research</li>
        <li className="hover:underline">Product</li>
        <li className="hover:underline">Company</li>
      </ul>
    </motion.div>
  );
};

export default SideBar;
