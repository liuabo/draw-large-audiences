import React, { Component } from "react";
import axios from "axios";


export default class List_01 extends Component {
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
        this.state.films.map(function(item, index){
          return(
            <div key = {index}>
              {item.name}
            </div>
          )
        })
      }
    </div>
    );
  }
}
