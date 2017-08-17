/* eslint-disable react/jsx-filename-extension */
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './../node_modules/flexboxgrid2/dist/flexboxgrid.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
