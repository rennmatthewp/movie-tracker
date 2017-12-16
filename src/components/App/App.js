import React, { Component } from 'react';
// import { apiFetch } from '../../helper/apiHelper';
import { storeMovies } from '../../actions';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import CreateAccountForm from '../CreateAccountForm/CreateAccountForm';
import Header from '../Header/Header';
import LoginForm from '../LoginForm/LoginForm';

class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    try {
      this.props.handleFetch();
    } catch (error) {
      console.log('error:', error);
    }
  }

  render() {
    return (
      <div className="App">
        <Route path ='/' component={ Header } />
        <Route exact path="/" component={CardContainer} />
        <Route path="/createaccount" component={CreateAccountForm} />
        <Route path="/login" component={LoginForm} />

      </div>
    );
  }
};

const mapStateToProps = state => ({ movies: state.movies });

const mapDispatchToProps = dispatch => ({
  handleFetch: () => dispatch(storeMovies())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
