import Login from '../views/LoginPage/LoginPage'
import index from '../views/MsgBoard/MsgBoard'
import leaveMsg from '../views/LeaveMsg/LeaveMsg'
import navigation from '../views/navigation/nav'

export const MainRouter = [
  { path:"/index",name:"留言板", component:index },
  { path:"/leaveMsg",name:"我要留言", component:leaveMsg }
]


export const LoginRoute = [
  { path:"login",component:Login }
]

const routes = [
  { 
    path:"/",
    component:navigation,
    routes:[
      { path:"/",name:"留言板", component:index },
      { path:"/leaveMsg",name:"我要留言", component:leaveMsg }      
    ]
  },
  { path:"login",component:Login }
]