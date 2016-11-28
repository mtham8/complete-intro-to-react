const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const { Router, Route, hashHistory } = require('react-router')

// you need div to be a parent element for the instances of your class
const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
