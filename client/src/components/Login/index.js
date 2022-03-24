import React from 'react';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  // transform: 'translate(-50%, -50%)',
  backgroundColor: '#e9e9e9',
  padding: '25px',
  zIndex: 1000
}

function Login ({open, onClose}) {
  if (!open) return null

  return (
    <div style={MODAL_STYLES}>
      <div id="signup-modal" className="modal">
        <div className="modal-content container right-panel-active">
          <div className="container_form container_signup">
                <form className="form" id="form1">
                  <h2 className="form_title">Join in on the fun!</h2>
                  <input type="text" className="input" placeholder="Email" id="email-signup" autoComplete="off" />
                  <input type="text" className="input" placeholder="Username" id="username-signup" autoComplete="off" />
                  <input type="text" className="input" placeholder="Github" id="github-signup" autoComplete="off" />
                  <input type="text" className="input" placeholder="Password" id="password-signup" autoComplete="off" />
                    <button type="submit" className="auth-button" id="unique-btn">Sign Up</button>
                </form>
            </div>

            <div className="container_form container_signin">
              <form className="form" id="form2">
                <h2 className="form_title">Welcome Back!</h2>
                <input type="text" className="input" placeholder="username" id="username-login" />
                <input type="password" className="input" placeholder="password" id="password-login" />
                <button type="submit" className="auth-button" id="log-btn">Log In</button>
              </form>
            </div>

            {/* <div className="container_overlay">
              <div className="overlay">
                <span className="close">x</span>
                <div className="overlay_panel overlay_left">
                  <button className="auth-button" id="login">Log In</button>
                </div>
                <div className="overlay_panel overlay_right">
                  <button className="auth-button" id="signUp">Sign Up</button>
                </div>
              </div>
            </div> */}
            
        </div>

      </div>
      <button onClick={onClose}>Close Modal</button>
    </div>
  )
}

export default Login;