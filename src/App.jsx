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


class App extends React.Component {
  render(){
    return(
      <Router>
        <div id="app">
          <Navigation />
          <div className="container">
            <Route exact path="/" component={MsgBoard}/>
            <Route path="/LeaveMsg" component={LeaveMsg}/>
          </div>
          
        </div>
      </Router>
    )
  }
}

export default App