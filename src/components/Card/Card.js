import React from 'react';
import { browserHistory } from 'react-router-dom';

const Card = props => {
  const movieObj = {
    title: props.title,
    poster_path: props.posterPath,
    movie_id: props.id,
    release_date: props.releaseDate,
    vote_average: props.voteAvg,
    overview: props.overview
  };

  return (
    <div className="Card">
      <button
        onClick={() => {
          if (!props.user.id) {
            props.history.push('/login');
          } else {
            props.handleFav(props.user.id, movieObj);
          }
        }}>Fave!
      </button>
      
      <img
        src={`https://image.tmdb.org/t/p/w500${props.posterPath}`}
        alt={`Poster for ${props.title}`}
      />
      <h3>{props.title}</h3>
      <h4>Released: {props.releaseDate}</h4>
      <h4>Rating: {props.voteAvg}</h4>
      <h4>{props.overview}</h4>
    </div>
  );
};

export default Card;
