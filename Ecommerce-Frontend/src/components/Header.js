import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import headerLogo from '../Images/headerlogo.png';

// Functional component representing the Header section of the page
const Header = () => {
  return (
    <div id="header">
       {/* Navbar */}
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand mb-0 h1">
          <span id="logo">
            <img src={headerLogo} alt="logo" />
          </span>
        </NavLink>
        {/* Navbar toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <input className="form-control me-2" type="search" aria-label="Search" placeholder="Product name Category name.etc." id="searchbar" />
            </li>
            <li className="nav-item">
              <button className='btn' id="searchbtn">
                <b>Search</b>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn" id="log">
                <b>
                  <NavLink to="/" style={{ color: 'black', textDecoration: 'none' }}>
                    LOGIN
                  </NavLink>
                </b>
              </button>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="logo" id="cart">
                {' '}
                <FontAwesomeIcon className="cart" icon={faCartShopping} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Secondary navigation links */}
      <ul id="secnav" className="nav justify-content-center">
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/" className="nav-link">All Products</NavLink>
            </li>
            <li className="nav-item dropdown">
              {/* Women dropdown */}
                <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button"
                    to=".">Women</NavLink>
                <div class="dropdown-menu">
                <NavLink to="/" className="nav-link" style={{ color: 'black' }} >All Products</NavLink>
                <NavLink to="/" className="nav-link" style={{ color: 'black' }} >Dresses</NavLink>
                <NavLink to="/" className="nav-link" style={{ color: 'black' }} >Pants</NavLink>
                <NavLink to="/" className="nav-link" style={{ color: 'black' }} >Skirts</NavLink>
                </div>
            </li>
            <li className="nav-item dropdown">
              {/* Men dropdown */}
                <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button"
                    to="allproducts">Men</NavLink>
                <div class="dropdown-menu" >
                <NavLink to="/" className="nav-link" style={{ color: 'black' }} >All Products</NavLink>
                <NavLink to="/" className="nav-link" style={{ color: 'black' }} >Shirts</NavLink>
                <NavLink to="/" className="nav-link" style={{ color: 'black' }} >Pants</NavLink>
                <NavLink to="/" className="nav-link" style={{ color: 'black' }}>Hoodies</NavLink>
                </div>
            </li>
            {/* Kids link */}
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Kids</NavLink>
            </li>
            {/* Contact link */}
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Contact</NavLink>
            </li>
        </ul>
        
    </div>
  );
};

export default Header;
