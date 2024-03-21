import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                   <div className="footer__titles">
                       <div className="footer__titles__title">
                           <h1>БАЙЛАНЫШУУ</h1>
                       </div>
                       <div className="footer__titles__contact">
                           <div className="footer__titles__contact__info">
                               <h2>Phone</h2>
                               <h3>+44 20 1234 5678</h3>
                           </div>
                       </div>
                   </div>
                       <div className="footer__text">
                           <h3>App It company</h3>
                       </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;