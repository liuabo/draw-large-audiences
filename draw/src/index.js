import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
var rempx = document.documentElement.clientWidth / 3.75;
document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";
