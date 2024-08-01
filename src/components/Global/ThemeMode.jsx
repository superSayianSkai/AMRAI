import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useState } from "react";
const ThemeMode = () => {
  const [ThemeMode, setThemeMode] = useState(false);

  const myStyle = {
    display: ThemeMode ? "block" : "none",
  };
  const myStyle2 = {
    display: ThemeMode ? "none" : "block",
  };

  const handleClicked = () => {
    setThemeMode((prev) => (!prev ? true : false));
    console.log("clicked");
  };
  return (
    <div>
      <button
        style={myStyle}
        className="bg-white text-black px-1 py-1 text-2xl rounded-md cursor-pointer"
        onClick={handleClicked}
      >
        <CiDark />
      </button>
      <button
        style={myStyle2}
        onClick={handleClicked}
        className="bg-white text-black px-1 py-1 text-2xl rounded-md cursor-pointer"
      >
        <CiLight />
      </button>
    </div>
  );
};

export default ThemeMode;
