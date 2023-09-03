import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import industrialImage from '../../../assets/images/industry-iot.webp';

const Industrial = () => {
    return (
        <div style={{ backgroundColor: 'rgb(1, 181, 172)',  }} className='h-fit md:flex md:px-10 md:py-36 px-3 pt-8 pb-8'>

            <div className='md:w-1/2'>
                <img src={industrialImage} alt="" />
            </div>

            <div className='md:w-1/2 md:px-5 md:mx-14 md:pt-0 pt-5' >
                <h3 className='text-6xl font-semibold pb-3'>Industrial IoT</h3>
                <h2 className='opacity-60 text-3xl pb-8'>Providing a better connected experience</h2>
                <div className='grid grid-cols-2 md:flex md:gap-2 gap-1 pb-8'>
                    <p style={{ backgroundColor: 'rgba(255, 255, 255, 0.11)',  }} className='text-sm px-3 py-1.5 rounded-full text-center'>Connected manufacturing</p>
                    <p style={{ backgroundColor: 'rgba(255, 255, 255, 0.11)',  }} className='text-sm px-3 py-1.5 rounded-full text-center'>Aviation</p>
                    <p style={{ backgroundColor: 'rgba(255, 255, 255, 0.11)',  }} className='text-sm px-3 py-1.5 rounded-full text-center'>Smart Building</p>
                </div>

                <p className='pb-14 text-base'>Revolutionize your industry with our innovative IoT solutions. Our software development services offer connected manufacturing, pollution control, smart transportation, and intelligent farming, agriculture, and forestry. With our expertise, you can harness the power of technology to increase efficiency, reduce waste, and optimize operations for a sustainable future.</p>

                <div className='md:text-start text-center'>
                    <button className='text-xl border py-3 px-7 rounded-full'>See full Case Study <FaArrowRight className='inline font-thin'></FaArrowRight></button>
                </div>


            </div>

        </div>
    );
};

export default Industrial;