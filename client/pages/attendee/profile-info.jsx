import React, { useState, useEffect } from "react";
import LeftBar from "../../partials/attendee-leftbar";
import ProfileInfoTab from "../../partials/profile-tab";
import Forminput from "../../partials/FormInput";

const ProfileInfo = () => {
  const [username, setUsername] = useState("");

  const [categories, setCategories] = useState([
    "Art",
    "Music",
    "Business",
    "Food",
    "Animals",
    "Fitness",
  ]);

  const [selected, setSelected] = useState([]);

  const [filled, setFilled] = useState(true);

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
              <h4 className="fw-300 f-18 mb-12">Profile Image</h4>
              <div className="d-flex justify-content-between  mb-36">
                <div className="profile-info-img">
                  <img src="/images/profile-img@3x.png" className="max-155" />
                </div>
                <div className="upload-delete profile-info">
                  <button className="btn-transparent app-btn text-teal">
                    Re-upload
                  </button>
                  <button className="btn-transparent app-btn text-teal">
                    Delete
                  </button>
                </div>
              </div>
              <Forminput
                label="Username"
                placeholder="Scarlette.Robinson"
                textInfo="Remaining: 4 characters"
                invalid={true}
                value={username}
                setValue={setUsername}
              />
              <div className="mt-36">
                <h4 className="fw-300 f-18 mb-0">Event Categories</h4>
                <span className="f-14 fw-400 text-muted">(Select Up to 5)</span>
                <div className="w-100 mt-12">
                  <div className="categories attendee">
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
                          <img
                            src={`/images/${c}@3x.png`}
                            alt={c}
                            style={{
                              filter: selected.includes(c)
                                ? "brightness(1)"
                                : "brightness(0.4)",
                            }}
                          />
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
                </div>
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

export default ProfileInfo;
