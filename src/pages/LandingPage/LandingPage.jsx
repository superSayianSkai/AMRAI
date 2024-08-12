import { useState } from "react";
import Header from "../../components/LandingPage/Header";
import "../../styles/LandingPage.css";
import Body from "../../components/LandingPage/LandingBody";
import Info from "../../components/LandingPage/Info";
import LandingFooter from "../../components/LandingPage/LandingFooter";
import { motion, AnimatePresence } from "framer-motion";
import SideBar from "../../components/LandingPage/SideBar";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="relative min-h-screen bg-custom-gray bg-opacity-100 overflow-hidden">
      <Header setOpen={setIsOpen} />
      <AnimatePresence>
        {isOpen && <SideBar setOpen={setIsOpen} />}
      </AnimatePresence>
      <motion.div
        animate={{ y: isOpen ? 300 : 0 }}
        transition={{ type: "just", stiffness: 200 }}
        className={`grid grid-cols-12 items-center justify-center ${
          isOpen ? "blur-md" : ""
        }`}
      >
        <div className=" col-span-12 mx-auto max-w-[54rem] px-4">
          <Body />
        </div>
        <div className="col-span-12 mt-8">
          <Info />
        </div>
        <div className="col-span-12 mt-10">
          <LandingFooter />
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
