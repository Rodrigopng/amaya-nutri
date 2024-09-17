import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

function App() {
    const [showNavBar, setShowNavBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
            <Router>
                {/* Navbar (MENU) */}
                <div className={showNavBar ? 'navbar-container visible' : 'navbar-container hidden'}>
                    <Header />
                </div>
                <div>
                    {/* Routes */}
                    <Routes>
                        <Route path="/" element={<HomePage />} />  {/* HomePage component as default */}
                        <Route path="/about" element={<AboutPage />} />
                        {/*
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        */}
                    </Routes>
                </div>
            </Router>
        </div>
    );
}
export default App;

