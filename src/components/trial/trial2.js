import React, { useState } from 'react';
import Header from '../headerPage/header';


function Advice (props){
  const [data, setData] = useState({
    title: "",
    content: "",
    data: [],
    id: 0,
  });


  return(
    <div className="container">
      <div className="header-container">
        <Header />
      </div>

      <div className="card">
        <div className="advice-title-section">
          <h3>{}</h3>
        </div>
        <hr />
        <div className="advice-content-section">
          <h2>"{}"</h2>
        </div>

        <div className="img-section">
          {/* <Reload /> */}

          <button >Next</button>
        </div>
      </div>
    </div>
  );
}

export default Advice;
