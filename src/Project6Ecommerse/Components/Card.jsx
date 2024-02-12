import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({item,handleClick}) => {
    const{title,image,price,rating} = item
  return (
    <div className='Cards'>
      <section className='section'>
        <div className="card">
        <Link to={`/about/${item.id}`}><img src={image} height={'200px'} width={'200px'} alt="" /></Link>
        <h1>{title}</h1>
        <p>{price}</p>
        <p>{rating.rate}</p>
        <button onClick={()=>handleClick(item)}>Add to Cart</button>
        </div>
      </section>
    </div>
  )
}

export default Card
