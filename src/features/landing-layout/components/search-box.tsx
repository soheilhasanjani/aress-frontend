import React from "react";
import SearchOutlineIcon from "./search-outline-icon";

const SearchBox = () => {
  return (
    <div className="bg-[#F4F4F5] rounded-md h-9 w-[156px] flex items-center gap-1">
      <input type="text" className="flex-grow" />
      <SearchOutlineIcon className="text-[#52525B] size-4 flex-shrink-0" />
    </div>
  );
};

export default SearchBox;
