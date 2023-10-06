import React from 'react';
const  Card = ({values}) => {
    return(
    <div>
      <h3>{values.title}</h3>
      <p>Description: {values.description}</p>
      <p>Ratings: {values.ratings}</p>
      <img src={values.url} alt="Image" />
    </div>)

}

export default Card;