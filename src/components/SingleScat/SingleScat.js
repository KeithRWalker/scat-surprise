import React from 'react';

import './SingleScat.scss';

class SingleScat extends React.Component {
  render() {
    return (
      <div className="SingleScat">
        <h1>SingleScat</h1>
        <button className="btn btn-secondary" onClick={this.loginClickEvent}>Login with Google</button>
      </div>
    );
  }
}

export default SingleScat;
