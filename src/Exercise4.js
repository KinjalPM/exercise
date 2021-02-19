import './bestStyle.scss'
import React from "react";


const black = 'black';
const  yellow= 'yellow';

class Exercise4 extends React.Component{

    constructor(props){
        super(props);
        this.state = { color: black };
        this.changeColor = this.changeColor.bind(this);
      }
      changeColor() {
        const newColor = this.state.color == black ? yellow : black;
        this.setState({ color: newColor });
      }
      render(){
        return(
    <div style={{backgroundColor: 'white' , margin:'20px', padding:'20px'}}>
        <h1><em><u>Exercise 4:</u></em></h1>
          <div style={{background: this.state.color, height:'500px',boxSizing:'border-box'}}>
          <h1 style={{color:'grey', margin:'10px'}}>theme</h1>
          <button onClick={this.changeColor} style={{justifyItems:'baseline',marginTop:'432px'}}>Click to change theme</button>
          </div>
    </div>
        )
      }
    }

export default Exercise4;