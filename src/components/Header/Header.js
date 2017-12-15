import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const Header = props => {
  let username
  if (props.username.data){
    username = <h3>Hello, {props.username.data.name}!</h3>
  }

  return (
    <div>
      <Link to='/' className='home-link'>
        <h1>MovieTracker</h1>
      </Link>
      {username}
      <Link to='/createaccount' className='createaccount'>
        Create Account
      </Link>
      <Link to='/login' className='login'>
        Login
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.user
});




export default connect(mapStateToProps, null)(Header);