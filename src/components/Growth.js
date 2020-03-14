import React from 'react';

const Growth = ({ growths, index }) => (
  <div>
    <span>Growth last {index > 1 && index} year{index > 1 && 's'}: </span>
    <span>{growths[index]}{growths[index] && '%'}</span>
  </div>
);

export default Growth;
