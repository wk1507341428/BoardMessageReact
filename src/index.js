import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store'
import './assets/scss/base.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);