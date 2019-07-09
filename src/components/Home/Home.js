import React from 'react';
import { Link } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';

import scatData from '../../helpers/data/scatData';

import './Home.scss';
import ScatCard from '../ScatCard/ScatCard';

class Home extends React.Component {
  state = {
    scats: [],
  }

  componentDidMount() {
    console.error(firebase.auth().currentUser.uid);
    const { uid } = firebase.auth().currentUser;
    scatData.getScats(uid)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error('error in home.js', err));
  }

  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  };

  render() {
    const makeScatCards = this.state.scats.map(scat => (
      <ScatCard
        key={scat.id}
        scat={scat}
      />
    ));
    const singleLink = '/scat/12345';
    return (
      <div className="Home container-fluid">
        <h1>Home</h1>
        <button className="btn btn-info" onClick={this.editEvent}>Edit</button>
        <br />
        <Link to={singleLink}>View Single</Link>
        <div className="scat-container d-flex">
        {makeScatCards}
        </div>
      </div>
    );
  }
}

export default Home;
