import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Detail from './Detail/Detail';

class Body extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/detail/:uid" component={Detail} />
            </div>

        );
    }
}

export default Body;