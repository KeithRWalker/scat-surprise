import React from 'react';

import './NewScat.scss';

class NewScat extends React.Component {
  render() {
    return (
      <div className="NewScat">
        <h1>NewScat</h1>
        <button className="btn btn-secondary" onClick={this.loginClickEvent}>Login with Google</button>
      </div>
    );
  }
}

export default NewScat;
