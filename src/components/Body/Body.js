import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Detail from './Detail/Detail';

class Body extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/detail" component={Detail} />
                </div>
            </Router>
        );
    }
}

export default Body;