import React from 'react';
import Star from "../../../../../assets/icons/star.png";
import Price from "../RouteContent/Price";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperForMain = ({arr}) => {
    return (
        <Swiper slidesPerView={3} spaceBetween={41} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} pagination={{
            "clickable": true
        }} navigation={true} className="mySwiper swiper__main">
            {arr.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="swipermain__card">
                        <img className="swipermain__img" src={item.imageUrl} alt={item.title} />
                        <h4 className="swipermain__name">{item.title}</h4>
                        <div className="swiper__stars">
                            <img className="swiper__star" src={Star} alt=""/>
                            <img className="swiper__star" src={Star} alt=""/>
                            <img className="swiper__star" src={Star} alt=""/>
                            <img className="swiper__star" src={Star} alt=""/>
                            <img className="swiper__star" src={Star} alt=""/>
                        </div>
                        <div className="swipermain__buy">
                            <Price price={item.price} />
                            <button className="swipermain__btn">Хочу!</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperForMain;