import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from '../../../../assets/icons/sushi.svg'

const Sushi = () => {
    return (
        <RouteContent Logo={Logo} path='sushi' title='Суши'/>
    );
};

export default Sushi;