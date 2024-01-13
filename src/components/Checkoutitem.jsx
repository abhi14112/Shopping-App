import React from 'react'
import { removeFromCart } from '../Redux/checkoutSlice';
import { useDispatch } from 'react-redux';
const Checkoutitem = ({data}) => {
  const dispatch = useDispatch();
    const {image,title,price} = data;
  return (
    <div className='flex gap-4'>
        <div className='w-1/4'>
            <img src={image}/>
        </div>
        <div className='flex flex-col'>
            <p>{title}</p>
            <p>${price}</p>
            <button onClick={()=>{dispatch(removeFromCart(data.id))}} className='bg-yellow-400 w-[200px] rounded-sm'>Remove from basket</button>
        </div>
    </div>
  )
}
export default Checkoutitem