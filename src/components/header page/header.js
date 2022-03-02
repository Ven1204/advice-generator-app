import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Welcome to MyAdvice</h1>
          <p>This is a prototype of an advice generator app.</p>
      </div>
    );
  }
}

export default Header;
