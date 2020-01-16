import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../../src/index.css";
const CreateNewPortfolio = props => {
 

  const handleSubmit = e => {
    e.preventDefault();
    props.addNew();
    props.history.push("/");
  };

  return (
    <div className="container">
      <h2>Add More Projects</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form-control"
            name="content"
            value={props.content}
            type="text"
            placeholder="project name or description"
            onChange={props.handleContentChange}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="technology"
            value={props.technology}
            type="text"
            placeholder="technology names"
            onChange={props.handleTechnologyChange}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="info"
            value={props.info}
            type="URL"
            placeholder="project link or URL"
            onChange={props.handleInfoChange}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="type"
            value={props.type}
            type="text"
            placeholder="full-stack, frot-end back-end"
            onChange={props.handleTypeChange}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="votes"
            value={props.votes}
            type="number"
            placeholder="rate this project [1-5]"
            onChange={props.handleVotesChange}
          />
        </div>

        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};
const WithRouterCreate = withRouter(CreateNewPortfolio);
export default WithRouterCreate;
