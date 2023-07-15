import React from "react";
import { NavLink } from "react-router-dom";

const UnderActionLink = ({ actionText = "", className = "", actionLink }) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? "red" : "",
        };
      }}
      className={`${className} relative m-2 p-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:scale-y-100 after:bg-500 after:duration-300 after:ease-in-out after:content-[''] hover:after:scale-x-100`}
      to={actionLink}
    >
      {actionText}
    </NavLink>
  );
};

export default UnderActionLink;
