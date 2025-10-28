import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const Body = ()=>{


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
                            const filteredRestaurants = listOfRestaurants.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));
                            //Update the Restaurant Cards
                            setListOfRestaurant(filteredRestaurants);
                    }}>Search</button>

                </div>
                <button className="filter-btn" onClick={()=>{
          

                    const filteredListOfRestaurants = listOfRestaurants.filter((res) => res.avgRating>4);
                    
               
                    setListOfRestaurant( filteredListOfRestaurants);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
               {listOfRestaurants.map((restaurant)=>(
                 <RestaurantCard key={restaurant.id} resData= {restaurant} />
               ))}
                
                
            </div>
        </div>
    )
}

export default Body