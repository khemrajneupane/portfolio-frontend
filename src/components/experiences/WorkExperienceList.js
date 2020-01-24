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
      >{`Hi ${thisUserName.toUpperCase()}! You can only delete your experiences!`}</Typography>

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
                <td>
                  <Link to={`/workexperience/${list.id}`}>{list.company} </Link>
                </td>
                <td>
                  {isLogged ? (
                    <Tooltip
                      arrow={true}
                      placement="bottom-start"
                      title="You can delete this because you added this item"
                    >
                      <IconButton
                        aria-label="delete"
                        color="primary"
                        onClick={() => deleteExperience(list)}
                      >
                        <DeleteIcon fontSize="large" />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      arrow={true}
                      placement="bottom-start"
                      title="Not your item, cannot delete this"
                    >
                      <IconButton
                        aria-label="delete"
                        color="secondary"
                        onClick={() => {
                          toast.success(
                            `${thisUserName.toUpperCase()}, ${
                              list.job_title
                            } 's job in ${list.company} is NOT your job.`,
                            {
                              position: toast.POSITION.TOP_RIGHT
                            }
                          );
                        }}
                      >
                        <DeleteIcon fontSize="large" />
                      </IconButton>
                    </Tooltip>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
export default WorkExperienceList;
