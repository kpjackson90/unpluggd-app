import React, { useState, useContext } from "react";
import Forminput from "../../partials/FormInput";
import Router from 'next/router';
import { Context as AuthContext } from '../../context/AuthContext';

const EventHostReg = () => {
  const [filled, setFilled] = useState(true);
  const [uploaded, setUploaded] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [residence, setResidence] = useState('');
  const [occupation, setOccupation] = useState('');
  const [bio, setBio] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const [introVideo, setIntroVideo] = useState('');
  const [companyBio, setCompanyBio] = useState('');
  const { createEventHost } = useContext(AuthContext);

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log('first', firstName);
      createEventHost( firstName, lastName, residence, occupation, bio, companyName, companyUrl, introVideo, companyBio, () => Router.push('/host-profile/screen-2'));
  }


  return (
    <div className="app-height">
      <div className="text-center">
        <img src="/images/logo-color@3x.png" alt="" className="logo-color" />
        <div className="attendee-flex">
          <div>
            <img src="/images/hp-image-left@3x.png" />
          </div>
          <div className="app-section">
            <h4 className="f-28 fw-300 ls-4 mb-3">Become An Event Host</h4>
            <div className="broken-line mb-44 ml-auto mr-auto">
              <div></div>
              <span></span>
              <span></span>
            </div>
            <div className="text-left mb-36 d-flex">
              <div className="left-info">
                <h6 className="text-teal">01</h6>
                <h6>
                  Upload <br /> Profile image
                </h6>
              </div>
              <div
                className="w-100 d-flex align-items-end"
                style={{ justifyContent: uploaded ? "flex-end" : "center" }}
              >
                <div
                  className="upload"
                  style={{ backgroundImage: `url('/images/Upload@3x.png')` }}
                ></div>
                {uploaded ? (
                  <button className="btn-transparent app-btn text-teal">
                    Re-upload
                  </button>
                ) : null}
              </div>
            </div>
            <div className="text-left mb-36 d-flex">
              <div className="left-info">
                <h6 className="text-teal">02</h6>
                <h6>
                  Upload <br /> Cover image
                </h6>
              </div>
              <div className="w-100 d-flex">
                <div
                  className="upload w-100 mr-0"
                  style={{ backgroundImage: `url('/images/Upload@3x.png')` }}
                ></div>
                {uploaded ? (
                  <div className="upload-delete ml-4">
                    <button className="btn-transparent app-btn text-teal">
                      Re-upload
                    </button>
                    <button className="btn-transparent app-btn text-teal">
                      Delete
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="text-left d-flex mb-36">
              <div className="left-info">
                <h6 className="text-teal">03</h6>
                <h6>
                  Enter <br /> Personal Info
                </h6>
              </div>
              <div className="w-100">
                <div className="row">
                  <div className="col-md-6 pl-0">
                    <Forminput type="text" placeholder="First Name" value={firstName} setValue={setFirstName} />
                  </div>
                  <div className="col-md-6 pr-0">
                    <Forminput type="text" placeholder="Last Name" value={lastName} setValue={setLastName}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pl-0">
                    <Forminput type="text" placeholder="Country of Residency" value={residence} setValue={setResidence} />
                  </div>
                  <div className="col-md-6 pr-0">
                    <Forminput type="text" placeholder="Occupation" value={occupation} setValue={setOccupation} />
                  </div>
                </div>
                <div className="form-group mb-0">
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="About you (Maximum 200 characters)"
                    className="app-input textarea mb-0"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-left d-flex mb-36">
              <div className="left-info">
                <h6 className="text-teal">04</h6>
                <h6>
                  Enter <br /> Company Info
                </h6>
              </div>
              <div className="w-100">
                <Forminput type="text" placeholder="Company Name" value={companyName} setValue={setCompanyName}/>
                <Forminput type="text" placeholder="Company URL" value={companyUrl} setValue={setCompanyUrl} />
                <Forminput
                  type="text"
                  placeholder="Intro video URL (Optional)"
                  value={introVideo}
                  setValue={setIntroVideo}
                />
                <div className="form-group mb-0">
                  <textarea
                    value={companyBio}
                    onChange={(e) => setCompanyBio(e.target.value)}
                    placeholder="About your company (Maximum 200 characters)"
                    className="app-input textarea mb-0"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/hp-image-right@3x.png" />
          </div>
        </div>
        <div className="text-center mt-5 mb-4">
          <button
          onClick={handleSubmit}
            className="app-btn gray-btn max-254 ml-auto mr-auto mt-0"
            style={{
              background: filled
                ? "radial-gradient(circle, #12CCC7 0%, #08B09A 100%)"
                : "rgba(151, 151, 151, 0.2)",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventHostReg;
