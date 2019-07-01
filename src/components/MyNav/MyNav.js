import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './MyNav.scss';

class MyNav extends React.Component {
  render() {
    return (
      <div className="MyNav">
        <h1>MyNav</h1>
        <button className="btn btn-secondary">MyNav Button</button>
      </div>
    );
  }
}

export default MyNav;
