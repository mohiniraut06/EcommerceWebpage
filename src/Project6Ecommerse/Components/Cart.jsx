import React, { useEffect, useRef, useState } from 'react'

const Cart = ({cart,setCart,handleIncrease,handleDecrease}) => {
  const[price,setPrice] = useState(0)
  
  function handlePrice(){
    let ans = 0;
    cart.map((item)=>ans+=item.price*item.amount)
    setPrice(ans)
  }

  useEffect(()=>{
    handlePrice()
  })


  function handleRemove(id){
    const del = cart.filter((item)=>item.id != id)
    setCart(del)
  }

  return (
    <div className='Cart'>
      <table style={{textAlign:'center',margin:'auto',marginTop:'20px'}} width={"80%"} border={'1'} rules="all">
        <thead>
          <tr style={{fontSize:'18px'}}>
            <td><b>Image</b></td>
            <td><b>Name</b></td>
            <td><b>Price</b></td>
            <td><b>Increase</b></td>
            <td><b>Quantity</b></td>
            <td><b>Decrease</b></td>
            <td><b>Remove</b></td>
          </tr>
        </thead>

        <tbody>
          {cart.map((item)=>{
            return(
              <tr>
                <td><img src={item.image} alt="" height={'100px'} width={'100px'} /></td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>handleIncrease(item.id)}>+</button></td>
                <td>{item.amount}</td>
                <td><button onClick={()=>handleDecrease(item.id)}>-</button></td>
                <td><button onClick={()=>handleRemove(item.id)}>Remove</button></td>
              </tr>
            )
          })}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={2}>Total</td>
            <td>{price}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Cart
