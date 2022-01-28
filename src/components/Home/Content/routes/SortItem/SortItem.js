import React from 'react';

const SortItem = ({text,setSort}) => {
    return (
        <li className='content__header-sort-item' onClick={() => setSort(text) }>{text}</li>
    );
};

export default SortItem;