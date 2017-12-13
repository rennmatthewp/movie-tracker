import React from 'react';

const Card = props => {
  return (
    <div className="Card">
      <img
        src={`https://image.tmdb.org/t/p/w500${props.posterPath}`}
        alt={`Poster for ${props.title}`}
      />
      <h1>{props.title}</h1>
    </div>
  );
};

export default Card;
