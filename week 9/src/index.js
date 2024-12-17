import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
//import * as serviceWorker from './serviceWorker';
import FacebookemojiCounter from './Facebookemoji';
import  ToggleModeComponent from './ToggleModeComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FacebookemojiCounter type="Love"/>
    <FacebookemojiCounter type="Like"/>
    < ToggleModeComponent/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
