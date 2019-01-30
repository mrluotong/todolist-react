import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';
// 定义一个React组件
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[],
      inputValue:''
    }
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleClickdelete = this.handleClickdelete.bind(this);
  }
  handleBtnClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    });
  }
  handleInputValue(e){
    this.setState({
      inputValue:e.target.value
    });
  }
  
  handleClickdelete(index){
    const list = this.state.list;
    list.splice(index,1);
    this.setState({list});
  }
  getItem(){
    return(
      this.state.list.map((item,index) => {
      //父组件通过属性向子组件传递参数
      //子组件通过props接收父组件的值
      return <TodoItem delete={this.handleClickdelete} content={item} key={index} index={index}/>
      // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
    })
    );
  }
  render() {
    return (
      //用React.Fragment包裹不会出现多余的div
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputValue}/>
          <button className="red-btn" onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {this.getItem()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
