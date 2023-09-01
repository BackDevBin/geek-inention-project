import React from 'react';
import Navber from '../Navbar/Navber';
import Fintech from './Section/Fintech';

const Home = () => {
    return (
        <div className='text-white'>
            <Navber></Navber>
            <Fintech></Fintech>
        </div>
    );
};

export default Home;