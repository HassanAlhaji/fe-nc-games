import "./App.css";
import { useEffect, useState } from "react";
import ReviewCard from "./components/ReviewCard";
import Header from "./components/Header";
import api from "./utils/utils";
function App() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.get("/reviews").then((respone) => {
      setReviews(respone.data.reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="is-loading">...isLoading</p>;
  }

  return (
    <div className="App">
      <main>
        <Header reviews={reviews} className="App-header" />
        {reviews &&
          reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
      </main>
    </div>
  );
}

export default App;
