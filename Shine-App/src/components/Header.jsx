import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className='header-container'>
                <img src="https://www.shine.com/next/static/images/shine-logo.png" alt="logo" id='logo' />
                <input type="text" name="search" id="search" placeholder='Job title, skills' />
                <span>
                    <button id="search-btn">
                        <FontAwesomeIcon icon={faSearch} id="search-icon" />
                    </button>
                </span>
            </div>
        </div>
    );
}

export default Header;
