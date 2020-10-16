import React from "react";

const ArenaNotVip = () => {
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
                <i class="fas fa-minus"></i>
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
        <div></div>
      </div>
    </div>
  );
};

export default ArenaNotVip;
