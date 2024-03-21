import React, { useState } from "react";
import "./Header.scss";
import skechers from "../../img/Sayapker logo 1.svg";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const [burger, setBurger] = useState(false);

  console.log(burger);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header__title">
            <img className="header__title__img2" src={skechers} alt="" />
          </div>
          <div className="header__nav">
            <input type="text" placeholder="Издөө..." />
            <div className="header__nav__icon">
              <IoSearchOutline />
            </div>

            <div className="header__nav__sing">
              <h1>Катталуу</h1>
              <h2>Кирүү</h2>
            </div>

            <div
              onClick={() => setBurger(!burger)}
              className="header__nav__burger"
            >
              <span
                style={{
                  transform: burger ? "rotate(45deg)" : "",
                  top: burger ? "9px" : "",
                }}
              ></span>
              <span
                style={{
                  transform: burger ? "scale(0)" : "scale(1) translateY(-50%)",
                }}
              ></span>
              <span
                style={{
                  transform: burger ? "rotate(-45deg)" : "",
                  bottom: burger ? "9px" : "",
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          transform: burger ? "translateX(0)" : "translateX(100%)",
        }}
        className="burgerMenu"
      ></div>
    </div>
  );
};

export default Header;
