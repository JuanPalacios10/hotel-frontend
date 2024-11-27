import React from "react";
import '../styles/footer.css'
import { Logo } from './Logo'
import logo from '../assets/images/logo/logo blanco letras.png'

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-contenido">
                <div className="footer-section">
                    <h3>INFORMACION</h3>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Hotel</a></li>
                        <li><a href="#">Habitaciones</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contactos</a></li>
                        <li><a href="#">Normas</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>CONTACTOS</h3>
                    <ul>
                        <li>Telefono: 123456789</li>
                        <li>Email: hotelbuenvivir@gmail.co.com</li>
                        <li>Direccion: Av. 123 Calle 456</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>REDES</h3>
                    <ul className="redes">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a> </li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Hotel Buen Vivir. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}