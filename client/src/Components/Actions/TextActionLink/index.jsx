import React from "react";
import { NavLink } from "react-router-dom";

const TextActionLink = ({ actionText = "", className = "", actionLink }) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return { color: isActive ? "red" : "" };
      }}
      to={actionLink}
      className={`${className} hover:text-500`}
    >
      {actionText}
    </NavLink>
  );
};

export default TextActionLink;
