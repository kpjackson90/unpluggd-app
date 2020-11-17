import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const CreateEventsTab = () => {
  const [eventFlow, setEventFlow] = useState([
    {
      title: "Event Generals",
      path: "/create-event/event-generals",
      img: "event-general",
    },
    {
      title: "Create Tickets",
      path: "/create-event/create-tickets",
      img: "create-tickets",
    },
    {
      title: "Connect Social",
      path: "/create-event/connect-social",
      img: "connect-social",
    },
    { title: "Preview Publish", path: "/create-event/preview-publish" },
  ]);

  const [completed, setCompleted] = useState(true);

  const router = useRouter();

  return (
    <div className="event-bar">
      <div className="pl-1">
        <span className="f-24">
          <i className="fas fa-chevron-left"></i>
        </span>
      </div>
      <div className="event-flow">
        {eventFlow.map((e, i) => {
          const { title, img, path } = e;
          return (
            <div key={i}>
              <ul>
                <li
                  style={{
                    color: router.pathname == path ? "#12CCC7" : "#FFF",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between event-title">
                    <Link href={path}>
                      <span
                        style={{
                          color:
                            router.pathname == path ? "#12CCC7" : "#A2A2A2",
                        }}
                        className="c-pointer"
                      >
                        {title}
                      </span>
                    </Link>
                    {completed ? (
                      <span className="f-18">
                        <i className="fas fa-check-circle text-teal"></i>
                      </span>
                    ) : completed == false && router.pathname == path ? (
                      <span>
                        <i className="fas fa-spinner"></i>
                      </span>
                    ) : null}
                  </div>
                </li>
              </ul>
              {img && router.pathname == path ? (
                <img src={`/images/${img}@3x.png`} alt={img} />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateEventsTab;
