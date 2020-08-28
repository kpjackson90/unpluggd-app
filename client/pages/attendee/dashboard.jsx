import React from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import CustomChekbox from "../partials/CustomCheckbox";

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
    },
    {
      title: "Happiness Meditation with Chocolate ",
      img: "event-2",
      time: "May 5 - 5:00 PM",
      type: "popular",
    },
    {
      title: "Cello Meditation Concert",
      img: "event-3",
      time: "May 4 - 11:00 AM",
      type: "limited",
    },
    {
      title: "Cello Meditation Concert",
      img: "event-4",
      time: "May 4 - 11:00 AM",
      type: "latest",
    },
    {
      title: "30 Minute Guitar Workshop",
      img: "event-1",
      time: "May 4 - 11:00 AM",
      type: "latest",
    },
    {
      title: "Happiness Meditation with Chocolate ",
      img: "event-2",
      time: "May 5 - 5:00 PM",
      type: "popular",
    },
    {
      title: "Cello Meditation Concert",
      img: "event-3",
      time: "May 4 - 11:00 AM",
      type: "limited",
    },
    {
      title: "Cello Meditation Concert",
      img: "event-4",
      time: "May 4 - 11:00 AM",
      type: "latest",
    },
  ]);

  return (
    <div className="app-height d-flex align-items-start p-24 attendee-dashboard">
      <div className="attendee-left-bar">
        <div>
          <div className="text-center">
            <img src="/images/host-profile@3x.png" className="max-60" />
          </div>
          <div className="mt-36 block-img">
            <img src="/images/Dashboard@3x.png" alt="dashboard" />
            <img src="/images/Calendar@3x.png" alt="calendar" />
            <img src="/images/Host@3x.png" alt="host" />
          </div>
        </div>
        <div className="logout">
          <img src="/images/logout@3x.png" alt="logout" />
        </div>
      </div>
      <div className="attendee-right-content">
        <div className="d-flex justify-content-between align-items-center">
          <div></div>
          <img src="/images/Logo@3x.png" className="max-155" />
          <div className="position-relative">
            <img src="/images/Notification@3x.png" className="max-32" />
            {newNotification ? <div className="new-notification"></div> : null}
          </div>
        </div>
        <div className="mt-60">
          <h6 className="f-18 fw-300 mb-12">Recent Hosts you Follow</h6>
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
        </div>
        <div className="mt-60">
          <div className="d-flex justify-content-between align-items-center mb-16">
            <h6 className="f-18 fw-300">Recent Events you joined</h6>
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
          <div className="events-list flex-1">
            {events.map((e, i) => {
              const { title, img, time, type } = e;
              return (
                <div key={i} className="mb-36">
                  <div className="position-relative">
                    <img src={`/images/${img}@3x.png`} alt={img} />
                    <button className={`event-tag mb-3 img-button ${type}`}>
                      {type}
                    </button>
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
  );
};

export default Dashboard;
