import React, { useState, useContext } from "react";
import Router from 'next/router';
import { Context as AuthContext } from '../../context/AuthContext';
import Forminput from "../../partials/FormInput";

const Screen3 = () => {
  const { updateHostSocial } = useContext(AuthContext);
  const [facebookUrl, setFacebookUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [twitch, setTwitch] = useState('');
  const [filled, setFilled] = useState(true);
  const [uploaded, setUploaded] = useState(true);

  const [categories, setCategories] = useState(["Card", "Paypal"]);

  const [selected, setSelected] = useState([]);

  const handleSelected = (title) => {
    let newSelected = [...selected];

    if (newSelected.includes(title) != true) {
      newSelected.push(title);
    } else {
      const index = newSelected.indexOf(title);
      newSelected.splice(index, 1);
    }

    setSelected(newSelected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      updateHostSocial(facebookUrl, twitterUrl, instagramUrl, youtubeUrl, twitch, () => Router.push('/auth/register-success'));
  }

  return (
    <div className="app-height">
      <div className="text-center">
        <img src="/images/logo-color@3x.png" alt="" className="logo-color" />
        <div className="attendee-flex">
          <div>
            <img src="/images/hp-image-left@3x.png" />
          </div>
          <div className="app-section w-45">
            <h4 className="f-28 fw-300 ls-4 mb-3">Become An Event Host</h4>
            <div className="broken-line mb-44 ml-auto mr-auto">
              <div></div>
              <span></span>
              <span></span>
            </div>
            <div className="text-left mb-36 d-flex">
              <div className="left-info">
                <h6 className="text-teal">01</h6>
                <h6 className="mb-1">
                  Add <br /> Social Media
                </h6>
                <span className="f-14 fw-400 text-muted">(If Applicable)</span>
              </div>
              <div className="w-100 screen3-media">
                <div className="w-100 d-flex align-items-center">
                  <span>
                    <i className="fab fa-facebook-f text-teal"></i>
                  </span>
                  <div className="flex-1">
                    <Forminput type="text" placeholder="Facebook URL" value={facebookUrl} setValue={setFacebookUrl} />
                  </div>
                </div>
                <div className="w-100 d-flex align-items-center">
                  <span>
                    <i className="fab fa-twitter text-teal"></i>
                  </span>
                  <div className="flex-1">
                    <Forminput type="text" placeholder="Twitter URL" value={twitterUrl} setValue={setTwitterUrl} />
                  </div>
                </div>
                <div className="w-100 d-flex align-items-center">
                  <span>
                    <i className="fab fa-instagram text-teal"></i>
                  </span>
                  <div className="flex-1">
                    <Forminput type="text" placeholder="Instagram Name" value={instagramUrl} setValue={setInstagramUrl} />
                  </div>
                </div>
                <div className="w-100 d-flex align-items-center">
                  <span>
                    <i className="fab fa-youtube text-teal"></i>
                  </span>
                  <div className="flex-1">
                    <Forminput type="text" placeholder="Youtube URL" value={youtubeUrl} setValue={setYoutubeUrl} />
                  </div>
                </div>
                <div className="w-100 d-flex align-items-center">
                  <span>
                    <i className="fab fa-twitch text-teal"></i>
                  </span>
                  <div className="flex-1">
                    <Forminput type="text" placeholder="Twitch Name" value={twitch} setValue={setTwitch} />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-left d-flex mb-36">
              <div className="left-info">
                <h6 className="text-teal">01</h6>
                <h6 className="mb-1">
                  Select <br /> Payout Settings
                </h6>
                <span className="f-14 fw-400 text-muted">
                  (Optional for now)
                </span>
              </div>
              <div className="w-100">
                <div className="categories attendee cards">
                  {categories.map((c, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => handleSelected(c)}
                        style={{
                          background: selected.includes(c)
                            ? "#12CCC7"
                            : "transparent",
                        }}
                      >
                        <img src={`/images/${c}@3x.png`} alt={c} />
                        <p
                          style={{
                            color: selected.includes(c) ? "white" : "#616162",
                          }}
                        >
                          {c}
                        </p>
                      </div>
                    );
                  })}
                </div>
                {selected.includes("Card") == true ? (
                  <div className="mt-4">
                    <Forminput type="text" placeholder="Card Number" />
                    <div className="row">
                      <div className="col-md-6 pl-0 pr-2">
                        <Forminput
                          type="text"
                          placeholder="Expiry Date (MM/YY)"
                        />
                      </div>
                      <div className="col-md-6 pr-0 pl-2">
                        <Forminput type="text" placeholder="CVV" />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div>
            <img src="/images/hp-image-right@3x.png" />
          </div>
        </div>
        <div className="app-section w-45 ml-auto mr-auto">
          <div className="d-flex">
            <div className="left-info"></div>
            <div className="text-center mt-2 mb-4 hp-actions">
              <button className="btn-transparent app-btn text-teal">
                Back
              </button>
              <button
              onClick={handleSubmit}
                className="app-btn gray-btn mt-0"
                style={{
                  background: filled
                    ? "radial-gradient(circle, #12CCC7 0%, #08B09A 100%)"
                    : "rgba(151, 151, 151, 0.2)",
                }}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
