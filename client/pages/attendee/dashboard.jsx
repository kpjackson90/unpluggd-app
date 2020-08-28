import React from "react";
import { useState } from "react";

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
      </div>
    </div>
  );
};

export default Dashboard;
