import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import reviewsData from "../data/reviewsData.json";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewsData);
  }, []);

  return (
    <div className="w-full mt-8">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;
