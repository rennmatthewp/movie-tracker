import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions';
import { browserHistory } from 'react-router-dom';



class Header extends Component {

  componentWillUpdate(nextProps) {
    // console.log(this.props)
    // console.log(this.props.history)
     if(nextProps.loggedIn && !this.props.loggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    const username = this.props.username.data ? this.props.username.data.name : 'Guest';

    const signOutBtn = 
      <button onClick={(event)=> {
        event.preventDefault();
        this.props.handleLogOut(this.state);
      }}>
        LogOut
      </button>;

    const newUserBtns = 
      <div>
        <Link to='/createaccount' className='createaccount'>
          Create Account
        </Link>
        <Link to='/login' className='login'>
          Login
        </Link>
      </div>;
    
    const userButtons = this.props.username.data ? signOutBtn : newUserBtns;

    return (
      <div>
        <Link to='/' className='home-link'>
          <h1>MovieTracker</h1>
        </Link>
        <h3>Hello, {username}!</h3>
        {userButtons}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  username: state.user,
  loggedIn: state.user.loggedIn
});

const mapDispatchToProps = dispatch => ({
  handleLogOut: () => dispatch(logOut())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);

