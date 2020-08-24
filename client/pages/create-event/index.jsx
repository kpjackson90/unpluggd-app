import React from "react";
import { useState } from "react";
import EventGeneral from "./event-general";
import CreateTickets from "./create-tickets";
import ConnectSocial from "./connect-social";

const CreateEvent = () => {
  const [eventFlow, setEventFlow] = useState([
    { title: "Event Generals", img: "event-general" },
    { title: "Create Tickets", img: "create-tickets" },
    { title: "Connect Social", img: "connect-social" },
    { title: "Preview Publish" },
  ]);

  const [clickedEvent, setClickedEvent] = useState("event-general");

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
              <div key={i}>
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
          <EventGeneral clickedEvent={clickedEvent} />
          <CreateTickets clickedEvent={clickedEvent} />
          <ConnectSocial clickedEvent={clickedEvent} />
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
