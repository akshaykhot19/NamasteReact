import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header";
import Body from "./components/Body"
//It will create routing configuration for us 
//RouterProvider will provide this routing configuration to our app
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

//1. App Layout which will include different components
const AppLayout = () => {
    return(
        <div className = "app">
            {/* Header Component */}
            <Header/>
            {/* Body Component */}
            <Body/>
            {/* Footer Component */}

        </div>
    )
}

//creating routing configuration inside app.js i.e. root component
//Configuration means some information that will define what will happen on specific route
//createBrowserRouter will take list of paths (path is an object)
//Each and every object defines a different path and what should happen on that path 
//When we create this configuration we need to provide it to render it 
const appRouter = createBrowserRouter([
    {
        path :"/",
        //If the path is / then load an AppLayout Component
        element : <AppLayout/>
    },
    {
        path:"/about",
        element : <About/>
    },{
        path:"/contact",
        element : <Contact/>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));


//Earlier we were providing/rendering <AppLayout/> directly
// root.render (<AppLayout/>)


//In below way we can provide/render the Routing configuration
root.render (<RouterProvider router={appRouter}/>)



