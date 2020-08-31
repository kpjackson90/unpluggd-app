import React from "react";

const LeftBar = () => {
  return (
    <div className="attendee-left-bar">
      <div>
        <div className="text-center">
          <img src="/images/host-profile@3x.png" className="max-60" />
        </div>
        <div className="mt-36 block-img">
          <img src="/images/Dashboard@3x.png" alt="dashboard" />
          <img src="/images/Calendar@3x.png" alt="calendar" />
          <img src="/images/Host@3x.png" alt="host" />
        </div>
      </div>
      <div className="logout">
        <img src="/images/logout@3x.png" alt="logout" />
      </div>
    </div>
  );
};

export default LeftBar;
