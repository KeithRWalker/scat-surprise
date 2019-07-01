import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.scss';

class Auth extends React.Component {
  render() {
    return (
      <div className="Auth">
        <h1>Auth</h1>
        <button className="btn btn-secondary">Auth Button</button>
      </div>
    );
  }
}

export default Auth;
