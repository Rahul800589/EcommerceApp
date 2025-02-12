import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false); 
  const [error, setError] = useState(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle More dropdown
  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  return (
    <section id="header">
      <Link to="/">
        <img width="50px" src="images/ecommerce.jpeg" className="logo" alt="E-commerce Logo" />
      </Link>

      <div>
        <ul id="navbar" className={isMobileMenuOpen ? 'active' : ''}>

          {/* Navbar Links */}
          <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/sproduct">Sproduct</Link></li>
                <li><Link to="/cart">Cart</Link></li>


          {/* <li id="lg-bag">
            <Link to="/cart">
              <i className="fa-solid fa-bag-shopping"></i>
            </Link>
          </li> */}

          {/* Close Mobile Menu */}
          <Link to="#" id="close" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="far fa-times"></i>
          </Link>
        </ul>
      </div>

      {/* Mobile View */}
      <div id="mobile">
        <Link to="/cart">
          <i className="far fa-shopping-bag"></i>

        </Link>
        <i id="bar" className="fas fa-outdent" onClick={toggleMobileMenu}></i>
      </div>

      {/* Display error message if any */}
      {error && <div className="error">{error}</div>}
    </section>
  );
};

export default Navbar;
