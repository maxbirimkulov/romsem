import React, {useEffect, useState} from 'react';
import axios from "axios";
import SortItem from "../SortItem/SortItem";
import Card from "./Card/Card";

const RouteContent = ({Logo, title, path}) => {
    const [arr, setArr] = useState([]);
    const [sort, setSort] = useState('По умолчанию');


    useEffect(()=>{
        axios(`https://romsem.herokuapp.com/api/${path}`)
            .then(({data})=> setArr(data))
    },[]);

    return (
        <div>
            <div className='content__header'>
                <div className='content__header-left'>

                        <img className='content__header-img' src={Logo} alt={title}/>

                    <h3 className='content__header-title'>{title}</h3>
                </div>
                <div className='content__header-sort'>
                    <p className='content__header-sort-title'>Сортировка</p>
                    <p className='content__header-sort-default'>{sort} <span>︾</span></p>
                    <div className='content__header-sort-line'>

                    </div>
                    <ul className='content__header-sort-list'>
                        <SortItem text='Название' setSort={setSort}/>
                        <SortItem text='Сначала дешевле' setSort={setSort}/>
                        <SortItem text='Сначала дороже' setSort={setSort}/>
                        {path === 'sets' ?
                            <>
                                <SortItem text='Количество кусочков' setSort={setSort}/>
                                <SortItem text='Вес' setSort={setSort}/>
                            </>
                            : ''
                        }
                    </ul>
                </div>
            </div>
            <div className='content__row'>
                {
                    arr.sort((a, b) => {
                    if (sort === 'Название'){
                        return a.title > b.title ? 1 : -1
                    } else if (sort === 'Сначала дешевле') {
                        return a.price - b.price
                    } else if (sort === 'Сначала дороже') {
                        return b.price - a.price
                    } else if (sort === 'Количество кусочков') {
                        return a.count - b.count
                    }}).map((item) => (
                   <Card key={item.id} item={item} path={path}/>
                ))}
            </div>
        </div>
    );
};

export default RouteContent;

//.sort((a, b) => )