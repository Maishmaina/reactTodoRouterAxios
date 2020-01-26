import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

getStyle = ()=>{
    return{
        background:'gray',
        padding:'10px',
        border:'1px lightseagreen dotted',
        textDecoration: this.props.todo.completed ?
        'line-through' : 'none'
    }
}    

render() {
 const { id, title }=this.props.todo;   
return (
<div style={this.getStyle()}>
<p>
<input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
{ title }
<button style={btnStyle} onClick={ this.props.delTodo.bind(this, id) }>X</button>
</p>              
</div>
        )
    }
}
//propsTypes
TodoItem.propTypes={
    todo: PropTypes.object.isRequired
}
 const btnStyle ={
background:'#ff0000',
color:'#fff',
border:'none',
padding:'5px 9px',
borderRadius:'50%',
cursor:'pointer',
float:'right'
 }
export default TodoItem
