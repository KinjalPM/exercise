import './App.css';
const h1style = {
   margin: 0,
   textAlign: "centre"
}
const bodystyle ={
  margin: "20px"
}
function App() {
  return (
    <div style={bodystyle}>
    <header>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Boston_-_panoramio_%2823%29.jpg/576px-Boston_-_panoramio_%2823%29.jpg' alt="Boston skyline"/>
     <br></br>
     <img src='./boston.jpg'/>
      <h1 style={h1style}><em>Curriculum </em></h1>            
    </header>
      <p>
      This is how we plan to teach during our Bootcamp. We will deviate as deemed fit by the instructor whenever required.There will be several micro and mega projects we will be building along the way.
      </p>
      <h2>Useful Links</h2>
      <ul>
        <li>Set up Call with Instructor : <a href="https://calendly.com/wynisco/isa-information-session?month=2021-02" target="_blank">Here</a> or email sachin@wynisco.com</li>
        <li>Apply for program : <a >Here </a></li>
        <li>Website : Here</li>
      </ul>
    </div>
  );
}

export default App;
