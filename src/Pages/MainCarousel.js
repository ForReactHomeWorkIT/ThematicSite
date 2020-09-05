import React, { Component } from 'react';
import '../App.css';
import Carousel from "react-bootstrap/Carousel";
import c1 from '../assets/c1.jpeg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';
import c4 from '../assets/c4.jpg';

class MainCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>First slide</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h4>Second slide</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h4>Third slide</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c4}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h4>Fourth slide</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default MainCarousel;