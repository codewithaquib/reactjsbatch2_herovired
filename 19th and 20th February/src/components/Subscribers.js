import React from 'react';
//Class Components
var url = "https://randomuser.me/api/";
class Subscriber extends React.Component
{
    constructor(){
        super();
        this.state = {name:"", loading:false};
    }

    componentDidMount(){
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({loading:true,
            name:data.results[0].name.first},
            console.log(data)));
    }

    render(){
        return this.state.loading ? 
        (
            <div>
               <p>{this.state.name}</p>
            </div>
        ) : 
        (
            <div>Loading...</div>
        )
    }
}

export default Subscriber;
