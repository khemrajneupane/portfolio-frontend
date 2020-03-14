import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { Table } from "react-bootstrap";
import { Typography, Tooltip, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PortfolioList = ({ portfolio, deleteList, allusers }) => {
  const thisUser = window.localStorage.getItem("loggedUser");
  const thisUserName = JSON.parse(thisUser).username;
  const allUsrs = allusers.map(u => u.id);

  return (
    <div className="container">
      <Typography
        align="center"
        text="textPrimary"
      >{`Hi ${thisUserName.toUpperCase()}! You can only delete your projects!`}</Typography>

      <Table striped bordered hover varient="dark">
        <thead></thead>
        <tbody>
          <tr className="bg-primary">
            <th>Technology</th>
            <th>App Description</th>
            <th>Remove</th>
          </tr>
          {portfolio.map(list => {
            const isLogged = allUsrs.indexOf(list.user);
            //const isLogged = list.user.username.indexOf(props.user) > -1
            //console.log("isLogged ", list.username)
            return (
              <tr key={list.id}>
                <th>{list.technology}</th>
                <td id={`desc_${list.id}`}>
                  <Link key={list.id} to={`/portfolio/${list.id}`}>
                    {list.content}{" "}
                  </Link>
                </td>
                 
                <td>
                  
                     <Tooltip
                      arrow={true}
                      placement="bottom-start"
                      title="Delete?"
                    >
                   
                      <IconButton
                      id={`del_${list.id}`}
                        aria-label="delete"
                        color="primary"
                        onClick={() => deleteList(list)}
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
      <ToastContainer autoClose={2000} />
    </div>
  );
};
export default PortfolioList;
