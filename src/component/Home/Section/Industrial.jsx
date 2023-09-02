import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import industrialImage from '../../../assets/images/industry-iot.webp';

const Industrial = () => {
    return (
        <div className='h-fit bg-violet-800 flex px-10 py-36'>

            <div className='w-1/2'>
                <img src={industrialImage} alt="" />
            </div>

            <div className='w-1/2 px-5 mx-14' >
                <h3 className='text-6xl font-semibold pb-3'>Industrial IoT</h3>
                <h2 className='opacity-60 text-3xl pb-8'>Providing a better connected experience</h2>
                <div className='flex pb-8'>
                    <p className='text-sm px-3 py-1.5 me-1.5 rounded-full text-center bg-violet-700'>Connected manufacturing</p>
                    <p className='text-sm px-3 py-1.5 me-1.5 rounded-full text-center bg-violet-700'>Aviation</p>
                    <p className='text-sm px-3 py-1.5 me-1.5 rounded-full text-center bg-violet-700'>Smart Building</p>
                </div>

                <p className='pb-14 text-base'>Revolutionize your industry with our innovative IoT solutions. Our software development services offer connected manufacturing, pollution control, smart transportation, and intelligent farming, agriculture, and forestry. With our expertise, you can harness the power of technology to increase efficiency, reduce waste, and optimize operations for a sustainable future.</p>

                <button className='text-xl border py-3 px-7 rounded-full'>See full Case Study <FaArrowRight className='inline font-thin'></FaArrowRight></button>


            </div>

        </div>
    );
};

export default Industrial;