import React from "react";
class Userclass extends React.Component{
   constructor(props){
    super(props)
    this.state={
      count:0,
      count1:1
    }
   }
   render(){
      const {name,location} = this.props
      const {count,count1 } = this.state

      return (
      <div className="user-card">
       <h1>Count : {count}</h1>  
       <button onClick={()=>
          {this.setState(
            {count:this.state.count +1}
            )
            }
            }>Count Increaser</button>
       {/* <h1>Count : {count1}</h1>   */}
      <h1>Name : {name}</h1>
      <h3>Location : {location}</h3>
      <p>Contact : sourabhss9018@gmail.com
      </p>
  </div>
    )
   }
}
export default Userclass;