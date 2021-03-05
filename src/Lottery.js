import React, {useState} from 'react'
import {Button} from 'reactstrap';
import './lot.css'
const avaliableTeamName = ['Einstein','Netwon','Tesla'];
const avaliableName = ["Venkat",
"Kevin",
"Kinjal",
"Eric",
"Ronish",
"Prakash",
"Lalit"]


function Lottery(){
    const [team,setTeam] =useState([]);
    // const[teamName,setTeamName] = useState('');


function handleLottery() {

    let count = []
    while(true) {
        let randomNumber = Math.floor(Math.random()*avaliableName.length)
        // console.log(count.includes(randomNumber),'count.includes(randomNumber)');
            if(!count.includes(randomNumber)){
                count.push(randomNumber)
            }
        if (count.length ===7) break;
    }

let teamed = count.map(i=>avaliableName[i])
setTeam(teamed)
   
}

    return(
         <div style={{backgroundColor: 'white' , margin:'20px', padding:'20px'}}>
                <h1><em><u>Lottery :</u></em></h1>
                <div className="lottery-container"></div>
                <Button onClick={()=>handleLottery()} color="primary">Start Lottery</Button>{' '}
               
                <div>
                <h2>{avaliableTeamName[0]}</h2>
                <p className="displayLottery">{team.slice(0,2).join(" , ")}</p>
                </div>
                <div> 
                <h2>{avaliableTeamName[1]}</h2>
                <p className="displayLottery">{team.slice(2,4).join(" , ")}</p>
                </div>
                <div>
                <h2>{avaliableTeamName[2]}</h2>
                <p className="displayLottery">{team.slice(4).join(" , ")}</p>
                </div>
              
         </div>
    )
}

export default Lottery;