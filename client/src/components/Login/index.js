import React, { useState } from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#e9e9e9',
  padding: '25px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

function Login ({open, onClose}) {

  const [formState, setFormState] = useState({
    email: '',
    userName: '',
    github: '',
    password: '',
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      
      Auth.login(data.addUser.token)
    } catch (e) {
      console.error(e);
    }
  };

  if (!open) return null

  return ReactDom.createPortal(
    <div style={OVERLAY_STYLES}>
    <div style={MODAL_STYLES}>
      <div id="signup-modal" className="modal">
        <div className="modal-content container right-panel-active">
          <div className="container_form container_signup">
                <form className="form" id="form1" onSubmit={handleFormSubmit}>
                  <h2 className="form_title">Join in on the fun!</h2>
                  <input 
                    type="text" 
                    className="input" 
                    placeholder="Email" 
                    id="email-signup" 
                    autoComplete="off"
                    value={formState.email}
                    onChange={handleChange} 
                  />
                  <input 
                    type="text" 
                    className="input" 
                    placeholder="Username" 
                    id="username-signup" 
                    autoComplete="off" 
                    value={formState.userName}
                    onChange={handleChange} 
                  />
                  <input 
                    type="text" 
                    className="input" 
                    placeholder="Github" 
                    id="github-signup" 
                    autoComplete="off" 
                    value={formState.github}
                    onChange={handleChange} 
                  />
                  <input 
                    type="text" 
                    className="input" 
                    placeholder="Password" 
                    id="password-signup" 
                    autoComplete="off" 
                    value={formState.password}
                    onChange={handleChange} 
                  />
                    <button type="submit" className="auth-button" id="unique-btn">Sign Up</button>
                </form>
                {error && <div>Signup failed</div>}
            </div>

            <div className="container_form container_signin">
              <form className="form" id="form2">
                <h2 className="form_title">Welcome Back!</h2>
                <input 
                  type="text" 
                  className="input" 
                  placeholder="username" 
                  id="username-login" 
                />
                <input 
                  type="password" 
                  className="input" 
                  placeholder="password" 
                  id="password-login"
                />
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
      <button className="auth-button" onClick={onClose}>Close</button>
    </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Login;