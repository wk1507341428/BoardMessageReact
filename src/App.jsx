// 可以用来做资源整合
import React from 'react'
import Navigation from './views/navigation/nav'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// 加载留言板组件
import MsgBoard from './views/MsgBoard/MsgBoard'
// 加载留言界面
import LeaveMsg from './views/LeaveMsg/LeaveMsg'
// 加载登陆页面
import LoginPage from './views/LoginPage/LoginPage'

class InsideWall extends React.Component {
  render() {
    return (
      <div className="insideWall">
        <Navigation />
        <div className="container">
          <Route exact path="/" component={MsgBoard} />
          <Route path="/LeaveMsg" component={LeaveMsg} />
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <Router>
        <div id="app">
          {
            true ? <InsideWall /> :<Route path="/login" component={LoginPage} />
          }
        </div>
      </Router>
    )
  }
}

export default App