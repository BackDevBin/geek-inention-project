import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import fintechImage from '../../../assets/industry-fintech.png';

const Fintech = () => {
    
    return (
        <div className='h-fit bg-violet-800 flex px-10 py-36'>

            <div className='w-1/2 px-5 mx-14' >
                <h3 className='text-6xl font-semibold pb-3'>Fintech Solution</h3>
                <h2 className='opacity-60 text-3xl pb-8'>Transforming Fintech with AI</h2>
                <div className='flex pb-8'>
                    <p className='text-sm px-3 py-1.5 me-1.5 rounded-full text-center bg-violet-700'>Fraud detection</p>
                    <p className='text-sm px-3 py-1.5 me-1.5 rounded-full text-center bg-violet-700'>Transaction categorisation</p>
                    <p className='text-sm px-3 py-1.5 me-1.5 rounded-full text-center bg-violet-700'>Risk Scoring</p>
                </div>

                <p className='pb-14 text-base'>Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility, transaction categorization for seamless organization, and anomaly detection to safeguard your assets</p>

                <button className='text-xl border py-3 px-7 rounded-full'>See full Case Study <FaArrowRight className='inline font-thin'></FaArrowRight></button>


            </div>


            <div className='w-1/2'>
                <img src={fintechImage} alt="" />
            </div>

        </div>
    );
};

export default Fintech;