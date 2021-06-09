import React from "react";

const FooterComp = () => {
  return (
    <div className="footer mt-1">
      <div>
        <div className="inner">
          <div className="comp">
            <div className="comp-1">
              <img src="/images/dinnygreen-logo2 1 (1).svg" alt="" />
            </div>
            <p className="comp-2">
              Replenish his third creature and meet <br /> blessed void a fruit
              gathered you 're, <br /> they 're two waters own morning gathered
              greater.
            </p>
          </div>
          <div className="cover">
            <div className="portion-1">
              <p className="us"> About - Us </p> <hr className="m-0 mb-2" />
              <ul className="units p-0">
                <li className="unit"> Affiliates </li>
                <li className="unit"> Partners </li>
                <li className="unit"> Reviews </li>
                <li className="unit"> Blogs </li>
              </ul>
            </div>
            <div className="portion-2">
              <p className="category"> Popular Classes </p>
              <hr className="m-0 mb-2" />
              <ul className="grades p-0">
                <li className="grade"> Creche </li>
                <li className="grade"> Primary </li>
                <li className="grade"> Secondary </li>
                <li className="grade"> High - School </li>
              </ul>
            </div>
            <div className="portion-3">
              <p className="news"> NewsLetter </p> <hr className="m-0 mb-2" />
              <p className="subscribe">
                Sign - up to news letter to get <br /> latest updates
              </p>
              <div className="wrapper">
                <input
                  className="action"
                  placeholder="Enter Email Address"
                ></input>
                <div className="pointer">
                  <i className="fas fa-mouse-pointer symbol-1 pl-2"> </i>
                </div>
              </div>
              <div className="social-icons">
                <i className="fab fa-facebook-f symbol pl-2 m-0"> </i>
                <i className="fab fa-twitter i-2 symbol pl-2 m-0"> </i>
                <i className="fab fa-linkedin symbol pl-2 m-0"> </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
