import React from 'react'
import { connect } from 'react-redux'
import './MsgBoard.scss'
import Card from '../../component/Card/Card'

window.flag = false
class ShowMsg extends React.Component {
  constructor() {
    super()
    this.state = {
      boardWidth: "",
      boardHeight: ""
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
    let datas = this.props.messageBox
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

const mapStateToProps = (state)=>{
  // console.log('我被调用了，只要redux中的值有改变我就会被调用,我返回的对象会被放入组件的props中,因为state中的数据发生变化，所以组件被重新render')
  // console.log(state)
  return{
    messageBox:state.messageBox||[]
  }
}

export default connect(mapStateToProps,null)(ShowMsg)