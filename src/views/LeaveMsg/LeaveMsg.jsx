import React from 'react'
import './leaveMsg.scss'
import { connect } from 'react-redux'
import { addMessage,updateMessage } from '../../store/actions/message-actions'
import Xdate from '../../assets/js/Xdate.js'
import {withRouter} from "react-router-dom";
import { message } from 'antd'

class LeaveMsg extends React.Component {
  constructor(){
    super()
    this.state={
      name:"",
      content:""
    }
  }

  componentDidMount(){
    let data = this.props.location&&this.props.location.state&&this.props.location.state.data
    if(data){
      this.setState({name:data.name,content:data.content,id:data.id})
    }
  }
  
  handleSubmit = ()=>{
    let {name,content,id} = this.state
    // 做一下验证吧
    if(name.trim()===""||content.trim()===""){
      return message.error("请填写完整内容")
    }
    // 记录一下提交时间
    let date = new Date().getTime()
    let time = new Xdate(date).format('yyyy-MM-dd HH:mm:ss')
    if(id){
      // 改值
      this.props.dispatch(updateMessage(id,name,content,time))
      // 成功验证
      message.success('修改成功')
      this.props.history.push({pathname:'/details/index'})
    }
    else{
      // 存值
      this.props.dispatch(addMessage(name,content,time))
      // 成功验证
      message.success('添加成功')
      this.setState({name:"",content:"",time:""})
    }
  }

  handleChange = (event)=>{
    let val = event.target.name
    this.setState({[val]:event.target.value})
  }

  render() {
    return (
      <div className="leaveMsg">
        <form action="" method="post">
          <div className="form-group">
            <label htmlFor="inputName" className="col-sm-2 control-label">我的名字</label>
            <div className="col-sm-8">
              <input type="text" 
                value={this.state.name} 
                onChange={this.handleChange} name="name" className="form-control" id="inputName" placeholder="我的名字" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="textMain" className="col-sm-2 control-label">留言内容</label>
            <div className="col-sm-8">
              <textarea id="textMain" 
                value={this.state.content} 
                onChange={this.handleChange}
                name="content" className="form-control" placeholder="留言内容" rows="5"></textarea>
            </div>
          </div>
          <div className="form-group btn-wrapper">
            <div className="col-sm-8">
            <button onClick={this.handleSubmit} type="button" className="btn btn-default btn-lg btn-block">确定</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
    
export default connect()(withRouter(LeaveMsg))