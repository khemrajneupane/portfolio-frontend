import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../../index.css";
const CreateNewWorkExperience = props => {
  /*
  const [job_title, setJob_title] = useState("");
  const [company, setCompany] = useState("");

  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [rating, setRating] = useState("");*/

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewWork();
    props.history.push("/");
  };

  return (
    <div className="container">
      <h2>Add Work Experiences to Your Portfolio</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form-control"
            name="job_title"
            value={props.job_title}
            type="text"
            placeholder="job title"
            onChange={props.handleJob_titleChange}
          />
        </div>

        <div>
          <input
            className="form-control"
            name="company"
            value={props.company}
            type="text"
            placeholder="company name"
            onChange={props.handleCompanyChange}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="start_date"
            value={props.start_date}
            type="date"
            placeholder="start date"
            onChange={props.handleStart_dateChange}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="end_date"
            value={props.end_date}
            type="date"
            placeholder="end date"
            onChange={props.handleEnd_dateChange}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="responsibilities"
            value={props.responsibilities}
            type="text"
            placeholder="job responsibilities"
            onChange={props.handleResponsibilityChange}
          />
        </div>

        <div>
          <input
            className="form-control"
            name="rating"
            value={props.rating}
            type="number"
            placeholder="rate this wexperience [1-5]"
            onChange={props.handleRatingChange}
          />
        </div>

        <button className="btn btn-primary">Add Experiences</button>
      </form>
    </div>
  );
};
const WithRouterCreateWorkExperience = withRouter(CreateNewWorkExperience);
export default WithRouterCreateWorkExperience;
