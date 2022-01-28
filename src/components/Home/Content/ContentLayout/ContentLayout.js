import React from 'react';
import More from "../More/More";
import {Outlet} from 'react-router-dom'

const ContentLayout = () => {
    return (
        <>
            <Outlet/>
            <More/>
        </>
    );
};

export default ContentLayout;