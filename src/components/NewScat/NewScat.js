import React from 'react';
import Firebase from 'firebase/app';
import 'firebase/auth';

import scatData from '../../helpers/data/scats';

import './NewScat.scss';

const defaultScat = {
  id: '',
  location: '',
  weight: '',
  color: '',
  sampleName: '',
  animal: '',
  uid: '',
};

class NewScat extends React.Component {
  state={
    newScat: defaultScat,
  }

  formFieldStringState = (name, e) => {
    const tempScat = { ...this.state.newScat };
    tempScat[name] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  sampleNameChange = e => this.formFieldStringState('sampleName', e);

  colorChange = e => this.formFieldStringState('color', e);

  weightChange = e => this.formFieldStringState('weight', e);

  animalChange = e => this.formFieldStringState('animal', e);

  locationChange = e => this.formFieldStringState('location', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newScat };
    saveMe.uid = Firebase.auth().currentUser.uid;
    scatData.postScat(saveMe)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error(err));
  }


  render() {
    const { newScat } = this.state;
    return (
      <div className="NewScat">
        <h1>NewScat</h1>

        <form onSubmit={this.formSubmit}>

        <div className="form-group">
          <label htmlFor="sampleName">Sample Name</label>
          <input
            type="text"
            className="form-control"
            id="sampleName"
            placeholder="Sample 12"
            value={newScat.sampleName}
            onChange={this.sampleNameChange}
          />
          </div>

          <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            className="form-control"
            id="color"
            placeholder="brown"
            value={newScat.color}
            onChange={this.colorChange}
          />
          </div>

          <div className="form-group">
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            className="form-control"
            id="weight"
            placeholder="13oz"
            value={newScat.weight}
            onChange={this.weightChange}
          />
          </div>

          <div className="form-group">
          <label htmlFor="animal">Animal</label>
          <input
            type="text"
            className="form-control"
            id="animal"
            placeholder="animal"
            value={newScat.animal}
            onChange={this.animalChange}
          />
          </div>

          <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="USA"
            value={newScat.location}
            onChange={this.locationChange}
          />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
    );
  }
}

export default NewScat;
