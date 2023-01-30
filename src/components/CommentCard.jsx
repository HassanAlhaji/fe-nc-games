import moment from "moment";
import "./CommentCard.css";
import { deleteComment } from "../utils/utils";

function CommentCard({ comment, updateCommentState }) {
  function deleteHandler() {
    deleteComment(comment.comment_id).then((res) => {
      updateCommentState(comment);
    });
  }
  return (
    <div className="comment-card">
      <p>{comment.body}</p>

      <div className="meta">
        <p>By: {comment.author}</p>

        <p>
          {moment(comment.created_at).format("dddd, Do MMMM YYYY, h:mm:ss a")}
        </p>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default CommentCard;
