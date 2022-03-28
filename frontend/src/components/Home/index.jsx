import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { FaKissWinkHeart } from 'react-icons/fa'

Home.propTypes = {
    
};

function Home(props) {
    return (
        <div className='home'>
            <span><FaKissWinkHeart /></span>
            Welcome to my website
            <span><FaKissWinkHeart /></span>
        </div>
    );
}

export default Home;