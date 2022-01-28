import React from 'react';
import Header from "./Header";
import {Routes, Route} from 'react-router-dom'
import Pizza from "./routes/Pizza";
import Sets from "./routes/Sets";
import Wok from "./routes/Wok";
import Rolls from "./routes/Rolls";
import Sushi from "./routes/Sushi";
import Salad from "./routes/Salad";
import Soup from "./routes/Soup";
import CornDog from "./routes/CornDog";
import Drinks from "./routes/Drinks";
import Sale from "./routes/Sale";
import Main from "./routes/Main/Main";
import Product from "./Product/Product";
import Reviews from "./routes/Reviews/Reviews";
import Express from "./routes/Express/Express";
import Footer from "./Footer/Footer";
import ContentLayout from "./ContentLayout/ContentLayout";

const Content = () => {
    return (
        <section className='home__content'>
            <div className="div">
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path='/' element={<ContentLayout/>}>
                            <Route path='' element={<Main/>}/>
                            <Route path='pizza' element={<Pizza/>}/>
                            <Route path='sets' element={<Sets/>}/>
                            <Route path='wok' element={<Wok/>}/>
                            <Route path='rolls' element={<Rolls/>}/>
                            <Route path='sushi' element={<Sushi/>}/>
                            <Route path='salad' element={<Salad/>}/>
                            <Route path='soup' element={<Soup/>}/>
                            <Route path='corndog' element={<CornDog/>}/>
                            <Route path='drinks' element={<Drinks/>}/>
                            <Route path='sale' element={<Sale/>}/>
                        </Route>
                        <Route path='/:path/product/:id' element={<Product/>}/>
                        <Route path='/reviews' element={<Reviews/>}/>
                        <Route path='/express' element={<Express/>}/>
                    </Routes>

                </div>

            </div>
            <Footer/>
        </section>
    );
};

export default Content;