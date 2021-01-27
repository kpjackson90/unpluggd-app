import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ExitEvent = () => {
  const router = useRouter();

  const logoutBg = {
    backgroundImage: `url('/images/Video-blur@3x.png')`,
  };

  return (
    <div
      className="app-height logout-page d-flex justify-content-center align-items-center"
      style={logoutBg}
    >
      <div className="position-relative text-center">
        <img src="/images/Logo@3x.png" className="max-155 mb-24" />
        <p className="f-24 fw-400 mb-36">Logout</p>
        <p className="f-16 fw-300 mb-36">
          Are you sure you want to log out? You will <br /> need to manually log
          back in to manage or <br /> review your events.
        </p>
        <div className="max-254 ml-auto mr-auto">
          <Link href="/attendee/dashboard">
            <button className="btn-teal w-100 mb-16 fw-500">
              Yes, I confirm
            </button>
          </Link>
          <button
            className="btn-transparent w-100 gray fw-500"
            onClick={() => router.back()}
          >
            No, maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitEvent;
