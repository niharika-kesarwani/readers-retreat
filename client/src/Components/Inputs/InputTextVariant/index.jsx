import React from "react";

const InputTextVariant = (props) => {
  const {
    inputTextName,
    inputTextType,
    inputTextValue,
    inputTextPlaceholder,
    inputTextHandle,
    className,
    isDisabled,
  } = props;

  const classes =
    className +
    " border-2 border-[#5A5A5A] p-2 rounded w-full transition-colors duration-700 outline-0 focus:border-[#000]";
  return (
    <input
      name={inputTextName}
      type={inputTextType}
      value={inputTextValue}
      placeholder={inputTextPlaceholder}
      onChange={inputTextHandle}
      className={classes}
      disabled={isDisabled}
      style={{ cursor: isDisabled && "not-allowed" }}
      required
    />
  );
};

export default InputTextVariant;
