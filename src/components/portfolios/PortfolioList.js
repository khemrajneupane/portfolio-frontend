import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { Table } from "react-bootstrap";
import { Button, Typography } from "@material-ui/core";
const PortfolioList = ({ portfolio, deleteList }) => {
  const thisUser = window.localStorage.getItem("loggedUser");

  const thisUserName = JSON.parse(thisUser).username;

  return (
    <div className="container">
      <Typography
        align="center"
        text="textPrimary"
      >{`Hi ${thisUserName.toUpperCase()}! You can only delete your portfolios!`}</Typography>

      <Table striped bordered hover varient="dark">
        <thead></thead>
        <tbody>
          <tr className="bg-primary">
            <th>Technology</th>
            <th>App Description</th>
            <th>Delete your items</th>
          </tr>
          {portfolio.map(list => {
            return (
              <tr key={list.id}>
                <th>{list.technology}</th>
                <td>
                  <Link key={list.id} to={`/portfolio/${list.id}`}>
                    {list.content}{" "}
                  </Link>
                </td>

                <td>
                  <Button onClick={() => deleteList(list)}>delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default PortfolioList;
