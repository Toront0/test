import Image, { StaticImageData } from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";

interface IReview {
  id: number;
  created_at: Date;
  reviewer_img: StaticImageData;
  review: string;
  reviewer_name: string;
  rating: number;
}

interface IReviews {
  reviews: IReview[];
}

const Reviews = ({ reviews }: IReviews) => {
  return (
    <div>
      {reviews.map((r) => (
        <div
          key={r.id}
          className="border-b border-opac-b-1 dark:border-opac-w-1 pb-4 mb-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 rounded-full">
                <Image src={r.reviewer_img} alt={r.reviewer_name} />
              </div>
              <h3 className="text-gray-4 dark:text-gray-12 font-semibold">
                {r.reviewer_name}
              </h3>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-4 dark:text-gray-12 px-4 py-1 rounded-full border-2 border-gray-4 flex items-center gap-2">
                <BsStarFill />5
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-4 dark:text-gray-12">{r.review}</p>
          <span className="text-xs block mt-2 text-gray-7 dark:text-gray-9">
            6 days ago
          </span>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
