import React from "react";
import { useState } from "react";
import Forminput from "../partials/FormInput";

const CreateTickets = ({ clickedEvent, pageTitle }) => {
  const [filled, setFilled] = useState(false);

  return (
    <React.Fragment>
      {clickedEvent == "create-tickets" ? (
        <div className="event-content">
          <div className="text-center">
            <img src="/images/logo-color@3x.png" alt="" className="event-img" />
            <h4 className="f-28 fw-300">Create your event</h4>
            <h6 className="f-16 fw-500 text-teal mb-24">{pageTitle}</h6>
          </div>
          <div className="row mt-36">
            <label className="f-18 fw-300 mb-12">
              Event Size
              <span className="text-gray f-14 fw-300 ml-2">
                * Setting up Event Size to limit the attendee number
              </span>
            </label>
            <div className="col-6 pl-0">
              <Forminput type="text" placeholder="Event Size Number" />
            </div>
          </div>
          <div className="mt-36">
            <label className="f-18 fw-300 mb-12">
              Create Ticket
              <span className="text-gray f-14 fw-300 ml-2">
                * Max. 10 tickets for 1 event, either free / paid / both
              </span>
            </label>
            <div className="row">
              <div className="col-6 pl-0 pr-2">
                <button className="btn-transparent w-100 text-teal">
                  Free Ticket
                </button>
              </div>
              <div className="col-6 pr-0 pl-2">
                <button className="btn-transparent w-100 text-teal">
                  Paid Ticket
                </button>
              </div>
            </div>
          </div>
          <div className="free-paid">
            <div className="free-ticket pt-4 mb-24">
              <div className="d-flex align-items-center">
                <div className="event-tag">
                  <span>Free</span>
                </div>
                <p className="f-16 text-teal fw-500 mb-0">Ticket 1</p>
              </div>
              <span className="f-24">
                <i className="fas fa-times text-teal"></i>
              </span>
            </div>
            <Forminput
              type="text"
              placeholder="Give your ticket a special name"
              label="Create Ticket Name"
              textInfo="Maximum 30 Characters"
            />
            <div className="row mt-24">
              <div className="col-md-6 pl-0 pr-2">
                <Forminput
                  type="text"
                  placeholder="Ticket Quantity"
                  label="Ticket Quantity"
                />
              </div>
            </div>
          </div>
          <div className="free-paid">
            <div className="free-ticket pt-4 mb-24">
              <div className="d-flex align-items-center">
                <div className="event-tag paid">
                  <span>Paid</span>
                </div>
                <p className="f-16 text-teal fw-500 mb-0">Ticket 2</p>
              </div>
              <span className="f-24">
                <i className="fas fa-times text-teal"></i>
              </span>
            </div>
            <Forminput
              type="text"
              placeholder="Give your ticket a special name"
              label="Create Ticket Name"
              textInfo="Maximum 30 Characters"
            />
            <div className="row mt-24">
              <div className="col-md-6 pl-0 pr-2">
                <Forminput
                  type="text"
                  placeholder="Ticket Access Type"
                  label="Ticket Access Type"
                />
              </div>
              <div className="col-md-6 pr-0 pl-2">
                <Forminput
                  type="text"
                  placeholder="Ticket Price"
                  label="Ticket Price"
                />
              </div>
            </div>
            <div className="row mt-24">
              <div className="col-md-6 pl-0 pr-2">
                <Forminput
                  type="text"
                  placeholder="Ticket Quantity"
                  label="Ticket Quantity"
                />
              </div>
            </div>
          </div>
          <div className="mt-60 mb-60">
            <div className="text-center mt-2 mb-4 hp-actions">
              <button className="btn-transparent app-btn text-teal">
                Back
              </button>
              <button
                className="app-btn gray-btn mt-0"
                style={{
                  background: filled
                    ? "radial-gradient(circle, #12CCC7 0%, #08B09A 100%)"
                    : "rgba(151, 151, 151, 0.2)",
                  color: filled ? "#FFF" : "#9A9A9A",
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default CreateTickets;
