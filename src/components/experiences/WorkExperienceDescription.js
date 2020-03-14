import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const WorkExperienceDescription = ({ workexperience }) => {
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

            <td>{workexperience.start_date}</td>
            <td>{workexperience.end_date}</td>
            <td>{workexperience.responsibilities}</td>
            <td>{workexperience.votes}</td>
          </tr>
        </tbody>
      </Table>
      <div>
      <Link to ="/workexperience"><ArrowBackIosIcon color='primary'/>BACK</Link>
      
      </div>
      
    </div>
  );
};
export default WorkExperienceDescription;
