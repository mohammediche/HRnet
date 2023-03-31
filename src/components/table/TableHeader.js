import React from "react";
import { RiArrowUpDownLine } from "react-icons/ri";

const TableHeader = ({ val, trier, ordreTrie }) => {
  return (
    <th>
      <button className="filter_table_button" onClick={() => trier(val.value, ordreTrie)}>
        {val.label}
        <RiArrowUpDownLine className="arrows_icon" />
      </button>
    </th>
  );
};

export default TableHeader;
