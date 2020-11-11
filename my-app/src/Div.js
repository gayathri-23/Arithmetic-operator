import React from 'react';

class  Div extends React.Component{
 constructor(){
  super();
  this.state={
   num1:"",
   num2:"",
   divi:''
  }
 }
 handlenum1 =(event)=>{
  this.setState({
   num1:event.target.value
  })
 }
 handlenum2 =(event)=>{
  this.setState({
   num2:event.target.value
  })
 }
 exe = (event)=>{
  this.setState({divi:parseInt(this.state.num1)/ parseInt(this.state.num2)})
  event.prevent.default();
 }
 render(){
  return( <div>
          <h1>Division</h1>
          <form onSubmit={this.exe}>
          <div>
           Number 01:
   <input type="text" value={this.state.num1} onChange={this.handlenum1}/>
    </div>
    <div>
     Number 02:
<input type="text" value={this.state.num2} onChange={this.handlenum2}/>

    </div>
<div>
 <button type="submit"> Div </button>
</div>
  </form>
  {this.state.divi}
  </div>
  )
 }
} 
export default Div;