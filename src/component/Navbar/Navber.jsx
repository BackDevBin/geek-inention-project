import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

const Navber = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 576) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>

      <div className='flex justify-between items-center px-5 py-2 md:px-10 md:py-4'>

        <div>
          <Link><h3 className='text-4xl semi-bold font-bold'>Geeks <span className='text-orange-500'>Invention</span></h3></Link>
        </div>

        <div className="block md:hidden">
          <button
            onClick={toggleNavbar}
            className="flex items-center px-2 py-1 rounded text-white bg-black"
          >
            <GiHamburgerMenu size={38} />
          </button>
        </div>

        {/* lg:flex-grow lg:items-center lg:w-auto */}


        <div className={`hidden md:block  ${isOpen ? '' : 'hidden'}`}>
          <div className="text-sm md:flex-grow">
            <Link to="/" className='text-base py-1 px-2 ms-3 uppercase'>Home</Link>
            <Link to="/" className='text-base py-1 px-2 ms-3 uppercase'>Work</Link>
            <Link to="/" className='text-base py-1 px-2 ms-3 uppercase'>TECHNOLOGIES</Link>
            <Link to="/" className='text-base py-1 px-2 ms-3 uppercase'>SERVICES</Link>
            <Link to="/" className='text-base py-1 px-2 ms-3 uppercase'>COMPANY</Link>
            <Link to="/" className='text-base py-1 px-2 ms-3 uppercase'>CONTACTS</Link>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Navber;