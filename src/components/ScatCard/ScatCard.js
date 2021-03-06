import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ScatCard.scss';

import scatShape from '../../helpers/propz/scatShape';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatCardShape,
    deleteScat: PropTypes.func.isRequired,
  }

  deleteMe = (e) =>{
    e.preventDefault();
    const { scat, deleteScat } = this.props;
    deleteScat(scat.id);
  }

  render() {
    const { scat } = this.props;
    const singleLink = `/scat/${scat.id}`;
    const editLink = `/edit/${scat.id}`;
    return (
      <div className="ScatCard card col-4 bg-dark text-light">
        <div className="card-body">
          <div className="card-title">
            <h5 className="card-title">{scat.sampleName}</h5>
            <h6 className="card-subtitle">Found at {scat.location}</h6>
            <div className="card-text">
              Color: {scat.color}
                <br />
              Weight: {scat.weight} Oz
                <br />
                Suspected Animal: {scat.animal}
              </div>
              <Link className="btn btn-success col" to={singleLink}>View</Link>
              <Link className="btn btn-secondary col" to={editLink}>Edit</Link>
              <button className="btn btn-danger" onClick={this.deleteMe}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
