import "./ReviewCard.css";

function ReviewCard({ review }) {
  return (
    <div className="reviewCard">
      <h3>{review.title}</h3>
    </div>
  );
}

export default ReviewCard;
