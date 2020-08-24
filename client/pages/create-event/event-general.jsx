import React from "react";
import { useState } from "react";
import Forminput from "../partials/FormInput";

const EventGeneral = ({ clickedEvent }) => {
  const [uploadedMedia, setUploadedMedia] = useState([
    "Event_123.jpg",
    "Big.banner.png",
    "guitar workshop 072219.mp4",
  ]);

  const [filled, setFilled] = useState(true);

  return (
    <React.Fragment>
      {clickedEvent == "event-general" ? (
        <div>
          <Forminput
            type="text"
            placeholder="Give your event a short distinctive title"
            textInfo="* Setting up Event Size to limit the attendee number"
            label="Event Title"
          />
          <div className="row mt-36">
            <div className="col-6 pl-0">
              <Forminput
                type="text"
                placeholder="Event Category"
                label="Event Categories (Up to 3)"
              />
            </div>
          </div>
          <div className="row mt-36">
            <div className="col-12 pl-0 pr-0">
              <Forminput
                type="text"
                placeholder="Event Date"
                label="Event Scheduled Time"
              />
            </div>
            <div className="col-md-6 pl-0 pr-2">
              <Forminput type="text" placeholder="Start Time" />
            </div>
            <div className="col-md-6 pr-0 pl-2">
              <Forminput type="text" placeholder="End Time" />
            </div>
          </div>
          <div className="form-group mb-0 mt-36">
            <label className="f-18 fw-300 mb-12">Event Description</label>
            <textarea
              placeholder="Enter a memorable event description"
              className="app-input textarea mb-0"
              rows="8"
            ></textarea>
            <small
              className="form-text fw-400 f-14 text-left pt-1"
              style={{
                color: "#A2A2A2",
              }}
            >
              * Maximum 500 characters
            </small>
          </div>
          <div className="mt-36">
            <label className="f-18 fw-300 mb-12">Event Media</label>
            <div
              className="upload event-media w-100 text-center d-flex align-items-end justify-content-center mb-20"
              style={{ backgroundImage: `url('/images/Media@3x.png')` }}
            >
              <div>
                <p className="f-16 fw-300 mb-1">
                  Drag and drop / click to upload your event media
                </p>
                <p className="text-gray f-14 fw-300">
                  (Only .JPG / .PNG / .mp4 accepted)
                </p>
              </div>
            </div>
            {uploadedMedia.map((u, i) => {
              return (
                <div className="uploaded-media" key={i}>
                  <div className="d-flex align-items-center">
                    <div className="event-small-img">
                      <span className="f-18">
                        <i className="fas fa-images text-dark"></i>
                      </span>
                    </div>
                    <p className="f-16 text-teal fw-500 mb-0">{u}</p>
                  </div>
                  <span className="f-24">
                    <i className="fas fa-times"></i>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-60 mb-60">
            <button
              className="app-btn gray-btn max-254 mt-0 mr-auto ml-auto"
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
      ) : null}
    </React.Fragment>
  );
};

export default EventGeneral;
