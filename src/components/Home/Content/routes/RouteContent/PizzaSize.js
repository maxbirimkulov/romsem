import React from 'react';

const PizzaSize = ({item, setPizza}) => {
    return (
        <>
            {item.sizes ?
                <ul className='content__card-sizes'>
                    {item.sizes.map((size, idx) => (
                        <li className={`content__card-size ${item.size === idx ? 'active' : '' }`} key={size} onClick={() => {
                            setPizza({...item, size:idx})
                        }}>
                            {size}</li>
                    ))}
                </ul>
                : ''
            }
            </>
    );
};

export default PizzaSize;