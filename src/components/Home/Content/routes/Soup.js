import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from "../../../../assets/icons/soup.svg";

const Soup = () => {
    return (
        <RouteContent Logo={Logo} path='soup' title='Супы'/>
    );
};

export default Soup;