import React, { useState } from 'react';
import Login from '../Login';

import Auth from '../../utils/auth';

function Header () {
  const [isOpen, setIsOpen] = useState(false);

  const loggedIn = Auth.loggedIn();
  
  return (
    <section className="top">
      <div className="blur-head">
        <div className="auth-btn-container">
        {loggedIn && (
            <button id="logout-btn" className="auth-btns">Log Out</button>
          )}
        {!loggedIn && (
          <>
          <button onClick={() => setIsOpen(true)} id="login-btn" className="auth-btns">Log In/ <span>Sign Up</span></button>
          <Login 
          open={isOpen} 
          onClose={() => setIsOpen(false)}
           />
          </>
        )}
        </div>

        <div className="nav-section">
          <div className="nav-bar">
            <nav className="links">
              <a className="funny" href="/funny">Intentionally Bad</a>
              <a className="advice" href="/advice">Accidentally Bad</a>
              {loggedIn && (
                <a className="profile" href="/profile">Profile</a>
              )}
            </nav>
          </div>
          <div className="search-bar">
          <form className="search-form">
            <input className="search-term" id="language-search" type="text" placeholder="What language are you looking for?" name="search" />
            <button type="submit" className="search-button" id="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;