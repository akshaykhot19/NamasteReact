import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header";
import Body from "./components/Body"
//It will create routing configuration for us 
//RouterProvider will provide this routing configuration to our app
//Outlet is used to render the child components inside the parent component
//Outlet is the component which will render the children of that specific route
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";
import ProductDetails from "./components/ProductDetails";
import ProductDetails from "./components/ProductDetails";

//1. App Layout which will include different components
const AppLayout = () => {
    return(
        <div className = "app">
            {/* Header Component */}
            <Header/>
            {/* Body Component */}
            {/* If path is / then load the Body Component */}
            {/* If path is /about then load the About Component */}
            {/* If path is /contact then load the Contact Component */}
            {/* Whenever there is change in the path outlet will be filled with the children according to the path on what page we are */}
            {/* Outlet is the component which will render the children of that specific route */}
            {/* Example <About/> <Contact/> <Body/>*/}
            {/* outlet will be replaced with the corresponding component */}
            <Outlet/>
                      
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
        element : <AppLayout/>,
        //Below are the children of AppLayout
        //We will push the children according to the routes
        children : [
        {   
            path:"/",
            element : <Body/>
        },    
        {
            path:"/about",
            element : <About/>
        },{
            path:"/contact",
            element : <Contact/>
        },{
            // "/:productId" means productId is dynamic and it will be changes according to the product
            // How we can read this sent "/:productId" in our component which is ProductDeatils which is showing restaurant deatils 
            //React DOM gives us hook known as useParams
            //We can use that hook to read the dynamic path variable
            //Example : If we click on product with id 5 then the path will be /products/5
            //In ProductDetails component we can read this 5 by using useParams hook
            //In ProductDetails component we can destructure productId from useParams hook
            path: "/products/:productId",
            element: <ProductDetails/>
        }],
        //If any error occurs in the path then show ErrorComponent
        errorElement : <ErrorComponent/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));


//Earlier we were providing/rendering <AppLayout/> directly
// root.render (<AppLayout/>)


//In below way we can provide/render the Routing configuration
root.render (<RouterProvider router={appRouter}/>)



