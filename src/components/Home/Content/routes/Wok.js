import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from '../../../../assets/icons/wok.svg'

const Wok = () => {
    return (
        <RouteContent Logo={Logo} path='wok' title='Wok'/>
    );
};

export default Wok;