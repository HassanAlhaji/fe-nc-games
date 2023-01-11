import "../styling/ReviewCard.css";
import { Link } from "react-router-dom";
function ReviewCard({ review }) {
  return (
    <Link to={`/review/${review.review_id}`} className="review-card">
      <img
        src={review.review_img_url}
        className="review-image"
        alt="review pic"
      />

      <div className="review-meta-data">
        <h3>{review.title}</h3>
        <p>By : {review.owner}</p>
        <p>Category : {review.category}</p>
        <p>Designer : {review.designer}</p>
      </div>
    </Link>
  );
}

export default ReviewCard;
