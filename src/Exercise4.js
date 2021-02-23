import './bestStyle.scss'
import React from "react";
import $ from 'jquery';

const black = 'black';
const  yellow= 'yellow';

class Exercise4 extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
          color: black,
          isToggleOn: "Click button to change it light theme"
        };
        this.changeColor = this.changeColor.bind(this);
      }
  
      changeColor(text) {
        const newColor = this.state.color == black ? yellow : black;
        const newisToggleOn = this.state.isToggleOn == "Click button to change it light theme" ? ' Click button to change it dark theme' : 'Click button to change it light theme'
        this.setState({ 
        color: newColor,
        isToggleOn:newisToggleOn});
      }


      render(){
        return(
    <div style={{backgroundColor: 'white' , margin:'20px', padding:'20px'}}>
        <h1><em><u>Exercise 4:</u></em></h1>
          <div style={{background: this.state.color, height:'500px',boxSizing:'border-box'}}>
          <h1 style={{color:'grey', textAlign:'center',position:'relative',top:'49%'}}>{this.state.isToggleOn}</h1>
          <button class= "btn " value="Light Theme" onClick={this.changeColor} style={{bottom:'0', right:'0',position:'absolute', marginRight: '40px', marginBottom:'25px', fontSize:'20px'}}>
            "Click button"
          </button>
          </div>
    </div>
        )
      }
    }

export default Exercise4;