import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Animation from './Components/Animation/animation';
import 'bootstrap/dist/css/bootstrap.css';


import {
  BrowserRouter
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <BrowserRouter>
     <Animation/>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

