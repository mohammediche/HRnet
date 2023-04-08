import React from "react";

const SelectEntries = ({ handleEntries }) => {
  const entries = [5, 10, 25, 50, 100];
  return (
    <div>
      <span>Show</span>
      <select name="pets" id="pet-select" onChange={handleEntries}>
        {entries.map((entrie, key) => {
          return (
            <option key={key} value={entrie}>
              {entrie}
            </option>
          );
        })}
      </select>
      <span>entries</span>
    </div>
  );
};

export default SelectEntries;
