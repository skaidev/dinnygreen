import React, { useState } from "react";

const HeaderComp = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <div className="top">
        <div className="container d-flex justify-content-between">
          <div className="left d-flex my-3">
            <p>
              <span className="fw-bold">Call:</span> +234 9012624162
            </p>
            <p className="mx-3">
              <span className="fw-bold">Support: </span>info@yourcompany.com
            </p>
          </div>
          <div
            className="right d-none  d-sm-flex align-items-center my-2"
            style={{ gap: "1.5rem" }}
          >
            <a href=".">
              <button className="btn px-4">Login</button>
            </a>
            <button className="btn px-4 btn-success text-light">
              Register
            </button>
          </div>
        </div>
      </div>
      <section className="nav-bar">
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
            <a href className="nav-brand">
              <img src="../images/dinnygreen-logo2 1 (1).svg" alt="" />
            </a>
            <ul className="nav d-none d-sm-flex">
              <li className="nav-item">
                <a href="/" className="active nav-link mx-4">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="." className="nav-link link-light mx-4">
                  About
                </a>
              </li>
              <li>
                <a href="." className="nav-link link-light mx-4">
                  Services
                </a>
              </li>
              <li>
                <a href="." className="nav-link link-light mx-4">
                  Instructors
                </a>
              </li>
              <li>
                <a href="." className="nav-link link-light  mx-4">
                  Courses
                </a>
              </li>
              <li>
                <a href="." className="nav-link link-light mx-4">
                  Blog
                </a>
              </li>
            </ul>
            <button className="btn d-none d-sm-inline-block contact btn-success">
              Contact
            </button>

            <button
              className="navbar-toggler d-sm-none"
              type="button"
              onClick={() => setToggle(!toggle)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </section>
      {toggle && (
        <ul className="d-sm-none bg-teal list-group bg-primary text-light">
          <li className="list-group text-center py-1">
            <a href="." className="text-light text-decoration-none">
              Home
            </a>
          </li>
          <li className="list-group text-center py-1">
            <a href="." className="text-light text-decoration-none">
              About
            </a>
          </li>
          <li className="list-group text-center py-1">
            {" "}
            <a href="." className="text-light text-decoration-none">
              Services
            </a>
          </li>
          <li className="list-group text-center py-1">
            <a href="." className="text-light text-decoration-none">
              Instructors
            </a>
          </li>
          <li className="list-group text-center py-1">
            {" "}
            <a href="." className="text-light text-decoration-none">
              Courses
            </a>
          </li>
          <li className="list-group text-center py-1">
            <a href="." className="text-light text-decoration-none">
              Blogs
            </a>
          </li>
          <li className="list-group">
            <button className="btn d-inline-block text-light btn-success justify-content-start">
              Contact
            </button>
          </li>
          <li className="list-group">
            <button className="btn text-light">
              <a href="." className="text-light text-decoration-none">
                Login
              </a>
            </button>
          </li>
          <li className="list-group">
            <button className="btn btn-success text-light">Register</button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default HeaderComp;
