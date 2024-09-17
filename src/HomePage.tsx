import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import RoundedRectangle from "./RoundedRectangle";
import Slide from "./Slide";
import HorizontalBar from "./HorizontalBar";
import IconCanvas from "./IconCanvas";
import BottomContact from "./BottomContact";
import "./App.css"

const HomePage: React.FC = () =>  {
    // Tariffs pop-up logic
    const [isTarifsVisible, setIsTarifsVisible] = useState(false);

    const showTarifs = () => {
        setIsTarifsVisible(true);
    };

    const closeTarifs = () => {
        setIsTarifsVisible(false);
    };

    return (
    <>
    {/* SlideShow */}

    <Slide />

    {/* Tariff Bar */}
    <HorizontalBar title="CONOCE NUESTRAS TARIFAS" buttonText="TARIFAS" onButtonClick={showTarifs} />

    {isTarifsVisible && (
        <div className="tarifs-overlay">
            <div className="tarifs-content">
                <RoundedRectangle>
                    <h2>Introduccion</h2>
                    <p>100$</p>
                    <h2>Pack 5</h2>
                    <p>250$</p>
                    <Button variant="primary" className="close-button" onClick={closeTarifs}>Cerrar</Button>
                </RoundedRectangle>
            </div>
        </div>
    )}

    {/* Animated Cards (Grid) */}
    <div className="container">
        <div className="card-grid">
            <RoundedRectangle>
                <h2>Dietas</h2>
                <p>Dietas a tu medida.</p>
            </RoundedRectangle>
            <RoundedRectangle>
                <h2>Citas Online</h2>
                <p>Reserva la tuya ahora.</p>
            </RoundedRectangle>
            <RoundedRectangle>
                <h2>Asistencia personalizada.</h2>
                <p>Servicio continuo y completo.</p>
            </RoundedRectangle>
            <RoundedRectangle>
                <h2>No te arrepentirás.</h2>
                <p>Personal con experiencia en el campo.</p>
            </RoundedRectangle>
        </div>

        <IconCanvas />

        <BottomContact />
    </div>
    </>
    );
};

export default HomePage;
