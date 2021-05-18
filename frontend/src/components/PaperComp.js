import React from "react";

const PaperComp = ({
  img,
  vec,
  lessons,
  pic,
  Dates,
  Class,
  explanation,
  enroll,
}) => {
  return (
    <div className="papers pt-5 ml-5" style={{ backgroundColor: "#f9fcfe" }}>
      <div className="img-1 ml-5">
        <img src={img} alt="" className="pb-4" />
      </div>
      <div className="wordings-1 d-flex  ">
        <div className="d-flex pr-2  justify-content-center">
          <img src={vec} alt="" className="pr-2 mb-3 ml-2" />
          <p className="ml-1">{lessons}</p>
        </div>
        <div className="d-flex">
          <img src={pic} alt="" className="mb-3 ml-1" />
          <p className="pl-2 ml-2">{Dates}</p>
        </div>
      </div>
      <div className="wordings-2 ">
        <p className="text-center" style={{ color: "#038C33" }}>
          {Class}
        </p>
        <p className="text-center">{explanation}</p>
        <a href="." className="btn btn-color w-100 h-25 text-light mr-4 ">
          {enroll}
          <i className="fas fa-arrow-right ml-4"></i>
        </a>
      </div>
    </div>
  );
};

export default PaperComp;
