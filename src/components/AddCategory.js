import PropTypes from "prop-types";
import React, { useState } from "react";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="inputValue">Insert the category that you looking for</label>
        <input
          id="inputValue"
          className="form-control form-control-lg"
          value={inputValue}
          type="text"
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
