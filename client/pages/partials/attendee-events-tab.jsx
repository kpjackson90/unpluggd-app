import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const EventsTab = () => {
  const router = useRouter();
  const [tabs, setTabs] = useState([
    { title: "All Available Events", path: "/attendee/available-events" },
    { title: "Events you joined", path: "/attendee/events-joined" },
    { title: "Events Completed", path: "/attendee/events-completed" },
  ]);

  return (
    <div className="d-flex align-items-center">
      {tabs.map((t, i) => {
        const { title, path } = t;
        return (
          <Link href={path}>
            <p
              className="f-16 fw-500 mr-5 mb-0"
              style={{
                color: router.pathname == `${path}` ? "#12CCC7" : "#A2A2A2",
              }}
            >
              {title}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default EventsTab;
