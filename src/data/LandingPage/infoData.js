// import { FaMicroscope } from "react-icons/fa";
// import { BsGraphUpArrow } from "react-icons/bs";
// import { FaShieldAlt } from "react-icons/fa";
import Dna from "../../assets/images/dna.png";
import data from "../../assets/images/data.png";
import Chat from "../../assets/images/chat.jpg";
import bulb from "../../assets/images/LandingPage/bulb.jpeg";
import bulb2 from "../../assets/images/LandingPage/bulb2.jpeg";
import bulb3 from "../../assets/images/LandingPage/bulb3.jpeg";
const InfoData = [
  //
  {
    img: Chat,
    h2: "Chat AI",
    p: "Chat with our AI for insights on the current state of AMR in Africa, powered by our curated genomic dataset",
    picture: bulb3,
    link: "/amrai",
    status: "Explore",
  },
  {
    img: data,
    h2: "Advanced Analysis",
    p: "Utilize cutting-edge algorithms to visualize the state of AMR in Africa and upload your AMR genotypic data to our dashboard for detailed analysis and AI-driven insights",
    picture: bulb2,
    link: "/dashboard",
    status: "Explore",
  },
  {
    img: Dna,
    h2: "Data Input",
    p: "Quickly input your genomic data through our intuitive interface and start analyzing right away.",
    picture: bulb,
    link: "",
    status: "Coming soon",
  },
];
export default InfoData;
