import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { formatPrice } from '../../utils/common';
import './style.scss';


function Details() {
    const { productId } = useParams()
    const [loading, setLoading] = useState(true)

    const productList = useSelector(state => state.products.productList)
    const product = productList.find(item => item.id === parseInt(productId))

    useEffect(() => {
        setTimeout(() => (
            setLoading(false)
        ), 200)
    }, [])

    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className='details container'>
                        <img src={product.imageUrl} alt="" className="details__image" />
                        <div className="details__info">
                            <h4 className="details__title">{product.title}</h4>
                            <span className='details__price'>{formatPrice(product.price)}</span>
                            <p className="details__desc">{product.description}</p>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Details;