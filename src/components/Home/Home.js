import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-secondary">Home Button</button>
      </div>
    );
  }
}

export default Home;
