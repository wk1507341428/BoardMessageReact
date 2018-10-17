// 简单写一个types
export const INSIDE_WALL = 'INSIDE_WALL'
export const OUT_WALL = 'OUT_WALL'


// 登陆页面=>详情页
export function insideWall(){
  return {
    type: INSIDE_WALL
  }
}

// 详情页=>登陆页面
export function outWall(){
  return {
    type: OUT_WALL
  }
}


