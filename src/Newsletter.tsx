import React from 'react'
import '/Newsletter.css'
function Newsletter() {
    return (
        <div className="contact-form">
            <h2>Contactenos</h2>
            <form>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="lastname">Apellido(s):</label>
                <input type="text" id="lastname" name="lastname" required />

                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}