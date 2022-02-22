import './App.css';
import AuthorBio from './components/AuthorBio';
import BlogPost from './components/BlogPost';
import Subscriber from './components/Subscribers';

function App() {
  var description = "He has mentored for a very long time";
  var imageURL = "https://i.pinimg.com/474x/f1/c1/98/f1c1985141ae734194fe69fd52dcb4eb.jpg";
  var linkedinURL = "https://www.linkedin.com/in/codewithaquib/";
  return (
    <div className="App">
      <header className="App-header">
        <AuthorBio name="Sanjay"
        imageURL={imageURL}
        description={description}
        linkedinURL={linkedinURL}/>
        <hr/>
        <BlogPost authorName="John Doe" title="Blog Title"/>
        <Subscriber />
        
      </header>
    </div>
  );
}

export default App;
