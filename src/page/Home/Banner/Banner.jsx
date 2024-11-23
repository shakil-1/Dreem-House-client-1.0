import { Swiper, SwiperSlide } from 'swiper/react';
import{ useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import b1 from '../../../assets/b1.jpg'
import b2 from '../../../assets/b2.jpg'
import b3 from '../../../assets/b3.jpg'
const Banner = () => {
    


const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

    return (
        <>
        <Swiper
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={b2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={b3} alt="" /></SwiperSlide>
           
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </>
    );
};

export default Banner;