import React, { Component } from "react";
import './reload.scss';
import axios from 'axios';


class Reload extends Component {
    constructor(props){
    super(props);
    this.handleNext.bind(this)
  }

  handleNext = e => {
    e.preventDefault();
    const s = axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
      var data = res.data;


      data.map((d, index) => {

        if (index === 0) {
          d.id += 1
        }
      })
      // logs the data we get
      console.log(s);
    })
  };

  render(){
    return(
      <div className="buttons">
        <div className="previous">
          {/* <h2 onClick={this.handlePrevious}>Previous</h2> */}
        </div>
        <div className="next">
          <h2 onClick={this.handleNext}>Next</h2>
        </div>
      </div>
    );
  }
}

export default Reload;
