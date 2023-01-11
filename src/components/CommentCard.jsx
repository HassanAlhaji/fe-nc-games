import { useState, useEffect } from "react";
import { getCommets } from "../utils/utils";
import "../styling/commentCard.css";


function CommentCard({ reviewId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommets(reviewId).then((comments) => {
      setComments(comments);
    });
  }, [reviewId]);

  return <div>{comments.map((comment) => {
    return <div className="comments" key= {comment.comment_id}>
        <p>Author {comment.author}</p>
        <p>{comment.body}</p>
        <p>{comment.created_at}</p>
        <p>comment votes : {comment.votes}</p>
    </div>
  })}</div>;
}

export default CommentCard;
