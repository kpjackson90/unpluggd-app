import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const AttendNow = () => {
  const [participantsImg, setParticipantsImg] = useState([
    "Host-1",
    "Host-2",
    "Host-3",
  ]);

  const router = useRouter();

  const [icons, setIcons] = useState(["art", "music", "food"]);

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
              <button className="btn-teal max-254 fw-500">Attend Now</button>
            </div>
            <h4 className="f-24 fw-300 mb-12">30 Minute Guitar Workshop</h4>
            <div className="d-flex justify-content-between align-items-center mb-36">
              <div className="d-flex align-items-center">
                <button className="btn-transparent small mr-16">
                  You joined!
                </button>
                <button className="event-tag latest mr-16">Latest</button>
                <div className="d-flex align-items-center">
                  {participantsImg ? (
                    <div className="participantsImg">
                      {participantsImg.map((p, index) => {
                        return (
                          <img
                            src={`/images/${p}@3x.png`}
                            alt={p}
                            className="br-latest"
                            key={index}
                          />
                        );
                      })}
                    </div>
                  ) : null}
                  <p className="f-14 fw-300 mb-0 text-gray">+22 participants</p>
                </div>
              </div>
              <div>
                {icons.map((icon, i) => {
                  return (
                    <img
                      src={`/images/icon-${icon}@3x.png`}
                      alt={icon}
                      className="max-h-24 ml-22"
                    />
                  );
                })}
              </div>
            </div>
            <div className="preview-vid mb-36">
              <iframe
                width="100%"
                height="344"
                src="https://www.youtube.com/embed/uM5XFRBRqnQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p className="fw-300 f-16 mb-24">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. <br /> <br />
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer
              tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
              vulputate eleifend tellus.
            </p>
            <div className="mt-24 event-board mb-24">
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
                      Jamie Evergreen
                    </p>
                  </div>
                </div>
                <button className="btn-transparent gray">Unfollow</button>
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
                <p className="f-16 fw-300 mb-3">
                  Do you want to invite your friends to join as well?
                </p>
                <button className="app-btn gray-btn bg-teal max-254 mt-0">
                  Send them an Invite now
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/attend-now-1@3x.png" alt="image-1" />
            <img src="/images/attend-now-2@3x.png" alt="image-2" />
            <img src="/images/attend-now-3@3x.png" alt="image-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendNow;
