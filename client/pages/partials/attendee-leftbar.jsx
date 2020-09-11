import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const LeftBar = () => {
  const [tabs, setTabs] = useState([
    { path: "/attendee/dashboard", img: "Dashboard" },
    { path: "/attendee/available-events", img: "Calendar" },
    { path: "/attendee/available-hosts", img: "Host" },
  ]);

  const router = useRouter();

  const pLink = "/attendee/profile-info";

  return (
    <div className="attendee-left-bar">
      <div>
        <div
          className="text-center attendee-profile-img"
          style={{
            border: router.pathname == pLink ? "4px solid #12CCC7" : "",
          }}
        >
          <Link href={pLink}>
            <img src="/images/host-profile@3x.png" className="max-60" />
          </Link>
        </div>
        <div className="mt-36 block-img">
          {tabs.map((t, i) => {
            const { path, img } = t;
            return (
              <Link href={path} key={i}>
                <img
                  src={
                    router.pathname == path
                      ? `/images/${img}-green@3x.png`
                      : `/images/${img}@3x.png`
                  }
                  className="c-pointer"
                  alt={img}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="logout">
        <img src="/images/logout@3x.png" alt="logout" />
      </div>
    </div>
  );
};

export default LeftBar;
