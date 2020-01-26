import React, { Component } from 'react';

export class AddTodo extends Component {

state ={
 title:''   

}   
 
onSubmit=(e)=>{
e.preventDefault();
this.props.addTodo(this.state.title);
this.setState({ title:'' });
}

onChange= (e)=>this.setState({ [e.target.name]: e.target.value });

render() {
return(
<form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
<input 
type="text"
 name="title"
 style={{ flex: '10', paddnig:'5px' }}
 placeholder="AddTo..."
 value={this.state.title}
 onChange={this.onChange}
 /> 
<input 
type="submit"
value="Submit"
className="btn"
style={{flex:'1'}}
/>
</form>  
)
    }
}

export default AddTodo;
