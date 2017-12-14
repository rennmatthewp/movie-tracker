import React, { Compenent, Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class Form extends Component{
  constructor() {
    super();
    this.state= {
      username:'',
      password: ''
    };
  }

  render() {
    return (
      <form>
        <input type='text' className='user-name' onChange={(event)=> this.setState({username: event.target.value})}/>
        <input type='password' className='user-password' onChange={(event)=> this.setState({password: event.target.value})}/>
        <button>Sign In</button>
        <button>Create Account</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username
});

export default connect(mapStateToProps, null)(Form);