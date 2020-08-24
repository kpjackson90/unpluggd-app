import React from "react";
import { useState } from "react";
import EventGeneral from "./event-general";
import CreateTickets from "./create-tickets";
import ConnectSocial from "./connect-social";
import PreviewPublish from "./preview-publish";

const CreateEvent = () => {
  const [eventFlow, setEventFlow] = useState([
    { title: "Event Generals", page: "event-general", img: "event-general" },
    { title: "Create Tickets", page: "create-tickets", img: "create-tickets" },
    { title: "Connect Social", page: "connect-social", img: "connect-social" },
    { title: "Preview Publish", page: "preview-publish" },
  ]);

  const [clickedEvent, setClickedEvent] = useState("event-general");
  const [pageTitle, setPageTitle] = useState("Event Generals");
  const [completed, setCompleted] = useState(true);

  const getClickedEvent = (clicked, currentPageTitle) => {
    setClickedEvent(clicked);
    setPageTitle(currentPageTitle);
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
            const { title, img, page } = e;
            return (
              <div key={i}>
                <ul>
                  <li
                    onClick={() => getClickedEvent(page, title)}
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
                      {completed ? (
                        <span className="f-18">
                          <i className="fas fa-check-circle text-teal"></i>
                        </span>
                      ) : completed == false && clickedEvent == img ? (
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
        <EventGeneral clickedEvent={clickedEvent} pageTitle={pageTitle} />
        <CreateTickets clickedEvent={clickedEvent} pageTitle={pageTitle} />
        <ConnectSocial clickedEvent={clickedEvent} pageTitle={pageTitle} />
        <PreviewPublish clickedEvent={clickedEvent} pageTitle={pageTitle} />
      </div>
    </div>
  );
};

export default CreateEvent;
