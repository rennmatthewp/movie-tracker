import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const Header = props => {
  const username = props.username.data ? props.username.data.name : 'Guest'


  return (
    <div>
      <Link to='/' className='home-link'>
        <h1>MovieTracker</h1>
      </Link>
      <h3>Hello, {username}!</h3>
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