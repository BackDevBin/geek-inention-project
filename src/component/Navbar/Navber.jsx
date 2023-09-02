import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navber = () => {


    const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

            <div className='flex justify-between items-center px-10 py-4'>
                
                <div>
                <Link><h3 className='text-4xl semi-bold font-bold'>Geeks <span className='text-orange-500'>Invention</span></h3></Link>
                </div>

                <div>
                    <Link to="/" className='text-base py-1 px-2 ms-3 uppercase'>Home</Link>
                    <Link to="/" className='text-base py-1 px-2 ms-3 uppercase'>Work</Link>
                    <Link to="/" className='text-base py-1 px-2 ms-3 uppercase'>TECHNOLOGIES</Link>
                    <Link to="/" className='text-base py-1 px-2 ms-3 uppercase'>SERVICES</Link>
                    <Link to="/" className='text-base py-1 px-2 ms-3 uppercase'>COMPANY</Link>
                    <Link to="/" className='text-base py-1 px-2 ms-3 uppercase'>CONTACTS</Link>
                </div>

            </div>
            
        </div>
    );
};

export default Navber;