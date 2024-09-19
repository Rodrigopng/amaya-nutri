import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

function App() {
    const [showNavBar, setShowNavBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [headerBgColor, setHeaderBgColor] = useState('dark');  // State to track header background color

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNavBar(false);
            } else {
                setShowNavBar(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);


    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Router basename={"/amaya-nutri"}>
                {/* Navbar (MENU) */}
                <div className={showNavBar ? 'navbar-container visible' : 'navbar-container hidden'}>
                    <Header bgColor={headerBgColor} />  {/* Pass the header background color */}
                </div>
                <div>
                    {/* Routes */}
                    <Routes>
                        <Route path="/" element={<HomePage onSlideChange={setHeaderBgColor} />} />  {/* Pass the callback to HomePage */}
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
