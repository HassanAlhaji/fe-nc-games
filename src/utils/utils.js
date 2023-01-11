import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nc-games-be.onrender.com/api'
})

export function getReviews(){
 return api.get('/reviews').then((res)=>{
    return res.data.reviews
  })
}
export function getSingleReview (reviewId){
return api.get(`/reviews/${reviewId}`).then((res)=>{
  return res.data
})
}


export default api