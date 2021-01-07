import React, { useState, useContext } from "react";
import Router from 'next/router';
import Forminput from "../../partials/FormInput";
import { Context as AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useContext(AuthContext);

  const handleSignin = (e) => {
    e.preventDefault();
    if (email && password) {
      signin(email, password, () => Router.push('/attendee/dashboard'));
    }
  }

  const bg = {
    backgroundImage: `url('/images/image-back2@3x.png')`,
  };

  return (
    <div className="app-height signup" style={bg}>
      <div className="row h-100">
        <div className="col-6 h-100 pt-2 pb-2">
          <img src="/images/image-left2@3x.png" className="image-left" />
        </div>
        <div className="col-6 h-100 d-flex align-items-center justify-content-center">
          <div className="max-345 ml-5 mr-auto text-center">
            <img src="/images/logo@3x.png" alt="" className="signup-logo" />
            <h4 className="title-h4">Login</h4>

            <button className="fb-btn app-btn">
              <span className="f-24 mr-4">
                <i className="fab fa-facebook-f"></i>
              </span>
              <span>Login with Facebook</span>
            </button>
            <button className="ig-btn app-btn">
              <span className="f-24 mr-4">
                <i className="fab fa-instagram"></i>
              </span>
              <span>Login with Instagram</span>
            </button>
            <div className="line-break">
              <div></div>
              <span className="f-16 fw-bold ml-2 mr-2">OR</span>
              <div></div>
            </div>
            <form onSubmit={handleSignin}>
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
                valid={true}
              />
              <button  className="app-btn gray-btn bg-teal">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
