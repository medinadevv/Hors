import React, {useState} from "react";
import "./Header.scss";
import skechers from "../../img/Sayapker logo 1.svg";
import {IoSearchOutline} from "react-icons/io5";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [burger, setBurger] = useState(false);

    console.log(burger);

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header__title">
                        <NavLink to='/'><img className="header__title__img2" src={skechers} alt=""/></NavLink>
                    </div>
                    <div className="header__nav">
                        <div className='inputs'>
                            <input type="text" placeholder="Издөө..."/>
                            <div className="header__nav__icons"><IoSearchOutline/></div>
                        </div>

                        <div className="header__nav__sing">
                            <NavLink to="/signUp"><h1>Катталуу</h1></NavLink>
                            <NavLink to="/sing"><h2>Кирүү</h2></NavLink>
                        </div>

                    </div>
                    <div
                        onClick={() => setBurger(!burger)}
                        className="header__nav__burger">
                        <span style={{transform: burger ? "rotate(45deg)" : "", top: burger ? "9px" : "",}}></span>
                        <span style={{transform: burger ? "scale(0)" : "scale(1) translateY(-50%)",}}></span>
                        <span style={{
                            transform: burger ? "rotate(-45deg)" : "",
                            bottom: burger ? "9px" : "",
                        }}></span>
                    </div>
                </div>
            </div>
            <div style={{transform: burger ? "translateX(0)" : "translateX(100%)",}} className="burgerMenu">
                <div className="burgerMenu__nav">
                    <input type="text" placeholder="Издөө..."/>
                    <div className="header__nav__icons"><IoSearchOutline/></div>
                </div>
                <NavLink to="/signUp"><h1>Катталуу</h1></NavLink>
                <NavLink to="/sing"><h2>Кирүү</h2></NavLink>
                <div className="header__nav">
                    <input type="text" placeholder="Издөө..."/>
                    <div className="header__nav__icon">
                        <IoSearchOutline/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
