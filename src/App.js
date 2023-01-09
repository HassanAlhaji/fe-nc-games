import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ReviewCard from "./components/ReviewCard";

function App() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://nc-games-be.onrender.com/api/reviews")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReviews(data.reviews);
      });
  }, []);
  return (
    <div className="App">
      <header reviews={reviews} className="App-header">
        <h1>NC Games Reviews</h1>
      </header>
      <main>
        {reviews &&
          reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
      </main>
    </div>
  );
}

export default App;
