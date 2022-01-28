import React, {createContext, useState} from 'react'

export const CustomContext = createContext();

export const Context = (props) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        let idx = cart.findIndex((el) => {
            if (item.categories === 'pizza'){
               return el.title === item.title && el.size === item.size
            } else {
                return  el.title === item.title
            }
        });
        if (idx >= 0){
            cart[idx].count++;
            setCart([...cart]);
        } else {
            setCart([...cart, {
                ...item,
                count: 1
            }])
        }
    };

    const plusOne = (item) => {
        let idx = cart.findIndex((el) => {
            if (item.categories === 'pizza'){
                return el.title === item.title && el.size === item.size
            } else {
                return el.title === item.title
            }
        });

        if (idx >= 0) {
            setCart(cart.map((el) => {
                if (el.categories === 'pizza') {
                    if (item.title === el.title && el.size === item.size) {
                        return {...el, count: el.count + 1}
                    } else {
                        return el
                    }
                } else if (item.title === el.title) {
                    return {...el, count: el.count + 1}
                }else {
                    return el
                }
            }))
        } else {
            setCart([...cart, {
                ...item,
                count: 1
            }])
        }
    };


    const minusOne = (item) => {
        if (item.count > 1){
            setCart(cart.map((el) => {
                if (el.categories === 'pizza') {
                    if (item.title === el.title && el.size === item.size) {
                        return {...el, count: el.count - 1}
                    } else {
                        return el
                    }
                } else if (item.title === el.title) {
                    return {...el, count: el.count - 1}
                }else {
                    return el
                }
            }))
        } else {
            setCart(cart.filter((el)=>{
                if (el.categories === 'pizza'){
                    return el.title !== item.title || el.size !== item.size
                } else {
                    return el.title !== item.title
                }
            }))
        }
    };

    const deleteItem = (item) => {
        setCart(cart.filter((el) => {
            return el.title !== item.title
        }))
    };




    const value = {
        cart,
        addItem,
        plusOne,
        minusOne,
        deleteItem
    };


    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>


};

