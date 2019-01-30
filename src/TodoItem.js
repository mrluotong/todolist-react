import React,{Component} from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(){
        //子组件向父组件传递值是通过调用父组件的方法来传递
        this.props.delete(this.props.index);
    }
    render(){
        const {content} = this.props;
        return(
            <li onClick={this.handleDelete}>{content}</li>
        );
    }
}
export default TodoItem;
