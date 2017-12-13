import React, { Component } from 'react';
import { apiKey } from '../../helper/.apiKey';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieArray: []
    };
  }

  async componentDidMount() {
    try {
      const initialFetch = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
      );
      const parsedData = await initialFetch.json();
      const movieArray = parsedData.results;
      this.setState({ movieArray });
    } catch (error) {
      console.log('error:', error);
    }
  }

  mappedMovies = () => {
    return this.state.movieArray.map( (movie, i) => {
      console.log('movie:', movie);
      
      return (
        <div key={`movie-${i}`}>
          <h1>{movie.title}</h1>
        </div>
      )
  });
  };

  render() {
    return <div className="App">{this.mappedMovies()}</div>;
  }
}

export default App;
