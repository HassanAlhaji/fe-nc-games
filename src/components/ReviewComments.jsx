import { useState, useEffect } from "react";
import { getCommets } from "../utils/utils";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import "./ReviewComments.css";

export default function ReviewComments({ reviewId }) {
  const [comments, setComments] = useState([]);

  const addCommentToReview = (comment) => {
    setComments([comment, ...comments]);
  };
  function updateCommentState(comment){
    setComments((prevComments)=>{
      return prevComments.filter(prevComment =>{
        return prevComment.comment_id != comment.comment_id
      })
    })
  }
  useEffect(() => {
    getCommets(reviewId).then((comments) => {
      setComments(comments);
    });
  }, [reviewId]);

  return (
    <div className="review-comments">
      <h2>Comments</h2>

      <CommentForm addCommentsFn={addCommentToReview} reviewId={reviewId} />

      {comments.map((comment) => {
        return (
          <CommentCard
            updateCommentState={updateCommentState} comment={comment}
            key={comment.comment_id}
          />
        );
      })}
    </div>
  );
}
