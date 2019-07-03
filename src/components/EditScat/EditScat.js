import React from 'react';

import './EditScat.scss';

class EditScat extends React.Component {
  render() {
    return (
      <div className="EditScat">
        <h1>EditScat</h1>
        <button className="btn btn-secondary" onClick={this.loginClickEvent}>Login with Google</button>
      </div>
    );
  }
}

export default EditScat;
