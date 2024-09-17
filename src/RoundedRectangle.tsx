import React from 'react';
import { Card } from "react-bootstrap";
import './RoundedRectangle.css'

interface RoundedRectangleProps {
    children?: React.ReactNode;
}
const RoundedRectangle: React.FC<RoundedRectangleProps> =
    ( {children}) =>
    {
        return (
            <Card className="rounded-rectangle">
                <Card.Body>
                    {children}
                </Card.Body>
            </Card>
        );
    };

export default RoundedRectangle;