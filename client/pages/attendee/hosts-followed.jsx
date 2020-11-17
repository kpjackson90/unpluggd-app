import React from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import CustomChekbox from "../../partials/CustomCheckbox";
import Notification from "../../partials/Notification";
import LeftBar from "../../partials/attendee-leftbar";
import EventsTab from "../../partials/attendee-hosts-tab";

const HostsFollowed = () => {
  const [hosts, setHosts] = useState([
    { img: "host-1", name: "Jim Beglin", online: false, icons: ["icon-art", "icon-music", "icon-food"], events: 32, followers: 368, following: true },
    { img: "host-2", name: "Jim Beglin", online: true, icons: ["icon-art", "icon-music", "icon-food"], events: 32, followers: 368, following: true },
    { img: "host-3", name: "Jim Beglin", online: true, icons: ["icon-art", "icon-music", "icon-food"], events: 32, followers: 368, following: true },
    { img: "host-4", name: "Jim Beglin", online: false, icons: ["icon-art", "icon-music", "icon-food"], events: 32, followers: 368, following: true },
    { img: "host-5", name: "Jim Beglin", online: true, icons: ["icon-art", "icon-music", "icon-food"], events: 32, followers: 368, following: true },
    { img: "host-6", name: "Jim Beglin", online: true, icons: ["icon-art", "icon-music", "icon-food"], events: 32, followers: 368, following: true },
    { img: "host-7", name: "Jim Beglin", online: false, icons: ["icon-art", "icon-music", "icon-food"], events: 32, followers: 368, following: true },
    { img: "host-8", name: "Jim Beglin", online: false, icons: ["icon-art", "icon-music", "icon-food"], events: 32, followers: 368, following: true },
    { img: "host-1", name: "Jim Beglin", online: false, icons: ["icon-art", "icon-music", "icon-food"], events: 32, followers: 368, following: true },
    { img: "host-2", name: "Jim Beglin", online: true, icons: ["icon-art", "icon-music", "icon-food"], events: 32, followers: 368, following: true },
  ]);

  return (
    <div className="app-height d-flex align-items-start p-24 attendee-dashboard">
      <LeftBar />
      <div className="attendee-right-content">
        <div className="d-flex justify-content-between align-items-center">
          <div></div>
          <img src="/images/Logo@3x.png" className="max-155" />
          <div className="position-relative">
            <img src="/images/Search@3x.png" className="max-32 c-pointer" />
          </div>
        </div>
        <div className="mt-44">
          <div className="d-flex justify-content-between align-items-center mb-12">
            <div></div>
            <EventsTab />
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
          <div className="mt-60 available-hosts">
            {hosts.map((h, i) => {
              const { img, name, online, icons, events, followers, following } = h;
              return (
                <div key={i}>
                  <div className="available-hosts-card mb-16">
                    <div className="position-relative available-hosts-img mb-16">
                      <img src={`/images/${img}@3x.png`} alt={img} />
                      {online ? <div className="host-online"></div> : null}
                    </div>
                    <p className="f-16 fw-300">{name}</p>
                    <div className="available-hosts-icons mb-12">
                      {icons.map((icon, index) => (
                        <img
                          key={index}
                          src={`/images/${icon}-white@3x.png`}
                          alt={icon}
                        />
                      ))}
                    </div>
                    <p className="f-14 fw-400 mb-1">{events} Events</p>
                    <p className="f-14 fw-400 mb-0">{followers} Followers</p>
                  </div>
                  <div>
                      <p className="f-14 text-gray fw-400 mb-0">Unfollow</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostsFollowed;
