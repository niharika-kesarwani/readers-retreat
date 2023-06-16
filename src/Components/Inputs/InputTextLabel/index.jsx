import React from "react";

const InputTextLabel = (props) => {
  const { className, children, labelText } = props;
  const classes = className + " flex flex-col gap-2";
  return (
    <label className={classes}>
      <span className="text-xs lg:text-sm">{labelText}</span>
      {children}
    </label>
  );
};

export default InputTextLabel;
