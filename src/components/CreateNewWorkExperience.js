import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../../src/index.css";
const CreateNewWorkExperience = props => {
  const [job_title, setJob_title] = useState("");
  const [company, setCompany] = useState("");

  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewWork({
      job_title,
      company,
      start_date,
      end_date,
      responsibilities,
      rating
    });
    props.history.push("/");
  };
  return (
    <div className="container">
      <h2>Add Work Experiences</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form-control"
            name="job_title"
            value={job_title}
            type="text"
            placeholder="job title"
            onChange={e => setJob_title(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="company"
            value={company}
            type="text"
            placeholder="company name"
            onChange={e => setCompany(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="start_date"
            value={start_date}
            type="date"
            placeholder="start date"
            onChange={e => setStart_date(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="end_date"
            value={end_date}
            type="date"
            placeholder="end date"
            onChange={e => setEnd_date(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="responsibilities"
            value={responsibilities}
            type="text"
            placeholder="job responsibilities"
            onChange={e => setResponsibilities(e.target.value)}
          />
        </div>

        <div>
          <input
            className="form-control"
            name="rating"
            value={rating}
            type="number"
            placeholder="rate this wexperience [1-5]"
            onChange={e => setRating(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};
const WithRouterCreateWorkExperience = withRouter(CreateNewWorkExperience);
export default WithRouterCreateWorkExperience;
