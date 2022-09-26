import React from 'react'
import { Link } from 'react-router-dom'
import Description from './Description'
import "./food.css"
const FoodCard = ({food}) => {
   
  return (
    <div className='body22'>
    <div className="containerrr">
  <div className="imagess">
    <img  src={food.img} style={{maxHeight:"300px", minHeight:"300px", marginTop:"20px"}}/>
  </div>
  <div className="slideshow-buttonss">
    <div className="onee" />
    <div className="twoo" />
    <div className="threee" />
    <div className="fourr" />
  </div>
 
  <div className="productt">
    <p>{food.title}</p>
    
    <h2>{food.price}</h2>
    <p className="descr">
      {food.desc}
    </p>
  <Description  food={food}/>

    
  </div>
</div>
</div>
  )
}

export default FoodCard