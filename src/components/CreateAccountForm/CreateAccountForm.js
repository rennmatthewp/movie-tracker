import React, { Compenent, Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

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
          type='text' className='user-email'
          onChange={(event)=> this.setState({email: event.target.value})}  
        />
        <input 
          type='password' className='user-password' onChange={(event)=> this.setState({password: event.target.value})}
        />
        <button>
          Create Account
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username
});

export default connect(mapStateToProps, null)(CreateAccountForm);