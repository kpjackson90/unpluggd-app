import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Forminput from "../partials/FormInput";

const Reviews = () => {
  const [participantsImg, setParticipantsImg] = useState([
    "Host-1",
    "Host-2",
    "Host-3",
  ]);

  const router = useRouter();

  const [icons, setIcons] = useState(["art", "music"]);

  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const [allReviews, setAllReviews] = useState([
    {
      img: "Host-1",
      name: "Dan.dawg",
      time: "Jul 08, 8:44pm",
      review:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ",
    },
    {
      img: "Host-2",
      name: "steveo112",
      time: "Jul 08, 8:44pm",
      review:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    },
    {
      img: "Host-3",
      name: "scarlet.robinson",
      time: "Jul 08, 8:44pm",
      review:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    },
    {
      img: "Host-1",
      name: "Dan.dawg",
      time: "Jul 08, 8:44pm",
      review:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ",
    },
    {
      img: "Host-2",
      name: "steveo112",
      time: "Jul 08, 8:44pm",
      review:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    },
    {
      img: "Host-3",
      name: "scarlet.robinson",
      time: "Jul 08, 8:44pm",
      review:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    },
    {
      img: "Host-1",
      name: "Dan.dawg",
      time: "Jul 08, 8:44pm",
      review:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ",
    },
    {
      img: "Host-2",
      name: "steveo112",
      time: "Jul 08, 8:44pm",
      review:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    },
    {
      img: "Host-3",
      name: "scarlet.robinson",
      time: "Jul 08, 8:44pm",
      review:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    },
  ]);

  const [loadReviews, setLoadReviews] = useState([]);

  useEffect(() => {
    let getAllReviews = [...allReviews];
    getAllReviews = getAllReviews.splice(0, 3);
    setLoadReviews(getAllReviews);
  }, []);

  const loadMore = () => {
    let getAllReviews = [...allReviews];
    getAllReviews = getAllReviews.splice(0, loadReviews.length + 3);
    setLoadReviews(getAllReviews);
  };

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
              <button className="btn-transparent small w-unset border border-secondary pl-2 pr-2">
                Event completed
              </button>
            </div>
            <h4 className="f-24 fw-300 mb-12">Storytime in Scilla</h4>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  {participantsImg ? (
                    <div className="participantsImg">
                      {participantsImg.map((p, index) => {
                        return (
                          <img
                            src={`/images/${p}@3x.png`}
                            alt={p}
                            className="border-none"
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
              <div>
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
              <div className="mt-36 event-board mb-36">
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
                        Everlyn Stinson
                      </p>
                    </div>
                  </div>
                  <button className="btn-transparent max-120">Follow</button>
                </div>
              </div>
              <div className="review-section">
                <div className="d-flex justify-content-between align-items-center mb-12">
                  <div className="d-flex align-items-center">
                    <h4 className="f-24 fw-400 mb-0">Reviews</h4>
                    <div className="event-tag bg-pink ml-2">
                      <span className="fw-300">23</span>
                    </div>
                  </div>
                  {reviewSubmitted && (
                    <p className="f-16 text-pink fw-400 mb-0">
                      You have submitted your review
                    </p>
                  )}
                </div>
                {!reviewSubmitted && (
                  <div className="form-group mb-0 mb-36">
                    <textarea
                      placeholder="Tell us about how you feel with the event experience?"
                      className="app-input textarea mb-0 pt-3"
                      rows="5"
                    ></textarea>
                    <button className="btn-teal max-207 mt-1">Submit</button>
                  </div>
                )}
                <div className="reviews">
                  {loadReviews &&
                    loadReviews.map((r, i) => {
                      const { img, name, time, review } = r;
                      return (
                        <div className="mb-36" key={i}>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">
                              <div className="review-img">
                                <img
                                  src={`/images/${img}@3x.png`}
                                  alt="review"
                                />
                              </div>
                              <h4 className="f-16 fw-500 ml-2 mb-0 text-teal">
                                {name}
                              </h4>
                            </div>
                            <h4 className="f-16 fw-500 ml-2 mb-0 text-gray">
                              {time}
                            </h4>
                          </div>
                          <p className="f-16 fw-300">{review}</p>
                        </div>
                      );
                    })}
                </div>
                <p
                  className="f-16 mb-0 text-teal text-center fw-500 c-pointer"
                  onClick={loadMore}
                >
                  Load More
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/story-time@3x.png" alt="image-1" />
            <img src="/images/story-time-2@3x.png" alt="image-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
