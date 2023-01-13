import moment from "moment";
import "./CommentCard.css";

function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p>{comment.body}</p>

      <div className="meta">
        <p>By: {comment.author}</p>

        <p>
          {moment(comment.created_at).format("dddd, Do MMMM YYYY, h:mm:ss a")}
        </p>
      </div>
    </div>
  );
}

export default CommentCard;
