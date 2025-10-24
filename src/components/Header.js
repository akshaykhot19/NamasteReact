//Import of named export
import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

const Header = () => {

    const [buttonName, setButtonName] = useState("Login");
    console.log("Header Rendered");

    return (
        <div className = "header">
            <div className="logo-container">
                {/* Below src link also the harcoded data so we will keep it in utils folder */}
                <img className = "logo" src = {LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
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