import React, { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER,
         LOGIN_USER
 } from '../../utils/mutations';

import Auth from '../../utils/auth';
import './style.css';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#e9e9e9',
  padding: '25px',
  zIndex: 1000
}

const MODAL_STYLES_2 = {
  position: 'fixed',
  alignItems: 'center',
  display: 'none',
  position: 'absolute',
  zIndex: 1000,
  left: '30%',
  top: '30%',
  width: '100%',
  height: '100%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#e9e9e9',
  padding: '25px',
  overflow: 'hidden',
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

const OVERLAY_STYLES_2 = {
	backgroundColor: 'var(--lightblue)',
	background: "url('https://images.pexels.com/photos/1342460/pexels-photo-1342460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
	backgroundAttachment: 'fixed',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	height: '100%',
	left: '-100%',
	position: 'relative',
	transform: 'translateX(0)',
	transition: 'transform 0.6s ease-in-out',
	width: '200%',
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

  const [animState, setAnimState] = useState(true);

  const logIn = () => {
    setAnimState(false)
  };

  const signUp = () => {
    setAnimState(true)
  };

  console.log(animState)


  if (!open) return null

  return ReactDom.createPortal(
      <div className="modal">
        <div className={`modal-content container ${animState ? 'right-panel-active' : ''}`}>
          <div className="container_form container_signup">
                <form className="form" onSubmit={handleFormSubmitNewUser}>
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
            <div className="container_overlay">
              <div className="overlay">
                <div className="overlay_panel overlay_left">
                  <button onClick={logIn} className="auth-button" id="logIn">Log In</button>
                </div>
                <div className="overlay_panel overlay_right">
                  <button onClick={signUp} className="auth-button" id="signUp">Sign Up</button>
                </div>
              </div>
            </div>
        </div>
      </div>,
    document.getElementById('portal')
  )
}

export default Login;