//Functional Component
import './AuthorBio.css';

function AuthorBio(props) {
    return(
        <div>
            <img src={props.imageURL} width="100px" height="100px"/>
            <h3 className="specialHeading">{props.name}</h3>
            <p>{props.description}</p>
            <a href={props.linkedinURL} target="_blank">
                <button>View LinkedIn Profile</button>
            </a>
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