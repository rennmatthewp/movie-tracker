import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions'



const Header = props => {
  const username = props.username.data ? props.username.data.name : 'Guest';

  const signOutBtn = 
    <button onClick={(e)=> {
      e.preventDefault();
      props.handleLogOut(this.state)}}>
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
  
  const userButtons = props.username.data ? signOutBtn : newUserBtns;

  return (
    <div>
      <Link to='/' className='home-link'>
        <h1>MovieTracker</h1>
      </Link>
      <h3>Hello, {username}!</h3>
      {userButtons}
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.user
});

const mapDispatchToProps = dispatch => ({
  handleLogOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);