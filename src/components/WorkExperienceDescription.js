import React from "react";
import { Table } from "react-bootstrap";
const WorkExperienceDescription = ({ workexperience }) => {
  console.log("from portfolio ", workexperience.job_title);
  return (
    <div className="container">
      <h2>{workexperience.responsibilities}</h2>
      <Table>
        <thead></thead>
        <tbody>
          <tr className="bg-primary">
            <th>Job Title</th>
            <th>Company</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Responsibilities</th>
            <th>Ratings</th>
          </tr>

          <tr className="bg-success">
            <th>{workexperience.job_title}</th>
            <td>{workexperience.company}</td>

            <td>
              {workexperience.start_date}
            </td>
            <td>
              {workexperience.end_date}
            </td>            
            <td>{workexperience.responsibilities}</td>
            <td>{workexperience.rating}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default WorkExperienceDescription;
