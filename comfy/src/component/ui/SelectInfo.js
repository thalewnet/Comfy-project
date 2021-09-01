import React from 'react';

function SelectInfo({ title, id }) {
  return (
    <div className="form">
      <label htmlFor={id}>{title}</label>
      <select name="province" id={id}>
        <option value="">Please Select</option>
        <option value="Bangkok">Bangkok</option>
      </select>
    </div>
  );
}

export default SelectInfo;
