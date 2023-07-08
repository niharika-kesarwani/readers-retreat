import React from "react";

const IconActionBtn = ({
  actionText = "",
  className = "",
  actionType = "button",
  actionHandler,
}) => {
  return (
    <button
      type={actionType}
      onClick={actionHandler}
      className={`${className} h-8 w-8 rounded-full bg-50 p-1 text-sm capitalize  text-950 duration-150 hover:bg-100 active:bg-200`}
    >
      {actionText}
    </button>
  );
};

export default IconActionBtn;
