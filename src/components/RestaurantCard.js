 
const styleCard = {
    backgroundColor : "#f0f0f0"
}


const RestaurantCard = (resData) => {
    console.log(resData)
    return (
        // Here we are giving style as a JavaScript Object
        <div className="res-card" style={styleCard}>
            <img className = "res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8l2kuZDANQExDsYteLg0NEUEjLkjudABRg&s=" alt="res-logo"/>
            <h3>{resData.resData.name}</h3>
            <h4>{resData.resData.cuisines.join(", ")}</h4>
            <h4>{resData.resData.avgRating} Rating</h4>
            <h4>{resData.resData.deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestaurantCard ;