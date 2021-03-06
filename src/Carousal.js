import React, {useState} from 'react'
import {CarousalData} from './CarousalData'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import './Caro.css' 
const Carousal = () => {
   const [current,setCurrent] = useState(0);
   const length = CarousalData.length;
   console.log(length)

  const nextImg = ()=>{
    setCurrent(current== length-1 ? length-1: current+1)
  }
  
   const prevImg=()=>{
      setCurrent(current === 0 ? 0 : current-1)

   }
   console.log("C:"+current);
   // console.log(current)
   if(!Array.isArray(CarousalData) || CarousalData.length<=0){
    return null;
 }
  return (
    <div style={{backgroundColor: 'white' , margin:'20px', padding:'20px'}}>
    <h1><em><u>Carousal Effect: </u></em></h1>
    <div className='caro'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevImg}></FaArrowAltCircleLeft>
      <FaArrowAltCircleRight className='ri-arrow' onClick={nextImg}></FaArrowAltCircleRight>
      {CarousalData.map((slide,i)=>{
        return(
           <div className={i===current?'slide active':'slide'} key={i}>
             {i === current && ( <img src={slide.image} alt='random pic' className='image'/>)}
            <br></br>
            <p className="i">{current+1} of {length}</p>
          </div>
        ) 
      })}
    </div>
    </div>
  )
}
export default Carousal