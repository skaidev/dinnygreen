import React from "react";

const HeaderComp = () => {
  return (
    <header>
      <div className="appendix">
        <div className="container d-flex justify-content-between">
          <div className="contact d-flex pt-3">
            <p className="number color">Call:+2349012624162</p>
            <p className="email ml-4 color">Support: info@yourcompany.com</p>
          </div>
          <div className="infos pt-3">
            <a href="." className="info-1  color">
              Login
            </a>
            <a href="." className="info-2 btn-color ml-4">
              Register
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <nav className="nav-brand d-flex">
          <div className="logo-sec">
            <img src="../images/dinnygreen-logo2 1 (1).svg" alt="" />
          </div>
          <ul className="nav-links mb0 ">
            <li>
              {" "}
              <a href="/" className="active">
                Home
              </a>
            </li>{" "}
            <li>
              <a href="." className="links">
                {" "}
                About
              </a>
            </li>{" "}
            <li>
              {" "}
              <a href="." className="links">
                Services
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="." className="links">
                Instructors
              </a>
            </li>{" "}
            <li>
              {" "}
              <a href="." className="links">
                Courses
              </a>
            </li>{" "}
            <li>
              {" "}
              <a href="." className="links">
                Blog
              </a>
            </li>{" "}
            <a href="." className="btn contact btn-color">
              {" "}
              contact{" "}
            </a>{" "}
          </ul>{" "}
        </nav>{" "}
      </div>{" "}
      <div className="body">
        <div className="container  ">
          <div className="overlay-1"></div>
          <p className="phrase-1">
            Give Your Child <br /> A Chance To Be Unique
          </p>
          <p className="phrase-2">
            Experts agree that a child's future doesnt fully form <br /> untill
            they are in elementary school. <br />
            <p className="phrase-3">
              <a href=".">Sign in</a>
              &nbsp; to enroll your child
            </p>
          </p>

          <a href="." className="btn-sign btn-color mr-4">
            Sign up
          </a>
          <a href="." className="btn-learn btn-color ml-4">
            Learn more
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderComp;
