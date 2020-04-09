import React from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa'
import logo from '../../mocks/images/logo.svg';

export default class Navbar extends React.Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState((prev) => ({isOpen: !prev.isOpen}))
  }
  render() {
    return (
      <nav>
        Navbar
      </nav>
    )
  }
}