import React, { useState, useContext } from "react";
import Forminput from "../../partials/FormInput";
import Router from 'next/router';
import { Context as AuthContext } from '../../context/AuthContext'
import CustomRadio from "../../partials/CustomRadio";

const Screen2 = () => {
  const { updateCategories } = useContext(AuthContext);
  const [categories, setCategories] = useState([
    "Art",
    "Music",
    "Business",
    "Food",
    "Animals",
    "Fitness"
  ]);

  const [selected, setSelected] = useState([]);

  const [filled, setFilled] = useState(true);

  const [isAdult, setIsAdult] = useState(false);

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

  console.log('---->>> categories', selected)
  console.log('--->>> is adult', isAdult)
  const handleSubmit = (e) => {
    e.preventDefault();
      updateCategories( selected, isAdult, () => Router.push('/host-profile/screen-3'));
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
            <div className="text-left d-flex mb-36">
              <div className="left-info">
                <h6 className="text-teal">01</h6>
                <h6 className="mb-1">
                  Select Event <br /> Categories <br /> you will host
                </h6>
                <span className="f-14 fw-400 text-muted">(Select Up to 3)</span>
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
            <div className="text-left d-flex">
              <div className="left-info">
                <h6 className="text-teal">02</h6>
                <h6 className="mb-0">
                  Declare <br /> Content Info
                </h6>
              </div>
              <div className="w-100 d-flex flex-column justify-content-between">
                <h6 className="mb-0 f-16">
                  Does your content contain adult content?
                </h6>
                <div className="radio-wrap">
                  <CustomRadio label="Yes" name="radio" value={true} setValue={setIsAdult} />
                  <CustomRadio label="No" name="radio" value={false} setValue={setIsAdult}  />
                </div>
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
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
