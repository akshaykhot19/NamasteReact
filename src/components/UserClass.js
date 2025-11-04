import React from "react"

//Functional component is the normal function at the end of the day 
//Likewise Class based component isthe normal JavaScript Class

//'extends React.Component' this is the way to tell React that UserClass is the Class based Component 
//React.Component is a class given React and UserClass is inheriting some properties from it
class UserClass extends React.Component {

//We will get the props sent from About.js in the constructor
//Whenever new instance of class is created the constructor is called and these props will be extracted and we can use it anywhere using this keyword
    constructor(props){
        //Why do we need to write super(props) always ?
        super(props);
        //Below is the way to create State Variables
        //state is the reserved word which is object which contains state varibales 
        //All the state variable we will craete inside this.state unlike in the functional component 
        this.state ={
            //This is how we create state varibale in class based component
            count : 0,
            count1 : 1
        }
        console.log (props);
    }

    //render method will return some JSX which will be rendered 
    render(){
        return <div className="userCard">
        <h1>Count : {this.state.count}</h1>
        <h1>Count1 : {this.state.count1}</h1>
        <h2>Name :{this.props.name}</h2>
        <h2>Location : Mumbai</h2>
        <h2>Role : Springboot Developer</h2>
    </div>
    }
}

export default UserClass;

// In Class based component there is no concept of hooks,Hooks is the new feature which is given in latest versin react
//In class based component state is created when the class instance is created


//What it means by rendering functional Component ?
//On the webpage if there is a functional component it loads it means we are mouting that functional component
//We are calling/Invoking that functional component i.e. Loading/Mouting that function on that webpage

//When we say we are creating instance of the Class based component that means weare loading taht class on to the webpage
//Loading the class based component on the webpage means we are creating instance of that class
//While creating instance we are giving props, So wheneverwe create instance of the class constructor is called so constructor is the best place to receive props and best place to create the state variables
