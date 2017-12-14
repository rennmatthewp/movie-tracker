import React, { Component } from 'react';
import { apiFetch } from '../../helper/apiHelper';
import { fetchMovies } from '../../actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    try {
      const moviesArray = await apiFetch();
      this.props.handleFetch(moviesArray);
    } catch (error) {
      console.log('error:', error);
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Form} />
        <Route exact path="/" component={CardContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ movies: state.movies });
const mapDispatchToProps = dispatch => ({
  handleFetch: moviesArray => dispatch(fetchMovies(moviesArray))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
