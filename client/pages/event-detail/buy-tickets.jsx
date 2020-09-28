import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Forminput from "../partials/FormInput";

const BuyTickets = () => {
  const [participantsImg, setParticipantsImg] = useState([
    "Host-1",
    "Host-2",
    "Host-3",
  ]);

  const router = useRouter();

  const [icons, setIcons] = useState(["art", "music"]);

  return (
    <div className="app-min-height">
      <div className="app-width d-flex align-items-start mt-24 pb-5">
        <div className="back-button">
          <div className="f-24 mt-36">
            <i
              className="fas fa-chevron-left c-pointer"
              onClick={() => router.back()}
            ></i>
          </div>
        </div>
        <div className="flex-1 attend-now mt-36">
          <div>
            <div className="d-flex justify-content-between align-items-center mb-24">
              <img src="/images/Logo@3x.png" className="max-155" />
              <div className="d-flex align-items-center">
                <span className="f-24 mr-3">
                  <i className="far fa-clock"></i>
                </span>
                <p className="f-16 fw-300 mb-0">Starting in 2 hrs, 44 mins</p>
              </div>
            </div>
            <h4 className="f-24 fw-300 mb-12">Sammy, Guitar and You</h4>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center mr-4">
                  <button className="event-tag limited fw-300">Limited</button>
                  <p className="f-14 fw-300 text-pink mb-0">2 Tickets left</p>
                </div>
                <div className="d-flex align-items-center">
                  {participantsImg ? (
                    <div className="participantsImg">
                      {participantsImg.map((p, index) => {
                        return (
                          <img
                            src={`/images/${p}@3x.png`}
                            alt={p}
                            className="br-white"
                            key={index}
                          />
                        );
                      })}
                    </div>
                  ) : null}
                  <p className="f-14 fw-300 mb-0 text-gray">+18 participants</p>
                </div>
              </div>
              <div>
                {icons.map((icon, i) => {
                  return (
                    <img
                      src={`/images/icon-${icon}@3x.png`}
                      alt={icon}
                      className="max-h-24 ml-22"
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
            <div className="mt-24">
              <h4 className="f-24 fw-300 mb-12">Tickets Available</h4>
              <div className="tickets-available">
                <div className="d-flex align-items-start">
                  <img src={`/images/congratulation@3x.png`} />
                  <div>
                    <p className="f-14 fw-300 mb-1">
                      Purchase{" "}
                      <span className="text-pink">8 tickets or more*</span> with
                      your friends, you will have your own private chatroom when
                      event starts
                    </p>
                    <p className="f-14 text-gray fw-300 mb-0">
                      *User have to purchase the SAME type of ticket.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-24">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <div className="d-flex align-items-center">
                      <h4 className="f-18 fw-300 mr-2 mb-0">
                        New Member Ticket
                      </h4>
                      <div className="event-tag">
                        <span className="fw-300">Free</span>
                      </div>
                    </div>
                    <p className="f-14 text-gray fw-300">8 Tickets available</p>
                  </div>
                  <div className="max-200">
                    <Forminput placeholder="Quantity" />
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <div className="d-flex align-items-center">
                      <h4 className="f-18 fw-300 mr-2 mb-0">VIP Member</h4>
                      <div className="event-tag paid">
                        <span className="fw-300">$10</span>
                      </div>
                    </div>
                    <p className="f-14 text-pink fw-300">2 Tickets left</p>
                  </div>
                  <div className="max-200">
                    <Forminput placeholder="Quantity" />
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <div className="d-flex align-items-center">
                      <h4 className="f-18 fw-300 mr-2 mb-0">
                        Go-To-The-Moon Ticket
                      </h4>
                      <div className="event-tag paid">
                        <span className="fw-300">$25</span>
                      </div>
                    </div>
                    <p className="f-14 text-pink fw-300">0 Ticket(s) left</p>
                  </div>
                  <div className="max-200">
                    <Forminput placeholder="Quantity" />
                  </div>
                </div>
              </div>
              <div className="total">
                <div>
                  <span className="text-gray f-18 fw-400 mr-3">Total:</span>
                  <span className="text-dark f-18 fw-400">$0</span>
                </div>
                <button className="app-btn gray-btn text-gray mt-0 max-200">
                  Purchase Now
                </button>
              </div>
              <div className="mt-24">
                <h4 className="f-24 fw-300 mb-12">Event Description</h4>
                <p className="f-16 fw-300">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <p className="f-16 fw-300">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus.
                </p>
              </div>
              <div className="mt-36 event-board mb-24">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-start">
                    <img
                      src="/images/host-profile@3x.png"
                      alt=""
                      className="max-80 mr-4"
                    />
                    <div>
                      <p className="f-14 fw-300 text-gray mb-0">Event Host</p>
                      <p className="fw-300 f-40 text-teal host-name">
                        Sammy Tarkpmton
                      </p>
                    </div>
                  </div>
                  <button className="btn-transparent max-120">Follow</button>
                </div>
                <div className="mt-12">
                  <p className="f-14 fw-300 text-gray mb-2">About the host</p>
                  <div className="d-flex">
                    <span className="f-24 mr-3">
                      <i className="fas fa-quote-left"></i>
                    </span>
                    <p className="f-14 fw-300">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Donec quam
                      felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="send-invite">
                <div>
                  <span className="f-60">
                    <i className="fas fa-envelope-open-text text-teal"></i>
                  </span>
                </div>
                <div>
                  <p className="f-16 fw-300 mb-2">
                    Do you want to invite your friends to join as well?
                  </p>
                  <button className="app-btn gray-btn bg-teal max-254 mt-0">
                    Send them an Invite now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/buy-tickets@3x.png" alt="image-1" />
            <img src="/images/buy-tickets-2@3x.png" alt="image-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTickets;
