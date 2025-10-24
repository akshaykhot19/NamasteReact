import { useState } from "react";
import RestaurantCard from "./RestaurantCard";


const Body = ()=>{

//State Variable : Super Powerful Variable
//For this we will create React Hooks which is known as UseState

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

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    //listOfRestaurant updated but on the UI it is not updated
                    //Ideally when here listOfRestaurants updated it should be update in the res-container div i.e. On UI
                    //This is the super power React have i.e. React is fast/efficient in DOM manipulation i.e. UI is tied to listOfRestaurants
                    //When listOfRestaurant changes the UI also changes accordinly 
                    //To do this React give the super power i.e. React Hooks
                    // listOfRestaurants = listOfRestaurants.filter((res) => res.avgRating>4);
                    // console.log(listOfRestaurants);


                    const filteredListOfRestaurants = listOfRestaurants.filter((res) => res.avgRating>4);
                    
                    //We will pass the data which needs to be pushed inside listOfRestaurant 
                    //We are updating listOfRestaurant with this updated filteredListOfRestaurants
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