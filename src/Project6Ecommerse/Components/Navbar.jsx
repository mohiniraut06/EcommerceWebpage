import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Data from '../Data'

const Navbar = ({setData,setSearch,cart}) => {
  
  function filterResult1(catItem){
    const newData = Data
    const result = newData.filter((item)=>{
      return item.category === catItem
    })
    setData(result)
  }

  function filterResult2(catItem){
    const newData = Data
    const result = newData.filter((item)=>{
      return item.category === catItem
    })
    setData(result)
  }

  function filterResult3(catItem){
    const newData = Data
    const result = newData.filter((item)=>{
      return item.category === catItem
    })
    setData(result)
  }

  function filterResult4(catItem){
    const newData = Data
    const result = newData.filter((item)=>{
      return item.category === catItem
    })
    setData(result)
  }

  function filterResult5(){
    const newData = Data
    const result = newData.map((item)=>{
      return item
    })
    setData(result)
  }

  return (
    <div className='Navbar'>
      <nav className="nav">
        <Link to={'/'} style={{color:'white',textDecoration:'none'}}><div className="nav-it"><h1 id='nav-h1'>SHOP MORE</h1></div></Link>
        <div className="nav-it"><input type="search" id="nav-input" onChange={(e)=>setSearch(e.target.value)} placeholder='Search Your Product' /></div>
        <Link to={'cart'} style={{color:'white', textDecoration:'none'}}><div className="nav-it" id='nav-cart'>Cart<sup>{cart}</sup></div></Link>
      </nav>
      <article className='nav-cat'>
        <button className="cat" onClick={()=>filterResult1(`men's clothing`)}>Men</button>
        <button className="cat" onClick={()=>filterResult2(`women's clothing`)}>Women</button>
        <button className="cat" onClick={()=>filterResult3(`electronics`)}>Electronics</button>
        <button className="cat" onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
        <button className="cat" onClick={()=>filterResult5()}>All</button>
      </article>
    </div>
  )
}

export default Navbar
