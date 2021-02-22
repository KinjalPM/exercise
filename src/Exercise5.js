import React from 'react';
import './ex-5.css';

function Exercise5(){
   return( 
<>  
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
</head>
<div class='body'>
{/* flex */}
<div class="c1">
        {/* heading */}
       <div class='d1'style={{textAlign:'center'}}>
        <strong>Current Status: </strong>
          Started...
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
<div class="outerEventBox">
    <div class="innerEventBox">
                <div class="wrapper">
            <div class="w2">
                <label>Replay Clock</label>
                <p>09:30:42.62</p>
            </div>
            <div class="w2">
                <label>Event</label>
                <p>678</p>
            </div>
            <div class="w2">
                <label>Name</label>
                <p>Bid</p>
            </div>
            <div class="w2">
                <label>Exchange 1</label>
                <p>X</p>
            </div>
            <div class="w2">
                <label>Price 1</label>
                <p>142.72</p>
            </div>
            <div class="w2">
                <label>Share 1</label>
                <p>100</p>
            </div>
            <div class="w2">
                <label>Exchange 1</label>
                <p>X</p>
            </div>
            <div class="w2">
                <label>Price 2</label>
                <p></p>
            </div>
            <div class="w2">
                <label>Share 2</label>
                <p></p>
            </div>
            <div class="w2">
                <label>Exchange 2</label>
                <p></p>
            </div>
            </div>
    </div>
</div>
{/* order */}
<h2 style={{textAlign:'center', marginBottom:'20px'}}>Order Book</h2>

{/* Table */}
<div className="tablestyle">
    <div className='row'>
        <div className='col1' style={{float:'left'}}>
        <table>
            <caption>Bids</caption>
            <tr>
                <th class="colname">Age</th>
                <th class="colname">Exchange</th>
                <th class="colname">Shares</th>
                <th class="colname">Price</th>
            </tr>
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
        </table>
        </div>
        <div className='col2' style={{float:'right'}}>
        <table>
        <caption>Asks</caption>
        <tr>
            <th class="colname">Price</th>
            <th class="colname">Shares</th>
            <th class="colname">Exchange</th>
            <th class="colname">Age</th>
        </tr>
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
        </table>
        </div>
        </div>
   </div>
</div>
</div>
    </>
   )
}

export default Exercise5;