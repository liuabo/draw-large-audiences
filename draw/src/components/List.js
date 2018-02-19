import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { Tabs } from 'antd';
import { Button } from 'antd';

import List_01 from './List_01';
import List_02 from './List_02';
import '../style/List.css';
const TabPane = Tabs.TabPane;
function callback(key) {
console.log(key);
}
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    };
  }
  componentDidMount() {
    axios
      .get("/v4/api/film/now-playing?page=1&count=7")
      .then(res => {
        console.log(res);
        this.setState({
          films: res.data.data.films
        });
      });
  }
  render() {
    return (
      <div className = "List">
        {
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="正在热映" key="1">正在热映</TabPane>
              <TabPane tab="即将上映" key="2">即将上映</TabPane>
            </Tabs>
        }

    </div>
    );
  }
}
