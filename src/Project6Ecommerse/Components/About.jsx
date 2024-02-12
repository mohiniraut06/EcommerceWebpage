import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import './About.css'
import './vanilla-tilt'

const About = ({data,handleClick}) => {
    const {id} = useParams()
    const findData = data.find((x)=>x.id=== parseInt(id))
    const com = useRef(null)

    useEffect(()=>{
      VanillaTilt.init(com.current),{
        max:10,
        speed:400
      }
    },)

  
   return (
    <div className='About'>
         <div className="inner">
         <img ref={com} src={findData.image} height={'400px'} alt="" />
         </div>
        <div className="ab-div">
        <h2>{findData.title}</h2>
        <p>{findData.description}</p>
        <button onClick={()=>handleClick(findData)}>Add to Cart</button>
        </div>
     
    </div>
  )
}

export default About
