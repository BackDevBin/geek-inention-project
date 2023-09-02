import React from 'react';
import agileLogo from '../../../assets/team/agile.svg';
import { FaArrowRight } from 'react-icons/fa';


const DedicatedTeam = () => {
    return (
        <div className='pt-32'>

            <div className='max-w-3xl mx-auto text-center pb-32'>
                <p className='text-6xl font-semibold pb-8'>Only dedicated teams</p>
                <p className='text-xl opacity-80'>Our team is 100% concentrated on your project and you have full control over management of the dedicated team members.</p>
            </div>

            <div>

                <div className='grid grid-cols-3 pb-24'>

                    <div className='px-4 text-center'>
                        <img className='mb-6 inline-block' src={agileLogo} alt="" />
                        <p className='text-2xl font-semibold'>Agile approach</p>
                    </div>
                    <div className='px-4 text-center'>
                        <img className='mb-6 inline-block' src={agileLogo} alt="" />
                        <p className='text-2xl font-semibold'>Deep tech expertise</p>
                    </div>
                    <div className='px-4 text-center'>
                        <img className='mb-6 inline-block' src={agileLogo} alt="" />
                        <p className='text-2xl font-semibold'>Personal commitment</p>
                    </div>

                </div>
                <div className='grid grid-cols-3 pb-24'>
                    <div className='px-4 text-center'>
                        <img className='mb-6 inline-block' src={agileLogo} alt="" />
                        <p className='text-2xl font-semibold'>Regular reporting</p>
                    </div>
                    <div className='px-4 text-center'>
                        <img className='mb-6 inline-block' src={agileLogo} alt="" />
                        <p className='text-2xl font-semibold'>Time tracking</p>
                    </div>
                    <div className='px-4 text-center'>
                        <img className='mb-6 inline-block' src={agileLogo} alt="" />
                        <p className='text-2xl font-semibold'>Scalability</p>
                    </div>

                </div>

                <div className='pt-8 pb-36 text-center'>
                <button className='text-xl border py-3 px-7 rounded-full'>See our services <FaArrowRight className='inline font-thin'></FaArrowRight></button>
                </div>
            </div>



        </div>
    );
};

export default DedicatedTeam;