import React from 'react';
import './ex-5.css';

function Exercise5(){
   return( 
<>  

<div class='body'>
{/* flex */}
<div class="c1">
        {/* heading */}
       <div class='d1'>
        <strong>Current Status: </strong>
          Started...
        </div>
</div>
        {/* subheading */}
        <div class="grid-container1">
        <div class="grid-item" style={{ color: 'white'}}><button>STOP</button></div>
        <div class="grid-item" style={{ color: 'white'}}><button>RESET</button></div>
        <div class="grid-item1">
            <label style={{fontSize:'10px'}}>Speed</label>
            <br></br>
            <button style={{backgroundColor:' #f50057'}}>0.5PX</button>
            <button style={{backgroundColor:' #f50057'}}>5PX</button>
            <button style={{backgroundColor:' #f50057'}}>10PX</button>
        </div>
        </div>

        {/* subheading */}
        <h2 style={{textAlign:'center'}}>Events</h2>

        {/* displaying event details */}
<div className="events-container">
                    <div className="cardContainer">
                        <div className="cardtitle">Replay Clock</div>
                        <p class="cardbody" >09:30:42.62</p>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Event</div>
                        <p class="cardbody">678</p>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Name</div>
                        <p class="cardbody">Bid</p>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Exchange 1</div>
                        <p class="cardbody">X</p>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Price 1</div>
                        <p class="cardbody">142.72</p>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Share 1</div>
                        <p class="cardbody">100</p>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Exchange 1</div>
                        <p class="cardbody">X</p>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Price 2</div>
                        <p class="cardbody"></p>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Share 2</div>
                        <p class="cardbody"></p>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Exchange 2</div>
                        <p class="cardbody"></p>
                    </div>
                </div>
{/* order */}
<h2 style={{textAlign:'center', marginBottom:'20px'}}>Order Book</h2>

{/* Table */}
{/* <div className="tablestyle"> */}
<div className="ask-bid-container">
        <div className="table-everything1">
        <table>
            <caption>Bids</caption>
         <thead>
             <tr>
                <th class="colname">Age</th>
                <th class="colname">Exchange</th>
                <th class="colname">Shares</th>
                <th class="colname">Price</th>
                </tr>
                </thead>

        <tbody>
            <tr>
                <th>1200</th>
                <th>X</th>
                <th>100</th>
                <th>142.72</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>Q</th>
                <th>200</th>
                <th>142.71</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>Y</th>
                <th>100</th>
                <th>142.71</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>N</th>
                <th>200</th>
                <th>142.71</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>Z</th>
                <th>100</th>
                <th>142.66</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>K</th>
                <th>100</th>
                <th>142.6</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>A</th>
                <th>100</th>
                <th>142.56</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>M</th>
                <th>100</th>
                <th>142.56</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>J</th>
                <th>100</th>
                <th>142.56</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>C</th>
                <th>100</th>
                <th>142.5</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>P</th>
                <th>100</th>
                <th>142.50</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>V</th>
                <th>100</th>
                <th>138.55</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>B</th>
                <th>100</th>
                <th>136.63</th>
            </tr>
            <tr>
                <th>1200</th>
                <th>C</th>
                <th>100</th>
                <th>136.63</th>
            </tr>
            </tbody>
        </table>
        </div>

        <div className="table-everything2">
        <table>
        <caption>Asks</caption>
        <thead>
            <tr>
            <th class="colname">Price</th>
            <th class="colname">Shares</th>
            <th class="colname">Exchange</th>
            <th class="colname">Age</th>
            </tr>
            </thead>
            <tbody>
        <tr>
            <th>142.84</th>
            <th>100</th>
            <th>Z</th>
            <th>1200</th>
        </tr>
         <tr>
            <th>142.85</th>
            <th>100</th>
            <th>Q</th>
            <th>1200</th>
        </tr>
         <tr>
            <th>142.89</th>
            <th>100</th>
            <th>P</th>
            <th>1200</th>
        </tr>
        <tr>
            <th>142.9</th>
            <th>100</th>
            <th>P</th>
            <th>1200</th>
        </tr>
        <tr>
            <th>142.84</th>
            <th>100</th>
            <th>X</th>
            <th>1200</th>
        </tr>
        <tr>
            <th>142.84</th>
            <th>100</th>
            <th>K</th>
            <th>1200</th>
        </tr>
        <tr>
            <th>142.84</th>
            <th>100</th>
            <th>N</th>
            <th>1200</th>
        </tr>
        <tr>
            <th>142.84</th>
            <th>100</th>
            <th>V</th>
            <th>1200</th>
        </tr>
        <tr>
            <th>142.84</th>
            <th>100</th>
            <th>A</th>
            <th>1200</th>
        </tr>
         <tr>
            <th>142.84</th>
            <th>100</th>
            <th>Y</th>
            <th>1200</th>
        </tr>
        <tr>
            <th>142.84</th>
            <th>100</th>
            <th>M</th>
            <th>1200</th>
        </tr>
        <tr>
            <th>142.84</th>
            <th>100</th>
            <th>J</th>
            <th>1200</th>
        </tr>
        <tr>
            <th>142.84</th>
            <th>100</th>
            <th>B</th>
            <th>1200</th>
        </tr>
        <tr>
            <th>142.84</th>
            <th>100</th>
            <th>C</th>
            <th>1200</th>
        </tr>
        </tbody>
        </table>
        </div>


        </div>
   </div>

    </>
   )
}

export default Exercise5;

 

  
       
  
            
