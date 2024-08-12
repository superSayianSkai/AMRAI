import LandingIcon from "./LandingIcon";
const LandingFooter = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-around items-center text-black p-12">
      <div>
        <h2 className="text-md font-semibold">Genomac Holdings @2024 </h2>
      </div>
      <div className="  flex gap-4">
        {LandingIcon.map((items, index) => {
          const Icon = items.icons;
          return (
            <div key={index} className="">
              <Icon className="text-md"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingFooter;
