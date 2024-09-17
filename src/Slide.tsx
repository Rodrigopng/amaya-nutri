import React from "react";
import {Carousel} from "react-bootstrap";
import './Slide.css'

const Slide = () => {
    return (
        <Carousel interval={3000} className="slide-container" >
            <Carousel.Item>
                <div className="carousel-img1" style={{backgroundImage: "url('/img1.jpg')", backgroundSize: 'cover',
                    backgroundPosition: 'center', height:"100%"}}>
                    {/*Photo*/}
                </div>
                <Carousel.Caption>
                    <h1>Slide 1</h1>
                    <p>Description 1</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="carousel-img2" style={{backgroundImage: "url('/img2.jpg')", backgroundSize: 'cover',
                    backgroundPosition: 'center', height:"100%"}}>
                    {/*Photo*/}
                </div>
                <Carousel.Caption>
                    <h1>Slide 2</h1>
                    <p>Description 1</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="carousel-img3" style={{backgroundImage: "url('/img3.jpeg')", backgroundSize: 'cover',
                    backgroundPosition: 'center', height:"100%"}}>
                    {/*Photo*/}
                </div>
                <Carousel.Caption>
                    <h1>Slide 3</h1>
                    <p>Description 1</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slide;