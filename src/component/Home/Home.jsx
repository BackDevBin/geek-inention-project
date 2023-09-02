import React from 'react';
import Navber from '../Navbar/Navber';
import Fintech from './Section/Fintech';
import Industrial from './Section/Industrial';
import SmartEdu from './Section/SmartEdu';

const Home = () => {
    return (
        <div className='text-white'>
            <Navber></Navber>
            <Fintech></Fintech>
            <Industrial></Industrial>
            <SmartEdu></SmartEdu>
        </div>
    );
};

export default Home;