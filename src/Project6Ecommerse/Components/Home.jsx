import React from 'react'
import Card from './Card'
import './Home.css'
const Home = ({data,search,handleClick}) => {
    
  return (
    <div className='Home'>
      {data.filter((item)=>item.category.toLowerCase().includes(search.toLowerCase())).map((item)=>{
        return(
            <Card handleClick={handleClick} key={item.id} item={item}></Card>
        )
      })}
    </div>
  )
}

export default Home
