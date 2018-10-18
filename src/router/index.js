import Login from '../views/LoginPage/LoginPage'
import index from '../views/MsgBoard/MsgBoard'
import leaveMsg from '../views/LeaveMsg/LeaveMsg'
// import navigation from '../views/navigation/nav'

export const MainRouter = [
  { path:"/details/index",name:"留言板", component:index },
  { path:"/details/leaveMsg",name:"我要留言", component:leaveMsg },
]


export const LoginRoute = [
  { path:"login",component:Login }
]

// const routes = [
//   { 
//     path:"/details",
//     component:navigation,
//     routes:[
//       { path:"/details/index",name:"留言板", component:index },
//       { path:"/details/leaveMsg",name:"我要留言", component:leaveMsg }      
//     ]
//   },
//   { path:"login",component:Login }
// ]