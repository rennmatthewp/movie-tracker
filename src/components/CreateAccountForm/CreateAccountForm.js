import React, { Compenent, Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createAccount } from '../../actions';
import { postNewAccount } from '../../helper/apiHelper';

class CreateAccountForm extends Component{
  constructor() {
    super();
    this.state= {
      username: '',
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
          onChange={(event)=> this.setState({username: event.target.value})}
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
        <button onClick={()=> postNewAccount(this.state)}>
          Create Account
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username
});

const mapDispatchToProps = dispatch => ({
  createNewUser: userObj => dispatch(createAccount(userObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountForm);