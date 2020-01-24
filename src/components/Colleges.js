import React from "react";
import { Typography } from "@material-ui/core";

const Colleges = () => {
  return (
    <div className="container">
      <Typography variant="h3" component="p">
        My Skills Mapping
      </Typography>
      <div className="progress">
        <div
          className="progress-bar bg-danger progress-bar-striped"
          role="progressbar"
          style={{ width: "80%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="80"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Java
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: "90%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="90"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          JavaScript
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: "75%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Express
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: "75%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Node JS
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "95%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="95"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          ReactJS
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "50%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          PHP
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: "55%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="55"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Python
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: "60%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          C++
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: "80%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="80"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Robot Framework
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "74%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="74"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Selenium Library
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "86%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="86"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Mocha,Chai,Jest
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: "97%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="97"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          CSS
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-warning"
          role="progressbar"
          style={{ width: "98%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="98"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          HTML 5
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "79%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="79"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Microsoft SQL Server DB
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar bg-danger progress-bar-striped"
          role="progressbar"
          style={{ width: "76%", textAlign: "right", letterSpacing: "6px" }}
          aria-valuenow="76"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Mongo DB
        </div>
      </div>
    </div>
  );
};

export default Colleges;
