import React from "react";
import "../styles/styles.scss";

const CardComp = ({ img, textheading, textparagraph }) => {
  return (
    <div className="box-1">
      <div className="circle-1">
        <img src={img} alt="" />
      </div>
      <div className="text">
        <p className="teachers">{textheading}</p>
        <p>{textparagraph}</p>
      </div>
    </div>
  );
};

export default CardComp;
