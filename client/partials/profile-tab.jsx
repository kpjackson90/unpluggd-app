import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const ProfileInfoTab = () => {
  const router = useRouter();
  const [tabs, setTabs] = useState([
    { title: "Profile Info", path: "/attendee/profile-info" },
    { title: "Account Settings", path: "/attendee/account-settings" },
    { title: "Transaction History", path: "/attendee/transaction-history" },
  ]);

  return (
    <div className="d-flex align-items-center">
      {tabs.map((t, i) => {
        const { title, path } = t;
        const lastIndex = tabs.length - 1;
        return (
          <Link href={path} key={i}>
            <p
              className={`f-16 fw-500 mb-0 c-pointer ${i == lastIndex ? "" : "mr-5"}`}
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

export default ProfileInfoTab;
