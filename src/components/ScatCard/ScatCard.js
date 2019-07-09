import React from 'react';
import './ScatCard.scss';

import scatShape from '../../helpers/propz/scatShape';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatCardShape,
  }

  render() {
    const { scat } = this.props;
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
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
