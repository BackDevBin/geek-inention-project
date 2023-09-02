import React from 'react';
import Navber from '../Navbar/Navber';
import Fintech from './Section/Fintech';
import Industrial from './Section/Industrial';
import SmartEdu from './Section/SmartEdu';
import CheckOut from './Section/CheckOut';
import RecentClient from './Section/RecentClient';

const Home = () => {
    return (
        <div className='text-white'>
            <Navber></Navber>
            <Fintech></Fintech>
            <Industrial></Industrial>
            <SmartEdu></SmartEdu>
            <CheckOut></CheckOut>
            <RecentClient></RecentClient>
        </div>
    );
};

export default Home;