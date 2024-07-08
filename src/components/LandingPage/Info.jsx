import InfoData from "../../data/LandingPage/infoData";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div className="grid grid-cols-3 gap-10 px-12">
      {InfoData.map((item, index) => {
     
        return (
      
          <Link to=".signUp" key={index}>
          <div key={index} className= "gap-4 flex flex-col justify-center items-center bg-white  py-8 px-5 max-w-[350px] h-[250px] text-center hover:shadow-2xl shadow-gray-400 transition-transform transform hover:scale-110 rounded-xl">
            <img className="text-2xl" src={item.img} style={{width:'130px'}} />
            <h2 className="text-2xl font-bold">{item.h2}</h2>
            <p className="text-sm" >{item.p}</p>
          </div>
      </Link>
        );
      })}
    </div>
  );
};

export default Info;
