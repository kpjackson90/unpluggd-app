import React from "react";

const Congrats = () => {
  return (
    <div
      className="app-height congrats-screen d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url('/images/congratz-bg@3x.png')` }}
    >
      <div className="text-center">
        <img src="/images/logo@3x.png" alt="" className="mb-80" />
        <h4 className="f-28 fw-400 mb-12">Congratulations!</h4>
        <p className="f-18 mb-80">
          You have successfully signed up as <br /> an attendee!
        </p>
        <button className="btn-teal boxShadow">Enter Dashboard</button>
      </div>
    </div>
  );
};

export default Congrats;
