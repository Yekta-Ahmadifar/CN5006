import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import EmojiText from './EmojiText'
//import App from './App';
import Hook_ControlledButtonState from './Counter';
//import Hook_ControlledButtonState from './StatewithHookButton' 
import EmojeeCounter from './EmojeeCounter' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode> 
  {/* Render the EmojeeCounter component  for task  1 & 2*/}
 {/*<Hook_ControlledButtonState/> 
  <EmojeeCounter pic='Love'/> 
  <EmojeeCounter pic='sad'/> 
  <EmojeeCounter pic='Like'/>*/}

{/* Render the EmojiText component for task 3 */}
<EmojiText/>
</React.StrictMode>
,
document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
