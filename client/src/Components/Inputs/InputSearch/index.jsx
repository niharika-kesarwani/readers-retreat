import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const InputSearch = (props) => {
  const { setInputText, searchName } = props;

  return (
    <div className="flex max-w-[500px] items-center gap-2 rounded-md border-2 border-500 bg-[#fff] p-2 px-4">
      <SearchIcon sx={{ color: "#5271ff" }} />
      <input
        type="text"
        placeholder={`Search ${searchName}`}
        className="text-lg outline-none placeholder:text-400"
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
};

export default InputSearch;
