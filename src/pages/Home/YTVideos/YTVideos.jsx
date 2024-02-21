import './YTVideos.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import book from '../../../assets/images/book.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const YTVideos = () => {
    return (
        <div className="yt-wrapper">
            <div className="container mx-auto">
                <div className="yt-bg flex items-center justify-center">
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='flex items-center justify-center'>
                            <div className="flex items-center justify-center">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/-YQzRiw4ShM?si=yNLwOSylzEXNeJt5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <img className='w-56' src={book} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-center'>
                            <div className="flex items-center justify-center">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/-YQzRiw4ShM?si=yNLwOSylzEXNeJt5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <img className='w-56' src={book} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default YTVideos;