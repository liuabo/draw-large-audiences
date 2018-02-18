import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import { Carousel } from "antd";
import axios from 'axios';

import Home from './components/Home';
import List from './components/List';
import Home_list from './components/Home_list';
import './App.css';
import './iconfont/iconfont.css';

import './style/reset.css'
class App extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    };
  }
  componentDidMount() {
    console.log("测试数据");
    axios.get("v4/api/billboard/home?__t=1518672841606").then(res => {
      console.log("rrfewres");
      this.setState({ films: res.data.data.billboards });
    });
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
            <NavLink to="/"></NavLink>


            <Route exact path="/" component={Home} />
            <Route path="/" component={Home_list} />
          </div>
          <div className=""></div>
        </div>
      </Router>;
  }
}

export default App;
