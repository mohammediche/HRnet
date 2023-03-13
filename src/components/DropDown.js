const DropDown = ({ data, name, handleInputChange }) => {
  return (
    <select name={name} id={name} className="field_Style" onChange={handleInputChange}>
      <option value="" className="default_option">
        Please choose a {name}
      </option>
      {data.map((val, key) => {
        return (
          <option value={val.value} key={key}>
            {val.name}
          </option>
        );
      })}
    </select>
  );
};

export default DropDown;
