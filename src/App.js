import './App.css';
import React from 'react'

function App() {
  return (
    <div style={{ backgroundColor: 'white' , margin: '20px', textAlign: 'center'}} >
      <h1 style={{margin: '20px', paddingTop:'20px'}}><em><u>Exercise 1: </u></em></h1>  
<br></br>
     <form>
      <label>FirstName: </label>
      <input type="text" id="FName" placeholder="FName" maxLength="128" required></input>
      <br></br>
      <br></br>
      <label>LastName: </label>
      <input type="text" id="LName" placeholder="LName" maxLength="128" required></input>
      <br></br>
      <br></br>

     <div id="gen"> 
      <label>Gender: </label>
      <br></br>
      <input type="radio" id="male" value="male" />
      <label for="male">Male</label><br></br>
      <input type="radio" id="female"value="female" />
      <label for="male">Female</label>
      </div>

      <br></br>
      <br></br>
      <label for="MasterDegree">Master Degree: </label>
      <select name="MasterDegree" id="degree">
        <option value="Computer">Computer</option>
        <option value="Instrumentation">Instrumentation</option>
        <option value="Arts">Arts</option>
        <option value="ELectrical">ELectrical</option>
      </select>
      <br></br>
      <br></br>
      <label>Email Address: </label>
      <input type="email" id="email" placeholder="email"></input>
      <br></br>
      <br></br>
      <label>Resume: </label>
      <input type="file" id="file" name="file" multiple></input>
      <br></br>
      <br></br>
      <label>Date of Graduation: </label>
      <input type="date" id="da" name="date"></input>
      <br></br>
      <br></br>
      <input type="submit" value="Submit" onSubmit="showInput()"></input>
    </form> 
<br></br>
<br></br>
    </div>
  );
}

export default App;
