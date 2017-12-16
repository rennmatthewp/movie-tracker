import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../../actions';
import { Link, browserHistory } from 'react-router-dom';


class Login extends Component{
  constructor() {
    super();

    this.state= {
      email: '',
      password: ''
    };
  }

  render() {
    console.log(this.props.errorStatus)
    return (
      <form className='login-form'>
        {
          this.props.isError &&
          <p className='error-msg'>{this.props.errorMsg}</p>
        }
        <input
          type='text' 
          className='user-email'
          onChange={(event)=> this.setState({email: event.target.value})}  
        />
        <input 
          type='password' 
          className='user-password' 
          onChange={(event)=> this.setState({password: event.target.value})}
        />
        <button onClick={(event)=> {
          event.preventDefault();
          this.props.handleLogin(this.state);
          // this.props.history.push('/');
        }}>
          LOGIN
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isError: state.errorStatus.isError,
  errorMsg: state.errorStatus.errorMsg
});

const mapDispatchToProps = dispatch => ({
  handleLogin: userObj => dispatch(logInUser(userObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);