import React from "react";
import { RiArrowUpDownLine } from "react-icons/ri";

const TableHeader = ({ keyVal, val, trier, ordreTrie }) => {
  return (
    <th key={keyVal}>
      <button className="filter_table_button" onClick={() => trier(val.value, ordreTrie)}>
        {val.label}
        <RiArrowUpDownLine className="arrows_icon" />
      </button>
    </th>
  );
};

export default TableHeader;
