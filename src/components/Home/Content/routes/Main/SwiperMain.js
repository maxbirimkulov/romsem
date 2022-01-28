import React, {useState, useEffect} from 'react';
import Price from "../RouteContent/Price";
import axios from "axios";
import Star from "../../../../../assets/icons/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css/navigation"
import 'swiper/css';
import './swiperMain.css';
import SwiperForMain from "./SwiperForMain";


const SwiperMain = () => {
    SwiperCore.use([Navigation]);

    const [setsCard, setSetsCard] = useState([]);
    const [pizzaCard, setPizzaCard] = useState([]);
    const [swiperMain, setSwiperMain] = useState('new');

    const popularHandler = () => {
        return setSwiperMain('popular')
    };
    const newHandler = () => {
        return setSwiperMain('new')
    };

    useEffect(() => {
        axios(`http://localhost:8080/sets`)
            .then(({ data }) => setSetsCard(data.slice(0, 6)));
        axios(`http://localhost:8080/pizza`)
            .then(({ data }) => setPizzaCard(data.slice(0, 6)));
    }, []);
    return (
        <>
            <div className="swiper__title">
                <h1 style={{color: `${swiperMain === 'new' ? '#000000' : '#A4ACAD'}`,
                    borderBottom: `${swiperMain === 'new' ? 'none' : '1px solid #A4ACAD'}`}}
                    onClick={() => newHandler()} className="swipermain__title">Новинки</h1>
                <h1 style={{color: `${swiperMain === 'popular' ? '#000000' : '#A4ACAD'}`,
                    borderBottom: `${swiperMain === 'popular' ? 'none' : '1px solid #A4ACAD'}`}}
                    onClick={() => popularHandler()} className="swipermain__title">Популярное</h1>
            </div>
            {swiperMain === 'new'
                ? <SwiperForMain arr={setsCard}/>
                : <SwiperForMain arr={pizzaCard}/>
            }

        </>
    );
};

export default SwiperMain;