import React, { useState } from 'react';
import HorizontalBar from "./HorizontalBar";
import RoundedRectangle from "./RoundedRectangle";
import Button from "react-bootstrap/esm/Button";
import "./App.css";

const TarifPage: React.FC = () => {
    // Tariffs pop-up logic
    const [isTarifsVisible, setIsTarifsVisible] = useState(false);

    const showTarifs = () => {
        setIsTarifsVisible(true);
    };

    const closeTarifs = () => {
        setIsTarifsVisible(false);
    };

    return (
        <div>
            <h1>Tarifas</h1>
            <p>Welcome to the Tarif Page!</p>

            {/* Tariff Bar */}
            <HorizontalBar title="CONOCE NUESTRAS TARIFAS" buttonText="TARIFAS" onButtonClick={showTarifs} />

            {isTarifsVisible && (
                <div className="tarifs-overlay">
                    <div className="tarifs-content">
                    </div>
                </div>
            )}
        </div>
    );
};

export default TarifPage;
