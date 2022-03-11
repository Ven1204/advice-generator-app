import React, { Component } from "react";
import './reload.scss';
import axios from 'axios';


class Reload extends Component {
	constructor(props) {
		super(props);
		this.handleNext = this.handleNext.bind(this);
	}

	handleNext = () => {
		const dataArray = this.state.data;
		let nextID = this.state.id + 1;
		let currentObject = dataArray[nextID];

		this.setState({
			title: currentObject.title,
			content: currentObject.body,
			id: currentObject.id,
		});
    console.log(dataArray)
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
