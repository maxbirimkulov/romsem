import React from 'react';
import './main.css'
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react";
import picture1 from '../../../../../assets/main__images/2picture.png'
import picture2 from '../../../../../assets/main__images/picture3.jpg'
import SwiperCore, {
    Pagination,Navigation
} from 'swiper';
SwiperCore.use([Pagination,Navigation]);

const FirstSlider = () => {
    return (
        <div className='main'>
            <Swiper slidesPerView={1} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper firstSwiper">
                <SwiperSlide>
                    <div className='main__swip-block'>
                        <img className='main__swiper-img' src={picture1} alt="picture"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='main__swip-block'>
                        <img className='main__swiper-img' src={picture2} alt="picture"/>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default FirstSlider;