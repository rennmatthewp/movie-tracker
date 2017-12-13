import React from 'react';
import { connect } from 'react-redux';

const CardContainer = props => {
  const mappedCards = props.movies.map((movie, index) => {
    return (
      <div key={`movie-${index}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie poster"
        />
        <h1>{movie.title}</h1>
      </div>
    );
  });

  return <div className="CardContainer">{mappedCards}</div>;
};

const mapStateToProps = state => ({ movies: state.movies });
// const mapDispatchToProps = (dispatch) => ({
//   handleFetch: (moviesArray) => dispatch(fetchMovies(moviesArray))
// })

export default connect(mapStateToProps, null)(CardContainer);
