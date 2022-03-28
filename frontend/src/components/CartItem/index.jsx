import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { formatPrice } from '../../utils/common';
import './style.scss';

function CartItem({ item, setQuantily, onDelete }) {
    const { id, title, price, imageUrl, quantily } = item

    const handleReduce = (id) => {
        if(!setQuantily) return;
        if(quantily > 1) {
            setQuantily(id, quantily - 1)
        }
    }

    const handleIncrease = (id) => {
        if(!setQuantily) return;
        setQuantily(id, quantily + 1)
    }

    const handleDelete = (id) => {
        if(onDelete) {
            onDelete(id)
        }
    }

    return (
        <div className='cart__item'>
            <div className="cart__info">
                <img className='cart__image' src={imageUrl} alt={title} />
                <p className='cart__title'>{title}</p>
            </div>
            <span className="cart__price">{formatPrice(price)}</span>
            <div className="cart__quantily">
                <span> 
                    <FaMinus onClick={() => handleReduce(id)} /> 
                </span>
                <div className='cart__quantily-number'>{quantily}</div>
                <span> 
                    <FaPlus onClick={() => handleIncrease(id)} /> 
                </span>
            </div>
            <span className="cart__total">{formatPrice(price * quantily)}</span>
            <div className="cart__delete">
                <MdDeleteForever onClick={() => handleDelete(id)} />
            </div>
        </div>
    );
}

export default CartItem;