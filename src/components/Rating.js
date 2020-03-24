import React from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ amount, size = "xs" }) => {
  const stars = _.range(amount);

  return (
    <div className="ratings">
      {stars.map((star, i) => (
        <FontAwesomeIcon className="mr-1" icon="star" size={size} key={i} />
      ))}
    </div>
  );
};
