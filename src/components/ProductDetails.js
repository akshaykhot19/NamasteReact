import {useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const ProductDetails = ()=>{

    const [productInfo, setProductInfo] = useState(null)

    const {productId}= useParams();

    useEffect (() => {
        fetchProductDetails();
    },[])

    const fetchProductDetails = async () => {
        //We have fetched the data from the API and now we need to render it in HTML for that we need to use state Variable 
        //API call will be made & then data will be stored into the state variable and whenever the state variable updates the UI will be updated automatically
        const data = await fetch ("https://fakestoreapi.com/products/"+productId);
        const json = await data.json();
        console.log (json);
        setProductInfo(json);
    }

    if (productInfo === null) return <Shimmer/>

    return <div className="menu">
        {/* If we want to render list of rstaurant menu items then we should use the map function to iterate over the list */}
        {/* Whenever we use map always give key i.e. each child in a list should have a unique "key" prop */}
            <h1>{productInfo.title}</h1>
            <img src={productInfo.image} alt={productInfo.title} width="200" />
            <h3>{productInfo.category}</h3>
            <p>{productInfo.description}</p>
            <h4>₹{productInfo.price}</h4>
            <p>⭐ {productInfo.rating.rate} ({productInfo.rating.count} reviews)</p>
    </div>
}

export default ProductDetails;