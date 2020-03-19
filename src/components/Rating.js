import React from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ amount }) => {
  const stars = _.range(amount);

  return (
    <div className="ratings">
      {stars.map((star, i) => (
        <FontAwesomeIcon className="mr-1" icon="star" size="1x" key={i} />
      ))}
    </div>
  );
};
