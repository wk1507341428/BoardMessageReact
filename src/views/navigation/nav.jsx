import React from 'react'
import {
  // BrowserRouter as Router,
  NavLink
} from 'react-router-dom'
// 加载css样式
import './nav.scss'

// 导航条内容主体
const navData = [
  {path:"/",name:"留言板"},
  {path:"/leaveMsg",name:"我要留言"}
]

// 登陆用户信息显示
class UserInfo extends React.Component {
  render(){
    return(
      <NavLink to="/login" className="userIcon">
        <img alt="我是头像" src={require('../../assets/images/userIcon.png')} />
      </NavLink >
    )
  }
}

class navigation extends React.Component {
  render() {
    return (
        <div className="main-header-box">
          <header className="navBars container">
            <ul className="nav">
              {navData.map((item,i)=>{
                return <li key={item.path}>
                  <NavLink activeClassName="active" exact to={item.path}>{item.name}</NavLink>
                </li>
              })}
            </ul>
            <div className="userInfo">
              <UserInfo />
            </div>
          </header>
        </div>
    )
  }
}

export default navigation