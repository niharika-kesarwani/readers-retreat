import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordToggler = (props) => {
  const { children, className, isTypePassword, handleVisibility } = props;
  const classes = className + " relative";
  return (
    <div className={classes}>
      {children}
      <button
        className=" hover:bg-stone-300 dark:text-stone-950 absolute right-2 top-[6px] z-10 flex h-8 w-8 items-center justify-center rounded-full p-2 transition-all duration-300"
        type="button"
        onClick={(event) => {
          event.preventDefault();
          handleVisibility(!isTypePassword);
        }}
      >
        {isTypePassword ? <VisibilityOff /> : <Visibility />}
      </button>
    </div>
  );
};

export default PasswordToggler;
