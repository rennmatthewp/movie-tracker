import React from 'react';

const Card = props => {
  const movieObj = {
    title: props.title,
    posterPath: props.posterPath,
    id: props.id,
    releaseDate: props.releaseDate,
    voteAvg: props.voteAvg,
    overview:props.overview
  }

  return (
    <div className="Card" onClick={()=> props.handleFav(props.user, movieObj)} >
      <img
        src={`https://image.tmdb.org/t/p/w500${props.posterPath}`}
        alt={`Poster for ${props.title}`}
      />
      <h1>{props.title}</h1>
    </div>
  );
};



export default Card;
