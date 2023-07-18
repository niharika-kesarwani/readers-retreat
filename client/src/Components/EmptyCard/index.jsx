import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainedActionBtn } from "../Actions";

const EmptyCard = (props) => {
  const navigate = useNavigate();
  const { emptyCardUrl, emptyCardTitle, emptyCardDescription, addBtnText } =
    props;

  return (
    <div className="m-auto flex flex-col gap-6">
      <div className="">
        <img src={emptyCardUrl} alt={emptyCardTitle} />
      </div>
      <div className="flex justify-center">
        <span className="text-2xl">{emptyCardDescription}</span>
      </div>
      <ContainedActionBtn
        actionHandler={() => navigate("/")}
        actionText={addBtnText}
      />
    </div>
  );
};

export default EmptyCard;
