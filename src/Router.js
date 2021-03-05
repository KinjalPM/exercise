import React from 'react';
import { Link ,Redirect,useHistory} from "react-router-dom";
import './Router.css'

function Router(){
    return (
        <div> 
            <h1 style={{margin: '30px'}}><em><u>Lottery :</u></em></h1>
    <div id="rostyle">
    <a className="astyle" href="https://github.com/KinjalPM/student-records">Github Front-End</a>{' '}
    <a className="astyle" href="https://github.com/KinjalPM/studentbe">Github Back-End</a>{' '}
    <a className="astyle" href="https://reaction-kinjal-mehta.herokuapp.com/">Back-End link</a>{' '}
    <a className="astyle" href="https://reaction-kinjal-mehta-studentbe.netlify.app/">Front-End Link</a>{''}
    </div>
    </div>
    )
}

export default Router