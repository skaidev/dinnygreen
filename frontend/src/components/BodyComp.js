import React from "react";
import CardComp from "./CardComp";
import { dataFour, dataOne, dataThree, dataTwo } from "./cardData";
import PaperComp from "./PaperComp";

const BodyComp = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="learning py-5">
          <div className="container env">
            {" "}
            <div className="blur"> </div>{" "}
            <section className="flex-grow-1  girl">
              <img className="girl" src="/images/dinny 3.png" alt="" />
            </section>{" "}
            <section className="flex-grow-1 texts  d-flex justify-content-end">
              <div className=" _texts">
                <p className="text-1 font-weight-bold">
                  Advanced Learning System Around the World{" "}
                </p>{" "}
                <p className="text-2">
                  We have made a collaborative effort in bringing together{" "}
                  <br />
                  scientific expertise from other countries steered jointly{" "}
                  <br />
                  by their governments on the basis of shared, <br />
                  policy driven interests{" "}
                </p>{" "}
                <div className="numbers d-flex  justify-content-between font-weight-bold">
                  <div className="d-flex flex-column borders">
                    <span> 25K+ </span>{" "}
                    <span className="text-3 pr-5"> Teachers </span>{" "}
                    <a href="." className="btn btn-color mt-4 pl-4 text-white ">
                      Learn more{" "}
                    </a>{" "}
                  </div>{" "}
                  <div className="d-flex flex-column borders">
                    <span> 75K+ </span>{" "}
                    <span className="text-4 pr-5"> Active Courses </span>{" "}
                  </div>{" "}
                  <div className="d-flex flex-column ">
                    <span> 250 </span>{" "}
                    <span className="text-5 pr-5"> Extra Curricular </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </section>{" "}
          </div>{" "}
        </div>{" "}
        <div className="features">
          <div className="container ">
            <div className="wrapper pb-5">
              <p className="words"> Our features </p>{" "}
              <p className="description">
                Dinny Green International School is nurtured in grace and truth,
                raising green <br /> flourishing and successful Children{" "}
              </p>{" "}
              <div className="bundle">
                <div className="boxes-1">
                  <CardComp {...dataOne} /> <CardComp {...dataTwo} />{" "}
                  <CardComp {...dataThree} /> <CardComp {...dataFour} />
                  {/* <div className="box-1">
                              <div className="circle-1"></div>
                              <p className="teachers">Awesome Teachers</p>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                reiciendis perferendis voluptatum quod eligendi ducimus
                                autem tempore repellendus illo libero nulla ut cupiditate
                                tenetur sed? ex?
                              </p>
                            </div>
                            <div className="box-2">
                              <p className="global"> Global Recognition</p>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                modi reiciendis perferendis voluptatum quod eligendi autem
                                tempore repellendus illo libero nulla ut cupiditate tenetur
                                sed? Praesentium, ex?
                              </p>
                            </div> */}{" "}
                </div>{" "}
                {/* <div className="boxes-2">
                            <div className="box-3">
                              <p className="extra">Extra Curricular Activities</p>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Soluta, modi reiciendis perferendis voluptatum quod eligendi
                                ducimus autem tempore repellendus illo libero nulla ut
                                cupiditate tenetur sed? Praesentium, ex?
                              </p>
                            </div>
                            <div className="box-4">
                              <p className="govt">Government Approved</p>
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Soluta, modi reiciendis perferendis voluptatum quod eligendi
                                ducimus autem tempore repellendus illo libero nulla ut
                                cupiditate tenetur sed? Praesentium, ex?
                              </p>
                            </div> */}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="contents">
          <div className="container contents-wrap d-flex ">
            <div className="narratives">
              <p className="word-1">
                Find out More About Our Learning Experience{" "}
              </p>{" "}
              <p className="word-2">
                We have built hospitals, arranged doctors appointments have the
                diagonise and treat yourem ipsu raol ad <br />
                .meniam, quis notrud exertication{" "}
              </p>{" "}
              <ul className="facets m-0 p-0 &nbsp;">
                <li className="mb-2">
                  {" "}
                  <i className="fas fa-check mr-3"> </i>Culture in diversity{" "}
                </li>{" "}
                <li className="mb-2">
                  <i className="fas fa-check mr-3"> </i>We have built Hospitals,
                  arranged doctor.{" "}
                </li>{" "}
                <li className="mb-2">
                  <i className="fas fa-check mr-3 "> </i>We have built
                  Hospitals, arranged doctor.{" "}
                </li>{" "}
                <a href="." className="btn btn-color mt-4 pl-4 text-white ">
                  Learn - more{" "}
                </a>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="picture "> </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="popular">
          <div className="container">
            <div className="contexts py-2">
              <p className="context-1"> Popular Classes </p>{" "}
              <p className="context-2">
                We have built hospitals, arranged doctors appointments have the
                diagnoses and treat <br />
                yourem ipsum raol ad meniam, quis nostrud exercitation{" "}
              </p>{" "}
              <div className="papers d-flex ">
                {" "}
                {dummyData.map((res) => (
                  <PaperComp {...res} key={res.id} />
                ))}{" "}
              </div>{" "}
              <button className="btn d-block mx-auto my-5 btn-success">
                View all courses{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="about">
          <div className="container">
            <div className="about-us">
              <div className="about-1 mt-5 ">
                <p className="elb text-center">
                  {" "}
                  Find out How we Help Students{" "}
                </p>{" "}
                <p className="text-center narrative">
                  Authentic "voice and choice" matter and a big part of this is
                  leaving 'room for interpretation' in the assignment.Those gray
                  areas can confuse students accustomed to agency and choice.but
                  once the become comfortable with it, it can be a significant{" "}
                  <br /> factor in helping them show what their best actually
                  is.{" "}
                </p>{" "}
              </div>{" "}
              <div className="photo justify-content-center">
                <img src="/images/Mask Group (1).png" alt="" />
                <div className="play">
                  <i className="fas fa-play fa-2x"> </i>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="success mt-5">
          <div className="container py-3 pl-4 pr-4">
            <div className="words">
              <p className="text-center pt-5"> Success Stories </p>{" "}
            </div>{" "}
            <div className="pictures d-flex justify-content-between align-items-center ">
              <div className="circle-1">
                <img src="/images/Ellipse 21.png" alt="" />
              </div>{" "}
              <div className="circle-2">
                <img
                  className="rounded-circle  "
                  src="/images/yogendra-singh-jWGNA5VIMRg-unsplash 1.png"
                  alt=""
                />
              </div>{" "}
              <div>
                <img
                  className="rounded-circle"
                  src="images/james-timothy-m8uLhKTiL8Y-unsplash 1.png"
                  alt=""
                />
              </div>{" "}
            </div>{" "}
            <div>
              <p className="text-center mt-5">
                We have built hospitals, arranged doctor appointments have the
                diagnose and treat yourem ipsu raol ad <br /> meniam, quis
                nostrud exercitation.We doctor appointments have te diagnose and
                treat yourem ipsu r <br /> exercitation docts and have the
                diagnose{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="staff">
          <div className="container">
            <div className="compliments">
              <p className="workers text-center pt-5">
                Our Instructors & Teachers{" "}
              </p>{" "}
              <p className="item-1 text-center ">
                We have the best teachers and Instructors that will be able to
                train your kids, making <br />
                them creative, God - fearing, Respectfull and Intelligent.{" "}
              </p>{" "}
            </div>{" "}
            <div className="photographs d-flex ">
              <div className="photograph-1 mr-4">
                <img src="/images/christina.png" alt="" />
                <div className="bg">
                  <div className="qualities-1">
                    <a href="." className="full">
                      Full time{" "}
                    </a>{" "}
                    <div className="degree-1"> Masters in Geology </div>{" "}
                    <div className="  d-flex calendar-1 ">
                      <img src="/images/icon.svg" alt="" />
                      <div className="pl-3"> 28 th April 2021 </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="photograph-2 mr-4">
                <img
                  src="/images/trust-tru-katsande-SRdK0SQjasE-unsplash 1.png"
                  alt=""
                  className="trust"
                />
                <a
                  href="."
                  className="btn btn-color mt-5 see pt-3 text-center ml-5"
                >
                  See all{" "}
                </a>{" "}
                <div className="qualities-2">
                  <a href="." className="full">
                    Full time{" "}
                  </a>{" "}
                  <div className="degree-2">
                    Doctor Appointments have the <br />
                    diagnose{" "}
                  </div>{" "}
                  <div className="  d-flex calendar-2 ">
                    <img src="/images/icon.svg" alt="" />
                    <div className="pl-3"> 28 th April 2021 </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="photograph-3 mr-4">
                <img src="/images/Rectangle 89.png" alt="" />
                <div className="qualities-3">
                  <a href="." className="full">
                    Full time{" "}
                  </a>{" "}
                  <div className="degree-3">
                    Doctor Appointments have the <br />
                    diagnose{" "}
                  </div>{" "}
                  <div className="  d-flex calendar-3 ">
                    <img src="/images/icon.svg" alt="" />
                    <div className="pl-3"> 28 th April 2021 </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="form">
          <div className="container">
            <div className="action">
              <p className="text-center contact"> Contact - Us </p>{" "}
              <div className="container">
                <form action="">
                  <div className="d-flex group-1">
                    <input
                      type="text"
                      placeholder="Name"
                      style={{ height: 48, width: 460 }}
                      className="pack-1"
                    />{" "}
                    <input
                      type="email"
                      placeholder="Email"
                      className="ml-2 pack-2"
                      style={{ height: 48, width: 460 }}
                    />{" "}
                  </div>{" "}
                  <div className="group-2">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="mt-3 pack-3"
                      style={{ height: 48, width: 460 }}
                    />{" "}
                    <input
                      type="text"
                      placeholder="Subject"
                      className="mt-3 pack-4"
                      style={{ height: 48, width: 460 }}
                    />{" "}
                  </div>{" "}
                  <textarea
                    className="mt-3 pack-5"
                    name="message"
                    id="message"
                    placeholder="Message"
                    style={{ height: 100, width: 930 }}
                  ></textarea>{" "}
                  <a
                    href="."
                    className="btn btn-color mt-5 see pt-3 text-center"
                    style={{
                      marginLeft: 400,
                      paddingLeft: 50,
                      paddingRight: 50,
                      color: "#f9fcfe",
                    }}
                  >
                    Send now{" "}
                  </a>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="footer mt-1">
          <div className="container ">
            <div className="inner">
              <div className="comp">
                <div className="comp-1">
                  <img src="/images/dinnygreen-logo2 1 (1).svg" alt="" />
                </div>{" "}
                <p className="comp-2">
                  Replenish his third creature and meet <br /> blessed void a
                  fruit gathered you 're, <br /> they 're two waters own morning
                  gathered greater.{" "}
                </p>{" "}
              </div>{" "}
              <div className="cover">
                <div className="portion-1">
                  <p className="us"> About - Us </p> <hr className="m-0 mb-2" />
                  <ul className="units p-0">
                    <li className="unit"> Affiliates </li>{" "}
                    <li className="unit"> Partners </li>{" "}
                    <li className="unit"> Reviews </li>{" "}
                    <li className="unit"> Blogs </li>{" "}
                  </ul>{" "}
                </div>{" "}
                <div className="portion-2">
                  <p className="category"> Popular Classes </p>{" "}
                  <hr className="m-0 mb-2" />
                  <ul className="grades p-0">
                    <li className="grade"> Creche </li>{" "}
                    <li className="grade"> Primary </li>{" "}
                    <li className="grade"> Secondary </li>{" "}
                    <li className="grade"> High - School </li>{" "}
                  </ul>{" "}
                </div>{" "}
                <div className="portion-3">
                  <p className="news"> NewsLetter </p>{" "}
                  <hr className="m-0 mb-2" />
                  <p className="subscribe">
                    Sign - up to news letter to get <br /> latest updates{" "}
                  </p>{" "}
                  <div className="wrapper">
                    <div className="wrap-action">
                      <p className="action"> Enter Email Address </p>{" "}
                    </div>{" "}
                    <div className="pointer">
                      <i className="fas fa-mouse-pointer symbol-1 pl-2"> </i>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="social-icons">
                    <i className="fab fa-facebook-f symbol pl-2 m-0"> </i>{" "}
                    <i className="fab fa-twitter i-2 symbol pl-2 m-0"> </i>{" "}
                    <i className="fab fa-linkedin symbol pl-2 m-0"> </i>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default BodyComp;

const dummyData = [
  {
    id: 1,
    img: "./images/img 3.png",
    vec: "/images/Vector.svg",
    lessons: "35 Lessons",
    pic: "/images/icon.svg",
    Dates: "28th April 2021",
    Class: "Creche",
    explanation:
      "For anyone validating Framer as a professional prototyping tool.",
    enroll: "Enroll Now",
  },
  {
    id: 2,
    img: "images/img 2.png",
    vec: "/images/Vector.svg",
    lessons: "35 Lessons",
    pic: "/images/icon.svg",
    Dates: "28th April 2021",
    Class: "Transition",
    explanation:
      "For anyone validating Framer as a professional prototyping tool.",
    enroll: "Enroll Now",
  },
  {
    id: 3,
    img: "images/img 1.png",
    vec: "/images/Vector.svg",
    lessons: "35 Lessons",
    pic: "/images/icon.svg",
    Dates: "28th April 2021",
    Class: "Nursery",
    explanation:
      "For anyone validating Framer as a professional prototyping tool.",
    enroll: "Enroll Now",
  },
];
