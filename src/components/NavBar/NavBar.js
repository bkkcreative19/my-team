import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo";
import "./NavBar.scss";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toogleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    
    <header>
    
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
        <i onClick={toogleMenu} className='hamburger fas fa-bars'></i>
      </nav>
      
      
      <nav className={isOpen ? 'mobile-nav show' : 'mobile-nav'}>
      
     
     
    
        <ul>
          <i onClick={toogleMenu} className="close fas fa-times"></i>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/about'>about</Link></li>
          
        </ul>
        <div className='nav__container-btn'>
            <Link to='/contact'>
              <Button color='#fff' bgColor='#014e56' text='contact us' />
            </Link>
          </div>
          <svg className='mobile-nav-pattern' xmlns="http://www.w3.org/2000/svg" width="200" height="200"><g fill="none" fillRule="evenodd"><path fill="#2C6269" d="M100 100H0V0h100z"/><path fill="#F67E7E" d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0zm0 67c-18.225 0-33 14.775-33 33s14.775 33 33 33 33-14.775 33-33-14.775-33-33-33z"/><path fill="#79C8C7" d="M100 40v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0v-4h100zm0-8v4H0V8h100zm0-8v4H0V0h100z"/></g></svg>
      </nav>  
    </header>
  );
};

export default NavBar;
