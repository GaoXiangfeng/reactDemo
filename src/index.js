import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Router from '../src/router/routeUsual' //没有守卫的路由
import Router from '../src/router/routeGuard' //有守卫的路由

ReactDOM.render(
   <React.StrictMode>
    <Router>
      <App />
    </Router>
   </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
