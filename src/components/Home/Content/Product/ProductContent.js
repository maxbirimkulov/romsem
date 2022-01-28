import React, {useContext, useState} from 'react';
import PizzaSize from "../routes/RouteContent/PizzaSize";
import Price from "../routes/RouteContent/Price";
import WantBuy from "../routes/RouteContent/WantBuy";
import {CustomContext} from "../../../../Context";

const ProductContent = ({item}) => {
    const {minusOne, plusOne} = useContext(CustomContext);
    const [pizza, setPizza] = useState(item);

    return (
        <div className='product__content'>
            <img className='product__content-img' src={item.imageUrl} alt={item.title}/>
            <div className='product__content-info'>
                <h2 className='product__content-title'>{item.title}</h2>

                {item.categories === 'pizza' ?
                    <PizzaSize item={pizza.categories === 'pizza' ? pizza : item} setPizza={setPizza}/>
                    : item.categories === 'rolls' || item.categories === 'WOK' || item.categories === 'sushi' || item.categories === 'corndog' || item.categories === 'soup' || item.categories === 'salad'?
                        <p className='content__card-option'>
                            {item.ingredients.join(',')}
                        </p>
                        : item.categories === 'sets' ?
                            <>
                            <p className='content__card-option'>
                                {item.combo.join(',')}
                            </p>
                            <p className='content__card-option'>
                                1000 грамм , {item.count} штук
                            </p>
                            </>
                            : item.categories === 'drinks' ?
                                <p className='content__card-option'>{item.categories}</p>
                                : ''
                }

                <div className='product__content-buy'>
                    <Price price={pizza.categories === 'pizza' && pizza.size === 1 ? item.priceMiddle
                        : pizza.categories === 'pizza' && pizza.size === 2 ? item.priceLarge
                            : item.price}/>
                    <div className='product__content-line' onClick={() => minusOne(pizza.categories === 'pizza' ? pizza : item)}>

                    </div>
                    <div className='product__content-pay'>
                        <span className='product__content-pay-count'>1</span>
                        <button className='product__content-pay-btn' onClick={() => plusOne(pizza.categories === 'pizza' ? pizza : item)}>+</button>
                    </div>
                </div>
                <WantBuy item={pizza.categories === 'pizza' ? pizza : item}/>
            </div>
        </div>
    );
};

export default ProductContent;