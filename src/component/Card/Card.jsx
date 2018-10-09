import React from 'react'
import './card.scss'

class Card extends React.Component {
  constructor(){
    super()
    this.state={
      x:"",
      y:""
    }
  }
  // 钩子函数，当props传入该组件时触发
  componentWillReceiveProps(data){
    let position = data.position
    this.computeCardPosition(position)
  }

  // 计算卡片随机位置
  computeCardPosition=(position)=>{
    let cardWidth = (this.refs.card&&this.refs.card.offsetWidth)||0;
    let cardHeight = (this.refs.card&&this.refs.card.offsetHeight)||0;
    let x = parseInt(Math.random() * (position.width-cardWidth))
    let y = parseInt(Math.random() * (position.height-cardHeight))
    this.setState({x,y})
  }

  render() {
    let position = {
      left:this.state.x,
      top:this.state.y
    }
    return (
      <div ref="card" style={position} className="card">
        <div className="card_h">
          <div className="num">第[9]条 2016-02-22 01:30:00</div>
          <div className="close" title="关闭纸条">×</div>
        </div>
        <div className="card_c">
          班主任:“小明，你都十二岁了，还是三年级，不觉得羞愧吗”？。小明:“一点也不觉得，老师你都四十多岁了，不也是年年在三年级混日子吗？羞愧的应该是你”。老师:……
        </div>
        <div className="card_f">
          <div className="icon">
            <img src={require('../../assets/images/bpic_1.gif')} />
          </div>
          <div className="name">没猴哥，不春晚</div>
        </div>
      </div>
    )
  }
}

export default Card