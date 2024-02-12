import React, { useState } from 'react'
import Data from './Project6Ecommerse/Data'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Project6Ecommerse/Components/Navbar'
import Home from './Project6Ecommerse/Components/Home'
import Cart from './Project6Ecommerse/Components/Cart'
import About from './Project6Ecommerse/Components/About'

const App = () => {
  const[data,setData] = useState(Data)
  const[search,setSearch] = useState("")
  const[cart,setCart] = useState([])

  function handleClick(item){
    setCart([...cart,item])
  }

  function handleIncrease(id){
   
    const updateCart = [...cart]
    updateCart.map((item)=>{
      if(item.id === id)
      {
        item.amount++;
        // item.price+=item.price;
      }
    })
    setCart(updateCart)
  }

  function handleDecrease(id){
   
    const updateCart = [...cart]
    updateCart.map((item)=>{
      if(item.amount>0)
      {
        if(item.id === id)
      {
        --item.amount;
      }
      }
      
    })
    setCart(updateCart)
  }

  return (
    <BrowserRouter>
      <Navbar setData={setData} setSearch={setSearch} cart={cart.length}/>
      <Routes>
        <Route path='/' element={<Home data={data} search={search} handleClick={handleClick}></Home>}></Route>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleIncrease={handleIncrease} handleDecrease={handleDecrease}></Cart>}></Route>
        <Route path='/about/:id' element={<About data={data} handleClick={handleClick}></About>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
