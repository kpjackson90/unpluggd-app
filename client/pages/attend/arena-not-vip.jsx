import React from "react";
import { useState } from "react";

const ArenaNotVip = () => {
  const [chatType, setchatType] = useState(["arena", "private", "vip"]);

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

  return (
    <div className="app-height">
      <div className="video-chat">
        <img src="/images/Video@3x.png" alt="" />
      </div>
      <div className="arena-content">
        <div>
          <div>
            <button className="screen-toggle">
              Screen
              <span className="ml-3">
                <i className="fas fa-minus"></i>
              </span>
            </button>
            <div className="text-center mt-16">
              <img
                src="/images/arena-not-vip@3x.png"
                className="max-87"
                alt=""
              />
            </div>
          </div>
          <button className="leave-event">Leave Event</button>
        </div>
        <div className="chatroom">
          <div className="d-flex align-items-center justify-content-between mb-12">
            <h4 className="f-14 fw-500 mb-0">Collapse Chatroom</h4>
            <span className="">
              <i className="fas fa-minus"></i>
            </span>
          </div>
          <div className="chat-class">
            {chatType.map((c, i) => {
              return (
                <p
                  className={`f-16 mb-0 text-center text-capitalize c-pointer ${
                    chatSelected === c ? "selected" : null
                  }`}
                  key={i}
                  onClick={() => handleChatSelected(c)}
                >
                  {c}
                </p>
              );
            })}
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default ArenaNotVip;
