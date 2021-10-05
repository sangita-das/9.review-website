import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="container shadow my-4 rounded p-4 ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center px-4">

          <div className="col-md-6">
            <h2 className="title mt-4">
              Build a Better You <br /> RISE TO THE CHALLENGE
            </h2>
            <p className="text-white  mt-3">
              Become part of our movement enabling you to make change happen in your career, your organization and, above all, your life.
            </p>
            <button className="m-3 about-btn mx-5 fw-bold rounded  ">JOIN US</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;