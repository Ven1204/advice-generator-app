import React, { Component } from 'react';
import './advice.scss';
import Header from '../header page/header';
import Reload from '../reload/reload';
// import needed for axios to work
import axios from 'axios';

class Advice extends Component {
  // constructor(props){
  //   super(props);
  //   this.handleNext.bind(this)
  // }

  handleNext=() => {
    let value = this.props;
    return value=== 0? "Zero" : value;
  }
  /* initial state of the Advice component which is an object of title and content
  that is set to empty string, which will be filled up  by data we get from API through axios
  */
  state = {
    title: '',
    content: '',
  }

  // to fetch data using axios
  getData(){
    // axios uses get method to fetch data from http.....
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    // then the response = res is stored in variable data
    .then(res => {
      var data = res.data;
      // this 2 variable will contain the data we select from data object
      var dataTitle = ""
      var dataContent = ""

      // using .find method to find a specific data from array of objects from API
      data.find((d, index) => {
        // conditional statement to get the specific id we want to render
        if (index === 0) {
          // then the 2 empty string variables are filled up with the data
          dataTitle += `${d.title}`
          dataContent += `${d.body}`
        }
      })
      // change the initial state of title and content from empty string to datas we fetch
      this.setState({ title: dataTitle, content: dataContent })
      // // logs the data we get
      // console.log(data.id);
    })
  }
  // function that mounts the function getData to be used in our render
  componentDidMount() {
    this.getData()
  }

  render() {
    // created a variables containing the change state of this component
    const {title, content} = this.state
    return (

      <div className='container'>
        <div className='header-container'>
          <Header />
        </div>

          <div className='card'>
            <div className='advice-title-section'>
              <h3>{title}</h3>
            </div>
            <hr />
            <div className='advice-content-section'>
              <h2>"{content}"</h2>
            </div>

            <div className='img-section'>
              <Reload />
              {/* <button onClick={this.handleNext}>click</button> */}
            </div>
          </div>

      </div>
    );
  }
}

export default Advice;
