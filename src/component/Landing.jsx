import { Button, ProgressBar } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import ProgressCard from "./progress-card/progress-card";
export const Landing = () => {
  const ratingData = [
    {
      id: 1,
      rating: 5,
      color: "success",
      progress: 100,
      icon: <FontAwesomeIcon icon={faStar} />,
    },
    {
      id: 2,
      rating: 4,
      color: "info",
      progress: 60,
      icon: <FontAwesomeIcon icon={faStar} />,
    },
    {
      id: 3,
      rating: 3,
      color: "warning",
      progress: 40,
      icon: <FontAwesomeIcon icon={faStar} />,
    },
    {
      id: 4,
      rating: 2,
      color: "orange",
      progress: 25,
      icon: <FontAwesomeIcon icon={faStar} />,
    },
    {
      id: 5,
      rating: 1,
      color: "danger",
      progress: 10,
      icon: <FontAwesomeIcon icon={faStarHalf} />,
    },
  ];

  return (
    <div className="review-container">
      <h1>landing</h1>
      <div>
        <div>
          <Button className="btn-success w-100 mb-3">
            Download <FontAwesomeIcon icon={faCloudArrowDown} />{" "}
          </Button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h2>MAKE YOUR TEAM NOW</h2>
          <h2>15 CR+ USERS</h2>
        </div>
      </div>
      <div className="mt-4">
        <div className="rating-section  row">
          <div className="rating-left col-3">
            <div className="rating-left-inner">
              <p>Ratings</p>
              <h4>4.7</h4>
              <div className="rating-star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalf} />
              </div>
            </div>
          </div>
          <div className="rating-right col-9">
            <div className="rating-progress-bar">
              {ratingData &&
                ratingData?.map((item) => (
                  <ProgressCard key={item?.id} item={item} />
                ))}
            </div>
          </div>
        </div>
        <div className="review-section">
          <p className="review-title">Reviews</p>
          <div className="review-msg">
            <div className="d-flex align-items-center">
              <div className="review-image">
                <img src="data:image/png;base64,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" />
              </div>
              <div className="user-message-section px-2 ">
                <div className="user-header d-flex align-items-center">
                  <h5>Anuska Sinha</h5>
                  <i className="mx-2">1 Days ago</i>
                </div>
                <div className="user-msg">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus architecto quasi rem, necessitatibus eveniet.
                  </p>
                </div>
                <div className="user-footer d-flex align-items-center">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalf} />
                  <i>09/12/2023</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
