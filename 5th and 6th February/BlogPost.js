import React from 'react';
//Class Components
class BlogPost extends React.Component
{
    
    constructor(){
        super();
        console.log("Constructor called...");
        this.state={title:"Title 1", description:"", loading:false};
        this.modifyTitle = this.modifyTitle.bind(this);
    }

    static getDerivedStateFromProps(props, state){
        console.log("Get State called");
        return state={title:props.title, description:""};
    }

    modifyTitle(){
        this.setState({title:"My Blog Post 2", description:"This is the description"});
    }

    shouldComponentUpdate(){
        console.log("Update the component");
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("Snapshot taken");
        return null;
    }

    componentDidUpdate(){
        console.log("Component updated!");
    }

    componentDidMount(){
        console.log("Blog post mounted!");
    }

    componentWillUnmount(){
        console.log("Blog post destroyed!");
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.props.authorName}</p>
                <p>{this.state.description}</p>
                <button>Like this post</button>
                <button onClick={this.modifyTitle}>Modify Title</button>
            </div>
        )
    }
}

export default BlogPost;

//title of the post
//description of the post
//background image
//published datetime
//author name

//draft
//published
//likes count
//comments (child component)