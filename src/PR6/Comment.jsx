import React from 'react'
import { useState } from 'react'
import "../bootstap/costam.css"
const Comment = () => {
  const [input, setInput] = useState({})
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, input])
  }
  return (
    <center className='container'>
      <form id="review-form" onSubmit={handleSubmit} >
        <h2>Write Your Review</h2>
        <span id="starsInfo" class="help-block">
          Click on a star to change your rating 1 - 5, where 5 = great! and 1 = really bad
        </span>
        <div class="form-group">
          <label class="control-label" for="review">Your Review:</label>
          <textarea class="form-control" rows="10" name='UserReview' placeholder='Write Your Review' onChange={handleChange} id="review"></textarea>
        </div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input  type="text" name='UserName' placeholder='User Name' onChange={handleChange} />
          
        </div>
        <div class="form-group">
          <label for="name">Rating:</label><br/><br/>
          <select onChange={handleChange} name='UserRating'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        </div>
        <br/>
        <br/>
        <button>Submit</button>
      </form>

      <br />
      <br />
      <br />


      




        <h1>Review</h1>
        <div className='left'>
      <br />
          {data &&
            data.map((review, index) => (
              <div key={index}>
                <h2>User Name:<h5>{review.UserName}</h5> </h2>
                <br/>
                <h2>User Review: <h5>{review.UserReview}</h5> </h2>
                <br/>
                <div>
                <h2>User Rating :</h2>
                  {[...Array(parseInt(review.UserRating))].map((star, index) => (
                    // <span key={index}>*</span>
                    <>
                    <i class="fa-solid fa-star bg-yellow"></i></>
                    
                  ))}

                  {/* <i class="fa-solid fa-star"></i> */}

                </div>
              </div>
            ))}
        </div>
    </center>
  )
}

export default Comment