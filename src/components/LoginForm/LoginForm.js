import React,{ Component } from 'react';
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import { loginUser } from '../../actions';
// import { postNewAccount } from '../../helper/apiHelper';

class CreateAccountForm extends Component{
  constructor() {
    super();

    this.state= {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <form className='login-form'>
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
        <button onClick={(e)=> {
          e.preventDefault();
          this.props.handleLogin(this.state)}}>
          LOGIN
        </button>
      </form>
    );
  }
}

// const mapStateToProps = state => ({
//   username: state.username
// });

const mapDispatchToProps = dispatch => ({
  handleLogin: userObj => dispatch(loginUser(userObj))
});

export default connect(null, mapDispatchToProps)(CreateAccountForm);