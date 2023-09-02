import React from 'react';
import Navber from '../Navbar/Navber';
import Fintech from './Section/Fintech';
import Industrial from './Section/Industrial';

const Home = () => {
    return (
        <div className='text-white'>
            <Navber></Navber>
            <Fintech></Fintech>
            <Industrial></Industrial>
        </div>
    );
};

export default Home;