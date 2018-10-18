// 可以用来做资源整合
import React from 'react'
import Navigation from './views/navigation/nav'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
// 加载登陆页面
import LoginPage from './views/LoginPage/LoginPage'
import {MainRouter} from './router/index'

import leaveMsg from './views/LeaveMsg/LeaveMsg'

// 感觉这应该需要一个children路由，这才是正确的逻辑
class InsideWall extends React.Component {
  render() {
    return (
      <div className="insideWall">
        <Navigation MainRouter={MainRouter} />
        <div className="container main">
        <Switch>
          {MainRouter.map((route,i)=>{
            return <Route key={i} path={route.path} component={route.component} />
          })}
          <Route path="/details/edit" exact component={leaveMsg} />
          <Redirect from="*" to="/details/index" exact />
        </Switch>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Router basename="/">
        <div id="app">
          <Switch>
            <Route path="/details" component={InsideWall} />
            <Route path="/login" component={LoginPage} />
            <Redirect from="/" to="/details/index" exact />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App