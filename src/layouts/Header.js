import React, { useRef, useState, useEffect } from "react";
import logoImg from "../assets/images/logo.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Header = () => {

  const [isNavBarOpen, setNavBarOpen] = useState(false);
  const headerRef = useRef(null);

  const handleMenuClick = () => {
    setNavBarOpen(!isNavBarOpen);
  };

  const handleLinkClick = () => {
    setNavBarOpen(false);
  };

  const handleClickOutsideNavBar = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setNavBarOpen(false);
    }
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideNavBar);

    return () => {
      document.removeEventListener('click', handleClickOutsideNavBar);
    };
  }, []);

  return (
    <header ref={headerRef} className="header fixed top-0 left-0 text-3xl md:text-2xl tracking-wide w-full py-3 px-[1.9%] lg:px-[9%] flex justify-between items-center z-[100] shadow-sm shadow-slate-300 bg-white blur:bg-white/95 dark:shadow-slate-700 dark:bg-slate-900 backdrop-blur transition-all duration-300">
      <Link to="/" className="logo font-semibold flex items-center justify-center">
        <img src={logoImg} className="h-9" alt="AviKashyup's Logo"/>
        <span id="navTitle">AviKashyup</span>
      </Link>
      <i
        id="menu-icon"
        className={`fa-solid fa-bars fa-sm cursor-pointer block md:hidden ${isNavBarOpen ? "fa-xmark" : ""}`}
        onClick={handleMenuClick}
      ></i>
      <nav id='navbar' className={`navbar text-xl font-medium max-md:absolute max-md:top-full max-md:w-full max-md:px-[1.8%] max-md:left-0 transition-colors duration-300 max-md:border-b max-md:dark:border-none max-md:shadow-sm max-md:dark:bg-slate-800 max-md:shadow-slate-300 max-md:bg-slate-100 ${isNavBarOpen ? "" : "max-md:hidden"}`}>
        <HashLink smooth
          to="/"
          className="hover:text-sky-500 hover:dark:text-sky-400 ml-14 max-md:block max-md:my-5 max-md:mx-0" onClick={handleLinkClick}
        >
          Home
        </HashLink>
        <HashLink smooth
          to="/#projects"
          className="hover:text-sky-500 hover:dark:text-sky-400 ml-14 max-md:block max-md:my-5 max-md:mx-0" onClick={handleLinkClick}
        >
          Projects
        </HashLink>
        <HashLink smooth
          to="/#about"
          className="hover:text-sky-500 hover:dark:text-sky-400 ml-14 max-md:block max-md:my-5 max-md:mx-0" onClick={handleLinkClick}
        >
          About
        </HashLink>
        <HashLink smooth
          to="/#contact"
          className="hover:text-sky-500 hover:dark:text-sky-400 ml-14 max-md:block max-md:my-5 max-md:mx-0" onClick={handleLinkClick}
        >
          Contact
        </HashLink>
        <i className="fa-sharp fa-solid fa-circle-half-stroke fa-flip-horizontal ml-14 max-md:block max-md:my-5 max-md:mx-0" onClick={toggleDarkMode}></i>
      </nav>
    </header>
  );
};

export default Header
