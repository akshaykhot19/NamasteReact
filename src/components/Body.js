import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const Body = ()=>{


<<<<<<< HEAD
=======
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
>>>>>>> 3ac5a6131d41efae0e165fb079895b73f3c9da6d
const [listOfRestaurants,setListOfRestaurant] = useState([
    {
        id : "334475",
        name : "KFC",
        cloudinaryImageId : "" ,
        cuisines: ["Burgers","Biryani","American","Snacks","Fast Food"],
        costForTwo :4000,
        deliveryTime : 36,
        avgRating : "3.8"
    
},{
        id : "334476",
        name : "Dominos",
        cloudinaryImageId : "" ,
        cuisines: ["Burgers","Biryani","American","Snacks","Fast Food"],
        costForTwo :6000,
        deliveryTime : 48,
        avgRating : "4.5"
    
}
]);

const [searchText, setSearchText] = useState("");


useEffect(()=>{
    //API Call
    // console.log("Use Effect Called");

    fetchData();
},[]);

//Fetching Logic will be same as we do in normal JavaScript
const fetchData = async () => {
    // const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    // const json = await data.json();
    // console.log(json);
    // setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
}

console.log("Body Rendered");

//Normal JavaScript Variable 
let listOfRestaurantsJS = [{
        id : "334475",
        name : "KFC",
        cloudinaryImageId : "" ,
        cuisines: ["Burgers","Biryani","American","Snacks","Fast Food"],
        costForTwo :4000,
        deliveryTime : 36,
        avgRating : "3.8"
    
},{
        id : "334476",
        name : "Dominos",
        cloudinaryImageId : "" ,
        cuisines: ["Burgers","Biryani","American","Snacks","Fast Food"],
        costForTwo :6000,
        deliveryTime : 48,
        avgRating : "4.5"
    
}];

//Conditional Rendering
//If listOfRestaurantsJS is empty then we will show Shimmer UI else we will show the actual Body UI 
if (listOfRestaurantsJS.length === 0) {
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
                            const filteredRestaurant = listOfRestaurants.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
                            //Update the Restaurant Cards
                            setListOfRestaurant(filteredRestaurants);
                    }}>Search</button>

                </div>
                <button className="filter-btn" onClick={()=>{
          

                    const filteredListOfRestaurants = listOfRestaurants.filter((res) => res.avgRating>4);
                    
               
                    setListOfRestaurant( filteredListOfRestaurants);
=======
                    //We will pass the data which needs to be pushed inside listOfRestaurant 
                    //We are updating listOfRestaurant with this updated filteredListOfRestaurants
                    setFilteredRestaurant(filteredRestaurant);
>>>>>>> 3ac5a6131d41efae0e165fb079895b73f3c9da6d
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
               {filteredListOfRestaurant.map((restaurant)=>(
                 <RestaurantCard key={restaurant.id} resData= {restaurant} />
               ))}
                
                
            </div>
        </div>
    )
}

export default Body