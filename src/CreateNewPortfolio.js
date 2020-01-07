import React, { useState } from "react";
import { withRouter } from "react-router-dom";
const CreateNewPortfolio = props => {
  const [content, setContent] = useState("");
  const [technology, settechnology] = useState("");
  const [info, setInfo] = useState("");
  const [type, setType] = useState("");

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
    console.log("from addNew function");
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            name="content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div>
          technology
          <input
            name="technology"
            value={technology}
            onChange={e => settechnology(e.target.value)}
          />
        </div>
        <div>
          url for more info
          <input
            name="info"
            value={info}
            onChange={e => setInfo(e.target.value)}
          />
        </div>
        <div>
          type of technology
          <input
            name="type"
            value={type}
            onChange={e => setType(e.target.value)}
          />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};
const WithRouterCreate = withRouter(CreateNewPortfolio);
export default WithRouterCreate;
