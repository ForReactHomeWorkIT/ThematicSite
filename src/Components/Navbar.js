import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Home from '../Pages/Home';
import Gallery from '../Pages/Gallery';
import Shop from '../Pages/Shop';
import MainCarousel from '../Pages/MainCarousel';
import Navbar from "react-bootstrap/Navbar";


class Navigation extends Component {
    render() {
        return (
            <Router>
                <Navbar>
                    <NavLink to="/main">Лента новостей</NavLink>
                    <NavLink to="/gallery">Галерея</NavLink>
                    <NavLink to="/shop">Магазин</NavLink>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={MainCarousel}/>
                    <Route exact path="/main" component={Home} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/shop" component={Shop} />
                </Switch>
            </Router>
        )
    }
}

export default Navigation;