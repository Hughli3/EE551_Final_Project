import React from "react";

const Footer = () => {

    return (
      <footer className="">
        <div className="container">
          <hr/>
          <div className="row align-items-center justify-content-md-between">
            <div className="col-md-6">
              <div className="copyright">
                &copy; 2020 Zheng Li
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav nav-footer justify-content-around">
                <li key="githubLink" className="nav-item" >
                  <a href="https://github.com/Hughli3/EE551_Final_Project.git" rel="noopener noreferrer" className="nav-link" target="_blank" style={{fontSize:"16px"}}>Project Code</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;