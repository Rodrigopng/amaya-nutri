import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import RoundedRectangle from "./RoundedRectangle";
import Slide from "./Slide";
import HorizontalBar from "./HorizontalBar";
import IconCanvas from "./IconCanvas";
import BottomContact from "./BottomContact";
import "./App.css"


interface HomePageProps {
    onSlideChange: (color: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({onSlideChange}) =>  {

    // Tariffs pop-up logic
    const [isTarifsVisible, setIsTarifsVisible] = useState(false);

    const showTarifs = () => {
        setIsTarifsVisible(true);
    };

    const closeTarifs = () => {
        setIsTarifsVisible(false);
    };

    // Callback to change header background color
    const handleSlideChange = (index: number) => {
        const colors = ['#ef9ba0', '#7cc583', '#c9a87c'];  // Example colors for each slide
        const newColor = colors[index] || 'dark'; // Change color based on the slide
        console.log(`Changing header color to: ${newColor}`); // Log the new color
        onSlideChange(newColor);
    };

    return (
    <>
    {/* SlideShow */}

    <Slide onSlideChange={handleSlideChange}/>

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
