import React from "react";
import Forminput from "../partials/FormInput";
import { useState } from "react";
import { useEffect } from "react";
import api from "../api/api";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [emailSaved, setEmailSaved] = useState(false);
  const [imgsLeft, setImgsLeft] = useState([1, 2, 3, 4]);
  const [imgsRight, setImgsRight] = useState([5, 6, 7, 8]);

  useEffect(() => {
    console.log("imgs", imgsLeft);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    try {
      if (email) {
        const res = api.post("/api/add/list/member", { email });
        if (res.data) {
          setEmailSaved(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app-height app-width d-flex justify-content-between">
      <div className="d-flex align-items-center justify-content-center w-40">
        <div className="max-408">
          <img src="/images/Logo@3x.png" alt="" className="max-260 mb-24" />
          <p className="fw-300 f-60 text-teal theGwathmey mb-60">
            Your Virtual Arena
          </p>
          <div className="max-344">
            <p className="fw-300 f-16 mb-60">
              Sign up to get exclusive news on our launch
            </p>
            <Forminput
              placeholder="Email Address"
              value={email}
              setValue={setEmail}
            />
            <button
              className="btn-teal w-100 mt-3 mb-24"
              onClick={() => handleSave()}
            >
              Sign Up
            </button>
          </div>
          {emailSaved ? (
            <p className="f-14 fw-500 text-teal">
              You have successfully added your email address to our list!
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="w-40 d-flex justify-content-center">
        <div className="max-192 mr-60 d-flex flex-column">
          {imgsLeft.map((img, i) => (
            <img
              key={i}
              src={`/images/landing-${img}@3x.png`}
              alt={`landing-${img}`}
              className={`w-100 ${img !== 1 ? "mt-auto" : ""}`}
            />
          ))}
        </div>
        <div className="max-192 d-flex flex-column">
          {imgsRight.map((img, i) => (
            <img
              key={i}
              src={`/images/landing-${img}@3x.png`}
              alt={`landing-${img}`}
              className={`w-100 ${img !== 5 ? "mt-auto" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
