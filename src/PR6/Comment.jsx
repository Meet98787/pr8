import React, { useState } from 'react';
// import '../bootstrap/costam.css'; // Make sure to adjust the path to your CSS file

const Comment = () => {
  const [input, setInput] = useState({ UserName: '', UserReview: '', UserRating: '1' });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, input]);
    setInput({ UserName: '', UserReview: '', UserRating: '1' }); // Reset the input fields after submission
  };

  return (
    <center>
      <br />
      <br />
      <br />

      <h1>People Review</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" name="UserName" placeholder="User Name" value={input.UserName} onChange={handleChange} required />
        <br />
        <br />
        <input type="text" name="UserReview" placeholder="Write Your Review" value={input.UserReview} onChange={handleChange} required />
        <br />
        <select name="UserRating" value={input.UserRating} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        
        <div>
          {data.map((review, index) => (
            <div key={index}>
              <h1>{review.UserName}</h1>
              <h1>{review.UserReview}</h1>
              <div>
                {[...Array(parseInt(review.UserRating))].map((star, index) => (
                  <span key={index}>*</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </form>
    </center>
  );
};

export default Comment;
