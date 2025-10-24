import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header";
import Body from "./components/Body"

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
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render (<AppLayout/>)



