import {UPDATE_MESSAGE,DELETE_MESSAGE,ADD_MESSAGE} from '../actions/message-actions'

const initialState = [
  { "id": 1, "name": "mahu", "content": "今天你拿苹果支付了么", "time": "2016-02-17 00:00:00" },
  { "id": 2, "name": "haha", "content": "今天天气不错，风和日丽的", "time": "2016-02-18 12:40:00" },
  { "id": 3, "name": "jjjj", "content": "常要说的事儿是乐生于苦", "time": "2016-03-18 12:40:00" },
  { "id": 4, "name": "9.8的妹纸", "content": "把朋友家厕所拉堵了 不敢出去 掏了半小时了都", "time": "2016-03-18 12:40:00" },
  { "id": 5, "name": "雷锋ii.", "content": "元宵节快乐", "time": "2016-02-22 12:40:00" },
  { "id": 6, "name": "哎呦哥哥.", "content": "据说今晚央视的元宵晚会导演和春晚导演是同一个人，真是躲得过初一，躲不过十五。", "time": "2016-02-22 01:30:00" },
  { "id": 7, "name": "哎呦杰杰.", "content": "真搞不懂你们地球人，月亮有什么好看的，全是坑，还是对面那哥们好看，", "time": "2016-02-22 01:30:00" },
  { "id": 8, "name": "哎呦哎呦", "content": "今天哪里的烟花最好看！！？答：朋友圈。。。", "time": "2016-02-22 02:30:00" },
  {
    "id": 9,
    "name": "没猴哥，不春晚",
    "content": "班主任:“小明，你都十二岁了，还是三年级，不觉得羞愧吗”？。小明:“一点也不觉得，老师你都四十多岁了，不也是年年在三年级混日子吗？羞愧的应该是你”。老师:……",
    "time": "2016-02-22 01:30:00"
  }
]

export default function(state=initialState, action) {
  switch(action.type){
    case DELETE_MESSAGE: {
      return state.filter(item => item.id!==action.payload.id)
    }
    case ADD_MESSAGE: {
      let id = state[state.length-1].id+1
      return [
        ...state,
        {id,...action.payload} 
      ]
    }

    case UPDATE_MESSAGE: {
      state = state.map((item)=>{
        if(item.id===action.payload.id){
          item = action.payload
        }
        return item
      })
      return[...state]
    }

    default:
      return state
  }
}