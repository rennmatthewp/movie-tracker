import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <h1>MovieTracker</h1>
      <Link to='/signup' className='signup'>
        Sign Up
      </Link>
      <Link to='/login' className='login'>
        Login
      </Link>
    </div>
  )

};

export default Header;