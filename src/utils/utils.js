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
export function getCommets (reviewId){
  return api.get(`/reviews/${reviewId}/comments`)
  .then(res =>{
    console.log(res.data, 'inside utils')
    return res.data
  })
  
}


export default api