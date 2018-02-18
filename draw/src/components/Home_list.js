import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


export default class List extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    }
  }
  componentDidMount() {
      axios.get('/v4/api/film/now-playing?__t=1518919552345&page=1&count=5')
      .then((res)=>{
        console.log(res);
        this.setState({
          films: res.data.data.films
        })
        console.log(this.films)
      })
  }
  render() {
    return(
        <ul className="Home_list">
          {
            this.state.films.map(function(item, index){
              return (
                <li key={item.name}>
                  <img src={item.cover.origin}  />
                  <div className="List_bottom">
                    <div className="col_left">
                      <h3>{item.name}</h3>
                      <h4>{item.scheduleCount}家影院上映{item.watchCount}人购票</h4>
                    </div>
                    <h2>{item.grade}</h2>
                  </div>
                </li>
              )
            })
          }
        </ul>
    )
  }
}
