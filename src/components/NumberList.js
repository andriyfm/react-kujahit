import React from "react";

const NumberList = ({ numbers }) => {
  if (!numbers) return null;

  const listItems = numbers.map(item => <li key={item.toString()}>{item}</li>);
  return <ul>{listItems}</ul>;
};

export default NumberList;
