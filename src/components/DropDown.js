import React from "react";

const DropDown = ({ data, name }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <select name={name} id={name} className="field_Style">
        {data.map((val, key) => {
          return (
            <option value={val} key={key}>
              {val}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
