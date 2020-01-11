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
      votes: 0
    });
    props.history.push("/");
  };

  return (
    <div className="flex-b ">
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            className="form-control"
            name="content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div>
          technology
          <input
            className="form-control"
            name="technology"
            value={technology}
            onChange={e => settechnology(e.target.value)}
          />
        </div>
        <div>
          url for more info
          <input
            className="form-control"
            name="info"
            value={info}
            onChange={e => setInfo(e.target.value)}
          />
        </div>
        <div>
          type of technology
          <input
            className="form-control"
            name="type"
            value={type}
            onChange={e => setType(e.target.value)}
          />
        </div>
        <div>
          votes
          <input
            className="form-control"
            name="votes"
            value={votes}
            onChange={e => setVotes(e.target.value)}
          />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};
const WithRouterCreate = withRouter(CreateNewPortfolio);
export default WithRouterCreate;
