import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import Exercise3 from './Exercise3';
import Exercise2 from './Exercise2';
import Exercise4 from './Exercise4';
import Exercise5 from './Exercise5';
import reportWebVitals from './reportWebVitals';
import ReactTooltip from 'react-tooltip';

ReactDOM.render(
<Router>
  <div id="dstyle">
  <h1 data-tip="Learning" id="h1style"><u>Homework</u></h1>
  <ReactTooltip />
    <div class="navbar">
        <Link to="/" id="ulstyle">Home</Link>
        <Link to="/app" id="ulstyle">Exercise 1</Link>
        <Link to="/exercise2" id="ulstyle">Exercise 2</Link>
        <Link to="/exercise3" id="ulstyle">Exercise 3</Link>
        <Link to="/exercise4" id="ulstyle">Exercise 4</Link>
        <Link to="/exercise5" id="ulstyle">Exercise 5</Link>
        <a href="https://github.com/KinjalPM/exercise" id="ulstyle">Github</a>
    </div>

    <Switch>
      <Route path="/app" component={App}></Route>
      <Route path="/exercise2" component={Exercise2}></Route>
      <Route path="/exercise3" component={Exercise3}></Route>
      <Route path="/exercise4" component={Exercise4}></Route>
      <Route path="/exercise5" component={Exercise5}></Route>
    </Switch>

</div>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
