import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Sponsorship.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import image from '../../../assets/images/yt-bg-1.svg'
import image1 from '../../../assets/images/butterfly/butterfly1.svg'
import image2 from '../../../assets/images/butterfly/butterfly2.svg'
import image3 from '../../../assets/images/butterfly/butterfly3.svg'
import image4 from '../../../assets/images/butterfly/butterfly4.svg'
import image5 from '../../../assets/images/butterfly/butterfly5.svg'

export default function Sponsorship() {
  const [activeIndex, setActiveIndex] = useState(4); // Start from the middle image

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className='container mx-auto px-10'>
      <div className="spon-wrapper">
        <h1 className="text-3xl font-semibold ml-5">Our Sponsorship package</h1>
        <div className="spon-image"></div>
      </div>

      <Swiper
        loop={true} // Enable infinite loop
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="bg-[#fff]"
        onSlideChange={handleSlideChange}
        initialSlide={activeIndex} // Start from the middle image
        centeredSlidesBounds={true}
      >
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 0 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '92%', margin: 'auto' }} src={image1} />
          {activeIndex === 0 && <p className="text-center font-bold text-[#3A1010]">Diamond Sponsorship</p>}
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 1 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '92%', margin: 'auto' }} src={image2} />
          {activeIndex === 1 && <p className="text-center font-bold text-[#3A1010]">Demo Sponsorship</p>}
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 2 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '92%', margin: 'auto' }} src={image3} />
          {activeIndex === 2 && <p className="text-center font-bold text-[#3A1010]">Diamond Sponsorship</p>}
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 3 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '92%', margin: 'auto' }} src={image4} />
          {activeIndex === 3 && <p className="text-center font-bold text-[#3A1010]">Golden Sponsorship</p>}
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 4 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '92%', margin: 'auto' }} src={image5} />
          {activeIndex === 4 && <p className="text-center font-bold text-[#3A1010]">Silver Sponsorship</p>}
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 5 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '92%', margin: 'auto' }} src={image1} />
          {activeIndex === 5 && <p className="text-center font-bold text-[#3A1010]">Diamond Sponsorship</p>}
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 6 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '92%', margin: 'auto' }} src={image4} />
          {activeIndex === 6 && <p className="text-center font-bold text-[#3A1010]">Golden Sponsorship</p>}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
