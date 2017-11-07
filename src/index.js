
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountryList from './Components/CountryList';
import registerServiceWorker from './registerServiceWorker';

let root = document.getElementById('root');
ReactDOM.render(<CountryList />, root);

registerServiceWorker();
