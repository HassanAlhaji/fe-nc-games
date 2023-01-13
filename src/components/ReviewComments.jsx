import { useState, useEffect } from "react";
import { getCommets } from "../utils/utils";
import CommentCard from "./CommentCard";
import "./ReviewComments.css";

export default function ReviewComments({ reviewId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommets(reviewId).then((comments) => {
      setComments(comments);
    });
  }, [reviewId]);

  return (
    <div className="review-comments">
      <h2>Comments</h2>

      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </div>
  );
}
