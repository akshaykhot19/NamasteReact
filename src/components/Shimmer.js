const Shimmer = () => {
    return (
        // Creating fake cards for loading UI
        //It is better to create separate component for Shimmer
        //Shimmer UI makes User experience (UX) better by providing a placeholder while content is loading
        <div className="shimmer-container">
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>
                <div className="shimmer-card"></div>

        </div>
    );
}

export default Shimmer;