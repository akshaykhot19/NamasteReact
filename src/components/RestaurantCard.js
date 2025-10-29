const RestaurantCard = ({ resData }) => {
    const { image, category, description, price, rating, title } = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src={image} alt="res-logo" />
            <h3>{title}</h3>
            <h4>{category}</h4>
            {/* <h4>{description}</h4> */}
            <h4>Rating: {rating.rate} ⭐</h4>
            <h4>Remaining Count: {rating.count}</h4>
            <h4>Price: ${price}</h4>
        </div>
    );
};

export default RestaurantCard;