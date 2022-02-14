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

    modifyTitle(){
        this.setState({loading:true, title:"My Blog Post 2", description:"This is the description"});
    }

    render(){
        if(this.state.loading)
        {
            return(
                <div>
                    <h1>{this.state.title}</h1>
                    <p>{this.props.authorName}</p>
                    <p>{this.state.description}</p>
                    <button>Like this post</button>
                </div>
            )
        }
        else
        {
            return(
            <div>
                <button onClick={this.modifyTitle}>Modify Title</button>
                <p>Loading...</p>
            </div>)
        }
        
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