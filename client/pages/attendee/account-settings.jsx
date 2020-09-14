import React, { useState, useEffect } from "react";
import LeftBar from "../partials/attendee-leftbar";
import ProfileInfoTab from "../partials/profile-tab";
import Forminput from "../partials/FormInput";

const AccountSettings = () => {
  const [email, setEmail] = useState("");
  const [currPassword, setCurrPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="app-height d-flex align-items-start p-24 attendee-dashboard">
      <LeftBar />
      <div className="attendee-right-content">
        <div className="max-524">
          <div className="d-flex justify-content-center align-items-center">
            <img src="/images/Logo@3x.png" className="max-155" />
          </div>
          <div className="mt-44">
            <div className="d-flex justify-content-center align-items-center mb-12">
              <ProfileInfoTab />
            </div>
            <div className="mt-60">
              <Forminput
                label="Email Address"
                placeholder="Scarlette.Robinson"
                value={email}
                setValue={setEmail}
              />
              <div className="mt-36">
                <Forminput
                  label="Password"
                  placeholder="Current Password"
                  value={currPassword}
                  setValue={setCurrPassword}
                />
                <Forminput
                  placeholder="New Password"
                  value={newPassword}
                  setValue={setNewPassword}
                />
                <Forminput
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                />
              </div>
              <div className="mt-60 text-center">
                <button className="app-btn gray-btn mt-0 max-254 m-auto text-gray">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
