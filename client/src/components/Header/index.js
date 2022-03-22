import React from 'react';

function Header () {
  return (
    <section className="top">
      <div className="auth-btn-container">
        {/* Change this to render only if logged in */}
        <button id="logout-btn" className="auth-btns">Log Out</button>
        <button id="login-btn" className="auth-btns">Log In/ <span>Sign Up</span></button>
      </div>

      <header className="h-title-container">
        <a href="/">
          <h1  className="h-title">Critique <span className="h-span" id="h-span">&lt;Code&gt;</span></h1>
        </a>
      </header>

      <div className="nav-section">
        <div className="nav-bar">
          <nav className="links">
            <a className="funny" href="/funny">Intentionally Bad</a>
            <a className="advice" href="/advice">Accidentally Bad</a>
            {/* Change this to render only if logged in */}
            <a className="profile" href="/profile">Profile</a>
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

    </section>
  )
}

export default Header;