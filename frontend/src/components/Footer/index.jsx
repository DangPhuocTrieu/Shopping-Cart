import React from 'react';
import './style.scss'

function Footer() {
    const handleBackHome = () => {

    }

    return (
        <footer className='footer'>
            <div className="footer__logo" onClick={handleBackHome}>comfy <span>house</span> </div>
            <ul className="footer__menu">
                <li className='footer__item'>Thông tin</li>
                <li className='footer__item'>Hỗ trợ</li>
                <li className='footer__item'>Chính sách</li>
            </ul>
        </footer>
    );
}

export default Footer;