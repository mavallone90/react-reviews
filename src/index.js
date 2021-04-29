import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
let Parser = require('rss-parser');
let parser = new Parser();

function RSS() { 

  const [reviews, setReviews] = useState([])

  useState(() => {
      parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/World.xml')
        .then((response) => response.json())
        .then(json => setReviews(json));
  }, [])
  return (
    console.log(reviews, "Anything")
  ); 
}

<RSS />

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
