import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER,
         LOGIN_USER
 } from '../../utils/mutations';

import Auth from '../../utils/auth';

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
  // sign up form
  const [signUpState, setSignUpState] = useState({
    email: '',
    userName: '',
    github: '',
    password: '',
  });

  // handle signup form changes based on input
  const handleSignUpChange = (event) => {
    const { name, value } = event.target;

    setSignUpState({
      ...signUpState,
      [name]: value,
    });
  };

  // submit sign up form
  const handleFormSubmitNewUser = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await addUser({
        variables: { ...signUpState },
      });

      Auth.login(mutationResponse.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // login form
  const [addUser, { error }] = useMutation(ADD_USER);

  const [logInState, setLogInState] = useState({
    userName: '',
    password: ''
  });

  const [login, { loginError }] = useMutation(LOGIN_USER);

  // handle login form changes based on input
  const handleLoginChange = (event) => {
    const { name, value } = event.target;
  
    setLogInState({
      ...logInState,
      [name]: value,
    });
  };

  // submit login form
const handleFormSubmitLogin = async (event) => {
  event.preventDefault();

  try {
    const { data } = await login({
      variables: { ...logInState },
    });

    Auth.login(data.login.token);
  } catch (e) {
    console.error(e);
  }

  // clear form values
  setLogInState({
    userName: '',
    password: '',
  });
};

  if (!open) return null

  return ReactDom.createPortal(
    <div style={OVERLAY_STYLES}>
    <div style={MODAL_STYLES}>
      <div id="signup-modal" className="modal">
        <div className="modal-content container right-panel-active">
          <div className="container_form container_signup">
                <form className="form" id="form1" onSubmit={handleFormSubmitNewUser}>
                  <h2 className="form_title">Join in on the fun!</h2>
                  <input 
                    type="text" 
                    className="input"
                    name="email" 
                    placeholder="Email" 
                    id="email-signup" 
                    autoComplete="off"
                    value={signUpState.email}
                    onChange={handleSignUpChange} 
                  />
                  <input 
                    type="text" 
                    className="input" 
                    name="userName"
                    placeholder="Username" 
                    id="username-signup" 
                    autoComplete="off" 
                    value={signUpState.userName}
                    onChange={handleSignUpChange} 
                  />
                  <input 
                    type="text" 
                    className="input" 
                    name="github"
                    placeholder="Github" 
                    id="github-signup" 
                    autoComplete="off" 
                    value={signUpState.github}
                    onChange={handleSignUpChange} 
                  />
                  <input 
                    type="password" 
                    className="input" 
                    name="password"
                    placeholder="Password" 
                    id="password-signup" 
                    autoComplete="off" 
                    value={signUpState.password}
                    onChange={handleSignUpChange} 
                  />
                    <button type="submit" className="auth-button" id="unique-btn">Sign Up</button>
                </form>
                {error && <div>Signup failed</div>}
            </div>

            <div className="container_form container_signin">
              <form className="form" id="form2" onSubmit={handleFormSubmitLogin}>
                <h2 className="form_title">Welcome Back!</h2>
                <input 
                  type="text" 
                  className="input" 
                  name="userName"
                  placeholder="username" 
                  id="username-login" 
                  value={logInState.userName}
                  onChange={handleLoginChange}
                />
                <input 
                  type="password" 
                  className="input" 
                  name="password"
                  placeholder="password" 
                  id="password-login"
                  value={logInState.password}
                  onChange={handleLoginChange}
                />
                <button type="submit" className="auth-button" id="log-btn">Log In</button>
              </form>
              {loginError && <div>Login failed</div>}
            </div>
            
        </div>

      </div>
      <button className="auth-button" onClick={onClose}>Close</button>
    </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Login;