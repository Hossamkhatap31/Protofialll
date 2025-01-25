// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>

<nav className="navbar py-1 shadow-lg navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand fs-2 fw-bold" to={"home"}>Hossam Khatap</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item  pe-3 fw-bold fs-6 ">
          <NavLink className="nav-link  px-4" aria-current="page" to={"home"}>Home</NavLink>
        </li>
        <li className="nav-item  pe-3 fw-bold fs-6">
          <NavLink className="nav-link  px-4" to={"about"}>About</NavLink>
        </li>
        <li className="nav-item  pe-3 fw-bold fs-6">
          <NavLink className="nav-link  px-4" to={"portfolio"}>portfolio</NavLink>
        </li>
        <li className="nav-item  pe-3 fw-bold fs-6 active">
          <NavLink className="nav-link  px-4" to={"contact"}>contact</NavLink>
        </li>


      </ul>

    </div>
  </div>
</nav>






    
    
    
    </>
  )
}
