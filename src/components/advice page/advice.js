import React, { Component } from 'react';
import './advice.scss';
import Header from '../header page/header';
import Reload from '../reload/reload';
import axios from 'axios';

class Advice extends Component {
  state = {
    posts: ''
  }

  getData(){
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
      var data = res.data;
      var dataTitle = ""
      // data.forEach(d => forEachData += d.id)

      // this.setState({ posts: forEachData });
      // console.log(forEachData);

      var outputTitle = data.find((d, index) => {
        if (index === 0) {
          return dataTitle += d.title + " - " + d.body
        }
      })
      this.setState({ posts: dataTitle })
      console.log(dataTitle);
    })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const {posts} = this.state
    return (

      <div className='container'>
        <div className='header-container'>
          <Header />
        </div>

          <div className='card'>
            <div className='advice-title-section'>
              {/* <h3>{posts}</h3> */}
            </div>

            <div className='advice-content-section'>
              <h2>"{posts}"</h2>
            </div>

            <div className='img-section'>
              <div className='mini-body'>
                <Reload />
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default Advice;
