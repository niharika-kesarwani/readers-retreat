import React from "react";

const ContainedActionBtn = ({
  actionText = "",
  className,
  actionType = "button",
  actionHandler,
}) => {
  return (
    <button
      type={actionType}
      onClick={actionHandler}
      className={`${className} rounded-md border border-800 px-4 py-2 text-sm capitalize text-800 duration-150 active:bg-100`}
    >
      {actionText}
    </button>
  );
};

export default ContainedActionBtn;
