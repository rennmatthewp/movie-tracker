import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { postAddFavorite } from '../../actions';
import { Route } from 'react-router-dom';

const CardContainer = props => {
  const mappedCards = props.movies.map((movie, index) => {
    return (
      < Route path ='/' render={()=> 
        <Card 
          key={`movie-${index}`}
          title={movie.title}
          posterPath={movie.poster_path}
          handleFav= {props.handleFav}
          id={movie.id}
          releaseDate={movie.release_date}
          voteAvg={movie.vote_average}
          overview={movie.overview}
          user={props.user} 
          history={props.history}/>}
      />
    );
  });

  return <div className="CardContainer">{mappedCards}</div>;
};

const mapStateToProps = state => ({ 
  movies: state.movies,
  user: state.user});

const mapDispatchToProps = (dispatch) => ({
  handleFav: (userID, movieObj) => dispatch(postAddFavorite(userID, movieObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
