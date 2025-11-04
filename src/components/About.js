import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{

    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            {/* Passing Props inside the Functional Component */}
            {/* This name is going as a Argument to the function of functional based component  */}
            <User name={"Akshay Khot (function)"}/>
            <UserClass name={"Akshay Khot (Class)"} /> 
        </div>
    )
}

export default About;