import { useEffect, useState } from "react";

const useProductInfo = (productId) => {
    //productInfo that we are returning is the local variable to this component
    const {productInfo,setProductInfo} = useState(null);

    //Fetch Data Logic
    useEffect (() => {
        fetchProductDetails();
    },[])

    const fetchProductDetails = async () => {
        
        const data = await fetch ("https://fakestoreapi.com/products/"+productId);
        const json = await data.json();
        console.log (json);
        setProductInfo(json);
    }

    return productInfo
}

export default useProductInfo;