import React from 'react';
import { browserHistory } from 'react-router-dom';
import PropTypes from 'prop-types';


const Card = props => {
  const movieObj = {
    title: props.title,
    poster_path: props.posterPath,
    movie_id: props.id,
    release_date: props.releaseDate,
    vote_average: props.voteAvg,
    overview:props.overview
  };

  return (
    <div 
      className="Card" 
      onClick={()=> {
        if (!props.user.id){
          props.history.push('/login');
        } else {
          props.handleFav(props.user.id, movieObj);
        }
      }}>
      
      <img
        src={`https://image.tmdb.org/t/p/w500${props.posterPath}`}
        alt={`Poster for ${props.title}`}
      />
      <h1>{props.title}</h1>
    </div>
  );
};



export default Card;


Card.propTypes = {
  user: PropTypes.object,
  title: PropTypes.string,
  posterPath: PropTypes.string,
  handleFav: PropTypes.func,
  id: PropTypes.string,
  releaseDate: PropTypes.string,
  voteAvg: PropTypes.string,
  overview: PropTypes.string,
  history: PropTypes.string
};