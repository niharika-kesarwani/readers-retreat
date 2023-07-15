import React from "react";
import "./PrimaryCard.css";
import { TruncUtil } from "../../../Utils";

const PrimaryCard = (props) => {
  const { className, children } = props;
  const classes =
    "primary-card rounded-lg p-4 bg-[#8EC5FC] relative overflow-hidden flex justify-center items-center min-w-[296px] max-w-[296px]" +
    className;
  return (
    <article className={classes}>
      <span className="primary-card-index absolute left-0 top-0 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#000]"></span>
      <span className="absolute left-0 top-0 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#000] pl-10 pt-10 text-xl text-50">
        {props.rollNumber}
      </span>
      <h3 className="text-xl capitalize">{TruncUtil(props.name, 12)}</h3>
      <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl capitalize text-[#fff]">
        {TruncUtil(props.name, 12)}
      </h3>
    </article>
  );
};

export default PrimaryCard;

// 80px =>
