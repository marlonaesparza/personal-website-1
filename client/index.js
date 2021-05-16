import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import fetchResources from './utils/fetchResources';
import deviceAdjustment from './assets/deviceAdjustment';

const root = document.getElementById('root');
ReactDOM.render(<App fetchResources={fetchResources} deviceAdjustment={deviceAdjustment} />, root);
