import React from "react";
import ReviewHighlighter from "./ReviewHighlighter";

const StarRating = ({ rating, outOf }) => {
  const totalStars = 5;
  const filledStars = Math.round((rating / outOf) * totalStars);

  return (
    <div className="flex items-center mt-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < filledStars ? "#FFA500" : "none"}
          viewBox="0 0 24 24"
          stroke="#FFA500"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 relative">
      <div className="flex">
        <img
          src={review.source.icon}
          alt={review.source.name}
          className="w-12 h-12 rounded-full mt-2 mr-4"
        />
        <div>
          <div className=" flex mt-1 text-xs md:text-base">
            <h3 className=" font-semibold ml-1 md:ml-0">
              {review.reviewer_name}
            </h3>
            <h3 className=" text-gray-500 ml-1">wrote a review at</h3>
            <h3 className=" font-semibold ml-1">{review.source.name}</h3>
          </div>
          <div className="flex mr-2 mt-2 mb-2">
            <StarRating
              rating={review.rating_review_score}
              outOf={review.out_of}
            />
            <p className="text-gray-500 ml-1 text-sm">Date: {review.date}</p>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <ReviewHighlighter
          content={review.content}
          analytics={review.analytics}
        />
      </div>
    </div>
  );
};

export default ReviewCard;
