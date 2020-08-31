import React from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import CustomChekbox from "../partials/CustomCheckbox";
import Notification from "../partials/Notification";
import LeftBar from "./leftbar";

const Dashboard = () => {
  const [hosts, setHosts] = useState([
    { img: "host-1", name: "Jim Beglin" },
    { img: "host-2", name: "Jim Beglin", online: true },
    { img: "host-3", name: "Jim Beglin", online: true },
    { img: "host-4", name: "Jim Beglin" },
    { img: "host-5", name: "Jim Beglin", online: true },
    { img: "host-6", name: "Jim Beglin", online: true },
    { img: "host-7", name: "Jim Beglin" },
    { img: "host-8", name: "Jim Beglin" },
    { img: "oval-copy-8", more: true },
  ]);

  const [newNotification, setNewNotification] = useState(true);

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

  const [Notifications, setNotifications] = useState([
    { time: "Today, 12:35pm" },
    { time: "July 24, 16:40pm" },
    { time: "April 09, 01:20am" },
    { time: "Jan 30, 09:56am" },
    { time: "Jan 19, 12:56pm" },
    { time: "Jan 19, 12:56pm" },
  ]);

  const [NotificationToggled, setNotificationToggled] = useState(false);
  const [hostEmpty, setHostEmpty] = useState(false);
  const [eventEmpty, setEventEmpty] = useState(false);

  const openNotification = () => {
    setNotificationToggled(true);
  };

  const closeNotification = () => {
    setNotificationToggled(false);
  };

  return (
    <div className="app-height d-flex align-items-start p-24 attendee-dashboard">
      <LeftBar />
      <div className="attendee-right-content">
        <div className="d-flex justify-content-between align-items-center">
          <div></div>
          <img src="/images/Logo@3x.png" className="max-155" />
          <div className="position-relative">
            <img
              src="/images/Notification@3x.png"
              className="max-32 c-pointer"
              onClick={openNotification}
            />
            {newNotification ? <div className="new-notification"></div> : null}
          </div>
        </div>
        <div className="mt-60">
          <h6 className="f-18 fw-300 mb-12">Recent Hosts you Follow</h6>
          {!hostEmpty ? (
            <div className="followed-hosts">
              {hosts.map((h, i) => {
                const { img, name, more, online } = h;
                return (
                  <div key={i}>
                    <div className="position-relative">
                      <img src={`/images/${img}@3x.png`} alt={img} />
                      {online ? <div className="host-online"></div> : null}
                      {more ? (
                        <div className="more-hosts">
                          <p className="text-teal fw-500 f-16">+13</p>
                        </div>
                      ) : null}
                    </div>
                    {name ? (
                      <p className="f-16 fw-300 mb-0 text-center">{name}</p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty-hosts-events">
              <div>
                <img src="/images/broke-ticket@3x.png" alt="" />
              </div>
              <div>
                <h4 className="f-24 fw-500 mb-1">Oops!</h4>
                <p className="f-16 fw-500 mb-24">
                  You are not following any hosts yet.
                </p>
                <button className="btn-teal max-254">Follow Hosts Now</button>
              </div>
            </div>
          )}
        </div>
        <div className="mt-60">
          <div className="d-flex justify-content-between align-items-center mb-12">
            <h6 className="f-18 fw-300 mb-0">Recent Events you joined</h6>
            <div>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <span className="f-24">
                    <i className="fas fa-bars drop-icon" tabIndex="1"></i>
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="d-item">
                    <p className="f-16 fw-500">Popular Events</p>
                    <CustomChekbox />
                  </div>
                  <div className="d-item">
                    <p className="f-16 fw-500">Hot Events</p>
                    <CustomChekbox />
                  </div>
                  <div className="d-item">
                    <p className="f-16 fw-500">Events starts today</p>
                    <CustomChekbox />
                  </div>
                  <div className="d-item mb-0">
                    <p className="f-16 fw-500">Events starts in 1 hour</p>
                    <CustomChekbox />
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          {!eventEmpty ? (
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
          ) : (
            <div className="empty-hosts-events">
              <div>
                <img src="/images/broke-ticket@3x.png" alt="" />
              </div>
              <div>
                <h4 className="f-24 fw-500 mb-1">Oops!</h4>
                <p className="f-16 fw-500 mb-24">
                  You have not joined any events yet.
                </p>
                <button className="btn-teal max-254">Join Events Now</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Notification
        NotificationToggled={NotificationToggled}
        closeNotification={closeNotification}
        Notifications={Notifications}
      />
    </div>
  );
};

export default Dashboard;
