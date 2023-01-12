import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";

import { getReviews } from "../utils/utils";
function Home() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="is-loading">...is Loading</p>;
  }

  return (
    <main>
      <div className="container">
        {reviews &&
          reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
      </div>
    </main>
  );
}

export default Home;
