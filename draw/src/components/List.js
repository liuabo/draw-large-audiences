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
      films: [],
      list_box: []
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
      axios
        .get("/v4/api/film/coming-soon?page=1&count=7")
        .then(res => {
          console.log(res);
          this.setState({
            list_box: res.data.data.films
          });
        });
  }
  render() {
    return (
      <div className = "List">
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="正在热映" key="1">
                {
                  this.state.films.map(function(item, index) {
                    return(
                      <ul className = "list_box" key = {item.id}>
                        <li>
                          <img src = {item.poster.origin} />
                          <div className = "film-desc">
                            <div className = "film-name">{item.name}<span>{item.grade}<i className = "iconfont icon-jiantou"></i></span></div>
                            <div className = "film-intro">{item.intro}</div>
                            <div className = "film-counts">{item.cinemaCount}<em>家影院上映</em>{item.watchCount}<em>人购票</em></div>
                          </div>
                        </li>
                      </ul>
                    )
                  })
                }
              </TabPane>
              <TabPane tab="即将上映" key="2">
                {
                  this.state.list_box.map(function(item, index) {
                    return(
                      <ul className = "list_box" key = {item.id}>
                        <li>
                          <img src = {item.poster.origin} />
                          <div className = "film-desc">
                            <div className = "film-name">{item.name}<span>{item.grade}<i className = "iconfont icon-jiantou"></i></span></div>
                            <div className = "film-intro">{item.intro}</div>
                            <div className = "film-counts">{item.cinemaCount}<em>家影院上映</em>{item.watchCount}<em>人购票</em></div>
                          </div>
                        </li>
                      </ul>
                    )
                  })
                }
              </TabPane>
            </Tabs>
    </div>
    );
  }
}
