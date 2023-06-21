import React from "react";

const SecondaryContainer = ({children}) => {
  return (
    <section
      className="grid h-[250px] w-[250px] cursor-pointer place-items-center rounded-md border hover:shadow-customBoxShadow"
    >
     {children}
    </section>
  );
};

export default SecondaryContainer;
