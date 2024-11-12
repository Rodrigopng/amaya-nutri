import React from 'react';
import './BottomContact.css';
import {Link, useNavigate} from 'react-router-dom'
function BottomContact() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the homepage
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
    };
    return (
        <div className="bottom-container">
            {/*EMAIL SUBSCRIBE*/}
            <div className="contact-info-left">
                <h2 className="phone">Suscríbete:</h2>
                <form>
                    {/*
                    <input type="text" id="name" name="name" placeholder="Nombre" required />
                    <input type="text" id="lastname" name="lastname" placeholder="Apellido(s)" required />
                    */}
                    <input type="email" id="email" name="email" placeholder="Correo Electrónico" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
            {/*SOCIALS*/}
            <div className="contact-info-middle">
                <h2 className="socials">Pónte en contacto:</h2>
                <a href="tel:+1234567890" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p><img src="/amaya-nutri/phone-call.png" alt="Phone Icon" className="contact-icon" /> Teléfono</p>
                </a>
                <a href="mailto:correo@example.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p><img src="/amaya-nutri/gmail.png" alt="Email Icon" className="contact-icon" /> Correo Electrónico</p>
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p><img src="/amaya-nutri/social.png" alt="Instagram Icon" className="contact-icon" /> Instagram</p>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p><img src="/amaya-nutri/whatsapp.png" alt="WhatsApp Icon" className="contact-icon" /> WhatsApp</p>
                </a>
            </div>
            {/*ABOUT/RE-LINKS*/}
            <div className="contact-info-right">
                <h2 className="contact-header">Enlaces:</h2>
                <Link
                    to="/"
                    onClick={handleHomeClick}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <p>Home</p>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p>Conóceme</p>
                </Link>
                <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p>Servicios</p>
                </Link>
                <Link to="/pricing" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p>Tarifas</p>
                </Link>
                <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p>Blog</p>
                </Link>
            </div>
        </div>
    );
}

export default BottomContact;

