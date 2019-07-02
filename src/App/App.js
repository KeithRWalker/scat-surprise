import React from 'react';

import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';
import MyNav from '../components/MyNav/MyNav';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNav />
      </div>
    );
  }
}

export default App;
