import {useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useProductInfo from "../utils/useProductInfo"


//We can see there are two main reponsibilities of ProductDetails Component 
//Fetching the Data & Displaying the Data
//So Isn't the ProductDetails Component only concerned about Displaying the Data & It should not concerned about from where this data comming and how it is comming ?
//Here useParam is the Hook and it is giving us the productId we dont know the what is the code written behind the scene
//We dont know how this useParams is getting the parameters like productId,There would be some code written behind the scene for it
//We are not bothered about the implementation of the hook
//Similarly we can abstract fetching data logic using custome Hook like useProductDetails which will give us productInfo & We dont have to worry about how this Custom Hook is fetching the data
//We will create our own hook that will fetch the data and give it to ProductDetails 
//We willjust give productId to the custom hook & it will give us productInfo
    //const productInfo = useProductInfo(productId)
//After this ProductDetails Component will have Single Responsibility i.e. Display Product Details on UI 
const ProductDetails = ()=>{

    // const [productInfo, setProductInfo] = useState(null)

    

    const {productId}= useParams();

    const productInfo = useProductInfo(productId)

    // useEffect (() => {
    //     fetchProductDetails();
    // },[])

    // const fetchProductDetails = async () => {
        
    //     const data = await fetch ("https://fakestoreapi.com/products/"+productId);
    //     const json = await data.json();
    //     console.log (json);
    //     setProductInfo(json);
    // }

    if (productInfo === null) return <Shimmer/>

    return <div className="menu">
    
            <h1>{productInfo.title}</h1>
            <img src={productInfo.image} alt={productInfo.title} width="200" />
            <h3>{productInfo.category}</h3>
            <p>{productInfo.description}</p>
            <h4>₹{productInfo.price}</h4>
            <p>⭐ {productInfo.rating.rate} ({productInfo.rating.count} reviews)</p>
    </div>
}

export default ProductDetails;