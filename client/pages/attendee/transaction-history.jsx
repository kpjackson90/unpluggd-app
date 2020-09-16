import React, { useState, useEffect } from "react";
import LeftBar from "../partials/attendee-leftbar";
import ProfileInfoTab from "../partials/profile-tab";

const AccountSettings = () => {
  const [txHistory, useTxHistroy] = useState([
    {
      title: "30 Minutes Guitar Workshop",
      date: "Jul 03, 2020  12:35pm",
      price: "10",
      status: "Pending",
    },
    {
      title: "Stay-In-Home Photography Lesson",
      date: "Jul 03, 2020  12:35pm",
      price: "10",
      status: "Paid",
    },
    {
      title: "J Lou Musical practice",
      date: "Jul 03, 2020  12:35pm",
      price: "10",
      status: "Cancelled",
    },
    {
      title: "30 Minutes Guitar Workshop",
      date: "Jul 03, 2020  12:35pm",
      price: "10",
      status: "Paid",
    },
    {
      title: "30 Minutes Guitar Workshop",
      date: "Jul 03, 2020  12:35pm",
      price: "10",
      status: "Cancelled",
    },
  ]);

  return (
    <div className="app-height d-flex align-items-start p-24 attendee-dashboard">
      <LeftBar />
      <div className="attendee-right-content">
        <div className="max-631">
          <div className="d-flex justify-content-center align-items-center">
            <img src="/images/Logo@3x.png" className="max-155" />
          </div>
          <div className="mt-44">
            <div className="d-flex justify-content-center align-items-center mb-12">
              <ProfileInfoTab />
            </div>
            <div className="mt-60">
              {txHistory.map((t, i) => {
                const { title, date, price, status } = t;
                return (
                  <div
                    className="tx-history d-flex justify-content-between align-items-center mb-24"
                    key={i}
                  >
                    <div>
                      <h4 className="f-18 fw-300 mb-1">{title}</h4>
                      <p className="f-14 fw-300 text-gray mb-0">{date}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <h4 className="f-18 fw-700 text-deepTeal mb-0 mr-3">
                        ${price}
                      </h4>
                      <button
                        className={`event-tag ${
                          status == "Pending"
                            ? "pending"
                            : status == "Paid"
                            ? "tx-paid"
                            : status == "Cancelled"
                            ? "cancelled"
                            : null
                        }`}
                      >
                        {status}
                      </button>
                    </div>
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

export default AccountSettings;
