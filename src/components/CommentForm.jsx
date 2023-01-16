import { useState } from "react";
import { postComment } from "../utils/utils";
import "./CommentForm.css";

export default function CommentForm({ reviewId, addCommentsFn }) {
  const [disableButton, setDisableButton] = useState(true);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  function clickHandler(e) {
    e.preventDefault();
    setDisableButton(true);

    postComment(reviewId, comment)
      .then((res) => {
        addCommentsFn(res.comment);
        setDisableButton(false);
      })
      .catch((err) => {
        setError("Something went wrong when creating your comment!");
      });

    setComment("");
  }

  function textAreaHandler(e) {
    const value = e.target.value;
    if (value) {
      setComment(e.target.value);
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }

  function getErrorText() {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="comment-form">
      <form>
        <textarea
          onChange={textAreaHandler}
          name="comment"
          form="usrform"
          value={comment}
        ></textarea>

        <div>
          <input
            value="Add comment"
            type="submit"
            onClick={clickHandler}
            disabled={disableButton}
          />
        </div>
      </form>
      {error && getErrorText()}
    </div>
  );
}
