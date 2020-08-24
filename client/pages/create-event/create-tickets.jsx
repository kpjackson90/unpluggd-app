import React from "react";
import { useState } from "react";
import Forminput from "../partials/FormInput";

const CreateTickets = ({ clickedEvent }) => {
  return (
    <React.Fragment>
      {clickedEvent == "create-tickets" ? (
        <div>
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
          <div>
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
          </div>
          <div className="mt-60 mb-60">

          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default CreateTickets;
