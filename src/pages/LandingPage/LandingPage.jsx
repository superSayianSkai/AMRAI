import Header from "../../components/LandingPage/Header";
import "../../styles/LandingPage.css";
import Body from "../../components/LandingPage/LandingBody";
import Info from "../../components/LandingPage/Info";
import LandingFooter from "../../components/LandingPage/LandingFooter";
const LandingPage = () => {
  return (
    <div className="layout">
      <div className="col-start-2 col-end-12" >
        <Header />
      </div>
      <div className="col-span-12 self-center justify-self-center" >
        <Body />
      </div>
      <div className="col-span-12 justify-self-center">
        <Info/>
      </div>
      <div className="bg-black col-span-12 place-content-center">
        <LandingFooter/> 
      </div>
    </div>
  );
};

export default LandingPage;
