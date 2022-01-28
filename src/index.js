import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {spy} from "mobx";
import {configure} from "@testing-library/react";

configure({
    reactionScheduler: (f) => {
        setTimeout(f)
    },
})


spy((ev) => {
    if (ev.type.includes("action")){
        console.log(ev)
    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


