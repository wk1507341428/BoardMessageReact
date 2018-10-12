import React from 'react'
import './card.scss'
import { connect } from 'react-redux'
// 常规dom的方式
// mousedown 时绑定mouseover
// mouseup 时解绑mouseover
// 但是有没有react的思路呢
// 思路一
// mousedown时，设置一个阀门，通过这个值开启鼠标移动
// mouseup时，关闭阀门
// TODO 
// 这个阀门是不是应该是全局的

// 目前Card跟随鼠标移动逻辑
// 设置一个全局的阀门(window.flag),阀门的主要目的实用来控制，mouseMove事件
// 当鼠标左键点击Card之后，将阀门设置为true
// 当鼠标在body上松开的时候，将阀门设置为false
let body = document.getElementsByTagName("body")[0]
body.addEventListener("mouseup",function(e){
    // 0表示左键
    if(e.button!==0) return
    window.flag = false
})

// TODOS 我想在这里存入redux中zIndex值

class Card extends React.Component {
  constructor(){
    super()
    this.state={}
  }
  // 第一次渲染后调用，只在客户端，已经生成了对应得DOM结构
  componentDidMount(){
    let zIndex = window.zIndex
    this.setState({zIndex})
  }
  // 钩子函数，当props传入该组件时触发 // 不是说这个钩子要被废除了吗？
  // 用什么代替
  componentWillReceiveProps(data){
    // TODO
    // 在这里触发Card的随机位置有弊端
    // 如果有动态的props传入会刷新随机位置
    let position = data.position
    this.computeCardPosition(position)
  }

  // 计算卡片随机位置,并且存入state中
  computeCardPosition=(position)=>{
    let cardWidth = (this.refs.card&&this.refs.card.offsetWidth)||0;
    let cardHeight = (this.refs.card&&this.refs.card.offsetHeight)||0;
    let x = parseInt(Math.random() * (position.width-cardWidth))
    let y = parseInt(Math.random() * (position.height-cardHeight))
    this.setState({x,y,cardWidth,cardHeight})
  }

  // z-index 提升
  handleClick = ()=>{
    let zIndex = ++window.zIndex
    this.setState({zIndex})
  }

  // 点击鼠标左键,开启阀门
  handleMouseDown = (e)=>{
    // 0表示左键
    if(e.button!==0) return
    this.handleClick()
    window.flag = true
  }

  // 跟随鼠标移动
  handleMove = (e)=>{
    let flag = window.flag
    if(!flag) return
    let props = this.props
    let state = this.state
    let cardWidthHalf = state.cardWidth * .5
    let cardHeightHalf = state.cardHeight * .5
    let x = e.pageX - props.position.offsetLeft - cardWidthHalf
    let y = e.pageY - props.position.offsetTop - cardHeightHalf
    // 边界限制
    let boardWidth = props.position.width - cardWidthHalf*2
    let boardHeight = props.position.height - cardHeightHalf*2
    if(x<0)x=0
    if(x>boardWidth)x=boardWidth
    if(y<0)y=0
    if(y>boardHeight)y=boardHeight
    this.setState({x,y})
  }

  render() {
    // TODO
    // 通过ES6的结构解析来，重构这段代码
    // 在state中获取随机位置和z-index
    let state = this.state
    let position = {
      left: state.x,
      top: state.y,
      zIndex: state.zIndex
    }
    // 获取父元素传入的data
    let data = this.props.data
    // 这里感觉有问题，我想终止渲染，这样做也能达成目的,但是总感觉应该有API
    if(JSON.stringify(data)==="{}") {
      return(<div></div>)
    }

    return (
      <div ref="card" onClick={this.handleClick} 
        onMouseMove={this.handleMove}
        onMouseDown={this.handleMouseDown}
        style={position} className="card">
        <div className="card_h">
          <div className="num">第[{data.id}]条 {data.time}</div>
          <div className="close" title="关闭纸条">×</div>
        </div>
        <div className="card_c">
          {data.content}
        </div>
        <div className="card_f">
          <div className="icon">
            <img alt="" src={require('../../assets/images/bpic_1.gif')} />
          </div>
          <div className="name">{data.name}</div>
        </div>
      </div>
    )
  }
}

// 设置props默认值
Card.defaultProps={
  data:{},
  position:{
    width:960,
    heightL:562
  }
}

export default connect()(Card)