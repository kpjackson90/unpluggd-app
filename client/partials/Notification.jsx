import React from "react";

const Notification = ({
  NotificationToggled,
  closeNotification,
  Notifications,
}) => {
  return (
    <div
      className="notification-container"
      style={{ width: NotificationToggled ? "270px" : "0" }}
    >
      <div>
        <span
          className="f-24"
          style={{ display: NotificationToggled ? "block" : "none" }}
        >
          <i
            className="fas fa-chevron-right c-pointer"
            onClick={closeNotification}
          ></i>
        </span>
      </div>
      <div>
        <h4 className="text-center fw-500 f-16 text-gray mb-36 mt-22">
          Your Notifications
        </h4>
        <ul className="ml-22 mr-22">
          {Notifications.map((n, i) => {
            const { time } = n;
            return (
              <li key={i} className="mb-36" tabIndex={i + 1}>
                <p className="fw-500 f-14 mb-2">
                  Event “XXXXXX” that you bought tickets for, is about to start!
                  Click to attend event!
                </p>
                <p className="fw-300 f-14 mb-0">{time}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Notification;
