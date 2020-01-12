import React from "react";
import "../../src/index.css";
const Footer = () => {

  return (
   
    <footer className="flex container">
      <div className="flex1">
        <h4 className="font-weight-bold text-uppercase">Khem Raj Neupane</h4>

        <ul className="list-unstyled">
          <li>
            <p>
              <i className="fas fa-home"></i> Tammistonkatu 23, Vantaa Finland
            </p>
          </li>
          <li>
            <p>
               <a href = "mailto:shekharneupane@gmail.com" ><i className="fas fa-envelope"> shekharneupane@gmail.com</i></a>
            </p>
          </li>
          <li>
            <p>
            <i className="fas fa-phone"> +358443399988</i>

            </p>

          </li>
          <li>
          <p>&copy;2018 Khem Raj Neupane</p>
          </li>
        </ul>
      </div>
      <div className="flex2">
        <span>My Links:</span>
        <ul className="list-unstyled">
          <li>
            <a
              className="nav-link"
              href="http://myy.haaga-helia.fi/~a1800727/DigitalServiceTask/NepalFinlandAssignment/NepalAssignment/NepalWebsiteTemp/NepalWebsiteTemp.html"
              target="blank"
            >
              {" "}
              Finland <i className="fas fa-link"></i> Nepal
            </a>
          </li>
          <br />
          <li>
            <a href="https://www.haaga-helia.fi/fi/etusivu" target="blank">
              <i className="fas fa-school"></i> School
            </a>
          </li>
          <br />
          <li>
            <a href="CV.pdf" target="_blank">
              <i className="fa fa-file-code"></i> CV Link{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="flex2">
        <ul className="list-unstyled">
          <li>
            <a
              href=" https://github.com/khemrajneupane"
              target="_blank"
              className="fa fa-github"
            ></a>
          </li>
          <li>
            <a
              href="https://twitter.com/khemraj_neupane"
              target="blank"
              className="fa fa-twitter"
            ></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/khem-raj-neupane-3a3172176/"
              target="blank"
              className="fa fa-linkedin li"
            ></a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="fa fa-facebook fbk"
              target="blank"
            ></a>
          </li>
          <li>

          </li>
        </ul>
      </div>

      
    </footer>
  
  );
};
export default Footer;
