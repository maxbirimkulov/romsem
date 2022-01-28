import React from 'react';
import RouteContent from "./RouteContent/RouteContent";
import Logo from "../../../../assets/icons/corndog.svg";

const CornDog = () => {
    return (
        <RouteContent Logo={Logo} path='corndog' title='Корн доги'/>
    );
};

export default CornDog;