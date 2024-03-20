import React from 'react';
import './Header.scss'
import skechers from '../../img/Sayapker logo 1.svg'
import {IoSearchOutline} from "react-icons/io5";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header__title">
                        <img className="header__title__img2" src={skechers} alt=""/>
                    </div>
                    <div className="header__nav">
                        <input type="text" placeholder="Издөө..."/>
                        <IoSearchOutline className="header__nav__icon"/>

                        <div className="header__nav__sing">
                            <h1>Катталуу</h1>
                            <h2>Кирүү</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;