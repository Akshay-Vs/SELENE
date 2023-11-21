import React from "react";

const Heading = () => {
  return (
    <div className="heading">
      <h1>Popular products</h1>
      <div className="side-filter">
        <div className="wrapper">
          <div className="current">
            <div className="item">
              <img src="https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/4f9684b790a78d2ad48602ec5021b7a8/d/l/dl01-10219_7_.webp" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="63"
                viewBox="0 0 35 63"
                fill="none"
              >
                <path
                  d="M3.38291 1.23793C2.11089 0.0204279 0 0.921994 0 2.68277V60.3172C0 62.078 2.1109 62.9796 3.38291 61.7621L33.4905 32.9448C34.3133 32.1573 34.3133 30.8427 33.4905 30.0552L3.38291 1.23793Z"
                  fill="#F8F8F8"
                />
              </svg>
            </div>
          </div>
          <div className="group">
            <div className="item">
              <img src="https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/a64c8e9cfc5e68c438191ffc2c6ad677/h/l/hl24-10014_1_.webp" />
            </div>
            <div className="item">
              <img
                src="https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/4f9684b790a78d2ad48602ec5021b7a8/d/l/dl01-10092_3_.webp"
                alt=""
              />
            </div>
            <div className="item">
              <img
                src="https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/4f9684b790a78d2ad48602ec5021b7a8/w/l/wl34-10001_3_.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
