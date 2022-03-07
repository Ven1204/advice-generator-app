import React, {Component} from 'react';

class Trial extends Component{
  constructor(props){
    super(props);
    this.state = {
     items: []
    };
  }

  data(){
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(
      (result) => {
        this.setState({
          items: result.items
        });
        var x = result

        x.forEach(element => {
          let id = 10;
          if (element.id === id){
            console.log(element.id, element.title, element.body);
          };
        })
      }
    )

  }
  componentDidMount() {
    this.data()

  }


  handleClick() {

  }


  render(){
    return(
      <div>
        <h1>{this.data}</h1>
        <button onClick={this.handleClick}>asdsfdgj</button>
      </div>
    )
  }
}

export default Trial;
