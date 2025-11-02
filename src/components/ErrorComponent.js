//useRouteError is a hook provided by react-router-dom to handle errors in routing
//It gives us access to the error object that caused the route to fail
//It shows specific details about the error that occurred during routing
//Whenever we see the function starting with use then it is the Hook it is he convention
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>   
            <h1>Oops! Something went wrong.</h1>
            <h2>{error.status} : {error.statusText}</h2>
            <h3>{error.data}</h3>   
        </div>
    );
}
export default ErrorComponent;