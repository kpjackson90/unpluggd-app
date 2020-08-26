import React from "react";
import { useState } from "react";
import Forminput from "../partials/FormInput";

const PreviewPublish = ({ clickedEvent, pageTitle }) => {
  const [filled, setFilled] = useState(false);
  const [imgs, setimgs] = useState(["art", "music", "food"]);

  return (
    <React.Fragment>
      {clickedEvent == "preview-publish" ? (
        <div className="event-content preview">
          <div className="text-center">
            <img src="/images/logo-color@3x.png" alt="" className="event-img" />
            <h4 className="f-28 fw-300">Create your event</h4>
            <h6 className="f-16 fw-500 text-teal mb-44">{pageTitle}</h6>
          </div>
          <div className="preview-publish">
            <div className="flex-1">
              <div className="d-flex align-items-center justify-content-between">
                <img src="/images/logo@3x.png" alt="" className="logo155" />
                <div className="d-flex align-items-center">
                  <span className="f-18 mr-3">
                    <i className="far fa-clock"></i>
                  </span>
                  <p className="f-16 fw-300 mb-0">
                    Starting in 3 days, 44 mins
                  </p>
                </div>
              </div>
              <div className="mt-44">
                <h4 className="f-24 fw-300 mb-12">Guitar Meditation Session</h4>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="event-tag latest">
                      <span className="fw-300">Latest</span>
                    </div>
                    <span className="f-14 text-gray fw-300">
                      Be the first to join
                    </span>
                  </div>
                  <div className="preview-img">
                    {imgs.map((i) => (
                      <img src={`/images/icon-${i}@3x.png`} alt={i} />
                    ))}
                  </div>
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
                        <span className="text-pink">8 tickets or more*</span>{" "}
                        with your friends, you will have your own private
                        chatroom when event starts
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
                      <p className="f-14 text-gray fw-300">
                        8 Tickets available
                      </p>
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
                <div className="total">
                  <div>
                    <span className="text-gray f-18 fw-400 mr-3">Total:</span>
                    <span className="text-dark f-18 fw-400">$0</span>
                  </div>
                  <button className="app-btn gray-btn text-gray mt-0 max-200">
                    Purchase Now
                  </button>
                </div>
                <div className="mt-24 preview-vid">
                  <iframe
                    width="100%"
                    height="344"
                    src="https://www.youtube.com/embed/uM5XFRBRqnQ"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
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
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus.
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
                          Scarlette Robinson
                        </p>
                      </div>
                    </div>
                    <button className="btn-transparent gray">Unfollow</button>
                  </div>
                  <div className="mt-12">
                    <p className="f-14 fw-300 text-gray mb-2">About the host</p>
                    <div className="d-flex">
                      <span className="f-24 mr-3">
                        <i class="fas fa-quote-left"></i>
                      </span>
                      <p className="f-14 fw-300">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem.
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
              <img src="/images/image-1@3x.png" alt="image-1" />
              <img src="/images/image-2@3x.png" alt="image-2" />
              <img src="/images/image-3@3x.png" alt="image-3" />
            </div>
          </div>

          <div className="mt-60 mb-60 border-top pt-5">
            <div className="text-center mt-2 mb-4 hp-actions">
              <button className="btn-transparent app-btn text-teal">
                Back
              </button>
              <button className="app-btn gray-btn mt-0 bg-teal">Create Event</button>
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default PreviewPublish;
