import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <Link to='/' className='home-link'>
        <h1>MovieTracker</h1>
      </Link>
      <Link to='/createaccount' className='createaccount'>
        Create Account
      </Link>
      <Link to='/login' className='login'>
        Login
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({});




export default connect(mapStateToProps, null)(Header);