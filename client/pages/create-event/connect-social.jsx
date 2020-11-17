import React from "react";
import { useState } from "react";
import Forminput from "../../partials/FormInput";
import CreateEventsTab from "../../partials/create-event-tab";

const ConnectSocial = () => {
  const [filled, setFilled] = useState(false);

  return (
    <div className="app-min-height d-flex pt-3 pb-3">
      <CreateEventsTab />
      <div className="flex-1">
        <div className="event-content">
          <div className="text-center">
            <img src="/images/logo-color@3x.png" alt="" className="event-img" />
            <h4 className="f-28 fw-300">Create your event</h4>
            <h6 className="f-16 fw-500 text-teal mb-24">Connect Social</h6>
          </div>
          <div className="mt-36">
            <label className="f-18 fw-300 mb-12">
              Event URL
              <span className="text-gray f-14 fw-300 ml-2">* Optional</span>
            </label>
            <Forminput type="text" placeholder="Custom URL for event" />
          </div>
          <div className="mt-36">
            <label className="f-18 fw-300 mb-12">
              Event Social Media
              <span className="text-gray f-14 fw-300 ml-2">* Optional</span>
            </label>
            <div className="w-100 screen3-media">
              <div className="w-100 d-flex align-items-center">
                <span>
                  <i className="fab fa-facebook-f text-teal"></i>
                </span>
                <div className="flex-1">
                  <Forminput type="text" placeholder="Facebook URL" />
                </div>
              </div>
              <div className="w-100 d-flex align-items-center">
                <span>
                  <i className="fab fa-twitter text-teal"></i>
                </span>
                <div className="flex-1">
                  <Forminput type="text" placeholder="Twitter URL" />
                </div>
              </div>
              <div className="w-100 d-flex align-items-center">
                <span>
                  <i className="fab fa-instagram text-teal"></i>
                </span>
                <div className="flex-1">
                  <Forminput type="text" placeholder="Instagram Name" />
                </div>
              </div>
              <div className="w-100 d-flex align-items-center">
                <span>
                  <i className="fab fa-youtube text-teal"></i>
                </span>
                <div className="flex-1">
                  <Forminput type="text" placeholder="Youtube URL" />
                </div>
              </div>
              <div className="w-100 d-flex align-items-center">
                <span>
                  <i className="fab fa-twitch text-teal"></i>
                </span>
                <div className="flex-1">
                  <Forminput type="text" placeholder="Twitch Name" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-60 mb-60">
            <div className="text-center mt-2 mb-4 hp-actions">
              <button className="btn-transparent app-btn text-teal">
                Back
              </button>
              <button
                className="app-btn gray-btn mt-0"
                style={{
                  background: filled
                    ? "radial-gradient(circle, #12CCC7 0%, #08B09A 100%)"
                    : "rgba(151, 151, 151, 0.2)",
                  color: filled ? "#FFF" : "#9A9A9A",
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSocial;
