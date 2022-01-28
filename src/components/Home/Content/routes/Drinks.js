import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from '../../../../assets/icons/drinks.svg'

const Drinks = () => {
    return (
        <RouteContent Logo={Logo} path='drinks' title='Напитки'/>
    );
};

export default Drinks;