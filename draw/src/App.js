import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import { Carousel } from "antd";
import axios from 'axios';

import List from './components/List';

import Home from './components/Home';
import './App.css';
import './style/reset.css';
import './style/Home_list.css'
import './iconfont/iconfont.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    };
  }
  render() {
    return <Router>
        <div className="App">
          <header className="iconfont">
            <div className="head">
              <i className="icon-menu2" />
              <NavLink className="toolbar-title" to="/">
                卖座电影
              </NavLink>
            </div>
            <div className="nav_right">
              <NavLink className="Location" to="/Location">
                定位<i className="icon-jiantou-copy-copy" />
              </NavLink>
              <NavLink className="user" to="/">
                <i className="icon-yonghu" />
              </NavLink>
            </div>
          </header>
          <div id="content">
            <NavLink exact to="/"></NavLink>
            <NavLink exact to="/List"></NavLink>

            <Route exact path="/" component={Home} />
            <Route exact path="/List" component={List} />
          </div>
        </div>
      </Router>;
  }
}

export default App;
