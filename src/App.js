import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Navbar />
                <Footer />
            </div>
        )
    }
}

  export default App;
