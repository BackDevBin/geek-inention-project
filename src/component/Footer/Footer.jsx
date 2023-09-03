import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='pb-5'>
            <div className='text-center pt-8 pb-24 max-w-3xl mx-auto'>
                <h3 className='md:text-5xl text-4xl font-semibold px-2.5 pb-8'>Get to know us better!</h3>
                <p className='opacity-80 text-xl px-2 pb-12'>It is a pleasure to have you on our website. Let us know if there's an opportunity to do something together.</p>
                <button className='text-lg py-2.5 px-10 rounded-full bg-orange-700'>Drop us a message</button>
            </div>

            <div className='pb-7 pt-10 px-10 md:flex md:text-start text-center'>
                <div>
                    <Link><h3 className='text-4xl semi-bold font-bold'>Geeks <span className='text-orange-500'>Invention</span></h3></Link>
                    <p className='opacity-80'>447 Broadway, 2nd Floor Suite #772,<br></br> New York 10013, United States<br></br>
                        +1-347-535-0004</p>
                </div>
                <div className='pt-4 md:grow'>
                    <Link to="/" className='text-base py-1 px-2 md:ms-3'>Work</Link>
                    <Link to="/" className='text-base py-1 px-2 md:ms-3'>Technologies</Link>
                    <Link to="/" className='text-base py-1 px-2 md:ms-3 inline-block'>Services</Link>
                    <Link to="/" className='text-base py-1 px-2 md:ms-3'>Company</Link>
                    <Link to="/" className='text-base py-1 px-2 md:ms-3'>Contacts</Link>
                    <div>
                    <Link to="/" className='text-base py-1 px-2 md:ms-3'>Terms and Conditions</Link>
                    <Link to="/" className='text-base py-1 px-2 md:ms-3'> Privacy Policy</Link>
                    </div>
                </div>
                <div>
                <button style={{width:"282px"}} className='text-xl border py-2.5 px-7 rounded-full'>Stay tuned for our<br></br> updates</button>
                </div>
            </div>

            <div className='text-center text-sm opacity-20 '>
                <p>© Copyright 2023 – Mobile App Design and Development Company. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;