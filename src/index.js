/* eslint-disable react/jsx-filename-extension */
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'flexboxgrid2/flexboxgrid2.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
