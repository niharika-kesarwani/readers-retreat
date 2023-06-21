import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const SecondaryContainer = ({ categoryName, onClick }) => {
  return (
    <section
      onClick={onClick}
      className="grid h-[250px] w-[250px] cursor-pointer place-items-center rounded-md border hover:shadow-customBoxShadow"
    >
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-semibold uppercase">add {categoryName}</h1>
        <AddCircleIcon sx={{ fontSize: "50px" }} />
      </div>
    </section>
  );
};

export default SecondaryContainer;
