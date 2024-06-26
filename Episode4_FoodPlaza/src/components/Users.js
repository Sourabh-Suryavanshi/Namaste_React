import { useEffect, useState } from "react";

const Users = (props) =>{

    const [count] = useState(5);
    const [count1] = useState(1);

    const {name,location,IncrementCount,button} = props
    useEffect(()=>{
       const timer = setInterval(()=>{
            console.log("UseEffect from Function Component");
        },1000)

        return()=>{
        clearInterval(timer);
        }
    },[])
    return(
        <div className="border-solid border-2 border-black m-4 p-4 w-[250px]">
            <h1>Count : {count}</h1>
            <button onClick={()=>{
                IncrementCount()
            }} disabled={button}>Click Me</button>
            <h1>Count1 : {count1}</h1>
            <h1>Name : {name}</h1>
            <h3>Location : {location}</h3>
            <p>Contact : sourabhss9018@gmail.com
            </p>
        </div>
    )
}
export default Users;