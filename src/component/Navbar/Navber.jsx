import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>

            <div className='flex justify-between items-center px-10 py-5'>
                
                <div>
                <Link><h3 className='text-4xl semi-bold font-semibold'>Geeks Invention</h3></Link>
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