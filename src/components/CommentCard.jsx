import { useState, useEffect } from "react";
import moment from "moment";
import { getCommets } from "../utils/utils";
import "../styling/commentCard.css";

function CommentCard({ reviewId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommets(reviewId).then((comments) => {
      setComments(comments);
    });
  }, [reviewId]);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="comments" key={comment.comment_id}>
            <p>Author {comment.author}</p>
            <p>{comment.body}</p>
            <p>
              {moment(comment.created_at).format(
                "dddd, Do MMMM YYYY, h:mm:ss a"
              )}
            </p>
            <p>comment votes : {comment.votes}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CommentCard;
