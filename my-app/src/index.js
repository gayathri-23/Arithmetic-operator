import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Add from './Add';
import Sub from './Sub';
import Mul from './Mul';
import Div from './Div';
import './App.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<div><Add/> <Sub/> <Mul/> <Div/> </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
