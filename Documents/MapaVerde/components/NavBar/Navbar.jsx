import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <navbar className="navbar-container">
            <div className="logo-container">
                <a href="index.html">Mapa Verde</a>
            </div>

            <div className="bars">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className="nav-items">
                <li className="nav-link"><a href="#">Inicio</a></li>
                <li className="nav-link"><a href="#">Servicios</a></li>
                <li className="nav-link"><a href="#">Proyectos</a></li>
                <li className="nav-link"><a href="#">Sobre nosotros</a></li>
                <div className="login-register">
                    <a href="#" className="button">Iniciar Seseión</a>
                    <a href="#" className="button">Registrarse</a>
                </div>
            </ul>
        </navbar>
        
    );
}

export default Navbar;


