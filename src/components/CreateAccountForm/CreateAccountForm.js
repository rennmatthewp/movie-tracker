import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions';
import { browserHistory } from 'react-router-dom';

class CreateAccountForm extends Component{
  constructor() {
    super();

    this.state= {
      name: '',
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <form className='create-acct-form'>
        <input 
          type='text'
          className='user-name'
          onChange={(event)=> this.setState({name: event.target.value})}
        />
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
          this.props.handleNewAccount(this.state);
          // this.props.history.push('/');
        }}>
          Create Account
        </button>
      </form>
    );
  }
}

// const mapStateToProps = state => ({
//   username: state.username
// });

const mapDispatchToProps = dispatch => ({
  handleNewAccount: userObj => dispatch(createNewUser(userObj))
});

export default connect(null, mapDispatchToProps)(CreateAccountForm);

