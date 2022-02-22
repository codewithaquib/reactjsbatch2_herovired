//Functional Component
import React, {useState, useEffect} from 'react';
import './AuthorBio.css';

function AuthorBio(props) {
    const [value, setValue] = useState("Aquib");

    useEffect(()=>{
        console.log("User Name updated");
    });

    return(
        <div>
            <img src={props.imageURL} width="100px" height="100px"/>
            <h3 className="specialHeading">{value}</h3>
            <p>{props.description}</p>
            <a href={props.linkedinURL} target="_blank">
                <button>View LinkedIn Profile</button>
            </a>
            <button onClick={()=>setValue("Code With Aquib")}>Change Name</button>
        </div>
    )
}

export default AuthorBio;
//author name
//author dob
//author bio
//author social media handles
//author email
//author profile photo