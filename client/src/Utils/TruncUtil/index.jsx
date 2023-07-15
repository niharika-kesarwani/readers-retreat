import react from "react";

const TruncUtil = (text, textLimit) => {
  return text.length > textLimit ? `${text.slice(0, textLimit)}...` : text;
};

export default TruncUtil;
