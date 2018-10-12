import React from 'react'
import './MsgBoard.scss'
import Card from '../../component/Card/Card'

// TODO 尝试将这个zIndex放在redux中
window.zIndex = 1
window.flag = false

class ShowMsg extends React.Component {

  constructor() {
    super()
    this.state = {
      boardWidth: "",
      boardHeight: "",
      datas: [
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
    }
  }

  // 钩子函数
  componentDidMount() {
    this.getBoardInfo()
  }

  // 获取留言板容器宽和高并且存入state中
  getBoardInfo = () => {
    let messageBoard = this.refs.messageBoard
    let boardWidth = messageBoard.offsetWidth
    let boardHeight = messageBoard.offsetHeight
    let offsetLeft = messageBoard.offsetLeft
    let offsetTop = messageBoard.offsetTop
    this.setState({
      boardWidth,
      boardHeight,
      offsetLeft,
      offsetTop
    })
  }

  // 每次setState的时候都会触发render函数一次，这样会不会影响性能？
  render() {
    let state = this.state
    // 将board的信息传入子组件，计算随机位置时候会用到
    let boardInfo = {
      width: state.boardWidth,
      height: state.boardHeight,
      offsetLeft: state.offsetLeft,
      offsetTop: state.offsetTop
    }

    // 动态渲染card
    let datas = this.state.datas||[]
    const CardList = datas.map((item,i)=>{
      return(
        <Card
          key={i} position={boardInfo} 
          data={item}/>
      )
    })
    return (
      <div ref="messageBoard" className="messageBoard">
        {CardList}
      </div>
    )
  }
}

export default ShowMsg