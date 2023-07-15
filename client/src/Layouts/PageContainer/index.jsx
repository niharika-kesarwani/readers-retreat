import React from "react";

const PageContainer = (props) => {
  const { className, children } = props;
  const classes = "max-w-[1280px] mx-auto min-h-[92vh] " + className;
  return <div className={classes}>{children}</div>;
};

export default PageContainer;
