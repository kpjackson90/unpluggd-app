import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const HostPage = () => {
  const [events, setEvents] = useState([
    {
      title: "30 Minute Guitar Workshop",
      img: "event-1",
      time: "May 4 - 11:00 AM",
      type: "latest",
      participants: 22,
      participantsImg: ["Host-1", "Host-2", "Host-3"],
    },
    {
      title: "Happiness Meditation with Chocolate ",
      img: "event-2",
      time: "May 5 - 5:00 PM",
      type: "popular",
      participants: 22,
      participantsImg: ["Host-1", "Host-2", "Host-3"],
    },
    {
      title: "Cello Meditation Concert",
      img: "event-3",
      time: "May 4 - 11:00 AM",
      type: "limited",
      participants: 22,
      participantsImg: ["Host-1", "Host-2", "Host-3"],
    },
    {
      title: "Cello Meditation Concert",
      img: "event-4",
      time: "May 4 - 11:00 AM",
      type: "latest",
      participants: 0,
    },
    {
      title: "30 Minute Guitar Workshop",
      img: "event-1",
      time: "May 4 - 11:00 AM",
      type: "latest",
      participants: 22,
      participantsImg: ["Host-1", "Host-2", "Host-3"],
    },
    {
      title: "Happiness Meditation with Chocolate ",
      img: "event-2",
      time: "May 5 - 5:00 PM",
      type: "popular",
      participants: 22,
      participantsImg: ["Host-1", "Host-2", "Host-3"],
    },
    {
      title: "Cello Meditation Concert",
      img: "event-3",
      time: "May 4 - 11:00 AM",
      type: "limited",
      participants: 22,
      participantsImg: ["Host-1", "Host-2", "Host-3"],
    },
    {
      title: "Cello Meditation Concert",
      img: "event-4",
      time: "May 4 - 11:00 AM",
      type: "latest",
      participants: 0,
    },
  ]);

  const router = useRouter();

  return (
    <div className="app-min-height">
      <div className="app-width d-flex align-items-start mt-24">
        <div className="back-button">
          <div className="f-24 mt-36">
            <i
              className="fas fa-chevron-left c-pointer"
              onClick={() => router.back()}
            ></i>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/images/host-page-banner@3x.png"
            alt="host-page"
            className="host-page-banner"
          />
          <div className="d-flex align-items-start justify-content-between mt-36">
            <div>
              <img
                src="/images/host-profile@3x.png"
                alt=""
                className="max-80 mr-4"
              />
            </div>
            <div>
              <p className="fw-300 f-80 text-teal host-name">
                Scarlette Robinson
              </p>
            </div>
            <button className="btn-transparent gray">Unfollow</button>
          </div>
          <div className="mt-244 d-flex justify-content-center">
            <div>
              <p className="f-14 fw-300 text-gray mb-2">About the host</p>
              <div className="d-flex">
                <span className="f-24 mr-3">
                  <i className="fas fa-quote-left"></i>
                </span>
                <p className="f-14 fw-300">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  <br />
                  Aenean commodo ligula eget dolor. Aenean massa. Donec quam
                  <br />
                  felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-36">
            <h4 className="f-24 fw-300 mb-24">Host Events</h4>
            <div className="events-list flex-1">
              {events.map((e, i) => {
                const {
                  title,
                  img,
                  time,
                  type,
                  participantsImg,
                  participants,
                } = e;
                return (
                  <div key={i} className="mb-36">
                    <div className="position-relative">
                      <img src={`/images/${img}@3x.png`} alt={img} />
                      <button className={`event-tag mb-3 img-button ${type}`}>
                        {type}
                      </button>
                      <div className="img-bottom-content">
                        {participantsImg ? (
                          <div className="participantsImg">
                            {participantsImg.map((p, index) => {
                              return (
                                <img
                                  src={`/images/${p}@3x.png`}
                                  alt={img}
                                  className={`br-${type}`}
                                  key={index}
                                />
                              );
                            })}
                          </div>
                        ) : null}
                        {participants > 0 ? (
                          <p className="f-14 fw-300 mb-0">
                            +{participants} participants
                          </p>
                        ) : (
                          <p className="f-14 fw-300 mb-0">
                            Be the first to join!
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="f-18 mt-3 mb-2 fw-300">{title}</p>
                    <p className="text-teal f-14">{time}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostPage;
