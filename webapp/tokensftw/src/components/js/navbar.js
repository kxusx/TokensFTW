import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "../css/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let navbar_classes = ['navbar'];
  let nav_item_a_classes = ['nav_item_a'];
  if (scrolled) {
    navbar_classes.push('navbar_scrolled');
    nav_item_a_classes.push('nav_item_a_scrolled');
  }

  return (
    <nav className={navbar_classes.join(" ")}>
      <Link to="/" className="navbar_logo">
        <div className="navbar_logo_text">
          <div className="navbar_logo_text_1">
            TokensFTW
          </div>
        </div>
      </Link>
      {
        localStorage.getItem('userType') != null && (
          <ul className='nav_items'>
            <li className="nav_item">
              <Link to="./" className={nav_item_a_classes.join(" ")}>Home</Link>
            </li>
            <li className="nav_item">
              <Link to="./sell" className={nav_item_a_classes.join(" ")}>Sell</Link>
            </li>
            <li className="nav_item">
              <Link to="./buy" className={nav_item_a_classes.join(" ")}>Buy</Link>
            </li>
            {
              localStorage.getItem('userType') === 'owner' && (
                <li className="nav_item">
                  <Link to="./distribute" className={nav_item_a_classes.join(" ")}>Distribute</Link>
                </li>
              )
            }
            {
              localStorage.getItem('userType') === 'owner' && (
                <li className="nav_item">
                  <Link to="./tenantRequests" className={nav_item_a_classes.join(" ")}>Tenant Requests</Link>
                </li>
              )
            }
            {
              localStorage.getItem('userType') === 'owner' && 
              initialized &&
              (
                <li className="nav_item">
                  <Link to="./initialize-nft" className={nav_item_a_classes.join(" ")}>Initialize NFT</Link>
                </li>
              )
            }
          </ul>
        )
      }
    </nav>
  );
}

export default Navbar;
