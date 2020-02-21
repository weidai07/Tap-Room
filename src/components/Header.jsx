import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var style = {
    margin: '0',
    padding: '0'
  };
  return (
    <div>
      <h1 style={style}>TapRoom</h1>
      <Link to="/">Home</Link> | <Link to="/newbeerscheduleform">Create Ticket</Link> | <Link to="/AboutUs">About Us</Link>
    </div>
  );
}

export default Header;