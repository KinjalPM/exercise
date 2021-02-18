import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactTooltip from 'react-tooltip';

ReactDOM.render(
<Router>
  <div id="dstyle">
  <h1 data-tip="Learning" id="h1style">Homework</h1>
  <ReactTooltip />
    <ul>
        <li><Link to="/" id="ulstyle">Home</Link></li>
        <br></br>
        <li><Link to="/app" id="ulstyle">Exercise 1</Link></li>
        <br></br>
        <li><a href="https://github.com/KinjalPM/exercise" target="_blank" rel="noreferrer" id="ulstyle">Github</a></li>
    </ul>

    <Switch>
      <Route path="/app" component={App}></Route>
    </Switch>

</div>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
