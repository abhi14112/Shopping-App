import React from 'react'
import '../styles/header.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
    const cartItemsCount = useSelector(state=>state.checkout.cartItems.length)
    return (
        <div className='header'>
        <NavLink to={"/"}>
            <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </NavLink>
            <div className='header_search'>
                <input type='text' className='header_searchInput' />
                <div className='header_searchIcon'>Search</div>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>
                        Sign in
                    </span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>
                <div className='header_optionBasket'>   
                    <span className='header_optionBasketLineOne'>
                    <NavLink to={"/checkout"}>Cart</NavLink>
                    </span>
                    <span className='header_optionBasketLineTwo'>{cartItemsCount}</span>
                </div>
            </div>
        </div>
    )
}
export default Header