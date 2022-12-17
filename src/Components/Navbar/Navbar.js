import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";





function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);









  return (
    <>
      <nav className="container main-nav">
        <div className="logo">
          {" "}
          <div className="d-flex foot-logo">
            <NavLink to='/'>
            <img
              src="https://ik.imagekit.io/cforcrypto/Dework/logo_new.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669805675437"
              alt=""
              className=""
            />
            </NavLink>
         
          </div>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
          <li>
              <NavLink to="/" >Litepaper</NavLink>
            </li>
         
         
       
            <li>
              <NavLink to="/rewards" >How to buy</NavLink>
            </li>
            <li>
              <NavLink to="/nft-market" >Connect Wallet</NavLink>
            </li>
         
           
            
          
          </ul>
        </div>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <a href="#home" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
     
    </>
  );
}

export default Navbar;
