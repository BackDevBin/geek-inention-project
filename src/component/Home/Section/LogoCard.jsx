import React from 'react';

const LogoCard = ({imageUrl,title,shortDescription}) => {

    const paddingStyles = {
        padding: '90px 50px 90px 50px',
      };

    return (
        <div style={paddingStyles} className='bg-slate-800 text-center'>
            <img className='pb-10 inline-block ' src={imageUrl} alt="" />
            <p className='text-2xl pb-4 font-semibold'>{title}</p>
            <p className='text-base opacity-80'>{shortDescription}</p>
        </div>
    );
};

export default LogoCard;