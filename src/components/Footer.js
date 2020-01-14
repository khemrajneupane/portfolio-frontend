import React from "react";
import "../../src/index.css";
import SendMessage from '../components/SendMessage';
const styles = {
  height: "100%",
  width: "100%",
  border: "5px solid lightgrey",
  marginBottom: "10px",
  backgroundColor: "#f0edeb"
};
const Footer = () => (


  <footer className="page-footer font-small stylish-color-dark pt-4">


    <div className="container text-center text-md-left">


      <div className="row">


        <div className="col-md-4 mx-auto">


          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Mailing Address</h5>
          <p><i className="fas fa-home"></i> Tammistonkatu 23, Vantaa Finland &nbsp; <i className="fas fa-phone"> +358443399988</i><a href="mailto:shekharneupane@gmail.com">
                 shekharneupane@gmail.com<i className="fas fa-envelope"> </i>
              </a></p>
            {<SendMessage />}

        </div>


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
              {" "}
              Finland <i className="fas fa-link"></i> Nepal
            </a>
                </li>
              
              </ul>

            </div>
     

   

  


        <hr />
<div>

        <ul className="list-unstyled list-inline text-center py-2">
          <li className="list-inline-item">
            <h5 className="mb-1">Interested ?</h5>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="btn btn-danger btn-rounded">Send Email</a>
          </li>
        </ul>
</div>

        <hr />

<div>
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

        <div className="footer-copyright text-center py-3">© 2020 Khem Raj Neupane
    
        </div>
  
</div>
</div>
</footer>
);
      
export default Footer;
      
              {/*{<footer className="flex container">
      <div>
        <h4 className="font-weight-bold text-uppercase">Khem Raj Neupane</h4>

        <ul className="list-unstyled">
          <li>
            <p>
              <i className="fas fa-home"></i> Tammistonkatu 23, Vantaa Finland
            </p>
          </li>
          <li>
            <p>
              <a href="mailto:shekharneupane@gmail.com">
                <i className="fas fa-envelope"> shekharneupane@gmail.com</i>
              </a>
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
      <div>
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
      <div>
        <ul className="list-unstyled">
          <li>
            <a href=" https://github.com/khemrajneupane" target="blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/khemraj_neupane" target="blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/khem-raj-neupane-3a3172176/"
              target="blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="blank">
              <i className="fa fa-facebook fbk"></i>
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </footer>
  );}*/}

