import React, { useState } from "react";
import Forminput from "../partials/FormInput";

const Index = () => {
  const [email, setEmail] = useState("");

  const bg = {
    backgroundImage: `url('/images/landing-background@3x.png')`,
  };

  return (
    <div className="landing-wrapper" style={bg}>
      <div className="landing-top">
        <div>
          <img src="/images/Logo@3x.png" alt="" className="max-180 mb-2" />
          <p className="fw-300 f-60 text-teal theGwathmey mb-36 rotate-text">
            Your Virtual Arena
          </p>
          <p className="fw-200 f-24 mb-80">
            Sign up to get exclusive news <br /> on our launch
          </p>
          <div className="max-260 text-center">
            <Forminput
              placeholder="Email Address"
              value={email}
              setValue={setEmail}
            />
            <button
              className={`btn-teal max-120 mt-3 mb-24 ${
                !email ? "bg-gray" : "bg-teal"
              }`}
              disabled={!email ? true : false}
              //onClick={() => handleSave()}
            >
              Sign Up
            </button>
          </div>
          <p className="fw-300 f-60 text-teal theGwathmey mb-36 mt-60 rotate-text">
            What is Unpluggd?
          </p>
          <p className="f-20 fw-400 mb-0">
            Unpluggd is a virtual event platform <br /> created to give you the
            arena experience <br /> that you love, within your living room
          </p>
        </div>
        <div>
          <img
            src="/images/landing-img1@3x.png"
            alt=""
            className="max-180 mb-2"
          />
          <img
            src="/images/landing-img2@3x.png"
            alt=""
            className="max-180 mb-2"
          />
        </div>
      </div>
      <div className="landing-bottom">
        <div>
          <div className="text-center">
            <img src="/images/landing-bottom1@3x.png" alt="" />
          </div>
          <div>
            <h4 className="f-18 fw-600 mb-12">Virtual Seats</h4>
            <p className="f-14 fw-200 mb-0">
              Buy tickets with friends and virtually enjoy the event together
            </p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <img src="/images/landing-bottom2@3x.png" alt="" />
          </div>
          <div>
            <h4 className="f-18 fw-600 mb-12">Personalized Chatroom</h4>
            <p className="f-14 fw-200 mb-0">
              Chat with friends or enjoy the noise of arena with custom chat
              experiences that reflects a live arena
            </p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <img src="/images/landing-bottom3@3x.png" alt="" />
          </div>
          <div>
            <h4 className="f-18 fw-600 mb-12">Event Creator Tools</h4>
            <p className="f-14 fw-200 mb-0">
              Tools to help creators, design, market, and execute their events
            </p>
          </div>
        </div>
      </div>
      <p className="f-12 fw-400 mt-36 mb-36 text-center">
        All Rights Reserved ® Unpluggd. 2021
      </p>
    </div>
  );
};

export default Index;
