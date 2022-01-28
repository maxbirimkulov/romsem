import React from 'react';
import chikken from "../../../../../assets/Home/chikken.png";
import KornDog from "../../../../../assets/Home/KornDog.png";
import Ugl from "../../../../../assets/Home/ugl.png";
import Pizza from '../../../../../assets/Home/Pizza.png'
import Action from '../../../../../assets/Home/Action.png'
import './main.css'
import FirstSlider from "./FirstSlider";
import SwiperMain from "./SwiperMain";



const Main = () => {
    return (
        <div className='main'>
            <FirstSlider/>
        <div className="mainUp">
                <div className="mainUp__cart50">
                    <img className="mainUp__cart50-img" src={chikken} alt=""/>
                    <p className="mainUp__title">Чикен</p>
                </div>
                <div className="mainUp__cart25">
                    <img className="mainUp__cart25-img" src={KornDog} alt=""/>
                    <p className="mainUp__title">Корн дог</p>
                </div>
                <div className="mainUp__cart25">
                    <img className="mainUp__cart25-img" src={Ugl} alt=""/>
                    <p className="mainUp__title">С угрем</p>
                </div>
                <div className="mainUp__cart50">
                    <img className="mainUp__cart50-img" src={Pizza} alt=""/>
                    <p className="mainUp__title">Пицца</p>
                </div>
               <div className="mainUp__cart50">
                   <img className="mainUp__cart50-img" src={Action} alt=""/>
                   <p className="mainUp__title">Акции</p>
               </div>

        </div>
            <SwiperMain/>
        </div>
    );
};

export default Main;