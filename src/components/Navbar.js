import React from 'react'
import PropTypes from 'prop-types'
import { FaMoon } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { a } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="https://gauravdubey110.github.io/textutils-react/"><img src='logo192.png' height={"40px"} /></a>
          <a className="navbar-brand" href="https://gauravdubey110.github.io/textutils-react/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="https://gauravdubey110.github.io/textutils-react/" style={{ "text-decoration": "none" }}>Home</a>
              </li>
            </ul>
            <div className={`button text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
              <button type="button" onClick={props.toggleMode} className={props.mode === 'light' ? "btn-secondary btn-sm" : "btn-warning btn-sm"} title={props.mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'} >{props.mode === 'light' ? <FaMoon /> : <FontAwesomeIcon icon={faSun} />}</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here',
}