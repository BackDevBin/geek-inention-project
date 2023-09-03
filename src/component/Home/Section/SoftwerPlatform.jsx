import React from 'react';
import web from '../../../assets/web.svg';
import { FaArrowRight } from 'react-icons/fa';

const SoftwerPlatform = () => {

    return (
        <div style={{ backgroundColor: 'rgb(35, 37, 44)',  }} className='pt-32'>

            <div className='text-center px-5 md:pb-32 pb-10'>
                <p className='md:text-6xl text-4xl font-semibold pb-8'>Software for modern platforms</p>
                <p className='text-xl opacity-80'>We develop applications for mobile, web, wearables, and TV.</p>
            </div>

            <div className='grid grid-cols-2 gap-2 md:flex justify-around'>

                <div className='px-4 text-center'>
                    <img className='mb-6 inline-block' src={web} alt="" />
                    <p className='text-2xl font-semibold'>Web</p>
                </div>
                <div className='px-4 text-center'>
                    <img className='mb-6 inline-block' src={web} alt="" />
                    <p className='text-2xl font-semibold'>iOS</p>
                </div>
                <div className='px-4 text-center'>
                    <img className='mb-6 inline-block' src={web} alt="" />
                    <p className='text-2xl font-semibold'>Android</p>
                </div>
                <div className='px-4 text-center'>
                    <img className='mb-6 inline-block' src={web} alt="" />
                    <p className='text-2xl font-semibold'>Hybrid</p>
                </div>
                <div className='px-4 text-center'>
                    <img className='mb-6 inline-block' src={web} alt="" />
                    <p className='text-2xl font-semibold'>Wearables</p>
                </div>
                <div className='px-4 text-center'>
                    <img className='mb-6 inline-block' src={web} alt="" />
                    <p className='text-2xl font-semibold'>TV</p>
                </div>


            </div>

            <div className='text-center md:pt-32 md:pb-40 pt-16 pb-20'>
                <button className='text-xl border py-3 px-7 rounded-full'>See our tech stack <FaArrowRight className='inline font-thin'></FaArrowRight></button>
            </div>

        </div>
    );
};

export default SoftwerPlatform;