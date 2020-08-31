import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Switch from 'react-bootstrap/esm/Switch';
import Home from '../Pages/Home';
import Gallery from '../Pages/Gallery';
import Shop from '../Pages/Shop';


class Navbar extends Component {
    render() {
        return (
            <Router>
                <NavbarCollapse>
                    <NavLink to="/">Домашняя страница</NavLink>
                    <NavLink to="/gallery">Галерея</NavLink>
                    <NavLink to="/shop">Магазин</NavLink>
                </NavbarCollapse>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/shop" component={Shop} />
                </Switch>
            </Router>
        )
    }
}

export default Navbar;