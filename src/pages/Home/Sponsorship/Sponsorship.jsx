import React, { useRef, useState } from 'react';// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Sponsorship.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard , Autoplay} from 'swiper/modules';

import image1 from '../../../assets/images/butterfly/butterfly1.svg'
import image2 from '../../../assets/images/butterfly/butterfly2.svg'
import image3 from '../../../assets/images/butterfly/butterfly3.svg'
import image4 from '../../../assets/images/butterfly/butterfly4.svg'
import image5 from '../../../assets/images/butterfly/butterfly5.svg'

export default function Sponsorship() {
  const [activeIndex, setActiveIndex] = useState(3); // Start from the middle image

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if(progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if(progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };


  return (
    <div className='container mx-auto px-10'>
      <div className="spon-wrapper">
        <h1 className="text-3xl font-semibold ml-5">Our Sponsorship Package</h1>
        <div className="spon-image"></div>
      </div>

      <Swiper
        loop={true} // Enable infinite loop
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true} // Add navigation arrows
        modules={[EffectCoverflow, Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="bg-[#fff] mySwiper"
        onSlideChange={handleSlideChange}
        initialSlide={activeIndex} // Start from the middle image
        centeredSlidesBounds={true}
      >
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 0 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '100%', margin: 'auto' }} src={image1} />
          {activeIndex === 0 && <p className="text-center font-bold text-[#3A1010]">Diamond Sponsorship</p>}
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 1 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '100%', margin: 'auto' }} src={image2} />
          {activeIndex === 1 && <p className="text-center font-bold text-[#3A1010]">Demo Sponsorship</p>}
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 2 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '100%', margin: 'auto' }} src={image3} />
          {activeIndex === 2 && <p className="text-center font-bold text-[#3A1010]">Diamond Sponsorship</p>}
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 3 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '100%', margin: 'auto' }} src={image4} />
          {activeIndex === 3 && <p className="text-center font-bold text-[#3A1010]">Golden Sponsorship</p>}
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 4 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '100%', margin: 'auto' }} src={image5} />
          {activeIndex === 4 && <p className="text-center font-bold text-[#3A1010]">Silver Sponsorship</p>}
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 5 ? 'blur(5px)' : 'none' }}>
          <img style={{ width: '100%', margin: 'auto' }} src={image1} />
          {activeIndex === 5 && <p className="text-center font-bold text-[#3A1010]">Diamond Sponsorship</p>}
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto', height: '300px', filter: activeIndex !== 6 ? 'blur(5px)' : 'none'}}>
          <img style={{ width: '100%', margin: 'auto' }} src={image4} />
          {activeIndex === 6 && <p className="text-center font-bold text-[#3A1010]">Golden Sponsorship</p>}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
