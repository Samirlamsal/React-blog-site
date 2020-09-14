import React from 'react';
import {Link} from 'react-router-dom';
class Navigation extends React.Component{
  render(){
    return(
      <>
      <ul class="logo"><li><Link to="/">Logo</Link></li></ul>
      <nav className="navigation">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      </>
    )
  }
}

export default Navigation;
