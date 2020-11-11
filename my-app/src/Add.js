import React from 'react';

class  Add extends React.Component{
 constructor(){
  super();
  this.state={
   num1:"",
   num2:"",
   total:''
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
  this.setState({total:parseInt(this.state.num1)+ parseInt(this.state.num2)})
  event.prevent.default();
 }
 render(){
  return( <div>
    <div class="mini">
          <h1 style={{color:"blue"}}>Addition</h1>
          </div>
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
 <button type="submit"> Add </button>
</div>
  </form>
  {this.state.total}
  </div>
  )
 }
} 
export default Add;