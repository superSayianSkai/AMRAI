import { FaDna } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-between border-2 px-10 py-5 items-center rounded-xl bg-white">
      <div className="flex gap-2 justify-between items-center">
        <FaDna className="text-xl" />
        <h2 className="text-xl font-bold">AMRAI</h2>
      </div>
      <div>
        <ul className="flex gap-6">
          <li className="hover:underline">Research</li>
          <li className="hover:underline" >Product</li>
          <li className="hover:underline">Company</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
