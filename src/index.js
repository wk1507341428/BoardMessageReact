import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './assets/scss/app.scss'
import { Provider } from 'react-redux'
import store from './store/store'
import './assets/scss/base.scss'
import './assets/scss/reset.scss'
// 引入bootstrap  只是为了尝试
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);