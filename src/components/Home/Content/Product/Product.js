import React,{useEffect, useState, useContext} from 'react';
import {CustomContext} from "../../../../Context";
import './product.css'
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom'
import Price from "../routes/RouteContent/Price";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation} from 'swiper';
import "swiper/css/navigation"
import 'swiper/css';
import ProductContent from "./ProductContent";
SwiperCore.use([Navigation]);

const Product = () => {
    const [product, setProduct] = useState({});
    const [rec, setRec] = useState([]);
    const {path, id} = useParams();


    const navigate = useNavigate();

    useEffect(() =>{
        axios(`http://localhost:8080/${path}/${id}`)
            .then(({data})=> setProduct(data));

        axios(`http://localhost:8080/${path}`)
            .then(({data}) => setRec(data.slice(0,6)) )

    },[path, id]);
    return (
        <div className='product'>
            <div className='product__link'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#FF9846"/>
                    <path d="M11.75 5.75L7.25 10.25L11.75 14.75" stroke="#F2F2F2" />
                </svg>
                <span className='product__link-text' onClick={() => navigate(-1)}>Назад</span>
            </div>
            <ProductContent item={product}/>
            <h3 className='product__rec'>Рекомендуем к этому товару</h3>
            <div className='custom__swiper'>
                <Swiper  slidesPerView={3} spaceBetween={90} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper product__swiper">
                    {rec.map((item,idx) => (
                        <SwiperSlide key={item.id}>
                            <div className='product__swiper-card'>
                                <img className='product__swiper-img' src={item.imageUrl} alt={item.title}/>
                                <h4 className='product__swiper-title'>{item.title}</h4>
                                <div className='product__swiper-buy'>
                                    <Price price={item.price}/>
                                    <button  className='product__swiper-btn'>+</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}



                </Swiper>
            </div>

        </div>
    );
};

export default Product;