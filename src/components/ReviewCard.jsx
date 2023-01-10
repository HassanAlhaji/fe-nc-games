import "./ReviewCard.css";

function ReviewCard({ review }) {
  
  return (
    <div className="review-card">
      <p>By : {review.owner}</p>
      <h3>{review.title}</h3>
      <img src={review.review_img_url} className="review-image" alt="review pic"></img>
      <p>Category : {review.category}</p>
      <p> Designer : {review.designer}</p>
    </div>
  );
}

export default ReviewCard;
