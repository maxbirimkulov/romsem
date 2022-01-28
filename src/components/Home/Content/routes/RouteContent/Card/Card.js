import React, {useState} from 'react';
import {Link} from "react-router-dom";
import PizzaSize from "../PizzaSize";
import Price from "../Price";
import WantBuy from "../WantBuy";

const Card = ({item, path}) => {
    const [pizza, setPizza] = useState(item);
    return (
        <div className='content__card'>
            <Link to={`/${path}/product/${item.id}`}>
                <img className='content__card-img' src={item.imageUrl} alt=""/>
            </Link>
            <h4 className='content__card-title'>{item.title}</h4>
            {path === 'pizza' ?
                <PizzaSize item={item.categories === 'pizza' ? pizza : item} setPizza={setPizza}/>
                : path === 'rolls' || path === 'wok' || path === 'sushi' || path === 'corndog' || path === 'soup' || path === 'salad'?
                    <p className='content__card-option'>
                        {item.ingredients.filter((item,idx)=> idx < 3).join(',')}...
                    </p>
                    : path === 'sets' ?
                        <p className='content__card-option'>
                            1000 грамм , {item.count} штук
                        </p>
                        : path === 'drinks' ?
                            <p className='content__card-option'>{item.categories}</p>
                            : ''
            }

            <div className='content__card-bot'>
                <Price price={
                          path === 'pizza' && pizza.size === 1 ? item.priceMiddle
                        : path === 'pizza' && pizza.size === 2 ? item.priceLarge
                        : item.price}/>
                <WantBuy item={path === 'pizza' ? pizza : item}/>
            </div>
        </div>
    );
};

export default Card;