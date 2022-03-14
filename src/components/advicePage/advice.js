import React, { Component } from "react";
import "./advice.scss";
import Header from "../headerPage/header";
import Reload from "../reload/reload";
// import needed for axios to work
import axios from "axios";

class Advice extends Component {
	constructor(props) {
		super(props);
		this.handleNext = this.handleNext.bind(this);
	}

	state = {
		title: "",
		content: "",
		data: [],
		id: 0,
	};

	handleNext = () => {
		const dataArray = this.state.data;
		let nextID = this.state.id ++;
		let currentObject = dataArray[nextID];

		this.setState({
			title: currentObject.title,
			content: currentObject.body,
			id: currentObject.id,
		});
    console.log(currentObject.id)
	};


	// to fetch data using axios
	getData() {
		axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
			var data = [];

			data = res.data;

			this.setState({
				title: data[0].title,
				content: data[0].body,
				id: data[0].id,
				data: data,
			});
		});
	}

	// function that calls the function getData to be used in our render
	componentDidMount() {
		this.getData();
	}

	render() {
		// created a variables containing the change state of this component
		const { title, content } = this.state;
		return (
			<div className="container">
				<div className="header-container">
					<Header />
				</div>

				<div className="card">
					<div className="advice-title-section">
						<h3>{title}</h3>
					</div>
					<hr />
					<div className="advice-content-section">
						<h2>"{content}"</h2>
					</div>

					<div className="img-section">
						{/* <Reload /> */}

						<button onClick={this.handleNext}>Next</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Advice;
