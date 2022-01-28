import React, {useEffect, useState} from 'react';
import './Reviews.css'
import axios from "axios";
import {useForm} from 'react-hook-form'

const Reviews = () => {
    const {
        register,
        handleSubmit,
        formState :{
            errors
        },
        reset

    } = useForm({
        mode:"onBlur"
    });

    const [review, setReview] = useState([]);
    const [add, setAdd] = useState(false);

    useEffect(() => {
        axios('https://romsem.herokuapp.com/api/reviews')
            .then(({data}) => setReview(data))
    },[add]);
    const toDate = (date) => {
        return new Intl.DateTimeFormat('ru-Ru', {
            day:'2-digit',
            month:'2-digit',
            year:'2-digit',
        }).format(new Date(date))
    };

    const addReview = (data) => {
        axios.post('https://romsem.herokuapp.com/api/reviews', data).then(({data}) => setAdd(!data));
        reset();
    };

    return (
        <div className='reviews'>
            <div className='reviews__header'>
                <h2 className='reviews__title'>Отзывы</h2>
                <button onClick={() => setAdd(!add)} className='reviews__btn'>+ Добавить отзыв</button>
            </div>
            <form style={{display: `${add ? 'flex' : 'none'}`}} onSubmit={handleSubmit(addReview)} className='reviews__form'>
                    <label className='reviews__form-lbl'>
                        <input {...register("name", {
                                required: "Поле обязательно к заполнению",
                                minLength : {
                                    value: 2,
                                    message: 'Минимум 2 символа'
                                }

                            })}
                               placeholder='Ваше Имя'
                               className='reviews__form-input'
                               type="text"/>
                               <br/>
                       <span>{errors?.name && errors?.name?.message}</span>
                    </label>
                <label  className='reviews__form-lbl'>
                    <textarea {...register("text", {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 5,
                            message: 'Минимум 5 символов'
                        }
                    })} placeholder='Напишите Отзыв'  className='reviews__form-text'  />
                    <br/>
                    <span>{errors?.text && errors?.text?.message }</span>
                </label>
                <input {...register("date")} type="hidden" value={toDate(Date.now())}/>
                <div className="reviews__form-btns">
                    <button className='reviews__form-btn' type="submit">Отправить</button>
                    <button className='reviews__form-btn' type='reset' onClick={() => setAdd(!add)}>Отмена</button>
                </div>
            </form>
            <ul className='reviews__list'>
                {review.map((item)=> (
                    <li key={item.id} className='reviews__item'>
                        <div className='reviews__item-header'>
                            <h3 className='reviews__item-name'>{item.name}</h3>
                            <span className='reviews__item-date'>{item.publishedAt}</span>
                        </div>
                        <p className='reviews__item-text'>{item.text}</p>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Reviews;