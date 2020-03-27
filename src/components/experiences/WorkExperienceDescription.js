import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Typography, Tooltip } from "@material-ui/core";
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
            <td>
              {
                <Rating
                  name="read-only"
                  value={workexperience.rating}
                  readOnly
                />
              }
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="container-flex">
        <Tooltip
          arrow={true}
          placement="bottom-start"
          title={<Typography>Previous page</Typography>}
        >
          <Link to="/workexperience">
            {" "}
            <ArrowBackIcon color="secondary" fontSize="large" />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};
export default WorkExperienceDescription;
