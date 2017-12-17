import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = props => {
  const movieObj = {
    title: props.title,
    poster_path: props.posterPath,
    movie_id: props.id,
    release_date: props.releaseDate,
    vote_average: props.voteAvg,
    overview: props.overview
  };

  const handleCardClick = () => {

    if (!props.user.id) {
      props.history.push('/login');
    } else if (props.user.id && !props.isFav) {
      props.handleAddFav(props.user.id, movieObj);
      console.log('handleAdd', props.isFav)
    } else if (props.user.id && props.isFav){
      props.handleRemoveFav(props.user.id, props.id);
      console.log('handleRemoveFav', props.isFav)
    }
  };

  return (
    <div className="Card">
      <button
        onClick={handleCardClick}>
        Fav
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


Card.propTypes = {
  user: PropTypes.object,
  title: PropTypes.string,
  posterPath: PropTypes.string,
  handleAddFav: PropTypes.func,
  handleRemoveFav: PropTypes.func,
  id: PropTypes.number,
  releaseDate: PropTypes.string,
  voteAvg: PropTypes.number,
  overview: PropTypes.string,
  history: PropTypes.object
};