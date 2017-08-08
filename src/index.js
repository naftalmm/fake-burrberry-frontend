import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './../node_modules/flexboxgrid2/dist/flexboxgrid.min.css';
import 'normalize.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lora:400,400i', 'Raleway:400,500,600,700']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
