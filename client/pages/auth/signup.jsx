import React from "react";
import Forminput from "../partials/FormInput";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const bg = {
    backgroundImage: `url('/images/image-back@3x.png')`,
  };

  return (
    <div className="app-height signup" style={bg}>
      <div className="row h-100">
        <div className="col-6 h-100 pt-2 pb-2">
          <img src="/images/image-left@3x.png" className="image-left" />
        </div>
        <div className="col-6 h-100 d-flex align-items-center justify-content-center">
          <div className="max-345 ml-5 mr-auto text-center">
            <img src="/images/logo@3x.png" alt="" className="signup-logo" />
            <h4 className="title-h4">Sign Up</h4>

            <button className="fb-btn app-btn">
              <span className="f-24 mr-4">
                <i class="fab fa-facebook-f"></i>
              </span>
              <span>Sign Up with Facebook</span>
            </button>
            <button className="ig-btn app-btn">
              <span className="f-24 mr-4">
                <i class="fab fa-instagram"></i>
              </span>
              <span>Sign Up with Instagram</span>
            </button>
            <div className="line-break">
              <div></div>
              <span className="f-16 fw-bold ml-2 mr-2">OR</span>
              <div></div>
            </div>
            <form>
              <Forminput
                placeholder="Email Address"
                type="text"
                value={email}
                setValue={setEmail}
                invalid={true}
                textInfo="Email address invalid"
              />
              <Forminput
                placeholder="Password"
                type="password"
                value={password}
                setValue={setPassword}
              />
              <Forminput
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                valid={true}
                textInfo="Password Match"
              />
              <button className="app-btn signup-btn bg-teal">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
