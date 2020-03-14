import React from 'react';

const Field = ({ values, onFieldChange, index }) => (
  <label>
    <span>Latest result {index > 0 && `- ${index}y`}</span>
    <input type="text" value={values[index]} onChange={(e) => onFieldChange(e.target.value, index)} />
  </label>
);

export default Field;
