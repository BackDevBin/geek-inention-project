import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const CheckOut = () => {
    return (
        <div className='bg-black pt-16 pb-36'>

            <div className='max-w-3xl mx-auto bg-black text-center'>
                <h2 className='font-semibold text-5xl px-2.5 pb-8'>Check out more works by Geeks Invention</h2>

                <p className='text-xl px-10 pb-14 opacity-80'>Our case studies describe design and development solutions implemented at our Geeks Invention projects. The stories are a valuable resource for those looking to develop their own mobile apps.</p>

                <button className='text-xl border py-3 px-7 rounded-full'>See full Case Studies <FaArrowRight className='inline font-thin'></FaArrowRight></button>
            </div>

            <div>
                

            </div>
        </div>
    );
};

export default CheckOut;