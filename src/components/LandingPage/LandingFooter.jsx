import LandingIcon from "./LandingIcon";
const LandingFooter = () => {
  return (
    <div className="flex justify-around items-center text-white">
      <div>
        <h2 className="text-sm font-semibold">Genomac Holdings @2024 </h2>
      </div>
      <div className="flex gap-4">
        {LandingIcon.map((items, index) => {
          const Icon = items.icons;
          return (
            <div key={index} className="">
              <Icon className="text-sm"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingFooter;
