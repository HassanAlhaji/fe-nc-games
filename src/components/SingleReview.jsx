import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../utils/utils";
import CommentCard from "./CommentCard";

function SingleReview() {
  const [review, setReview] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { reviewId } = useParams();

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
    <div className="review-card">
      <p>By : {review.owner}</p>
      <h3>{review.title}</h3>
      <img
        src={review.review_img_url}
        className="review-image"
        alt="review pic"
      ></img>
      <p>Category : {review.category}</p>
      <p> Designer : {review.designer}</p>
      <p>{review.review_body}</p>
      <div>votes : {review.votes}</div>
      <div>comments : {review.comment_count}</div>
      <CommentCard reviewId={reviewId} />
    </div>
  );
}

export default SingleReview;
