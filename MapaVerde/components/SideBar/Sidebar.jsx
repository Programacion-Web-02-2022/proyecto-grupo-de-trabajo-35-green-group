import React from 'react';
import { FaCommentDots, FaAlignJustify, FaMapMarkerAlt,FaMapMarker,FaUserAlt, FaTasks,FaRegFolder,FaRegSun,FaLeaf } from "react-icons/fa";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import './Sidebar.css';

const SideBar = () => {

    return (
        <div className="sidebar">
            <div className="logo-details">
            <i><FaMapMarker></FaMapMarker></i>
                <div className="logo_name">Mapa Verde</div>
                <i className='bx bx-menu' id="btn" ></i>
            </div>
            <ul className="nav-list">
            <li>
                <a href="#">
                <i><FaLeaf></FaLeaf></i>
                <span className="links_name">Inicio</span>
                </a>
                <span className="tooltip">Inicio</span>
            </li>
            <li>
            <a href="#">
                <i><FaCommentDots></FaCommentDots></i>
                <span className="links_name">Usuario</span>
            </a>
            <span className="tooltip">Usuario</span>
            </li>
            <li>
            <a href="#">
                <i ><FaUserAlt></FaUserAlt></i>
                <span className="links_name">Notificaciones</span>
            </a>
            <span className="tooltip">Notificaciones</span>
            </li>
            <li>
            <a href="#">
                <i><FaTasks></FaTasks></i>
                <span className="links_name">Metas</span>
            </a>
            <span className="tooltip">Metas</span>
            </li>
            <li>
            <a href="#">
                <i><FaRegFolder></FaRegFolder></i>
                <span className="links_name">Archivos</span>
            </a>
            <span className="tooltip">Archivos</span>
            </li>
            <li>
            <a href="#">
                <i className='bx bx-cart-alt' ></i>
                <span className="links_name">Order</span>
            </a>
            <span className="tooltip">Order</span>
            </li>
            <li>
            <a href="#">
                <i><FaMapMarkerAlt></FaMapMarkerAlt></i>
                <span className="links_name">Mapas</span>
            </a>
            <span className="tooltip">Mapas</span>
            </li>
            <li>
            <a href="#">
                <i><FaRegSun></FaRegSun></i>
                <span className="links_name">Configuración</span>
            </a>
            <span className="tooltip">Configuración</span>
            </li>
            <li className="profile">
                <div className="profile-details">
                <div className="name_job">
                    <div className="name">Diana</div>
                    <div className="job">Administrador</div>
                </div>
                </div>
                <i ><BsArrowLeftCircleFill></BsArrowLeftCircleFill></i>
            </li>
            </ul>
        </div>
    );
}

export default SideBar;


