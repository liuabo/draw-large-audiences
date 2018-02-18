import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Carousel } from "antd";

import '../style/Home_list.css'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    };
  }
  componentDidMount() {
    axios
      .get("/v4/api/billboard/home?__t=1518672841606")
      .then(res => {
        console.log(res);
        this.setState({
          films: res.data.data.billboards
        });
      });
  }
  goto(fid) {
    this.props.history.push("Detail/" + fid);
  }
  render() {
    var settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    var that = this;
    return (
      <div>
        <Carousel {...settings}>
        {this.state.films.map(function(item, index) {
          return (
            <div key={item.name} onClick={() => that.goto(item.id)}>
              <img src={item.imageUrl} />
            </div>
          );
        })}
      </Carousel>
      </div>
    );
  }
}
