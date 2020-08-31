import React from "react";
import Link from "next/link";

const LeftBar = () => {
  return (
    <div className="attendee-left-bar">
      <div>
        <div className="text-center">
          <img src="/images/host-profile@3x.png" className="max-60" />
        </div>
        <div className="mt-36 block-img">
          <Link href="/attendee/dashboard">
            <img src="/images/Dashboard@3x.png" alt="dashboard" />
          </Link>
          <Link href="/attendee/available-events">
            <img src="/images/Calendar@3x.png" alt="calendar" />
          </Link>
          <Link href="/attendee/dashboard">
            <img src="/images/Host@3x.png" alt="host" />
          </Link>
        </div>
      </div>
      <div className="logout">
        <img src="/images/logout@3x.png" alt="logout" />
      </div>
    </div>
  );
};

export default LeftBar;
