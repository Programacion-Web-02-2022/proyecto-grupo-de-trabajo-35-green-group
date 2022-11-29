import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content-container">
                    <h3 className="website-logo">Mapa Verde</h3>
                </div>
                <div className="footer-menus">
                    <div className="footer-content-container">
                        <span className="menu-title">Información</span>
                        <a href="" className="menu-item-footer">2118 Thornridge Cir. Syracuse, Connecticut 35624</a>
                        <a href="" className="menu-item-footer">+503 555-0111</a>
                        <a href="" className="menu-item-footer">mapaverde@gmail.com</a>
                    </div>
                    <div className="footer-content-container">
                        <span className="menu-title">legal</span>
                        <a href="https://policies.google.com/privacy?hl=es" className="menu-item-footer">Politicas de privacidad</a>
                        <a href="https://policies.google.com/technologies/cookies?hl=es" className="menu-item-footer">Cookies</a>
                        <a href="https://support.google.com/youtube/answer/6154232?hl=es" className="menu-item-footer">Consejo Legal</a>
                    </div>
                </div>
                
                <div className="footer-content-container">
                    <span className="menu-title">follow us</span>
                    <div className="social-container">
                        <a className="https://es-la.facebook.com/" class="social-link"></a>
                        <a className="https://twitter.com/?lang=es" class="social-link"></a>
                        <a className="https://www.instagram.com/" class="social-link"></a>
                    </div>
                </div>
            </div>
            <div class="copyright-container">
                <span class="copyright">&copy; Todos los Derechos Reservados, 2021 .</span>
            </div>
        </footer>
    );
}

export default Footer;