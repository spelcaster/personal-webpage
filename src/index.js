import './sass/app.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'

import App from './components/App.js'

ReactDOM.render(
  (
    <Router>
      <Route exact path='*' component={App} />
    </Router>
  ),
  document.getElementById('app')
)
