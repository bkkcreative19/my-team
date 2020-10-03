import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <div className='nav__container-logo'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <ul className='nav__container-list'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
        <div className='nav__container-btn'>
          <Link to='/contact'>
            <Button color='#fff' bgColor='#014e56' text='contact us' />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
