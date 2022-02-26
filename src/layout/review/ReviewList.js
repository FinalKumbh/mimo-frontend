import ReviewItem from "./ReviewItem";
import React, { useRef, useState } from "react";

const ReviewList = ({ onEdit, onRemove, ReviewList }) => {
  return (
    <div className="ReviewList">
      <h2> Review 리스트</h2>
      <h4>{ReviewList.length}개의 Review가 있습니다.</h4>
      <div>
        {ReviewList.map((it) => (
          <ReviewItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

ReviewList.defaultProps = {
    ReviewList: []
};

export default ReviewList;
