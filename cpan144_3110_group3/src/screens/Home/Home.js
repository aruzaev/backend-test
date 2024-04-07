import "./Home.css";
import React, { useState, useEffect, useRef } from "react";

function Home() {
  const [recentSearches, setRecentSearches] = useState([]);
  const wpRef = useRef(null);

  useEffect(() => {
    // Fetch or initialize your recent searches here
    // For example, from local storage or an API
    const searches = ["Example Search 1", "Example Search 2"]; // Placeholder
    setRecentSearches(searches);
  }, []);

  useEffect(() => {
    const copy = wpRef.current.cloneNode(true);
    wpRef.current.parentNode.appendChild(copy);
  }, []);

  return (
    <div className="main-content">
      <h2>Popular Wallpapers</h2>
      <div className="slider">
        <div className="wp-slide" ref={wpRef}>
          <img
            src="https://pyxis.nymag.com/v1/imgs/d57/0bb/cacd6910aad2dcff81f39e5823a8737c7b-24-bongo-cat.rsocial.w1200.jpg"
            height="500"
            width="250"
            alt=""
          />
        </div>
        <div className="wp-slide">
          <img
            src="https://pyxis.nymag.com/v1/imgs/d57/0bb/cacd6910aad2dcff81f39e5823a8737c7b-24-bongo-cat.rsocial.w1200.jpg"
            height="500"
            width="250"
            alt=""
          />
        </div>
        <div className="wp-slide">
          <img
            src="https://pyxis.nymag.com/v1/imgs/d57/0bb/cacd6910aad2dcff81f39e5823a8737c7b-24-bongo-cat.rsocial.w1200.jpg"
            height="500"
            width="250"
            alt=""
          />
        </div>
        <div className="wp-slide">
          <img
            src="https://pyxis.nymag.com/v1/imgs/d57/0bb/cacd6910aad2dcff81f39e5823a8737c7b-24-bongo-cat.rsocial.w1200.jpg"
            height="500"
            width="250"
            alt=""
          />
        </div>
        <div className="wp-slide">
          <img
            src="https://pyxis.nymag.com/v1/imgs/d57/0bb/cacd6910aad2dcff81f39e5823a8737c7b-24-bongo-cat.rsocial.w1200.jpg"
            height="500"
            width="250"
            alt=""
          />
        </div>
        <div className="wp-slide">
          <img
            src="https://pyxis.nymag.com/v1/imgs/d57/0bb/cacd6910aad2dcff81f39e5823a8737c7b-24-bongo-cat.rsocial.w1200.jpg"
            height="500"
            width="250"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
