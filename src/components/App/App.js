import React, { Component } from 'react';
import { apiFetch } from '../../helper/apiHelper';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';

class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    try {
      const moviesArray = await apiFetch();
      this.props.handleFetch(moviesArray)
    } catch (error) {
      console.log('error:', error);
    }
  }

  mappedMovies = () => {
    console.log(this.props.movies);
    return this.props.movies.map( (movie, index) => { 
      return (
        <div key={`movie-${index}`}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h1>{movie.title}</h1>
        </div>
      );
  });
  };

  render() {
    return <div className="App">{this.mappedMovies()}</div>;
  }
}

const mapStateToProps = state => ({ movies: state.movies })
const mapDispatchToProps = (dispatch) => ({
  handleFetch: (moviesArray) => dispatch(fetchMovies(moviesArray))
})



export default connect(mapStateToProps, mapDispatchToProps)(App);
