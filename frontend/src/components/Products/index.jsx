import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { addToCart } from '../Cart/cartSlice';
import Product from '../Product';
import { saveProducts } from './productSlice';
import './style.scss';

function Products(props) {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    const [flag, setFlag] = useState(false)
    const dispatch = useDispatch()

    const cartList = useSelector(state => state.cart.cartList)

    useEffect(() => {
        (async() => {
            const response = await axios.get('/v1/products')
            const data = await response.data;
            
            dispatch(saveProducts(data))
            setProductList(data)

            setTimeout(() => {
                setLoading(false)
            }, 300)
        })()
    }, [])

    const handleClick = (product) => {
        const newProduct = {...product}
        newProduct.quantily = 1

        dispatch(addToCart(newProduct))
        
        setFlag(state => !state)
    }
    
    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className='products container'>
                        <h1 className="products__heading">Our Products</h1>
                        <div className="products__list">
                            {
                                productList.map(product => (
                                    <Product 
                                        key={product.id} 
                                        product={product} 
                                        onClick={handleClick}
                                        inCart={cartList.some(item => item.id === product.id) ? true : false }
                                    />
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Products;