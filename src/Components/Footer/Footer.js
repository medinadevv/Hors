import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer__title">
                        <h1>БАЙЛАНЫШУУ</h1>
                    </div>
                    <div className="footer__contact">

                        <div className="footer__contact__info">
                            <h2>Address</h2>
                            <h3>18 Suffolk St, London SW1Y 4HT</h3>
                        </div>

                        <div className="footer__contact__info">
                            <h2>Phone</h2>
                            <h3>+44 20 1234 5678</h3>
                        </div>

                        <div className="footer__contact__info">
                            <h2>Email</h2>
                            <h3>info@concrete.kit</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;