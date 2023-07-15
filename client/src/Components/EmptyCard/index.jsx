import React from "react";

const EmptyCard = (props) => {
  const { emptyCardUrl, emptyCardTitle, emptyCardDescription } = props;
  return (
    <div className="m-auto flex flex-col gap-6">
      <div className="">
        <img src={emptyCardUrl} alt={emptyCardTitle} />
      </div>
      <div className="flex justify-center">
        <span className="text-2xl">{emptyCardDescription}</span>
      </div>
    </div>
  );
};

export default EmptyCard;
