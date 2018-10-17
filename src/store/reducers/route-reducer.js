import {INSIDE_WALL,OUT_WALL} from '../actions/route-actions'
export default function(state = 0, action){
  switch(action.type){
    // 墙内 详情页
    case INSIDE_WALL:{
      return state = 1
    }
    // 墙外 登陆页面
    case OUT_WALL:{
      return state = 0
    }
    default:
      return state
  }
}