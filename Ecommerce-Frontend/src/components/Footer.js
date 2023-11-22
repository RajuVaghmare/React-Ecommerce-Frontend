import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Footer.css'; //Import styles

// Functional component representing the footer section of the page
const Footer = () => {
  return (
    <footer id="footer" className="text-center bg-dark ">
      <div className="container p-4 pb-0">
        <div className="row  ">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h3 className="text-uppercase text-white">Women</h3>
            <ul className="list-unstyled mb-0">
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Dresses</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Pants</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Skirts</NavLink>
            </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h3 className="text-uppercase text-white">Men</h3>
            <ul className="list-unstyled mb-0">
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Shirts</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Pants</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Hoodies</NavLink>
            </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h3 className="text-uppercase text-white">Kids</h3>
            
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h3 className="text-uppercase text-white">Links</h3>
            <ul className="list-unstyled mb-0">
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Login</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/" className="nav-link">Contact</NavLink>
            </li>
            </ul>
          </div>

          {/* Add similar sections for Men, Kids, and Links */}
        </div>
        <hr className="mb-4 mt-4" />
        <p>Copyright &copy; E-commerce 2023-24</p>
      </div>
    </footer>
  );
};

export default Footer;
