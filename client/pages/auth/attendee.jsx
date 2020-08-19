import React from "react";
import Forminput from "../partials/FormInput";
import { useState } from "react";

const AttendeeReg = () => {
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
    <div className="app-height">
      <div className="text-center">
        <img src="/images/logo-color@3x.png" alt="" className="logo-color" />
        <div className="attendee-flex">
          <div>
            <img src="/images/ap-image-left@3x.png" />
          </div>
          <div className="reg-section">
            <h4 className="f-28 fw-300 ls-4 mb-44">Register As An Attendee</h4>
            <div className="text-left mb-36 d-flex">
              <div className="left-info">
                <h6 className="text-teal">01</h6>
                <h6>
                  Upload <br /> Profile image
                </h6>
              </div>
              <div className="w-100 d-flex justify-content-end align-items-end">
                <div
                  className="upload"
                  style={{ backgroundImage: `url('/images/Upload@3x.png')` }}
                ></div>
                <button className="btn-transparent app-btn text-teal">
                  Re-upload
                </button>
              </div>
            </div>
            <div className="text-left d-flex mb-44">
              <div className="left-info">
                <h6 className="text-teal">02</h6>
                <h6>
                  Enter <br /> Username
                </h6>
              </div>
              <div className="w-100">
                <Forminput
                  type="text"
                  placeholder="Username"
                  textInfo="* No more than 30 characters"
                />
              </div>
            </div>
            <div className="text-left d-flex">
              <div className="left-info">
                <h6 className="text-teal">03</h6>
                <h6 className="mb-1">
                  Select Event <br />
                  Categories
                </h6>
                <span className="f-14 fw-400 text-muted">(Select Up to 5)</span>
              </div>
              <div className="w-100">
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
              </div>
            </div>
          </div>
          <div>
            <img src="/images/ap-image-right@3x.png" />
          </div>
        </div>
        <div className="text-center mt-5 mb-4">
          <button
            className="app-btn gray-btn max-254 ml-auto mr-auto mt-0"
            style={{
              background: filled
                ? "radial-gradient(circle, #12CCC7 0%, #08B09A 100%)"
                : "rgba(151, 151, 151, 0.2)",
              boxShadow: filled ? "0 8px 24px 0 rgba(18,204,199,0.3" : "",
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendeeReg;
