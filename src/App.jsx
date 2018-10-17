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
          <Redirect from="/" to="/index" exact />
        </Switch> 
        </div>
      </div>
    )
  }
}

// 设置一个全局的变量来控制可以是可以，但是一定不是正规的做法
class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Router basename="/">
        <div id="app">
          <InsideWall />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    )
  }
}

export default App