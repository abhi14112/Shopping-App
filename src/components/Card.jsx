import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../Redux/checkoutSlice';
const Card = ({data}) => {
    const {id,image,title,price} = data;

    const dispatch = useDispatch();
  return (
    <>
    <div className='flex items-center shadow-2xl rounded-lg px-4 py-2 gap-1 justify-center flex-col w-[24%] h-[1/3] bg-white'>
        <div>{title}</div>
        <div>${price}</div>
        <div>
            <img className='w-[4/5] h-[200px]'  src={image} />
        </div>
        <div>
            <button onClick={()=>{dispatch(addToCart(data))}} className='bg-yellow-400 py-1 px-4 rounded-md shadow-2xl'>Add to Basket</button>
        </div>
    </div>
    </>
  )
}
export default Card