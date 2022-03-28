import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/common';
import { deleteCartItem, paymentCart, setQuantily } from '../Cart/cartSlice';
import CartItem from '../CartItem';
import './style.scss';


function Cart(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cartList = useSelector(state => state.cart.cartList)
    
    const [flag, setFlag] = useState(false)
    let total = 0;

    const totalItem = cartList.reduce((total, item) => total + item.quantily, 0)

    const handleSetQuantily = (id, newQuantily) => {
        dispatch(setQuantily({
            id,
            newQuantily
        }))

        setFlag(state => !state)
    }

    const handleDelete = (id) => {
        dispatch(deleteCartItem(id))

        setFlag(state => !state)
    }

    const handleBack = () => {
        navigate('/products')
    }

    const handleClickBuyMore = () => {
        navigate('/products')
    }

    const handleClickPayment = () => {
        dispatch(paymentCart())

        alert('Bạn đã đặt hàng thành công !')
        setFlag(state => !state)
    }

    return (
        <div className='cart container'>
            <div className='cart__heading'>
                <h1>My cart</h1>
                <span>{totalItem}</span>
            </div>
            {
                cartList.length === 0 ? (
                    <>
                        <p className='cart__empty'>Chưa có sản phẩm nào trong giỏ hàng</p>
                        <button onClick={handleBack} className='cart__back'>Quay trở lại cửa hàng</button>
                    </>
                ):(
                    <>
                        <div className="cart__list">
                            <ul className="cart__column">
                                <li>Sản phẩm</li>
                                <li>Giá</li>
                                <li>Số lượng</li>
                                <li>Tổng</li>
                            </ul>
                            {
                                cartList.map(item => (
                                    total += item.price * item.quantily,
                                    <CartItem 
                                        key={item.id}
                                        item={item}
                                        setQuantily={handleSetQuantily}
                                        onDelete={handleDelete}
                                    />
                                ))
                            }
                        </div>

                        <div className="cart__bottom">
                            <div className="cart__totalAll">
                                <span>Tổng tiền:</span>
                                <span className="cart__totalAll-number">{formatPrice(total)}</span>
                            </div>
                            <div className="cart__action">
                                <button className="cart__payment" onClick={handleClickPayment}>Tiến hành thanh toán</button>
                                <button className="cart__buyMore" onClick={handleClickBuyMore}>Mua thêm sản phẩm khác</button>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Cart;