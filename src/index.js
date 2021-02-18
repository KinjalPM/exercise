import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactTooltip from 'react-tooltip';

ReactDOM.render(
<Router>
<h1 data-tip="Learning">Homework</h1>
<ReactTooltip />
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/app" >Exercise1</Link></li>
</ul>
<Switch>
  <Route path="/app" component={App}></Route>
</Switch>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
