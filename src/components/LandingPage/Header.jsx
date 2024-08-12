import { FiMenu } from "react-icons/fi";
const Header = ({ setOpen }) => {
  return (
    <div className="flex justify-between px-[1.5rem] my-2 items-center rounded-2xl text-black font-sm cursor-pointer ">
      <div className="flex gap-2 justify-between items-center">
        <h2 className="text-2xl font-bold leading-[2.6rem]">AMRAI</h2>
      </div>
      <div className="font-sm">
        <ul className="hidden lg:flex gap-6 items-center justify-center">
          <li className="hover:underline leading-[2.6rem]">Research</li>
          <li className="hover:underline leading-[2.6rem]">Product</li>
          <li className="hover:underline leading-[2.6rem]">Company</li>
        </ul>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="block sm:block lg:hidden"
        >
          <FiMenu className="cursor-pointer text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;
