import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';
import axios from 'axios';

import List from './components/List';

import Home from './components/Home';
import Detail from './components/Detail';
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
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="javascript:;">首页</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="javascript:;">影片</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">影院</Menu.Item>
        <Menu.Item key="4">商城</Menu.Item>
        <Menu.Item key="5">我的</Menu.Item>
        <Menu.Item key="6">卖座卡</Menu.Item>
      </Menu>
    );
    return <Router>
        <div className="App">
          <header className = "iconfont">
            <div className="head">
                <Dropdown  overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link iconfont icon-menu2" href="#"></a>
                </Dropdown>
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
            <NavLink exact to="/Detail"></NavLink>

            <Route exact path="/" component={Home} />
            <Route exact path="/List" component={List} />
            <Route exact path="/Detail" component={Detail} />
          </div>
        </div>
      </Router>;
  }
}

export default App;
