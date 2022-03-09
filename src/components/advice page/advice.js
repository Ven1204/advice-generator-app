import React, { Component } from 'react';
import './advice.scss';
import Header from '../header page/header';
import Reload from '../reload/reload';
// import needed for axios to work
import axios from 'axios';

class Advice extends Component {
  constructor(props){
    super(props);
    this.handleNext.bind(this)
  }

  handleNext=() => {
    console.log(this.state.x)
  }

  state = {
    title: '',
    content: '',
    x: ''
  }

  // to fetch data using axios
  getData(){
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
      var data = res.data;
      var dataTitle = ''
      var dataContent = ''
      var dataID = null

      data.find((element)=>{
        let x = 3
        if(element.id === x)
        return(
          dataTitle += element.title,
          dataContent += element.body,
          dataID += element.id
        );
        console.log(element);
      })

      this.setState({ title: dataTitle, content: dataContent, x: dataID })
    })
  }

  // function that calls the function getData to be used in our render
  componentDidMount() {
    this.getData()
    this.handleNext()
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
              <button onClick={this.handleNext}>click</button>
            </div>
          </div>

      </div>
    );
  }
}

export default Advice;
