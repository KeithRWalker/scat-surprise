import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';

import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

state= {
  isOpen: false,
}

toggle() {
  this.setState({ isOpen: !this.state.isOpen });
}

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="text-info" tag={RRNavLink} to='/home'>Home</NavLink>
          </NavItem>
            <NavItem>
          <NavLink className="text-info" tag={RRNavLink} to='/new'>New Scat</NavLink>
            </NavItem>
          <NavItem>
            <NavLink className="text-danger" href="#" onClick={this.logMeOut}>Logout</NavLink>
          </NavItem>
        </Nav>
        );
      }
      return <Nav className="ml-auto" navbar />;
    };

    return (
      <div className="MyNavbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Scat Surprise</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
