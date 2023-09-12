import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProgressCard = ({item}) => {
  return (
    <>
      <div className="progress-status d-flex align-items-center">
        <div className="d-flex align-items-center mx-2">
          <span>{item?.rating}</span>
          {item?.icon}
        </div>
        <div className="progress" style={{ width: "100%" }}>
          <div
            className={`progress-bar bg-${item?.color}`}
            role="progressbar"
            style={{ width: `${item?.progress}%` }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax={item?.progress}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressCard;
