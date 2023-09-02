import React from 'react';
import LogoCard from './LogoCard';
import equityLogo from '../../../assets/logo/logo-equity.webp'
import imbLogo from '../../../assets/logo/logo-ibm.webp';
import audiLogo from '../../../assets/logo/logo-audi.webp';
import aramcoLogo from '../../../assets/logo/logo-aramco.webp';
import insurityLogo from '../../../assets/logo/logo-insurity.webp';


const RecentClient = () => {
    return (
        <div className='bg-black px-20'>

            <div className='mx-auto pt-32 pb-40 max-w-3xl text-center'>
                <h3 className='text-6xl font-semibold pb-5'>Recent clients</h3>
                <p className='text-xl'>We worked with the Fortune 500 companies in the USA, Africa, UK, Middle East
World's 4th Strongest Banking Brand, Automobile & IoT industry</p>
            </div>

            <div className='grid grid-cols-3 gap-7'>
                <LogoCard imageUrl ={imbLogo} title="Global Technology" 
                shortDescription="From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world."
                ></LogoCard>
                <LogoCard imageUrl ={equityLogo} title="4th Strongest Bank" 
                shortDescription="Empowering a continent by creating better livelihoods, Equity bank has been awarded 4th strongest Bank in the world in 2023. Offering various banking services over Africa region"
                ></LogoCard>
                <LogoCard imageUrl ={audiLogo} title="Intelligence on wheel" 
                shortDescription="Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology."
                ></LogoCard>
                <LogoCard imageUrl ={aramcoLogo} title="Energy Producer" 
                shortDescription="One of the world's largest integrated energy and chemicals companies, creating value across the hydrocarbon chain, and delivering societal and economic benefits to people and communities around the globe who rely on the vital energy we supply"
                ></LogoCard>
                <LogoCard imageUrl ={insurityLogo} title="Cloud-Native Insurance" 
                shortDescription="Insurity, a leading provider of cloud-based software for insurance carriers, brokers, and MGAs. Insurity serves 500+ insurers, with 400+ in the cloud and 330+ in the public cloud. It is trusted by 22 of the top 25 P&C carriers & 7 of the top 10 MGAs"
                ></LogoCard>
                <LogoCard imageUrl ={imbLogo} title="Global Technology" 
                shortDescription="From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world."
                ></LogoCard>
                <LogoCard imageUrl ={imbLogo} title="Global Technology" 
                shortDescription="From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world."
                ></LogoCard>
                <LogoCard imageUrl ={imbLogo} title="Global Technology" 
                shortDescription="From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world."
                ></LogoCard>
                <LogoCard imageUrl ={imbLogo} title="Global Technology" 
                shortDescription="From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world."
                ></LogoCard>
                <LogoCard imageUrl ={imbLogo} title="Global Technology" 
                shortDescription="From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world."
                ></LogoCard>
                <LogoCard imageUrl ={imbLogo} title="Global Technology" 
                shortDescription="From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world."
                ></LogoCard>
                <LogoCard imageUrl ={imbLogo} title="Global Technology" 
                shortDescription="From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world."
                ></LogoCard>
                
            </div>
            
        </div>
    );
};

export default RecentClient;