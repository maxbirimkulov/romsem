import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from "../../../../assets/icons/salad.svg";

const Salad = () => {
    return (
        <RouteContent Logo={Logo} path='salad' title='Салаты'/>
    );
};

export default Salad;