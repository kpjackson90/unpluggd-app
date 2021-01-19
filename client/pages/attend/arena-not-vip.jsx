import Link from "next/link";
import React from "react";
import { useState } from "react";
import FormInput from "../../partials/FormInput";

const ArenaNotVip = () => {
  const [chatType, setchatType] = useState(["arena", "private"]);

  const [chatSelected, setChatSelected] = useState("arena");

  const handleChatSelected = (type) => {
    setChatSelected(type);
  };

  const [chats, setChats] = useState([
    {
      img: "host-profile",
      name: "scarlette.robinson",
      text: "Wohoooo! My God! This Guitar guy ROCKS. Put the music ON! ✨",
    },
    { img: "host-profile", name: "Nikit_3366", text: "I love it so much!" },
    {
      img: "host-profile",
      name: "Daniel.J",
      text: "OMG!! Keep Rocking!!!! You DA BEST! 😍😍",
    },
    {
      img: "host-profile",
      name: "Daniel.J",
      text: "So far the best live guitar performance EVER!",
    },
    {
      img: "host-profile",
      name: "boss_lady728",
      text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 This is ON FIRREEEE!",
    },
    { img: "host-profile", name: "stan.timber", text: "Always Good Stuff!" },
    {
      img: "host-profile",
      name: "scarlette.robinson",
      text: "Wohoooo! My God! This Guitar guy ROCKS. Put the music ON! ✨",
    },
    { img: "host-profile", name: "Nikit_3366", text: "I love it so much!" },
    {
      img: "host-profile",
      name: "Daniel.J",
      text: "OMG!! Keep Rocking!!!! You DA BEST! 😍😍",
    },
    {
      img: "host-profile",
      name: "Daniel.J",
      text: "So far the best live guitar performance EVER!",
    },
    {
      img: "host-profile",
      name: "boss_lady728",
      text: "🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 This is ON FIRREEEE!",
    },
  ]);

  const [camera, setCamera] = useState(["left", "center", "right"]);

  const [selectedCam, setSelectedCam] = useState("center");

  const handleCamSelection = (cam) => {
    setSelectedCam(cam);
  };

  const [toggleScreen, setToggleScreen] = useState(false);
  const [chatToggle, setChatToggle] = useState(false);

  const handleScreenToggle = () => {
    setToggleScreen(!toggleScreen);
  };

  const handleChatToggle = () => {
    setChatToggle(!chatToggle);
  };

  const [screenUsers, setScreenUsers] = useState([
    {
      img1: "host-1",
      img2: "host-2",
      img3: "host-3",
      percentage: 100,
      bgColor: "teal",
    },
    {
      img1: "host-4",
      img2: "host-5",
      img3: "host-6",
      percentage: 96,
      bgColor: "teal",
    },
    {
      img1: "host-7",
      img2: "host-8",
      img3: "host-1",
      percentage: 75,
      bgColor: "deepTeal",
    },
    {
      img1: "host-4",
      img2: "host-2",
      img3: "host-6",
      percentage: 53,
      bgColor: "deepTeal",
    },
    {
      img1: "host-8",
      img2: "host-4",
      img3: "host-3",
      percentage: 35,
      bgColor: "pink",
    },
    {
      img1: "host-6",
      img2: "host-5",
      img3: "",
      percentage: 20,
      bgColor: "pink",
    },
  ]);

  const [chatRoomUsers, setChatRoomUsers] = useState([
    "host-1",
    "host-2",
    "host-3",
    "host-4",
    "host-5",
    "host-6",
    "host-7",
  ]);

  return (
    <div className="app-height">
      <div className="video-chat">
        <img src="/images/Video@3x.png" alt="" />
      </div>
      <div className="arena-content">
        <div>
          <div>
            <div className="screen-toggler" onClick={handleScreenToggle}>
              <span>Screen</span>
              {!toggleScreen ? (
                <span className="ml-3">
                  <i className="fas fa-minus"></i>
                </span>
              ) : (
                <span className="ml-3 d-flex flex-column align-items-center line-5">
                  <i class="fas fa-angle-up"></i>
                  <i class="fas fa-angle-down"></i>
                </span>
              )}
            </div>
            <div
              className="text-center mt-16 screen-toggled"
              style={{ opacity: !toggleScreen ? 1 : 0 }}
            >
              {chatSelected !== "private" ? (
                <img
                  src="/images/arena-not-vip@3x.png"
                  className="max-87"
                  alt=""
                />
              ) : (
                <div className="screen-imgs">
                  {screenUsers.map((s, i) => {
                    const { img1, img2, img3, percentage, bgColor } = s;
                    return (
                      <div key={i}>
                        <div className="img-stack">
                          {img1 !== "" && (
                            <img src={`/images/${img1}@3x.png`} alt="image-1" />
                          )}
                          {img2 !== "" && (
                            <img src={`/images/${img2}@3x.png`} alt="image-2" />
                          )}
                          {img3 !== "" && (
                            <img src={`/images/${img3}@3x.png`} alt="image-3" />
                          )}
                        </div>
                        <button className={`bg-${bgColor}`}>
                          {percentage}%
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <Link href="/attend/exit-event">
            <button className="leave-event">Leave Event</button>
          </Link>
        </div>
        <div className="d-flex flex-column w-320 justify-content-end">
          <div
            className="chatroom"
            style={{ height: !chatToggle ? "96vh" : "42px" }}
          >
            <div
              className="d-flex align-items-center justify-content-between c-pointer"
              onClick={handleChatToggle}
            >
              <h4 className="f-14 fw-500 mb-0">Collapse Chatroom</h4>
              {!chatToggle ? (
                <span className="">
                  <i className="fas fa-minus"></i>
                </span>
              ) : (
                <span className="d-flex flex-column align-items-center line-5">
                  <i class="fas fa-angle-up"></i>
                  <i class="fas fa-angle-down"></i>
                </span>
              )}
            </div>
            <div
              className={`chat-class not-vip mt-12 ${
                chatSelected === "private" && "bg-pink"
              }`}
            >
              {chatType.map((c, i) => {
                return (
                  <p
                    className={`f-16 mb-0 text-center text-capitalize c-pointer ${
                      chatSelected === c && c === "private"
                        ? "selected text-pink"
                        : chatSelected === c
                        ? "selected"
                        : null
                    }`}
                    key={i}
                    onClick={() => handleChatSelected(c)}
                  >
                    {c}
                  </p>
                );
              })}
            </div>
            {chatSelected === "private" && (
              <div className="d-flex align-items-center mt-12 mb-1">
                <div className="img-stack chatroom-users">
                  {chatRoomUsers.map((c, i) => {
                    return <img src={`/images/${c}@3x.png`} alt={c} />;
                  })}
                </div>
                <p className="f-14 fw-500 mb-0 text-white">+ You</p>
              </div>
            )}
            <div className="chats mt-12">
              {chats.map((c, i) => {
                const { img, name, text } = c;
                return (
                  <div className="chat" key={i}>
                    <div className="chat-img">
                      <img src={`/images/${img}@3x.png`} alt="chat image" />
                    </div>
                    <div>
                      <h4 className="f-14 fw-600 mb-1">{name}</h4>
                      <p className="f-16 fw-300 mb-0">{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="chat-input-box"
              style={{ display: chatToggle && "none" }}
            >
              <FormInput
                customClass="chat-input"
                placeholder="Enter your comments"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArenaNotVip;
