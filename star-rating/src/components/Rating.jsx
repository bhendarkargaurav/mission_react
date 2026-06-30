import React, { useState } from 'react'

const Rating = () => {
  const [Rating, setRating] = useState();
  const [hover, setHover] = useState(0);

  console.log(Rating)

  let arr = new Array(5).fill(0);
  console.log(arr);
  return (
    <div className='container'>
        {
          arr.map((currValue, index) => {
            return (
              <span 
              className={hover == 0 && index<Rating || index<hover ? "colored": "unColor"}
              onClick={() => {setRating(index+1)}}
              onMouseEnter={() => setHover(index+1)}
              onMouseLeave={() => setHover(0)}
              key={index}>&#9733;</span>
            )
          })
        }
    </div>
  );
}

export default Rating