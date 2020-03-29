import React from "react";
import { Typography } from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Rating from "@material-ui/lab/Rating";


const PortfolioFlippy = ({ portfolio }) => {
  const styles = {
    cards: {
      height: 'inherit',
      margin: '0 auto',
      overflow: 'auto',
      backgroundColor: '#41669d'

    },
    flippy: {
      width: '18rem',
      margin: "15px"
    }
  }
  return (
    <div className="container">
      <Typography variant="h3" component="p">
        Projects
      </Typography>

      <CardDeck>
        {portfolio.map(list => {
          return (<Flippy
            flipOnHover={true}
            flipOnClick={false}
            flipDirection="vertical"
            style={styles.flippy}

          >

            <FrontSide>
              <Card style={styles.cards} text="light">
                <Card.Body>
                  <Card.Title>{`${list.type} Project`}</Card.Title>
                  <Card.Text>
                    {`Used Technologies- ${list.technology}`}
                  </Card.Text>

                </Card.Body>
              </Card>
            </FrontSide>

            <BackSide>
              <Card style={styles.cards} text="light">

                <Card.Body>

                  <Card.Title><a style={{ color: 'white' }} href={list.info} target="blank">{`Follow this ${list.type} Project`}</a></Card.Title>
                  <Card.Text>
                    <small>{`About- ${list.content}`}</small>
                    <Link to="/portfolio" style={{ color: 'yellow' }}>  More</Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </BackSide>

          </Flippy>)
        })}

      </CardDeck>
    </div>
  );
};


const Colleges = ({ workexperience, portfolio }) => {
  const styles = {
    cards: {

      height: 'inherit',
      margin: '0 auto',
      overflow: 'auto'

    },
    flippy: {
      width: '16rem',
      margin: "15px",


    }
  }
  return (
    <div className="container">
      <Typography variant="h3" component="p">
        Experiences
      </Typography>

      <CardDeck>
        {workexperience.map(list => {
          return (<Flippy
            flipOnHover={true}
            flipOnClick={false}
            flipDirection="vertical"
            style={styles.flippy}

          >
 
                

            <FrontSide>
              <Card style={styles.cards} bg="secondary" text="black">
                <Card.Body>
              <Card.Title>
                  {list.company}{" "}
                  {<Rating
                  name="read-only"
                  value={list.rating}
                  readOnly
                />}
                </Card.Title>
                  <Card.Text>
                    {list.job_title} <br />
                    <small>{`${list.start_date} to ${list.end_date}`}</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </FrontSide>

            <BackSide>
              <Card style={styles.cards} bg="info" text="light">

                <Card.Body>
                  <Card.Title>Responsibilities:</Card.Title>
                  <Card.Text>
                    <small>{list.responsibilities}</small>
                    <Link to="/workexperience" style={{ color: 'yellow' }}>  More</Link>
                  </Card.Text>

                </Card.Body>
              </Card>
            </BackSide>

          </Flippy>)
        })}
        <PortfolioFlippy portfolio={portfolio} />
      </CardDeck>
    </div>
  );
};

export default Colleges;
