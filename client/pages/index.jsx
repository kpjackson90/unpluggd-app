import Navbar from "./navbar";
import { useState } from "react";

export default function Home() {
  const [imgs, setImgs] = useState([1, 2, 3, 4, 5]);
  const [bg, setBg] = useState("Banner");
  const [hovered, setHovered] = useState(false);

  const [categories, setCategories] = useState([
    "all",
    "art",
    "music",
    "business",
    "food",
    "animals",
    "fitness",
  ]);

  const [steps, setSteps] = useState([
    "hp-ticket1",
    "hp-ticket2",
    "hp-ticket3",
  ]);

  const [events, setEvents] = useState([
    {
      title: "30 Minute Guitar Workshop",
      img: "event-1",
      time: "May 4 - 11:00 AM",
    },
    {
      title: "Happiness Meditation with Chocolate ",
      img: "event-2",
      time: "May 5 - 5:00 PM",
    },
    {
      title: "Cello Meditation Concert",
      img: "event-3",
      time: "May 4 - 11:00 AM",
    },
    {
      title: "Cello Meditation Concert",
      img: "event-4",
      time: "May 4 - 11:00 AM",
    },
  ]);

  const styling = {
    backgroundImage: `url('/images/${bg}@3x.png')`,
  };

  const changeBg = (newBg) => {
    setBg(newBg);
    setHovered(true);
  };

  const resetBg = () => {
    setBg("Banner");
    setHovered(false);
  };

  return (
    <div
      className="home"
      style={{ backgroundImage: `url('/images/homepage-bg@3x.png')` }}
    >
      <div
        className="banner"
        style={{ backgroundImage: `url('/images/${bg}@3x.png')` }}
      >
        <Navbar />
        <div>
          {hovered == false ? (
            <div className="intro-text">
              <h6>Welcome to</h6>
              <img src="/images/logo@3x.png" alt="" />
              <p>
                The ultimate <span>event</span> site you need
              </p>
            </div>
          ) : (
            <div className="info app-width">
              <img src="/images/logo@3x.png" alt="" />
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <button className="btn-small bg-pink f-14 mb-3">
                    Popular
                  </button>
                  <h1>
                    Live Concert in <br /> Brooklyn
                  </h1>
                  <button className="btn-transparent">Learn more</button>
                </div>

                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing
                    elit. Aenean commodo ligula eget <br /> dolor. Aenean massa.
                    Cum sociis natoque <br /> penatibus et magnis dis parturient
                    montes, <br /> nascetur ridiculus mus.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="banner-imgs app-width">
          {imgs.map((img, i) => {
            return (
              <img
                key={i}
                onMouseOver={() => changeBg(img)}
                onMouseOut={resetBg}
                src={`/images/${img}@3x.png`}
                alt={img}
              />
            );
          })}
        </div>
      </div>
      <div className="category-wrap text-center app-width">
        <h6 className="text-teal">02</h6>
        <h4 className="title-h4">Explore by Category</h4>
        <div className="categories">
          {categories.map((c, i) => {
            return (
              <div key={i}>
                <img src={`/images/${c}@3x.png`} alt={c} />
                <p>{c}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="events app-width d-flex">
        <div className="width-20">
          <h6 className="text-teal">03</h6>
          <h4 className="title-h4">
            Explore <br /> New Events
          </h4>
          <div className="d-flex justify-content-between max-80 mt-4">
            <span className="f-24 arrow-right">
              <i class="fas fa-chevron-left"></i>
            </span>

            <span className="f-24 arrow-right">
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
        <div className="events-list flex-1">
          {events.map((e, i) => {
            const { title, img, time } = e;
            return (
              <div key={i} className="position-relative">
                <img src={`/images/${img}@3x.png`} alt={img} />
                <button className="btn-small bg-pink f-14 mb-3 img-button">
                  Popular
                </button>
                <p className="f-18 mt-3 mb-2 fw-300">{title}</p>
                <p className="text-teal f-14">{time}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="events app-width d-flex">
        <div className="width-20">
          <h6 className="text-teal">04</h6>
          <h4 className="title-h4">
            popular in your <br /> Country
          </h4>
          <div className="d-flex justify-content-between max-80 mt-4">
            <span className="f-24 arrow-right">
              <i class="fas fa-chevron-left"></i>
            </span>

            <span className="f-24 arrow-right">
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
        <div className="events-list flex-1">
          {events.map((e, i) => {
            const { title, img, time } = e;
            return (
              <div key={i} className="position-relative">
                <img src={`/images/${img}@3x.png`} alt={img} />
                <button className="btn-small bg-pink f-14 mb-3 img-button">
                  Popular
                </button>
                <p className="f-18 mt-3 mb-2 fw-300">{title}</p>
                <p className="text-teal f-14">{time}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="about app-width">
        <div>
          <h6 className="text-teal">About Us</h6>
          <h3 className="mb-120">Why Unpluggd?</h3>

          <div className="steps">
            <div className="text-center position-relative">
              <img src={`/images/hp-ticket1@3x.png`} />
              <span className="f-24 arrow-right">
                <i class="fas fa-chevron-right"></i>
              </span>
            </div>
            <h4 className="mb-3">Step 1</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
        <div>
          <p className="mb-120">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>

          <div className="steps">
            <div className="text-center position-relative">
              <img src={`/images/hp-ticket2@3x.png`} />
              <span className="f-24 arrow-right last">
                <i class="fas fa-chevron-right"></i>
              </span>
            </div>
            <h4 className="mb-3">Step 2</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
        <div>
          <p className="mb-120">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>

          <div className="steps">
            <div className="text-center position-relative">
              <img src={`/images/hp-ticket3@3x.png`} />
            </div>
            <h4 className="mb-3">Step 3</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </div>
      <footer className="mt-120">
        <img src="/images/logo@3x.png" alt="" />
        <div className="social-icons">
          <span>
            <i class="fab fa-facebook-f"></i>
          </span>
          <span>
            <i class="fab fa-instagram"></i>
          </span>
          <span>
            <i class="fab fa-twitter"></i>
          </span>
        </div>
        <p>Unpluggd All Rights Reserved</p>
      </footer>
    </div>
  );
}
