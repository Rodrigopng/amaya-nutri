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

    {/* Animated Cards (Grid) */}
    <div className="container">
        <div className="card-grid">
            <RoundedRectangle
            imageSrc={"/amaya-nutri/diet.png"}
            textContent={<><h2>Dietas</h2><p>Dietas a tu medida.</p></>}
            />

            <RoundedRectangle
            imageSrc={"/amaya-nutri/appointment.png"}
            textContent={<><h2>Citas Online</h2><p>Reserva la tuya ahora.</p></>}

            />
            <RoundedRectangle
            imageSrc={"/amaya-nutri/phone-call.png"}
            textContent={<><h2>Asistencia personalizada.</h2>
            <p>Servicio continuo y completo.</p></>}
            />

            <RoundedRectangle
            imageSrc={"/amaya-nutri/satisfaction.png"}
            textContent={<><h2>No te arrepentirás.</h2><p>Personal con experiencia en el campo.</p></>}
            />

        </div>
    </div>
        <BottomContact />
    </>
    );
};

export default HomePage;
