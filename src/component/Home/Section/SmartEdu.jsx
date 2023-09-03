import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import industryEduImage from '../../../assets/images/industry-education.webp';


const SmartEdu = () => {
    return (
        <div className='h-fit bg-violet-800 md:flex md:px-10 md:py-36 px-3 pt-6 pb-8'>

            <div className='md:w-1/2'>
                <img src={industryEduImage} alt="" />
            </div>

            <div className='md:w-1/2 px-3 pt-5 md:pt-0 md:mx-14' >
                <h3 className='text-6xl font-semibold pb-3'>Smart Education</h3>
                <h2 className='opacity-60 text-3xl pb-8'>Elevate your Education Institution</h2>
                <div className='grid grid-cols-2 md:flex md:gap-2 gap-1 pb-8'>
                    <p className='text-sm px-3 py-1.5 rounded-full text-center bg-violet-700'>Learning Management</p>
                    <p className='text-sm px-3 py-1.5 rounded-full text-center bg-violet-700'>Course offering</p>
                    <p className='text-sm px-3 py-1.5 rounded-full text-center bg-violet-700'>Professional Training</p>
                </div>

                <p className='pb-14 text-base'>Elevate your education institution with our comprehensive software solutions. Learning management, course offerings, professional training, certification, and school management tools to streamline your operations and enhance your students' learning experience. Trust us to provide the cutting-edge technology and support you need to thrive in the ever-evolving education industry.</p>

                <div className='md:text-start text-center'>
                    <button className='text-xl border py-3 px-7 rounded-full'>See full Case Study <FaArrowRight className='inline font-thin'></FaArrowRight></button>
                </div>


            </div>

        </div>
    );
};

export default SmartEdu;