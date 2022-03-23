import React from 'react';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

function Login ({open, onClose}) {
  if (!open) return null

  return (
    <div style={MODAL_STYLES}>
      <button onClick={onClose}>Close Modal</button>
      Login stuff here!
    </div>
  )
}

export default Login;