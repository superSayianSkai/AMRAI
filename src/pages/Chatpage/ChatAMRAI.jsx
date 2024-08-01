import "../../styles/chatAMRAI.css";
import { useContext, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Skai from "../../assets/images/skai.jpg";
import { FaPlus } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { RiHome2Line } from "react-icons/ri";
import { CiChat2 } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { Context } from "../../context/Context";
import ThemeMode from "../../components/Global/ThemeMode";
import { LuSparkles } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa";

const ChatAMRAI = () => {
  const {
    onSent,
    recentPrompts,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    prevPrompts,
    setRecentPrompts,
  } = useContext(Context);

  const [extended, setExtended] = useState(false);
  const [resize, setResize] = useState(false);

  const handleExtend = () => {
    setExtended((prev) => !prev);
    setResize((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput(""); // Clear the input field after submitting
  };

  return (
    <div
      style={{
        gridTemplateColumns: resize ? "" : "94% 100px",
        transition: "all",
        transitionTimingFunction: "ease-in",
      }}
      className="chat-amrai-container overflow-hidden"
    >
      <main className="main-content">
        <header className="flex justify-between items-center pt-2 px-6 ">
          <div className="logo text-gray-400">AMRAI</div>
          <div className="text-black flex items-center justify-center gap-6">
            <ThemeMode />
            <img
              className="w-[30px] rounded-full cursor-pointer"
              src={Skai}
              alt=""
            />
          </div>
        </header>

        <div className="form-and-response justify-between mt-4">
          <div className="response scrollbar-thin scrollbar-webkit">
            {!showResult ? (
              <div>
                <span className="text-[60px] font-bold greeting">
                  Hello Skai,
                </span>
                <p className="text-4xl text-gray-400">how can I help you today?</p>
              </div>
            ) : (
              <div className="result flex flex-col gap-10">
                <div className="flex items-center gap-6">
                  <img
                    className="w-[30px] rounded-full cursor-pointer"
                    src={Skai}
                    alt=""
                  />
                  <p >{recentPrompts}</p>
                </div>

                <div className="result-data flex gap-6">
                  <div>
                    <LuSparkles className="text-3xl sparkle" />
                  </div>
                  {loading ? (
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                  ) : (
                    <p className="" dangerouslySetInnerHTML={{ __html: resultData }}></p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            <form
              className="justify-between prompt-form rounded-full pl-4 bottom-0 outline-0 py-2"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="chat AMRAI......"
                className="rounded-full bg-transparent outline-0 "
              />
              <button
                onClick={onSent}
                type="submit"
                className="w-[45px] submit-btn rounded-full text-2xl mr-2"
              >
                <FaArrowUp />
              </button>
            </form>

            <p className="text-[12px] text-center mt-2">
              AMRAI may provide inaccurate information, including details about
              individuals, so it is crucial to verify its responses.
            </p>
          </div>
        </div>
      </main>

      <aside
        style={{
          width: extended ? "" : "",
          transform: extended ? "" : "",
  
          transition: "grid-template-columns 0.5s ease-in-out",
        }}
        className="recent-prompts py-7 "
      >
        <div
          style={{
            alignItems: extended ? "justify-center" : "",
          }}
          className="flex flex-col gap-4 justify-center"
        >
          <button onClick={handleExtend} className="">
            <AiOutlineMenu className="text-3xl cursor-pointer ml-3" />
          </button>

          <div>
            <button className="bg-black text-white py-2 font-black rounded-full border-black flex justify-center items-center gap-4 px-2 mx-2 ">
              <FaPlus />
              {extended ? `New chat` : null}
            </button>
          </div>

          <div className="flex flex-col gap-8 px-2">
            {extended ? (
              <div className="flex flex-col px-2 overflow-y-auto">
                <h2 className="text-sm font-extrabold">Today</h2>
                <ul className="flex flex-col gap-3">
                  {prevPrompts.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-center gap-1 rounded-md hover:bg-slate-400 border-[1px] border-black pl-2 pr-4"
                      >
                        <CiChat2 className="text-xl" />
                        <li>{item.slice(0,18)}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <div className="bottom  = border-t-[1px] border-slate-700 ">
          <div className="bottom-item recent-entry">
            <RiHome2Line className="icon" />
            {extended ? <p className="">Home</p> : null}
          </div>

          <div className="bottom-item recent-entry">
            <FiDatabase className="icon" />
            {extended ? <p className="">Input Data</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <GoGraph className="icon" />
            {extended ? <p className="">Data Visualization</p> : null}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ChatAMRAI;
