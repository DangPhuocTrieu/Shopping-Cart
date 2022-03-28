import React from 'react';
import './style.scss'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import Home from '../Home'
import Products from '../Products'
import Cart from '../Cart'
import Details from '../Details';

function Header() {
    const navigate = useNavigate()

    const handleBackHome = () => {
        navigate('/')
    }

    return (
        <>
            <header className='header'>
                <div className="header__logo" onClick={handleBackHome}>comfy <span>house</span> </div>
                <div className="header__menu">
                    <NavLink className={({isActive}) => isActive ? 'header__active' : '' } to='/'>Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'header__active' : '' } to='/products'>Products</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'header__active' : '' } to='/cart'>My cart</NavLink>
                </div>

            </header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:productId' element={<Details />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </>
    );
}

export default Header;