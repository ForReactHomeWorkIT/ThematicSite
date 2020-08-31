import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Switch from 'react-bootstrap/esm/Switch';
import Home from '../Pages/Home';


class Navbar extends Component {
    render() {
        return (
            <Router>
                <NavbarCollapse>
                    <NavLink to="/"></NavLink>
                    <NavLink to="/gallery"></NavLink>
                    <NavLink to="/shop"></NavLink>
                </NavbarCollapse>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/gallery" component={Home} />
                    <Route exact path="/shop" component={Home} />
                </Switch>
            </Router>
        )
    }
}

export default Navbar;