import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { postAddFavorite, deleteUserFavorite } from '../../actions';
import { Route } from 'react-router-dom';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = props => {
  const mappedCards = props.movies.map((movie, index) => {
    const favMovie = props.favorites.find(favMovie => favMovie.title === movie.title)
    const isFav = favMovie ? true : false    
    return (
      < Route 
        path ='/' 
        key={`movie-${index}`}
        render={()=> 
        <Card 
          title={movie.title}
          posterPath={movie.poster_path}
          backdropPath={movie.backdrop_path}
          handleAddFav= {props.handleAddFav}
          handleRemoveFav= {props.handleRemoveFav}
          id={movie.id}
          releaseDate={movie.release_date}
          voteAvg={movie.vote_average}
          overview={movie.overview}
          user={props.user} 
          history={props.history}
          isFav= {isFav}
          />}
      />
    );
  });

  return <div className="CardContainer">{mappedCards}</div>;
};

const mapStateToProps = state => ({ 
  movies: state.movies,
  user: state.user,
  favorites: state.favorites});

const mapDispatchToProps = (dispatch) => ({
  handleAddFav: (userID, movieObj) => dispatch(postAddFavorite(userID, movieObj)),
  handleRemoveFav: (userId, movieId) => dispatch(deleteUserFavorite(userId, movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);


CardContainer.propTypes = {
  movies: PropTypes.array
};