//Import of named export
import {LOGO_URL} from "../utils/constants";
import { useState,useEffect } from "react";
//Importing Link to navigate without refreshing the page
//It works like anchor tag <a> but it doesn't refresh the page
import { Link } from "react-router-dom";


const Header = () => {

    const [buttonName, setButtonName] = useState("Login");
    console.log("Header Rendered");

    // Every time Header COmponent is rendered useEffect() will be called
    //But because we have put dependency array [],This dependency array changes the behaviour of the render
    //Callback function is mandatory but [] is not mandatory
    //If we dont give dependecy Array,useEffect will be called on every time component render
    //If there is empty Dependency Array,useEffect is called on only initial render just once i.e. useEffect aclled just once when component is run for the first time 
    //Therefore default behaviour of useEffect is to be called after each render but if we give dependency array then it will we called only once initially while rendering component  
    //If we put something in the dependency Array then it will only be called when dependency changes
    useEffect(()=>{
        console.log ("useEffect Called")
    },[buttonName]);
    //So if dependency array like above then useEffect will be called every time buttonName is updated 

    return (
        <div className = "header">
            <div className="logo-container">
                {/* Below src link also the harcoded data so we will keep it in utils folder */}
                <img className = "logo" src = {LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    {/* Never ever use the anchor tag when using React to route to an other page */}
                    {/* Because it will cause a full page refresh */}
                    {/* In React witout refreshing whole page still we can navigate between pages */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    {/* On click buttonName got updated but UI did not re-render/Refreshed i.e. Header component didn't refreshed */}
                    {/* There should be a way to force re-render/refresh Header component and take the updated buttonName value*/}
                    {/* JavaScript Variable are not reactive i.e.JavScript VAriable doent work in these case */}
                    {/* React Hooks are the solution */}
                    {/* Here to make an component dynamic we can use local state variables where useState(state variable) comes into picture */}
                    <button className="login" onClick={()=>{
                        if (buttonName === "Logout") {
                    // When we are updating the state variable using setButtonName React automatically re-renders the Header component with updated values
                            setButtonName("Login");
                            console.log(buttonName);
                        } else {
                    //How we are changing const buttonName variable using setButtonName function isn't it violating the const rule of JavaScript
                    //No, As while re-rendering it will create a new buttonName variable in the memory and assign the new value to it
                    //So, we are not changing the const variable rather we are creating a new const variable with same name
                    //This is how React Hooks works behind the scenes
                    //But the value used inside the component of state variable will always be the latest value passed by function in this case setButtonName
                            setButtonName("Logout");
                            console.log(buttonName);
                        }
                    }}>{buttonName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;