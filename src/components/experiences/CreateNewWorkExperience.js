import React from "react";
import { withRouter } from "react-router-dom";
import "../../index.css";
const CreateNewWorkExperience = props => {
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
            id="job-title"
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
            id="company-name"
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
            id="start-date"
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
            id="end-date"
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
            id="job-responsibilities"
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
            id="job-rating"
            className="form-control"
            name="rating"
            value={props.rating}
            type="number"
            min="1"
            max="5"           
            placeholder="rate this wexperience [1-5]"
            onChange={props.handleRatingChange}
          />
        </div>

        <button id="add-expn" className="btn btn-primary">
          Add Experiences
        </button>
      </form>
    </div>
  );
};
const WithRouterCreateWorkExperience = withRouter(CreateNewWorkExperience);
export default WithRouterCreateWorkExperience;
