import React from 'react';
import {Button} from "react-bootstrap";
import './HorizontalBar.css'

interface HorizontalBarProps {
    title?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const HorizontalBar: React.FC<HorizontalBarProps> = ({title, buttonText, onButtonClick}) => {
  return (
      <div className="horizontal-bar">
          <div className="horizontal-bar-content">
              <div className="horizontal-bar-left">
                  <h2 className="horizontal-bar-title">{title}</h2>
              </div>
              <div className="horizontal-bar-right">
                  <Button variant="primary" className="horizontal-bar-button" onClick={onButtonClick}>
                      {buttonText}
                  </Button>
              </div>
          </div>
      </div>
  );
};

export default HorizontalBar;