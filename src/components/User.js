import { useState } from "react";
//This is a functional component
//We will write this component as Class based Component
const User = (props)=>{

    //Creating State Variable in the Functional based Components
    //In the functional component react uses the single object to maintain all the state variables 
    //To update the state variable we have one more method 
    const [count,setCount] = useState (0);
    const [count1] = useState (1)

    return <div className="userCard">
        {/* Using the props sent from About.js */}
        <h1>Count : {count}</h1>
        <h1>Count1 : {count1}</h1>
        <h2>Name :{props.name}</h2>
        <h2>Location : Mumbai</h2>
        <h2>Role : Springboot Developer</h2>
    </div>
}
  
export default User;