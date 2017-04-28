 import  Parent  from  './parent.js';
 import  React  from 'react';
 import  ReactDOM, {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

render(<Parent />, document.getElementById('app'));
if (module.hot) {
  module.hot.accept('./parent.js', () => {
    const Parent = require('./parent.js').default;
    render(<AppContainer><Parent /></AppContainer>, document.getElementById('app'));
  })
}
