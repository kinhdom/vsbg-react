import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

import { BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
