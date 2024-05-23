import { useState } from "react";
import Userclass from "./Userclass";
import Users from "./Users";
import Profileclass from "./Profileclass"

const About = () => {
  const [count, setCount] = useState(5);
  const [disable, setDisable] = useState(false);

  const IncrementCount = () => {
    if (count < 10) setCount(count + 1);
    if (count == 10) setDisable(true);
  };
  return (
    <div className="">
      <h1 className="text-4xl">About Us</h1>
      <h2>Count : {count}</h2>
      <h2>This webpage is designed by Mr. Sourabh Sambhaji Suryavanshi</h2>
      <div className="User-Component">
        {/* <Profileclass/> */}
      <Users name={"Sourabh"} location={"Sangli"} IncrementCount={IncrementCount} button={disable}/>
      {/* <Userclass name={"Manish"} location={"Ahamadnagar"}/> */}
      </div>
    </div>
  );
};

export default About;
