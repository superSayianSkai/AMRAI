import "../../styles/chatAMRAI.css";
import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Skai from "../../assets/images/skai.jpg";
import { FaPlus } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { RiHome2Line } from "react-icons/ri";
import { CiChat2 } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { AuthState } from "../../context/Context";
// import ThemeMode from "../../components/Global/ThemeMode";
import { LuSparkles } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ChatAMRAI = () => {
  const [extended, setExtended] = useState(false);
  const [mExtended, setMextended] = useState(false);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [HumanResponse, setHumanResponse] = useState([]);
  const [history, setHistory] = useState(null);
  const { token } = AuthState();
  const { user } = AuthState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/signIn");
    }
  }, [token,navigate]);

  const handleMextend = () => {
    setMextended((prev) => !prev);
  };

  const handleExtend = () => {
    setMextended((prev) => !prev);
  };

  const getChatHistory = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        "https://amr-ai-api.onrender.com/api/v1/message/chats",
        config
      );
      console.log(response);
      setHistory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChatHistory();
  }, []);

  const loadChat = async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        `https://amr-ai-api.onrender.com/api/v1/message/loadChat/${id}`,
        config
      );
      console.log(response);
      setHumanResponse(response.data.data.messages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setQuestion("");
    console.log(token);

    setLoading(true);
    console.log(question);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    e.preventDefault();
    try {
      if (HumanResponse.chat) {
        const response = await axios.post(
          "https://amr-ai-api.onrender.com/api/v1/message/chat",
          {
            question,
            chatId: HumanResponse.chat,
          },
          config
        );
        HumanResponse.push(response.data.data);
        console.log(response.data.data);
      } else {
        const response = await axios.post(
          "https://amr-ai-api.onrender.com/api/v1/message/chat",
          {
            question,
          },
          config
        );
        console.log(response);
        HumanResponse.push(response.data.data);
        // setHumanResponse(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        // gridTemplateColumns: extended ? "" : "94% 100px",
        transition: "all",
        transitionTimingFunction: "ease-in",
      }}
      className="chat-amrai-container overflow-hidden"
    >
      <main className="main-content">
        <header className="flex justify-between items-center pt-2 px-6 ">
          <div className="logo text-gray-400">AMRAI</div>
          <div className="text-black flex items-center justify-center gap-6">
            <Link to="/">
              <p className="font-bold">Home</p>
            </Link>
            <button onClick={handleMextend} className="burger">
              <AiOutlineMenu className="text-3xl cursor-pointer ml-3" />
            </button>
          </div>
        </header>

        <div className="form-and-response justify-between mt-4 h-[90vh]">
          <div className="response scrollbar-thin scrollbar-webkit overflow-y-auto h-[80vh]">
            {HumanResponse.length == 0 ? (
              <div>
                <span className="text-[60px] font-bold greeting">
                  Hello {user?.fullName},
                </span>
                <p className="text-4xl text-gray-400">
                  how can I help you today?
                </p>
              </div>
            ) : (
              HumanResponse?.map((item) => (
                <div
                  key={item._id}
                  className="result flex flex-col gap-10 mb-4"
                >
                  <div className="flex items-center gap-6">
                    <img
                      className="w-[30px] rounded-full cursor-pointer"
                      src={Skai}
                      alt=""
                    />
                    <p>{item.question}</p>
                  </div>

                  <div className="result-data flex gap-6">
                    <div>
                      <LuSparkles className="text-3xl sparkle" />
                    </div>
                    <p
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: item.response,
                      }}
                    ></p>
                  </div>
                </div>
              ))
            )}
            {loading ? (
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="mb-[10px]">
            <form
              className="justify-between items-center prompt-form rounded-full pl-4 bottom-0 outline-0 h-[50px] "
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="chat AMRAI......"
                className="rounded-full bg-transparent outline-0"
              />
              <button
                type="submit"
                className="w-[40px] h-[40px] flex justify-center items-center submit-btn rounded-full mr-4"
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
          gridTemplateColumns: extended ? "20px" : "",
          transition: "width position 0.5s ease-in-out",
          position: mExtended ? "absolute" : "",
          width: mExtended ? "80%" : "200px",
          height: mExtended ? "100vh" : "",
          right: mExtended ? 0 : "",
          top: mExtended ? 0 : "",
        }}
        className="recent-prompts py-7 "
      >
        <div
          style={{
            alignItems: extended ? "justify-center" : "",
          }}
          className="flex flex-col gap-4 justify-center"
        >
          {mExtended ? (
            <button onClick={handleExtend} className="">
              <AiOutlineMenu className="text-3xl cursor-pointer ml-3" />
            </button>
          ) : (
            ""
          )}

          <div>
            <button
              className="bg-black text-white py-2 font-black rounded-full border-black flex justify-center items-center gap-4 px-2 mx-2 "
              onClick={() => setHumanResponse([])}
            >
              <FaPlus />
              New chat
            </button>
          </div>

          <div className="flex flex-col gap-8 px-2">
            <div className="flex flex-col px-2 overflow-y-auto">
              <h2 className="text-sm font-extrabold text-center">History</h2>
              <ul className="flex flex-col gap-3">
                {history?.map((item) => {
                  return (
                    <div
                      onClick={() => loadChat(item._id)}
                      key={item._id}
                      className="flex items-center justify-center gap-1 rounded-md hover:bg-slate-400 border-[1px] border-black pl-2 pr-4"
                    >
                      <CiChat2 className="text-xl" />
                      <li>{item.chatName.slice(0, 18)}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ChatAMRAI;
