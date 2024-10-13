import React from 'react'
import { NavLink } from 'react-router-dom'

export  const Headers = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">

    <NavLink className="navbar-brand" exact to=' /'>Series/Peliculas</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
            <NavLink className="nav-link " activeClassName = "active" exact to='/'>Media</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link " activeClassName = "active" exact to='/generos'>Genero</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link " activeClassName = "active" exact to='/tipos'>Tipo</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link " activeClassName = "active" exact to='/directores'>Director</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link " activeClassName = "active" exact to='/productoras'>Productora</NavLink>
          </li>
        
          
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

