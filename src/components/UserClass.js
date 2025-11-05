import React from "react"


class UserClass extends React.Component {

    constructor(props){
    
        super(props);

        this.state ={
            userInfo : {
                //first component will load with default value on to the webpage
                name : "Dummy Name",
                location : "Dummy Location",
                avatar_url : "Dummy URL"
            }
          
        }
        console.log (props);
    }

    async componentDidMount(){
        //API Calls can be made here
        //This method is called after the render method is called
        //Best place to make API calls
        console.log ("Component Did Mount - Class Component");
        const data = await fetch ("https://api.github.com/users/AkshayKhot1998");
        const json = await data.json();
        console.log (json);
        //When we call setState the here updating cycle/phase will start
        //Mounting Cycle will finish when rendered with the dummy data and when data is fetched from API Updating Cycle will start
        //After the state is updated the render method is called again with the new data while updating the DOM
        //Then componentDidUpdate method is called after the render method is called and the DOM is updated
        this.setState ({
            userInfo : json
        });
    }

    componentDidUpdate(){
        console.log ("Component Did Update - Class Component");
    }

    //render method will return some JSX which will be rendered 
    render(){
        return <div className="userCard">
        <h2>Name :{this.state.userInfo.name}</h2>
        <h2>Account Created At : {this.state.userInfo.created_at}</h2>
        <img src={this.state.userInfo.avatar_url} alt="Avatar" className="avatar"/>
        <h2>Location : Mumbai</h2>
        <h2>Role : Springboot Developer</h2>
    </div>
    }
}

export default UserClass;

