import React from "react";
import "../../src/index.css";
import SendMessage from "../components/SendMessage";
import GoogleMaps from "./GoogleMap";

const styles = {
  height: "100%",
  width: "100%",
  border: "5px solid lightgrey",
  marginBottom: "10px",
  backgroundColor: "#f0edeb"
};
const Footer = ({ setNotification }) => (
  <footer className="page-footer font-small stylish-color-dark pt-4">
    <div className="container text-center text-md-left">
      <div className="row">
        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-2 mx-auto">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
          </ul>
        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-2 mx-auto">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

          <ul className="list-unstyled">
            <li>
              <a href="https://www.haaga-helia.fi/fi/etusivu" target="blank">
                <i className="fas fa-school"></i> School
              </a>
            </li>
          </ul>
        </div>

        <hr className="clearfix w-100 d-md-none" />

        <div className="col-md-2 mx-auto">
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

          <ul className="list-unstyled">
            <li>
              <a
                className="nav-link"
                href="http://myy.haaga-helia.fi/~a1800727/DigitalServiceTask/NepalFinlandAssignment/NepalAssignment/NepalWebsiteTemp/NepalWebsiteTemp.html"
                target="blank"
              >
                Finland <i className="fas fa-link"></i> Nepal
              </a>
            </li>
          </ul>
        </div>

        <hr />

        <hr />

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

        <div className="col-md-5 mx-auto">
          <div>
            <GoogleMaps />
          </div>
          <p>
            <i
              className="fas fa-map-marker-alt fa-2x"
              style={{ fontSize: 25, color: `red` }}
            ></i>
            Tammistonkatu 23, A5 Vantaa Finland
          </p>

          <p>
            <i className="fas fa-phone mt-4 fa-2x "></i>
            <a href="tel:+358443399988">+ 358443399988</a>

            <i className="fas fa-envelope mt-4 fa-2x">
              <a href="mailto:shekharneupane@gmail.com">
                shekharneupane@gmail.com
              </a>
            </i>
          </p>
        </div>

        <hr />
        <div className="col-md-7 mx-auto">
          <SendMessage setNotification={setNotification} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
