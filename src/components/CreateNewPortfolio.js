import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "../../src/index.css";
const CreateNewPortfolio = props => {
  const [content, setContent] = useState("");
  const [technology, settechnology] = useState("");
  const [info, setInfo] = useState("");
  const [type, setType] = useState("");
  const [votes, setVotes] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addNew({
      content,
      technology,
      info,
      type,
      votes
    });
    props.history.push("/");
  };

  return (
    <div className="container">
      <h2>Add More Profiles</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form-control"
            name="content"
            value={content}
            type="text"
            placeholder="project name or description"
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="technology"
            value={technology}
            type="text"
            placeholder="technology names"
            onChange={e => settechnology(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="info"
            value={info}
            type="URL"
            placeholder="project link or URL"
            onChange={e => setInfo(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="type"
            value={type}
            type="text"
            placeholder="full-stack, frot-end back-end"
            onChange={e => setType(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control"
            name="votes"
            value={votes}
            type="number"
            placeholder="rate this project [1-5]"
            onChange={e => setVotes(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};
const WithRouterCreate = withRouter(CreateNewPortfolio);
export default WithRouterCreate;
