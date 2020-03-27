import React from "react";
import "../../src/index.css";
import SendMessage from "../components/messages/SendMessage";
import GoogleMaps from "./GoogleMap";

const Footer = () => {
  const thisUser = window.localStorage.getItem("loggedUser");
  const thisUserName = JSON.parse(thisUser).username;

  return (
    <footer className="jumbotron container page-footer font-small stylish-color-dark pt-4">
      <div className="text-center text-md-left">
        <div className="row">
          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

            <a href="http://khem-portfolio.herokuapp.com/" target="blank">
              My Portfolio
            </a>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

            <a href="https://www.haaga-helia.fi/fi/etusivu" target="blank">
              <i className="fas fa-school"></i> School
            </a>
          </div>

          <div className="col-md-2 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

            <a
              href="http://myy.haaga-helia.fi/~a1800727/DigitalServiceTask/NepalFinlandAssignment/NepalAssignment/NepalWebsiteTemp/NepalWebsiteTemp.html"
              target="blank"
            >
              Finland <i className="fas fa-link"></i> Nepal
            </a>
          </div>

          <div className="col-md-4 mx-auto">
            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/raj.neupane/" target="blank">
                  <i className="fa fa-facebook fbk"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/khemraj_neupane" target="blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/khem-raj-neupane-3a3172176/"
                  target="blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href=" https://github.com/khemrajneupane" target="blank">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-12 mx-auto">
            <div>
              <GoogleMaps />
            </div>
            <div>
              <i
                className="fas fa-map-marker-alt fa-2x"
                style={{ fontSize: 25, color: `red` }}
              ></i>
              Tammistonkatu 23, A5 Vantaa Finland
            </div>
          </div>

          <hr />

          <div className="col-md-6 mx-auto">
            <i className="fas fa-phone">
              <a href="tel:+358443399988">{` +358443399988`}</a>
            </i>
          </div>
          <div className="col-md-6 mx-auto">
            <i className="fas fa-envelope">
              <a href="mailto:khemrjneupane@gmail.com">
                {` khemrjneupane@gmail.com`}
              </a>{" "}
            </i>
          </div>

          <div className="col-md-12 mx-auto" style={{ marginBottom: 20 }}>
            {thisUserName ? <SendMessage /> : false}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
