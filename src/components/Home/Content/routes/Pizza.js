import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from "../../../../assets/icons/pizza.svg";

const Pizza = () => {
    return (
            <RouteContent Logo={Logo} title={'Пицца'} path='pizza'/>
    );
};

export default Pizza;