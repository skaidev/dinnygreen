import React from "react";
import "./styles/index.scss";
import "bootstrap/dist/js/bootstrap";
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="main-app">
      <HeaderComp />
      <>
        <div className="intro">
          <div className="texts container">
            <p className="text-1 fw-bold">
              Give Your Child A <br /> Chance To Be Unique
            </p>
            <p className="text-2">
              Experts agree that a child’s personality doesn’t fully form until{" "}
              they are in elementary school.
            </p>
            <p className="text-3">
              <a href=".">Sign in</a> to enroll your child
            </p>
            <div className="btn-controller d-flex">
              <a href=".">
                <button className=" px-3 py-2 rounded btn-sign text-light my-3">
                  Sign up
                </button>
              </a>
              <a href=".">
                <button className="px-3 py-2 rounded mx-3  my-3 btn-learn">
                  Learn more
                </button>
              </a>
            </div>
          </div>
          <div className="blur"></div>
        </div>
        <div className="learning d-flex flex-column flex-md-row container">
          <div className="girl">
            <img
              src="/images/dinny 3.png"
              alt=""
              className="rounded-circle my-3"
            />
          </div>
          <div className="contents py-4">
            <p className="content-1">
              Advanced Learning System Around the World
            </p>
            <p className="content-2">
              We have made a collaborative effort in bringing together
              scientific expertise from other countries, steered jointly by
              their governments on the basis of shared,
              <br /> policy-driven interests.
            </p>
            <div className="numbers d-flex">
              <div className="d-flex flex-column border-end ">
                <span className="num-1"> 25K+ </span>
                <p className="phrase-1 mx-3">Teachers</p>
              </div>
              <div className="d-flex flex-column  mx-3 border-end">
                <span className="num-1 ">74K+</span>
                <p className="phrase-1 mx-2">Active Courses</p>
              </div>
              <div className="d-flex flex-column">
                <span className="num-1">250</span>
                <p className="phrase-1">Extra Curricular</p>
              </div>
            </div>
            <div className="learn">
              <a href=".">
                <button className="px-3 py-2 rounded mx-3 btn-success text-light border-0 my-4">
                  Learn more
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="features container">
          <div className="wrapper">
            <p className="text-center fs-2 text-light sub-heading">
              Our Features
            </p>
            <p className="text-center mb-4 fs-6 text-light">
              Dinny Green International School is nurtured in grace and truth,
              raising green,
              <br /> flourishing and successful children.
            </p>
            <div className="container py-5">
              <div className="row row-cols-1 row-cols-md-2 g-4 ">
                <div className="col ">
                  <div className="card h-100">
                    <div
                      className="card-body align-items-center d-flex"
                      style={{ gap: "1rem" }}
                    >
                      <div className="circle-1"></div>
                      <div className="d-flex  flex-column">
                        <p className="card-title text-success">
                          Awesome-Teachers
                        </p>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur <br />
                          adipisicing elit, sed do eiusmod ukkf
                          <br /> tempor incididunt u.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card h-100">
                    <div
                      className="card-body align-items-center d-flex"
                      style={{ gap: "1rem" }}
                    >
                      <div className="circle-1"></div>
                      <div className="d-flex flex-column">
                        <p className="card-title text-success">
                          Global-Recognition
                        </p>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur <br />{" "}
                          adipisicing elit. sed do eiusmod ukkf <br />
                          tempor incididunt u.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div
                      className="card-body align-items-center d-flex"
                      style={{ gap: "1rem" }}
                    >
                      <div className="circle-1"></div>
                      <div className="d-flex flex-column">
                        <p className="card-title text-success">
                          Extra-Curricular Activities
                        </p>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur <br />{" "}
                          adipisicing elit. sed do eiusmod ukkf
                          <br /> tempor incididunt u.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div
                      className="card-body align-items-center d-flex "
                      style={{ gap: "1rem" }}
                    >
                      <div className="circle-1"></div>
                      <div className="d-flex flex-column ">
                        <p className="card-title text-success">
                          Government-Approved
                        </p>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur
                          <br /> adipisicing elit. sed do eiusmod ukkf <br />{" "}
                          tempor incididunt u.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="facets-wrap py-5">
          <div className="container facets d-flex flex-column flex-md-row">
            <div className="left-wing ">
              <p className="theme">
                Find Out More About <br />
                Our Learning Experience
              </p>
              <p className="wording">
                We have built hospitals, arranged doctor appointments have the
                diagnose and treat yourem ipsu r aol ad meniam, quis nostrud
                exercitation.
              </p>
              <ul className="details m-0 p-0">
                <li className="detail-1">
                  <i className="fas fa-check"></i>Culture in diversity
                </li>
                <li className="detail-1">
                  <i className="fas fa-check"></i>
                  We have built hospitals, arranged doctor.
                </li>
                <li className="detail-1">
                  <i className="fas fa-check"></i>
                  We have built hospitals, arranged doctor.
                </li>
              </ul>
              <div className="learn">
                <a href=".">
                  <button className="px-3 py-2 rounded btn-success text-light border-0 my-4 ">
                    Learn more
                  </button>
                </a>
              </div>
            </div>
            <div className="right-wing d-flex  align-items-center">
              <img src="/images/Mask Group (2).png" alt="" />
            </div>
          </div>
        </div>
        <div className="popular">
          <div className="container pt-5">
            <div className="inner">
              <p className="text-center fs-2 text-heading">Popular Classes</p>
              <p className="text-center mb-4 text-paragraph">
                We have built hospitals, arranged doctor appointments have the
                diagnose and treat <br /> yourem ipsu r aol ad meniam, quis
                nostrud exercitation.
              </p>
            </div>
            <div className="container d-flex cover">
              <Slider />
            </div>
            <button className="btn btn-success my-4 px-5 py-3 d-block mx-auto text-light">
              View all courses
            </button>
          </div>
        </div>
        <div className="about">
          <div className="container pt-5">
            <p className="text-center fs-2 caption">
              Find Out How We Help Students
            </p>
            <p className="text-center fact">
              authentic ‘voice and choice’ matter and a big part of this is
              leaving ‘room for interpretation’ in the assignment. Those gray
              areas
              <br /> can confuse students unaccustomed to agency and choice, but
              once they become comfortable with it, it can be a significant
              <br />
              factor in helping them show what their ‘best’ actually is.
            </p>
            <div className="photo justify-content-center">
              <img src="/images/Mask Group (1).png" alt="" />
              <div className="play">
                <i className="fas fa-play fa-2x"> </i>
              </div>
            </div>
          </div>
        </div>
        <div className="success py-3">
          <div className="container coverlet pt-3">
            <div>
              <p className="text-center fa-2x pt-4"> Success Stories </p>
            </div>
            <div className="pictures d-flex justify-content-between align-items-center ">
              <div className="circle-1">
                <img src="/images/Ellipse 21.png" alt="" className="ellipse" />
              </div>
              <div className="circle-2">
                <img
                  className="singh "
                  src="/images/yogendra-singh-jWGNA5VIMRg-unsplash 1.png"
                  alt=""
                />
              </div>
              <div className="circle-3">
                <img
                  className="timothy"
                  src="images/james-timothy-m8uLhKTiL8Y-unsplash 1.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <p className="text-center my-4 write-up">
                We have built hospitals, arranged doctor appointments have the
                diagnose and treat yourem ipsu raol ad <br /> meniam, quis
                nostrud exercitation.We doctor appointments have te diagnose and
                treat yourem ipsu r <br /> exercitation docts and have the
                diagnose
              </p>
            </div>
          </div>
        </div>
        <div className="staffs py-5">
          <div className="container">
            <div className="staff-inner">
              <div className="compliments">
                <p className="workers text-center text-success pt-5 fa-2x">
                  Our Instructors & Teachers
                </p>
                <p className="item-1 text-center ">
                  We have the best teachers and Instructors that will be able to
                  train your kids, making <br />
                  them creative, God - fearing, Respectfull and Intelligent.
                </p>
              </div>
              <div className="photographs row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                <div className="col photographs--main">
                  <div className="card photographs--main_card first h-100">
                    <div className="photographs--main_card-cover  d-flex py-4">
                      <div className="container py-2 topics">
                        <button className="btn px-5 py-3 btn-secondary mb-3 text-success">
                          Full time
                        </button>
                        <p className="mb-3 text-light mid-line">
                          Doctor appointments have the diagnose
                        </p>
                        <div className="last-line d-flex text-light">
                          <i className="fas fa-calendar-alt"></i>
                          <span className="date">28th April 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col photographs--main">
                  <div className="card photographs--main_card second h-100">
                    <div className="photographs--main_card-cover  d-flex py-4">
                      <div className="container py-2 topics">
                        <button className="btn px-5 py-3 btn-secondary mb-3 text-success">
                          Full time
                        </button>
                        <p className="mb-3 text-light">
                          Doctor appointments have the diagnose
                        </p>
                        <div className="last-line d-flex text-light">
                          <i className="fas fa-calendar-alt"></i>
                          <span className="">28th April 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col photographs--main">
                  <div className="card photographs--main_card third h-100">
                    <div className="photographs--main_card-cover   d-flex py-4">
                      <div className="container py-2 topics">
                        <button className="btn px-5 py-3 btn-secondary mb-3 text-success">
                          Full time
                        </button>
                        <p className="mb-3 text-light">
                          Doctor appointments have the diagnose
                        </p>
                        <div className="last-line d-flex text-light">
                          <i className="fas fa-calendar-alt"></i>
                          <span className="">28th April 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <div className="container">
            <div className="action">
              <p className="text-center contact"> Contact - Us </p>
              <div className="container align-items-center">
                <form action="" className="px-5">
                  <div className="row mb-2 inputs justify-content-between">
                    <input
                      type="text"
                      placeholder="Name"
                      className="col-md-6 mb-2 mb-md-0 form-control"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="col-md-6 mb-2 mb-md-0  form-control"
                    />
                  </div>
                  <div className="row mb-2 justify-content-between">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="col-md-6 mb-2 mb-md-0 form-control"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="col-md-6 mb-2 mb-md-0 form-control"
                    />
                  </div>
                  <div className=" mb-2 row">
                    <textarea
                      rows="10"
                      placeholder="Message"
                      className="form-control w-100"
                    ></textarea>
                    <div className=" mx-auto my-5 send">
                      <button href="." className="btn btn-success text-light">
                        Send now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
      <FooterComp />
    </div>
  );
};

export default App;
