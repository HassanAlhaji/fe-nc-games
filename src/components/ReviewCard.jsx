import "../styling/ReviewCard.css";
import { Link } from "react-router-dom";
function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <p>By : {review.owner}</p>
      <h3>
        <Link to={`/review/${review.review_id}`}>{review.title}</Link>
      </h3>
      <img
        src={review.review_img_url}
        className="review-image"
        alt="review pic"
      ></img>
      <p>Category : {review.category}</p>
      <p> Designer : {review.designer}</p>
      <button></button>
    </div>
  );
}

export default ReviewCard;
