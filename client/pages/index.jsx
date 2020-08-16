import Navbar from "./navbar";
import { useState } from "react";

export default function Home() {
  const [imgs, setImgs] = useState([1, 2, 3, 4, 5]);
  const [bg, setBg] = useState("Banner");

  const [categories, setCategories] = useState([
    "all",
    "art",
    "music",
    "business",
    "food",
    "animals",
    "fitness",
  ]);

  const styling = {
    backgroundImage: `url('/images/${bg}@3x.png')`,
  };

  const changeBg = (newBg) => {
    setBg(newBg);
  };

  return (
    <div className="home">
      <div
        className="banner"
        style={{ backgroundImage: `url('/images/${bg}@3x.png')` }}
      >
        <Navbar />
        <div className="intro-text">
          <h6>Welcome to</h6>
          <img src="/images/logo@3x.png" alt="" srcset="" />
          <p>
            The ultimate <span>event</span> site you need
          </p>
        </div>
        <div className="banner-imgs app-width">
          {imgs.map((img, i) => {
            return (
              <img
                key={i}
                onClick={() => changeBg(img)}
                src={`/images/${img}@3x.png`}
                alt={img}
              />
            );
          })}
        </div>
      </div>
      <div className="category-wrap text-center">
        <h6 className="text-teal">02</h6>
        <h4>Explore by Category</h4>
        <div className="categories app-width">
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
    </div>
  );
}
