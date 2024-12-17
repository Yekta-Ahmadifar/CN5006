import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import GreetingElement from './myGreeting';
import GreetingElementwithProp from './mygreetingprop'; 
import AppColor from './AppbackgroundColor'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppColor heading="This is first element" lbl=
 "Name :"  color="green"/> 
   <AppColor heading="This is second element" lbl
 ="Name :"  color="blue"/> 
   <AppColor heading="This is third third element
 " lbl="Name :"  color="Yellow"/> 
  </React.StrictMode>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
