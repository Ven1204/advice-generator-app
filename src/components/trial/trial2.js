import React, { useEffect, useState } from 'react';
import Header from '../headerPage/header';
import axios from 'axios';
import '../advicePage/advice.scss';

const Advice =() => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    getData();
    initialTitle();
    initialContent();
  }, []);

	const getData = () => {
		axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
			var data = [];
			data = res.data;
    setData (data);
		});
	}

  const initialTitle = () => {
    setTitle(data[0].title)
  }
  const initialContent = () => {
    setContent(data[0].body)
  }
  const next = () => {
    console.log(data);
  }



  return(
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

          <button onClick={next}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Advice;
