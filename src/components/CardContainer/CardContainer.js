import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const CardContainer = props => {
  const mappedCards = props.movies.map((movie, index) => {
    return (
      <Card
        key={`movie-${index}`}
        title={movie.title}
        posterPath={movie.poster_path}
      />
    );
  });

  return <div className="CardContainer">{mappedCards}</div>;
};

const mapStateToProps = state => ({ movies: state.movies });

// const mapDispatchToProps = (dispatch) => ({
//   handleFetch: (moviesArray) => dispatch(fetchMovies(moviesArray))
// })

export default connect(mapStateToProps, null)(CardContainer);
