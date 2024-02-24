import React, { useState } from 'react';
import './Banner.css';
import frontImage from '../../../assets/images/banner1.png';
import backImage from '../../../assets/images/banner2.png';

const Banner = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className=''>
            <div className={`flip-card mx-auto ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                <div className="flip-card-inner">
                    <div className="flip-card-front relative">
                        <img className='absolute' src={frontImage} alt="Front" style={{ width: '100%' }} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 style={{ position: 'absolute', top: '87%', left: '50%', transform: 'translate(-43%, -50%)' }} className='text-2xl text-center'>BROADCASTING SERVICES <br /> MEDIA PRODUCTION COMPANY</h1>
                        </div>
                    </div>

                    <div className="flip-card-back">
                        <img src={backImage} alt="Back" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
