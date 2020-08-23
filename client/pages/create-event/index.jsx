import React from "react";
import { useState } from "react";
import Forminput from "../partials/FormInput";

const CreateEvent = () => {
  const [eventFlow, setEventFlow] = useState([
    { title: "Event Generals", img: "event-general" },
    { title: "Create Tickets", img: "create-tickets" },
    { title: "Connect Social", img: "connect-social" },
    { title: "Preview Publish" },
  ]);

  const [clickedEvent, setClickedEvent] = useState("event-general");

  const [uploadedMedia, setUploadedMedia] = useState([
    "Event_123.jpg",
    "Big.banner.png",
    "guitar workshop 072219.mp4",
  ]);

  const getClickedEvent = (clicked) => {
    setClickedEvent(clicked);
  };

  return (
    <div className="app-min-height d-flex pt-3 pb-3">
      <div className="event-bar">
        <div className="pl-1">
          <span className="f-24">
            <i className="fas fa-chevron-left"></i>
          </span>
        </div>
        <div className="event-flow">
          {eventFlow.map((e, i) => {
            const { title, img } = e;
            return (
              <div>
                <ul>
                  <li
                    onClick={() => getClickedEvent(img)}
                    style={{
                      color: clickedEvent == img ? "#12CCC7" : "#FFF",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between event-title">
                      <span
                        style={{
                          color: clickedEvent == img ? "#12CCC7" : "#A2A2A2",
                        }}
                      >
                        {title}
                      </span>
                      {clickedEvent == img ? (
                        <span>
                          <i className="fas fa-spinner"></i>
                        </span>
                      ) : null}
                    </div>
                  </li>
                </ul>
                {img && clickedEvent == img ? (
                  <img src={`/images/${img}@3x.png`} alt={img} />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1">
        <div className="event-content">
          <div className="text-center">
            <img src="/images/logo-color@3x.png" alt="" className="event-img" />
            <h4 className="f-28 fw-300">Create your event</h4>
            <h6 className="f-16 fw-500 text-teal mb-24">Event Generals</h6>
          </div>
          <Forminput
            type="text"
            placeholder="Give your event a short distinctive title"
            textInfo="* Maximum 50 characters"
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
          <div class="form-group mb-0 mt-36">
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
            <button className="app-btn gray-btn max-254 mt-0 text-gray mr-auto ml-auto">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
