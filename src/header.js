import React from 'react';
import logo from './Images/Abolyn-logo.png' 
import { ReactComponent as BellIcon } from "../src/Images/bell-regular.png.svg";
import { ReactComponent as ShoppingIcon } from '../src/Images/cart-shopping-solid.svg';
import { ReactComponent as UserIcon } from '../src/Images/user-regular.svg';
import "./header.css"
const Header = () => {
  return (
    <div className="header">
      <div className="logo-icons-container">
        <span className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
        </span>
        <span className="icons-container">
          <a href="your-link-here" className="bell-link">
            <BellIcon height="20px" />
          </a>
          <a href="your-link-here" className="shopping-link">
            <ShoppingIcon height="20px" />
          </a>
          <a href="your-link-here" className="user-link">
            <UserIcon height="20px" />
          </a>
        </span>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default Header;
