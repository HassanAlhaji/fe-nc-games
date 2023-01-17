import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-games-be.onrender.com/api",
});

export function getReviews(category) {
  return api.get(`/reviews?category=${category}`).then((res) => {
    return res.data.reviews;
  });
}

export function getSingleReview(reviewId) {
  return api.get(`/reviews/${reviewId}`).then((res) => {
    return res.data;
  });
}

export function getCommets(reviewId) {
  return api.get(`/reviews/${reviewId}/comments`).then((res) => {
    return res.data.comments;
  });
}

export function updateReviewVotes(reviewId, updatedVote) {
  return api
    .patch(`/reviews/${reviewId}`, { inc_votes: updatedVote })
    .then((res) => {
      return res.data;
    });
}

export function postComment(reviewId, comment) {
  return api
    .post(`/reviews/${reviewId}/comments`, {
      username: "grumpy19",
      body: comment,
    })
    .then((res) => {
      return res.data;
    });
}
export function getCategories() {
  return api.get("/categories").then((res) => {
    return res.data.categories;
  });
}

export default api;
