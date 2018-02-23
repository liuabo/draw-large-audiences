import React, { Component } from "react";
import axios from "axios";
import { Carousel } from "antd";
import '../style/Home_list.css'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      Home_list: [],
      list:[]
    };
  }
  componentDidMount() {
    axios
      .get("/v4/api/billboard/home?__t=1518672841606")
      .then(res => {
        // console.log(res);
        this.setState({
          films: res.data.data.billboards
        });
      });
      axios.get('/v4/api/film/now-playing?__t=1518919552345&page=1&count=5')
      .then((res)=>{
        // console.log(res);
        this.setState({
          Home_list: res.data.data.films
        })
      })

      axios.get('/v4/api/film/coming-soon?__t=1519030220262&page=1&count=3')
      .then((res)=>{
        // console.log(res);
        this.setState({
          list: res.data.data.films
        })
      })
  }
  gotoDetail(fid) {
    this.props.history.push("Detail/" + fid);
  }
  goToFilms() {
    this.props.history.push("List/")
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
            <div key={item.name}>
              <img src={item.imageUrl} />
            </div>
          );
        })}
      </Carousel>
      {
        this.state.Home_list.map(function(item, index){
          return (
            <ul  key={item.name} className="Home_list">
              <li key={item.name}  onClick={() => that.gotoDetail(item.id)}>
                <img src={item.cover.origin}  />
                <div className="List_bottom">
                  <div className="col_left">
                    <h3>{item.name}</h3>
                    <h4>{item.scheduleCount}家影院上映{item.watchCount}人购票</h4>
                  </div>
                  <h2>{item.grade}</h2>
                </div>
              </li>
            </ul>
          )
        })
      }
      <div  onClick={() => that.goToFilms()} className="more-button">更多热映电影</div>
      <div className="dividing-line"><div className="upcoming">即将上映</div></div>
        {
          this.state.list.map(function(item, index){
            return (
              <ul  key={item.name} className="Home_list">
                <li key={item.name}>
                  <img src={item.cover.origin}  />
                  <div className="List_bottom">
                    <div className="col_left">
                      <h3>{item.name}</h3>
                    </div>
                    <h2 id="time">2月28日上映</h2>
                  </div>
                </li>
              </ul>
            )
          })

        }
        {<div className="more-button">更多即将上映电影</div>}
      </div>
    );
  }
}
