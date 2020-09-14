import React, {Component} from 'react';
import Picture from './picture';
import {Link} from 'react-router-dom';

class Homepage extends React.Component{

  render(){
    return(
      <>
      <div className="content">
        <h1>Producing Quality Content for Users</h1>
        <p>Lorem ipsum dolor sit amet,
         consectetur adip iscing elit, sed do eiusmod tempor inidunt ut labore et dolore magna aliqua.
        Ut enim adm inim veniam, quis nostrud exeation ullamco laboris nisi ut aliquip exercde ea commodo
         </p>
      </div>
      <div className="homebuttons">
      <button><Link to="/about">Contact Us</Link></button>
      <button><Link to="/blog">Get Started</Link></button>
      </div>
      <div class="image">
        <Picture data={require('../images/home.png')}/>
      </div>
      </>
    )
  }
}

export default Homepage;
