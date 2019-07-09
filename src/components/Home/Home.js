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

  // This calls the scats again after a scat is deleted
  getScats = () => {
    const { uid } = firebase.auth().currentUser;
    scatData.getScats(uid)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error('error in getScats', err));
  }

  // This calls the scats once the component has loaded(Home)
  // It calls the promise getScats() from scatData
  // It assigns, and passes the users uid to getScats to only show the users scatt
  // then it sets the State of scats to be = to the Array it recieves from getScatts
  componentDidMount() {
    const { uid } = firebase.auth().currentUser;
    scatData.getScats(uid)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error('error in home.js', err));
  }

  // editEvent
  editEvent = (e) => {
    e.preventDefault();
    const orderId = '12345';
    this.props.history.push(`/edit/${orderId}`);
  };

  // This calls the function deleteScat in scatData that uses Axios.delete to delete a scat
  // It takes and sends the scat id to identify what card/scat's delete button has been clicked
  // then It calls getScats() to reload the scats after it deletes one
  deleteScat = (scatId) => {
    scatData.deleteScat(scatId)
      .then(() => this.getScats())
      .catch(err => console.error('error in deleteScat', err));
  }

  render() {
    // This takes the array from the state (which is set in "componentDidMount")
    // Then it uses map to make a "Scat" component for each item in the array
    const makeScatCards = this.state.scats.map(scat => (
      <ScatCard
        key={scat.id}
        scat={scat}
        deleteScat={this.deleteScat}
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
