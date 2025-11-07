const Grocery = () => {
    //This is to simulate Chunking of Components in a big Application
    //Grocery Component may have lot of child components inside it
    //We will Chunk the Components for better code management and better readability
    //So our Product Showing Components will be separate from Grocery Component
    //Here we are just simulating that we have lot of child components inside Grocery Component
    return (
        <div className="grocery">
            <h1>Our Grocery Online Store, and we have lot of child components inside the Grocery component</h1>
        </div>
    );
};

export default Grocery;


//This above Code is still inside the Bundle [Single JS file] which is created by React when we run the Application 
//Now we want to logically distribute the application so that the grocery and its all child components of the grocery should come from separate bundles
//When we will do Code Splitting and Lazy Loading then this component will be loaded only when we visit /grocery path
//This will reduce the main bundle size and improve the performance of the Application

