import React from 'react'
import { NavLink } from "react-router-dom"

const Nav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-center text-white fw-bold" href="/">PELIS UTN </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className={({isActive}) => isActive ? "nav-item active": "nav-item"}>
              <NavLink to="/" className="nav-link">Peliculas</NavLink>
            </li>
            <li className={({isActive}) => isActive ? "nav-item active": "nav-item"}>
              <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav