import React from "react";
class Profileclass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                login: "Sourabh",
                location: "Sangli"
            }
          
        }
    }
    async componentDidMount()
        {
            // const data = await fetch("https://api.github.com/users/Sourabh-Suryavanshi")
            // const json = await data.json();
            // console.log(json);
            // this.setState(
            //     {
            //         userInfo:json
            //     })
            this.timer = setInterval(()=>{
                console.log("Timer called");
            },1000)
           // console.log("didmount called");
        }

        componentWillUnmount(){
            console.log("Will unmount called");
            clearInterval(this.timer);
        }
    render(){
        console.log("render called");
        const {login,location} = this.state.userInfo;
        return (
            <div className="user-card">
            <h1>Name : {login}</h1>
            <h3>Location : {location}</h3>
            <p>Contact : sourabhss9018@gmail.com
            </p>
        </div>
          )
    }
}

export default Profileclass;