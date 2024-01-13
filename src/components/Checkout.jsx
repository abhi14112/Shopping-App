import React from 'react'
import Checkoutitem from './Checkoutitem'
import { useSelector } from 'react-redux'
const Checkout = () => {
        const cartData = useSelector(state=>state.checkout.cartItems);
        console.log(cartData);
        const itemsCount = cartData.length;
        const totalPrice = cartData.reduce((accumulator,product)=>{
            return accumulator+product.price;
        },0)
        if(itemsCount==0) return <h1 className='text-center text-3xl'>Cart is empty</h1>
  return (
            
    <div className='flex gap-2'>
        <div className='w-[60%] px-2 py-4 shadow-lg gap-3 flex flex-col'>
        {
            cartData.map((data,index)=>{
                return <Checkoutitem key={index} data={data}/>
            })
        }
        </div>
        <div className='flex bg-zinc-100 shadow-xl w-[40%] h-[150px] flex-col gap-3 items-center'>
            <p>Subtotal {itemsCount} items ${totalPrice}</p>
            <p>This order contains a gift</p>
            <button className='rounded-sm bg-emerald-400 w-[150px]'>Proceed to checkout</button>
        </div>
    </div>
  )
}
export default Checkout