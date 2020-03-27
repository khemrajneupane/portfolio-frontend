import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { Table } from "react-bootstrap";

import { Typography, Tooltip, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WorkExperienceList = ({ workexperience, deleteExperience, allusers }) => {
  const thisUser = window.localStorage.getItem("loggedUser");
  const thisUserName = JSON.parse(thisUser).username;
  const allUsrs = allusers.map(u => u.id);

  return (
    <div className="container">
      <Typography
        align="center"
        text="textPrimary"
      >{`Hello ${thisUserName.toUpperCase()}!`}</Typography>

      <Table striped bordered hover varient="dark">
        <thead></thead>
        <tbody>
          <tr className="text-secondary">
            <th>Job Title</th>
            <th>Company Name</th>
            <th>Remove</th>
          </tr>
          {workexperience.map(list => {
            const isLogged = allUsrs.indexOf(list.user);
            return (
              <tr key={list.id}>
                <th>{list.job_title}</th>
                <td id={`company_${list.id}`}>
                  <Link to={`/workexperience/${list.id}`}>{list.company} </Link>
                </td>
                <td>
                  <Tooltip
                    arrow={true}
                    placement="bottom-start"
                    title={<Typography>Delete??</Typography>}
                  >
                    <IconButton
                      id={`del_${list.id}`}
                      aria-label="delete"
                      color="primary"
                      onClick={() => deleteExperience(list)}
                    >
                      <DeleteIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default WorkExperienceList;
