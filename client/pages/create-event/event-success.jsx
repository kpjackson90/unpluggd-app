import React from "react";
import { useState } from "react";

const EventSuccess = (props) => {
  const [type, setType] = useState("host");

  return (
    <div
      className="app-height congrats-screen event-success d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url('/images/congratz-bg@3x.png')` }}
    >
      <div className="text-center">
        <img
          src="/images/logo@3x.png"
          alt=""
          className="mb-24 event-success-logo"
        />
        <h4 className="f-28 fw-400 mb-12">Congratulations!</h4>
        <p className="f-18 mb-36 fw-300">
          You have successfully created your event!
        </p>
        <div className="event-image mb-36 position-relative">
          <img src="/images/event-image@3x.png" className="mb-12" />
          <button className="btn-small event-tag latest f-14 mb-3 img-button">
            Latest
          </button>
          <div className="text-left">
            <p className="f-18 mt-0 mb-2 fw-300">Guitar Meditation Session</p>
            <p className="text-teal f-14">Apr 30 - 11:00 AM</p>
          </div>
        </div>
        <button className="btn-teal boxShadow">Return to Dashboard</button>
      </div>
    </div>
  );
};

export default EventSuccess;
