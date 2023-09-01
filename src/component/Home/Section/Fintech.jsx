import React from 'react';
import fintechImage from '../../../assets/industry-fintech.png';

const Fintech = () => {
    return (
        <div className='h-fit bg-violet-600 flex px-10 py-36'>

            <div className='w-1/2 text-center' >
                <h3 className='text-6xl font-semibold'>Fintech Solution</h3>
                <h2>Transforming Fintech with AI</h2>
                <div className='flex'>
                    <p>Fraud detection</p>
                    <p>Transaction categorisation</p>
                    <p>Risk Scoring</p>
                </div>

                <p>Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility, transaction categorization for seamless organization, and anomaly detection to safeguard your assets</p>

                <button>See all Case Study</button>


            </div>


            <div>
                <img src={fintechImage} alt="" />
            </div>

        </div>
    );
};

export default Fintech;