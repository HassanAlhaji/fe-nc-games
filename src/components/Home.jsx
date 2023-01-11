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
    return <p className="is-loading">...isLoading</p>;
  }
  return (
    <main>
      {reviews &&
        reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
    </main>
  );
}

export default Home;
