import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { formatPrice } from '../../utils/common';
import './style.scss';
import { Link, useLocation } from 'react-router-dom'


function Product({ product, onClick, inCart = false }) {
    const { id, title, price, imageUrl } = product
    const { pathname } = useLocation()

    const handleClick = (product) => {
        if(onClick) {
            onClick(product)
        }
    }
    
    return (
        <div className='product__item'>
            <Link to={`${pathname}/${id}`}>
                <img className='product__image' src={imageUrl}  />
            </Link>
            <h4 className='product__title'>{title}</h4>
            <span className='product__price'>{formatPrice(price)}</span>
            <button 
                onClick={() => handleClick(product)} 
                className={`product__action ${inCart ? 'product__action--disabled' : ''}`}
                disabled={inCart ? true : false}
            >
                {inCart ? 'in cart': (
                    <>
                        <FiShoppingCart style={{marginRight: '5px'}} /> add to cart
                    </>
                )}
            </button>
        </div>
    );
}

export default Product;