import React,{useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import './header.css'
import axios from "axios";

const Header = () => {
    const [search, setSearch] = useState(false);
    const [all, setAll] = useState([]);
    const [searchVal, setSearchVal] = useState('');

    const searchHandler = (text) => {
        if (text){
            axios('http://localhost:8080/all')
                .then(({data})=> setAll(Object.values(data).reduce((acc, rec)=> {
                    return [...acc, rec.filter((item) => item.title.toUpperCase().startsWith(text.toUpperCase()))]
                },[]).flat()))
        } else{
            setAll([])
        }
    };

    return (
        <header className='header'>
            <div className='header__left'>
                <div className='header__phone'>
                    <p className='header__phone-title'>Наш телефон</p>
                    <a className='header__phone-tel' href="tel:+996 705 188 955">+996 705 188 955</a>
                    <a className='header__phone-tel' href="tel:+996 555 188 955">+996 555 188 955</a>
                    <p className='header__phone-time'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.49999 2.44565C7.67934 2.44565 7.82608 2.29891 7.82608 2.11956V1.95652C7.82608 1.77717 7.67934 1.63043 7.49999 1.63043C7.32064 1.63043 7.1739 1.77717 7.1739 1.95652V2.11956C7.1739 2.29891 7.32064 2.44565 7.49999 2.44565Z" fill="#FF9846"/>
                        <path d="M7.49999 12.5544C7.32064 12.5544 7.1739 12.7011 7.1739 12.8804V13.0435C7.1739 13.2228 7.32064 13.3696 7.49999 13.3696C7.67934 13.3696 7.82608 13.2228 7.82608 13.0435V12.8804C7.82608 12.7011 7.67934 12.5544 7.49999 12.5544Z" fill="#FF9846"/>
                        <path d="M2.11956 7.17391H1.95652C1.77717 7.17391 1.63043 7.32065 1.63043 7.5C1.63043 7.67935 1.77717 7.82609 1.95652 7.82609H2.11956C2.29891 7.82609 2.44565 7.67935 2.44565 7.5C2.44565 7.32065 2.29891 7.17391 2.11956 7.17391Z" fill="#FF9846"/>
                        <path d="M13.0435 7.17391H12.8804C12.7011 7.17391 12.5543 7.32065 12.5543 7.5C12.5543 7.67935 12.7011 7.82609 12.8804 7.82609H13.0435C13.2228 7.82609 13.3696 7.67935 13.3696 7.5C13.3696 7.32065 13.2228 7.17391 13.0435 7.17391Z" fill="#FF9846"/>
                        <path d="M3.81521 3.3587C3.68478 3.22826 3.48913 3.22826 3.35869 3.3587C3.22826 3.48913 3.22826 3.68479 3.35869 3.81522L3.47282 3.92935C3.53804 3.99457 3.61956 4.02718 3.70108 4.02718C3.7826 4.02718 3.86413 3.99457 3.92934 3.92935C4.05978 3.79892 4.05978 3.60326 3.92934 3.47283L3.81521 3.3587Z" fill="#FF9846"/>
                        <path d="M3.47282 11.0707L3.35869 11.1848C3.22826 11.3152 3.22826 11.5109 3.35869 11.6413C3.42391 11.7065 3.50543 11.7391 3.58695 11.7391C3.66847 11.7391 3.74999 11.7065 3.81521 11.6413L3.92934 11.5272C4.05978 11.3967 4.05978 11.2011 3.92934 11.0707C3.79891 10.9402 3.60326 10.9402 3.47282 11.0707Z" fill="#FF9846"/>
                        <path d="M11.1848 3.3587L11.0707 3.47283C10.9402 3.60326 10.9402 3.79892 11.0707 3.92935C11.1359 3.99457 11.2174 4.02718 11.2989 4.02718C11.3804 4.02718 11.462 3.99457 11.5272 3.92935L11.6413 3.81522C11.7718 3.68479 11.7718 3.48913 11.6413 3.3587C11.5109 3.22826 11.3152 3.22826 11.1848 3.3587Z" fill="#FF9846"/>
                        <path d="M7.82608 7.36957V4.40218C7.82608 4.22283 7.67934 4.07609 7.49999 4.07609C7.32064 4.07609 7.1739 4.22283 7.1739 4.40218V7.5C7.1739 7.58152 7.20651 7.66305 7.27173 7.72826L10.8424 11.2989C10.9076 11.3641 10.9891 11.3967 11.0706 11.3967C11.1522 11.3967 11.2337 11.3641 11.2989 11.2989C11.4293 11.1685 11.4293 10.9728 11.2989 10.8424L7.82608 7.36957Z" fill="#FF9846"/>
                        <path d="M7.5 0C3.3587 0 0 3.3587 0 7.5C0 11.6413 3.3587 15 7.5 15C11.6413 15 15 11.6413 15 7.5C15 3.3587 11.6413 0 7.5 0ZM7.5 14.3478C3.71739 14.3478 0.652174 11.2826 0.652174 7.5C0.652174 3.71739 3.71739 0.652174 7.5 0.652174C11.2826 0.652174 14.3478 3.71739 14.3478 7.5C14.3478 11.2826 11.2826 14.3478 7.5 14.3478Z" fill="#FF9846"/>
                    </svg>
                        работаем с 10:00 до 00:00</p>
                </div>
                <div className='header__address'>
                    <p className='header__address-title'>Город:</p>
                    <p className='header__address-city'>Бишкек</p>
                </div>
            </div>
            <div className='header__right'>
                <ul className='header__list'>
                        <li className='header__list-item'>
                            <NavLink className='header__link' to='/reviews'>Отзывы</NavLink>
                        </li>
                        <li className='header__list-item'>
                            <Link className='header__link' to='/express'>Доставка и оплата</Link>
                        </li>
                    </ul>
                <div className='header__search'>
                    <input value={searchVal} style={{display: `${search ? 'inline-block': 'none'}`}} type="search" className='header__search-input' onChange={(e)=>{
                        searchHandler(e.target.value)
                        setSearchVal(e.target.value)
                    }} />
                    <button className='header__search-btn' type='button' onClick={() => setSearch(!search)}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M29.8169 28.9331L20.6888 19.805C22.5848 17.6999 23.75 14.9244 23.75 11.875C23.75 5.32717 18.4229 0 11.875 0C5.32717 0 0 5.32717 0 11.875C0 18.4229 5.32717 23.75 11.875 23.75C14.9244 23.75 17.6999 22.5848 19.805 20.6888L28.9331 29.8169C29.0552 29.9389 29.2151 30 29.375 30C29.5349 30 29.6948 29.9389 29.817 29.8169C30.0611 29.5727 30.0611 29.1772 29.8169 28.9331ZM11.875 22.5C6.01688 22.5 1.25004 17.7337 1.25004 11.875C1.25004 6.01629 6.01688 1.24998 11.875 1.24998C17.7332 1.24998 22.5 6.01623 22.5 11.875C22.5 17.7338 17.7332 22.5 11.875 22.5Z" fill="#A4ACAD"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4_29">
                                    <rect width="30" height="30" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <ul style={{display: `${search && all.length? 'flex': 'none'}`}} className='header__search-list'>
                        {all.map((item,idx) => (
                            <li key={idx} className='header__search-list-item'>
                                <Link to={`/${item.categories}/product/${item.id}`} onClick={() => {
                                    setSearch(false);
                                    setSearchVal('');
                                    setAll([])
                                }}>
                                    <img className='header__search-list-img' src={item.imageUrl} alt="" />
                                </Link>
                                <div className='header__search-list-info'>
                                    <h2 className='header__search-list-title'>{item.title}</h2>
                                    <p className='header__search-list-price'>{item.price} сом</p>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>

            </div>
        </header>
    );
};

export default Header;