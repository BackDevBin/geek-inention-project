import React from 'react';
import imbLogo from '../../../assets/logo/logo-ibm.webp';

const LogoCard = () => {
    return (
        <div className='px-12 py-24 bg-slate-800 text-center'>
            <img src={imbLogo} alt="" />
            <p>Global Technology</p>
            <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
        </div>
    );
};

export default LogoCard;