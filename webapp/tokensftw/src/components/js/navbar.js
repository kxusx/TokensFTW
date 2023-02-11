import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import "../css/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDown, setDropdown] = useState(false);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('walletAddress') !== null) {
      let tempAddress = localStorage.getItem('walletAddress');
      tempAddress = tempAddress.substring(0, 6) + '...' + tempAddress.substring(tempAddress.length - 4, tempAddress.length);
      setAddress(tempAddress);
    }
  }, []);

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 80) {
  //     setScrolled(true);
  //   }
  //   else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // });

  let navbar_classes = ['navbar'];
  let nav_item_a_classes = ['nav_item_a'];
  // if (scrolled) {
  //   navbar_classes.push('navbar_scrolled');
  //   nav_item_a_classes.push('nav_item_a_scrolled');
  // }

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
              {
                localStorage.getItem('userType') === 'owner' && (
                  <Link to="./owner-dashboard" className={nav_item_a_classes.join(" ")}>Dashboard</Link>
                )
              }
              {
                localStorage.getItem('userType') === 'stake-holder' && (
                  <Link to="./stakeholder-dashboard" className={nav_item_a_classes.join(" ")}>Dashboard</Link>
                )
              }
              {
                localStorage.getItem('userType') === 'tenant' && (
                  <Link to="./tenant-dashboard" className={nav_item_a_classes.join(" ")}>Dashboard</Link>
                )
              }
            </li>
            {
              localStorage.getItem('userType') !== 'tenant' && (
                <li className="nav_item">
                  <Link to="./sell" className={nav_item_a_classes.join(" ")}>Sell</Link>
                </li>
              )
            }
            {
              localStorage.getItem('userType') !== 'tenant' && (
                <li className="nav_item">
              <Link to="./buy-nft" className={nav_item_a_classes.join(" ")}>Buy</Link>
            </li>
              )
            }
            {
              localStorage.getItem('userType') === 'owner' && (
                <li className="nav_item">
                  <Link to="./tenants" className={nav_item_a_classes.join(" ")}>Tenants</Link>
                </li>
              )
            }
            {
              localStorage.getItem('userType') === 'owner' &&
              !initialized &&
              (
                <li className="nav_item">
                  <Link to="./initialize-nft" className={nav_item_a_classes.join(" ")}>Initialize NFT</Link>
                </li>
              )
            }
            {
              localStorage.getItem('userType') === 'tenant' &&
              (
                <li className="nav_item">
                  <Link to="./property-rent" className={nav_item_a_classes.join(" ")}>Request to Rent</Link>
                </li>
              )
            }
            {
              localStorage.getItem('userType') !== null && (
                <li className="nav_item">
                  <PersonOutlineOutlinedIcon sx={{ fontSize: 30, color: '#004c90', cursor: 'pointer' }}
                    onClick={() => {
                      setShowDropDown(!showDropDown);
                    }}
                  />
                  <ArrowDropDownIcon
                    sx={{ fontSize: 30, color: '#004c90', cursor: 'pointer' }}
                    onClick={() => {
                      setShowDropDown(!showDropDown);
                    }}
                  />
                  {
                    showDropDown && (
                      <ul className="user" onClick={() => {
                        setDropdown(false);
                        setShowDropDown(false);
                      }}>
                        <li>Address: {address}</li>
                        <li>
                          <Link to='./' onClick={() => {
                            localStorage.clear();
                            setDropdown(false);
                          }}
                            style={{ cursor: 'pointer', textDecoration: 'none' }}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    )
                  }
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
