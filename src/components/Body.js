import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = ()=>{


//Now this listOfRestaurant is the super powerful React Variable i.e. State Variable  
//Whatever we pass inside the useState becomes the default value of the variable 
//We will use this variable lik ew euse normal Variable
//We are creating the listRestaurant Variable using Hook i.e. useState hook which return the array
//If we want to  modify this listOfRestaurant we cannot do 
    //listOfRestaurant = []
//To modify listOfRestaurants using function which will be second parameter of an array e.g. setListOfRestaurant
//This setlistOfRestaurant method will be used to update the listOfRestaurant
//Default value of listOfRestaurant is passed on values in the useState ([])
//It means super Powerful React variable keeps the UI in sync with Data Layer 
//If listOfRestaurant is normal Variable then with the update of Normal Variable UI does not update 
//Whenever a state variable updates react re-renders the component


//Never Create useState outside of the component 
//useState has a specific purpose it is used to create local state variable inside the functional components
//Always call the hooks on the top i.e. When the function starts 
//Never Create useState inside if/else loop,for loop, function as it can create inconsistancy in program 
//In short state variables should be inside the component at the higher level. Try to keep it on the top
const [listOfProducts,setListOfProducts] = useState([]);

const [filteredListOfProducts,setFilteredProducts] = useState([]);

const [searchText, setSearchText] = useState("");


useEffect(()=>{
    //API Call
    // console.log("Use Effect Called");
    fetchData();
},[]);

//Fetching Logic will be same as we do in normal JavaScript
const fetchData = async () => {
    const data = await fetch ("https://fakestoreapi.com/products");
    const json = await data.json();
    console.log(json);
    setListOfProducts(json);
    setFilteredProducts(json);
}

console.log("Body Rendered");


//Conditional Rendering
//If listOfProducts is empty then we will show Shimmer UI else we will show the actual Body UI
if (listOfProducts.length === 0) {
    return <Shimmer/>;
}

    return (
        <div className="body">
            <div className="filter">
                <div className="search">

                    
                    <input type="text" className="search-box" placeholder="Search" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button className="search-btn" onClick={
                        // on click of the search button filter the Restaurant cards and update the UI
                        () => {
                            console.log("Search Clicked",searchText);
                            //Filter the restaurant cards based on searchText
                            const filtered = listOfProducts.filter((res) => res.title.toLowerCase().includes(searchText.toLowerCase()));
                            //Update the Restaurant Cards
                            setFilteredProducts(filtered);
                    }}>Search</button>

                </div>
                <button className="filter-btn" onClick={()=>{
          

                    const filteredProducts = listOfProducts.filter((res) => res.rating.rate>4);

                    //We will pass the data which needs to be pushed inside listOfProducts
                    //We are updating listOfProducts with this updated filteredListOfProducts
                    setFilteredProducts(filteredProducts);
                }}>
                    Top Rated Products
                </button>

                <button className="filter-btn" onClick={()=>{
                    //Sorting in ascending order of price
                    
                    setFilteredProducts (listOfProducts);
                }}> Reset </button>
            </div>
            <div className="res-container">
               {filteredListOfProducts.map((product)=>(
                <Link key={product.id} to={"/products/"+product.id} >
                 <RestaurantCard key={product.id} resData= {product} />
               </Link>
               ))}
                
                
            </div>
        </div>
    )
}           

export default Body