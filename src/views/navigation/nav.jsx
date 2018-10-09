import React from 'react'
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom'
// 加载css样式
import './nav.scss'

const navData = [
  {path:"/",name:"留言板"},
  {path:"/leaveMsg",name:"我要留言"}
]

class navigation extends React.Component {
  render() {
    return (
        <div className="main-header-box">
          <header className="container">
            <div className="logo"></div>
            <ul className="nav">
              {navData.map((item,i)=>{
                return <li key={item.path}>
                  <NavLink activeClassName="active" exact to={item.path}>{item.name}</NavLink>
                </li>
              })}
            </ul>
          </header>
        </div>
    )
  }
}

export default navigation