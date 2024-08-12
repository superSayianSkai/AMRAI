import InfoData from "../../data/LandingPage/infoData";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
const Info = () => {

  const [activeIndex,setActiveIndex ]= useState(0);
  console.log(activeIndex)
  const containerRef = useRef(null);

  const scrollToIndex = (index) => {
    event.preventDefault()
    const container = containerRef.current;
    const itemWidth = container.scrollWidth / InfoData.length;
    container.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index)
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div
        ref={containerRef}
        className="flex w-full px-4 md:px-12 mt-8  gap-6 rounded overflow-x-auto horizontal-scroll-container"
      >
        {InfoData.map((item, index) => {
          return (
            <div
              style={{
                backgroundImage: `url(${item.picture})`,
                backgroundSize: "cover",
                objectFit: "cover",
              }}
              key={index}
              className="relative gap-4 min-w-full h-[400px] w-screen md:h-[620px] md:gap-6 flex flex-col justify-center items-center bg-white  py-8 px-5  text-center hover:shadow-2xl shadow-gray-400 transition-transform transform hover:scale-109 rounded-xl "
            >
              <div className="absolute bg-black z-[-1] w-full h-full opacity-15"></div>
              <h2 className="text-[50px] md:ext-2xl md:text-[70px] font-bold text-white">
                {item.h2}
              </h2>
              <p className="text-[12px] text-slate-200 md:text-[20px] w-[250px]  md:w-[650px] mt-[-10px]">
                {item.p}
              </p>
              <Link to={item.link}>
                <button className="rounded-xl bg-white text-black  border-[1px] w-40 py-2 ">
                  {item.status}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        {InfoData.map((_, index) => (
          <button
            onClick={() => scrollToIndex(index)}
            key={index}
            className={`border-[1px] border-black w-4 h-4 rounded-lg ${activeIndex==index?'bg-black':""}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Info;
