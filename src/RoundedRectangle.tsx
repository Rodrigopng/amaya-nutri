import React from 'react';
import { Card } from 'react-bootstrap';
import './RoundedRectangle.css';

interface RoundedRectangleProps {
    imageSrc: string;
    textContent: React.ReactNode;
}

const RoundedRectangle: React.FC<RoundedRectangleProps> = ({ imageSrc, textContent }) => {
    return (
        <Card className="rounded-rectangle">
            <Card.Body className="rounded-rectangle-body">
                <div className="left-div">
                    <img src={imageSrc} alt="Image" className="rectangle-image" />
                </div>
                <div className="right-div">
                    {textContent}
                </div>
            </Card.Body>
        </Card>
    );
};

export default RoundedRectangle;