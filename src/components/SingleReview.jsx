import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview, updateReviewVotes } from "../utils/utils";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import ReviewComments from "./ReviewComments";
import "./SingleReview.css";

function SingleReview() {
  const [review, setReview] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const { reviewId } = useParams();

  const upVoteHandler = () => {
    if (!upvote) {
      setUpvote(true);
      setReview((review) => {
        return { ...review, votes: review.votes + 1 };
      });
      updateReviewVotes(review.review_id, 1).catch((err) => {
        setReview((review) => {
          return { ...review, votes: review.votes - 1 };
        });
        setUpvote(false);
      });
    } else {
      setUpvote(false);
      setReview({ ...review, votes: review.votes - 1 });
      updateReviewVotes(review.review_id, -1).catch((err) => {
        setUpvote(true);
        setReview({ ...review, votes: review.votes + 1 });
      });
    }
  };

  const downVoteHandler = () => {
    // if not downvoted
    if (!downvote) {
      setDownvote(true);
      setReview((review) => {
        return { ...review, votes: review.votes - 1 };
      });
      updateReviewVotes(review.review_id, -1).catch((err) => {
        setDownvote(false);
        setReview((review) => {
          return { ...review, votes: review.votes + 1 };
        });
      });
    } else {
      setDownvote(false);
      setReview((review) => {
        return { ...review, votes: review.votes + 1 };
      });
      updateReviewVotes(review.review_id, +1).catch((err) => {
        setDownvote(true);
        setReview((review) => {
          return { ...review, votes: review.votes - 1 };
        });
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getSingleReview(reviewId)
      .then((review) => {
        setReview(review);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(true);
      });
  }, [reviewId]);

  if (isLoading) {
    return <h2>.... isLoading</h2>;
  }

  if (err || review === "") {
    return <h2> 404 not found</h2>;
  }

  return (
    <div className="review">
      <div className="container">
        <h1>{review.title}</h1>

        <h3>By : {review.owner}</h3>

        <img src={review.review_img_url} alt="review pic" />

        <p>{review.review_body}</p>

        <div className="review-footer">
          <div className="meta">
            <p>
              <span>
                <strong>Category:</strong> {review.category}
              </span>
              ,{" "}
              <span>
                <strong>Designer:</strong> {review.designer}
              </span>
            </p>
          </div>

          <div className="votes">
            <button
              onClick={upVoteHandler}
              className="voteup-btn"
              disabled={downvote}
            >
              <BiUpArrow
                size={30}
                className={upvote ? "upvote active" : "upvote"}
              />
            </button>

            <span>{review.votes}</span>

            <button
              onClick={downVoteHandler}
              className="votedown-btn"
              disabled={upvote}
            >
              <BiDownArrow
                size={30}
                className={downvote ? "downvote active" : "downvote"}
              />
            </button>
          </div>
        </div>

        <hr />

        <ReviewComments reviewId={review.review_id} />
      </div>
    </div>
  );
}

export default SingleReview;
