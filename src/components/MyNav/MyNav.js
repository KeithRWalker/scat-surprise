import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './MyNav.scss';

class MyNav extends React.Component {
  render() {
    return (
      <nav className="MyNav navbar navbar-expand-sm navbar-dark bg-dark">

        <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nav-content"
          aria-controls="nav-content"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <button className="navbar-brand btn btn-outline-primary">Logo</button>
        <div className="collapse navbar-collapse" id="nav-content">
          <ul className="navbar-nav">
            <li className="nav-item">
              <h1 className="nav-link btn btn-outline-secondary">Link 1</h1>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-danger"> Login </button>
      </nav>
    );
  }
}

export default MyNav;
