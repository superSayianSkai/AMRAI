import BarChartMe from "../../components/Dashboard/BarChartMe";
import LineChartMe from "../../components/Dashboard/LIneChartMe";
import PieChartMe from "../../components/Dashboard/PieChartMe";
import PrecipitationChart from "../../components/Dashboard/PrecipitationChart ";
import { GoClock } from "react-icons/go";
import "../../styles/visuals.css";

const Dashboard = () => {
  return (
    <div className="dashboard content">
      <aside className="sidebar rounded-xl">
        <div className="filter mt-6">
          <label className="font-bold">Region</label>
          <select>
            <option>North America</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>South America</option>
            <option>Africa</option>
            <option>Australia</option>
          </select>
        </div>

        <div className="filter">
          <label className="font-bold"> Time Period</label>
          <input type="date" />
        </div>

        <div className="h-[200px] mt-8">
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

      <div className="main">
        <header className="header rounded-xl shadow-lg">
          <div className="logo">AMR</div>
          <nav className="nav">
            <a href="/home">Home</a>
            <a href="/reports">Download Reports</a>
            <a href="/chat">Chat</a>
          </nav>
        </header>

        <div className="chart-container my-[8rem]">
          <div className="relative chart shadow-2xl shadow-grey-200">
            <BarChartMe />

            <div className="px-3 absolute bottom-10 flex flex-col gap-2 justify-between">
    
              <div className="my-[-20px]">
              <h1 className="text-xl capitalize text-black font-bold">
                  website views
                </h1>
                
                <p className="text-sm mt-1 text-gray-600">Last Campaign Performance</p>

                <p className="flex gap-2 items-center mt-8">
                  <GoClock />
                  <p className="text-sm text-gray-600">updated 2days ago</p>
                </p>
              </div>
            </div>
          </div>

          <div className="chart shadow-2xl shadow-grey-200">
            <PieChartMe />

            <div className=" px-3 flex flex-col gap-2 justify-between">
              <div className="px-3 absolute bottom-10 flex flex-col gap-2 justify-between">
              <div className="my-[-20px]">
              <h1 className="text-xl capitalize text-black font-bold">
                  website views
                </h1>
                
                <p className="text-sm mt-1 text-gray-600">Last Campaign Performance</p>

                <p className="flex gap-2 items-center mt-8">
                  <GoClock />
                  <p className="text-sm text-gray-600">updated 2days ago</p>
                </p>
              </div>
            </div>
            </div>
          </div>
          <div className="chart shadow-2xl shadow-grey-200 text-black justify-center items-center">
            <LineChartMe />

            <div className="flex flex-col gap-2 justify-between">
              <div className="px-3 absolute bottom-10 flex flex-col gap-2 justify-between">
              <div className="my-[-20px]">
              <h1 className="text-xl capitalize text-black font-bold">
                  website views
                </h1>
                
                <p className="text-sm mt-1 text-gray-600">Last Campaign Performance</p>

                <p className="flex gap-2 items-center mt-8">
                  <GoClock />
                  <p className="text-sm text-gray-600">updated 2days ago</p>
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="chart hart shadow-2xl shadow-grey-200">
            <PrecipitationChart />

            <div className="px-3 flex flex-col gap-2 justify-between">
              <div className="px-3 absolute bottom-10 flex flex-col gap-2 justify-between">
           
              <div className="my-[-20px]">
              <h1 className="text-xl capitalize text-black font-bold">
                  website views
                </h1>
                
                <p className="text-sm mt-1 text-gray-600">Last Campaign Performance</p>

                <p className="flex gap-2 items-center mt-8">
                  <GoClock />
                  <p className="text-sm text-gray-600">updated 2days ago</p>
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
