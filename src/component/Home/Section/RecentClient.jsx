import React from 'react';
import LogoCard from './LogoCard';

const RecentClient = () => {
    return (
        <div className='bg-black px-20'>

            <div className='mx-auto pt-32 pb-40 max-w-3xl text-center'>
                <h3 className='text-6xl font-semibold pb-5'>Recent clients</h3>
                <p className='text-xl'>We worked with the Fortune 500 companies in the USA, Africa, UK, Middle East
World's 4th Strongest Banking Brand, Automobile & IoT industry</p>
            </div>

            <div className='grid grid-cols-3'>
                <LogoCard></LogoCard>
            </div>
            
        </div>
    );
};

export default RecentClient;