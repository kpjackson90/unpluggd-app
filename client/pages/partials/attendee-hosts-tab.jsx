import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const EventsTab = () => {
  const router = useRouter();
  const [tabs, setTabs] = useState([
    { title: "All Available Hosts", path: "/attendee/available-hosts" },
    { title: "Hosts you followed", path: "/attendee/hosts-followed" },
  ]);

  return (
    <div className="d-flex align-items-center">
      {tabs.map((t, i) => {
        const { title, path } = t;
        return (
          <Link href={path}>
            <p
              className="f-16 fw-500 mr-5 mb-0 c-pointer"
              style={{
                color: router.pathname == `${path}` ? "#12CCC7" : "#A2A2A2",
              }}
              key={i}
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
