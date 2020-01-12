import React from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";
import { Table } from "react-bootstrap";
const WorkExperienceList = ({ workexperience }) => (
  <div className="container">
    <h2>My Work Experience Lists</h2>

    <Table striped bordered hover varient="dark">
      <thead></thead>
      <tbody>
        <tr className="bg-primary">
          <th>Job Title</th>
          <th>Company Name</th>
        </tr>
        {workexperience.map(list => (
          <tr key={list.id}>
            <th>{list.job_title}</th>
            <td>
              <Link to={`/workexperience/${list.id}`}>{list.company} </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
export default WorkExperienceList;
