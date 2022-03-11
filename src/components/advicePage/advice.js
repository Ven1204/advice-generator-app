import React, { Component } from 'react';
import './advice.scss';
import Header from '../headerPage/header';
import Reload from '../reload/reload';
// import needed for axios to work
import axios from 'axios';

class Advice extends Component {
  constructor(props){
    super(props);
    // this.handleNext.bind(this)
  }

  state = {
    title: '',
    content: '',
    data: [],
    id: null
  }

  handleNext=() => {
    this.state.data.find((data) => {
      var id = data.id
      for(id === this.state.id; id++;){
        this.state.id += 1;
      }
    })
    console.log(this.state.id)
  }

  // to fetch data using axios
  getData(){
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
      var dataTitle = ''
      var dataContent = ''
      var dataID = ''
      var data = []

      data = res.data
      data.map((element)=>{
        if(element.id === 1)
        return(
          dataTitle += element.title,
          dataContent += element.body,
          dataID += element.id
        )
      })
      console.log(data.length)

      this.setState({ title: dataTitle, content: dataContent, id: dataID, data: data })
    })
  }



  // function that calls the function getData to be used in our render
  componentDidMount() {
    this.setState(this.getData)
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
              {/* <Reload /> */}
              <button onClick={this.handleNext}>click</button>
            </div>
          </div>

      </div>
    );
  }
}

export default Advice;
