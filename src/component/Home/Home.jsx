import React from 'react';
import Navber from '../Navbar/Navber';
import Fintech from './Section/Fintech';
import Industrial from './Section/Industrial';
import SmartEdu from './Section/SmartEdu';
import CheckOut from './Section/CheckOut';
import RecentClient from './Section/RecentClient';
import SoftwerPlatform from './Section/SoftwerPlatform';
import DedicatedTeam from './Section/DedicatedTeam';
import Footer from '../Footer/Footer';
import Embrace from './Section/Embrace';

const Home = () => {
    return (
        <div className='text-white bg-black'>
            <Navber></Navber>
            <Embrace></Embrace>
            <Fintech></Fintech>
            <Industrial></Industrial>
            <SmartEdu></SmartEdu>
            <CheckOut></CheckOut>
            <RecentClient></RecentClient>
            <SoftwerPlatform></SoftwerPlatform>
            <DedicatedTeam></DedicatedTeam>
            <Footer></Footer>
        </div>
    );
};

export default Home;