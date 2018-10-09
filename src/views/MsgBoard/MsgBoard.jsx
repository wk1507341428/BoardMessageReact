import React from 'react'
import './MsgBoard.scss'
import Card from'../../component/Card/Card'

var x = parseInt(Math.random() * 700);
var y = parseInt(Math.random() * 300);

class ShowMsg extends React.Component {

  constructor(){
    super()
    this.state={
      boardWidth:"",
      boardHeight:""
    }
  }

  componentDidMount(){
    this.getBoardInfo()
  }

  // 获取留言板容器宽和高并且存入state中
  getBoardInfo = ()=>{
    let boardWidth = this.refs.messageBoard.offsetWidth
    let boardHeight = this.refs.messageBoard.offsetHeight
    this.setState({
      boardWidth,
      boardHeight
    })
  }

  render() {
    // 将board的信息传入子组件，计算随机位置时候会用到
    let boardInfo = {
      width:this.state.boardWidth,
      height:this.state.boardHeight
    }
    return (
      <div ref="messageBoard" className="messageBoard">
        <Card position={boardInfo}/>
      </div>
    )
  }
}

export default ShowMsg