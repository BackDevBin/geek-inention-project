import React from 'react';
import web from '../../../assets/web.svg';
import { FaArrowRight } from 'react-icons/fa';

const SoftwerPlatform = () => {

    return (
        <div className='pt-32'>

            <div className='text-center pb-32'>
                <p className='text-6xl font-semibold pb-8'>Software for modern platforms</p>
                <p className='text-xl'>We develop applications for mobile, web, wearables, and TV.</p>
            </div>

            <div className='flex justify-around'>

                <div className='px-4 text-center'>
                    <img className='mb-6' src={web} alt="" />
                    <p className='text-2xl font-semibold'>Web</p>
                </div>
                <div className='px-4 text-center'>
                    <img className='mb-6' src={web} alt="" />
                    <p className='text-2xl font-semibold'>Web</p>
                </div>
                <div className='px-4 text-center'>
                    <img className='mb-6' src={web} alt="" />
                    <p className='text-2xl font-semibold'>Web</p>
                </div>
                <div className='px-4 text-center'>
                    <img className='mb-6' src={web} alt="" />
                    <p className='text-2xl font-semibold'>Web</p>
                </div>
                <div className='px-4 text-center'>
                    <img className='mb-6' src={web} alt="" />
                    <p className='text-2xl font-semibold'>Web</p>
                </div>
                <div className='px-4 text-center'>
                    <img className='mb-6' src={web} alt="" />
                    <p className='text-2xl font-semibold'>Web</p>
                </div>


            </div>

            <div className='text-center pt-32 pb-40'>
                <button className='text-xl border py-3 px-7 rounded-full'>See our tech stack <FaArrowRight className='inline font-thin'></FaArrowRight></button>
            </div>

        </div>
    );
};

export default SoftwerPlatform;