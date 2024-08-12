import BarChartMe from "../../components/Dashboard/BarChartMe";
import LineChartMe from "../../components/Dashboard/LIneChartMe";
import PieChartMe from "../../components/Dashboard/PieChartMe";
import PrecipitationChart from "../../components/Dashboard/PrecipitationChart ";
import { GoClock } from "react-icons/go";
import "../../styles/visuals.css";
import Skai from "../../assets/images/skai.jpg";
import { FaDownload } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [retract, setRetract] = useState(false);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleRetract = () => {
    setRetract((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Set the initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLargeScreen) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Please view this dashboard on a larger screen.
      </div>
    );
  }

  return (
    <div
      style={{
        gridTemplateColumns: retract ? "100px 1fr" : "250px 1fr",
        transitionProperty: "grid",
        transitionDuration: ".3s",
        transitionDelay: ".1s",
        transitionTimingFunction: "ease",
      }}
      className="dashboard content"
    >
      <aside className="sidebar ">
        <div className="filter mt-6">
          <div className="flex item-center justify-between">
            <label
              style={{ display: retract ? "none" : "block" }}
              className="font-bold text-xl mb-[8px]"
            >
              Region
            </label>

            {retract ? (
              <MdOutlineKeyboardDoubleArrowRight
                onClick={handleRetract}
                className="text-[28px] cursor-pointer "
              />
            ) : (
              <MdOutlineKeyboardDoubleArrowLeft
                onClick={handleRetract}
                className="text-[28px] cursor-pointer "
              />
            )}
          </div>
          <select style={{ display: retract ? "none" : "block" }}>
            <option>North America</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>South America</option>
            <option>Africa</option>
            <option>Australia</option>
          </select>
        </div>

        <div style={{ display: retract ? "none" : "block" }} className="filter">
          <label className="font-bold"> Time Period</label>
          <input type="date" />
        </div>

        <div
          style={{ display: retract ? "none" : "block" }}
          className="h-[200px] mt-8"
        >
          <h1 className="font-bold mb-2">Insights</h1>
          <textarea
            type="text"
            placeholder="Ai insights"
            className="rounded-xl px-2 py-2 border-white border-[1px] outline-none"
            style={{
              width: "100%",
              height: "120%",
              color: "white",
              resize: "none",
              background: "black",
            }}
          />
        </div>
      </aside>

      <div className="main w-full">
        <header
          style={{
            width: retract ? "1100px" : "75%",
            // gridTemplateColumns: retract ? "100px 1fr" : "",
          }}
          className="header rounded-xl  max-w-[100%] transition-width duration-300 delay-100 ease"
        >
          <div className="logo cursor-pointer">AMRAI</div>
          <nav className="flex items-center justify-center cursor-pointer">
            <Link to="/amrai" >
              <div className="text-[18px] font-medium">ChatAI</div>
            </Link>
            <FaDownload className="text-xl mx-8" />
            <div className="w-[30px]">
              <img src={Skai} className="rounded-full w-full h-full" alt="" />
            </div>
          </nav>
        </header>

        <div style={{}} className="chart-container ">
          <BarChartMe />

          <PieChartMe />

          <LineChartMe />

          <PrecipitationChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
