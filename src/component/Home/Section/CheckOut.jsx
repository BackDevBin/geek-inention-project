import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const CheckOut = () => {
    return (
        <div style={{ backgroundColor: 'rgb(25, 24, 30)',  }} className='bg-black pt-16 pb-36'>

            <div className='max-w-3xl mx-auto text-center'>
                <h2 className='font-semibold md:text-5xl text-3xl md:px-2.5 px-2.5 pb-8'>Check out more works by Geeks Invention</h2>

                <p className='text-xl md:px-10 px-5 pb-14 opacity-80'>Our case studies describe design and development solutions implemented at our Geeks Invention projects. The stories are a valuable resource for those looking to develop their own mobile apps.</p>

                <button className='text-xl border py-3 px-7 rounded-full'>See full Case Studies <FaArrowRight className='inline font-thin'></FaArrowRight></button>
            </div>

            <div>
                

            </div>
        </div>
    );
};

export default CheckOut;