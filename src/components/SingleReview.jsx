import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../utils/utils";
import "./SingleReview.css";
import ReviewComments from "./ReviewComments";

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

          <div className="votes">{review.votes}</div>
        </div>

        <hr />

        <ReviewComments reviewId={review.review_id} />
      </div>
    </div>
  );
}

export default SingleReview;
