//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductsProvider from '../../contexts/ProductsContext'

import './CartPage.css'

function CartPage() {
	let route = useNavigate()
	const [totalPrice,setTotalPrice] = useState()
	const [cartItems, setCartItems] = useState([])

	useEffect(() => {
		if (sessionStorage.getItem('cart'))
			setCartItems(JSON.parse(sessionStorage.getItem('cart')))
	}, [])

	useEffect(() =>{
		calculateTotal()
	},[totalPrice])

	useEffect(() => {
		calculateTotal()
	}, [sessionStorage.getItem('cart')])

	const handlePurchase = () => {
		alert('Thanks for purchase, have a good day!')
		sessionStorage.setItem('cart', [])
		route('/')
	}

	const handleRemove = cartItem => {
		let newCart = cartItems.filter(item => item.id !== cartItem.id)
		sessionStorage.setItem('cart', JSON.stringify(newCart))
		setCartItems(newCart)
		alert('item removed successfully. ')
	}

	const calculateTotal = () => {
		let price = 0
		cartItems.map((item) => price = price + (item.price * item.quantity))
		price = Math.round(price)
		setTotalPrice(price)
	}

	return (
		<>
			<div class='cart-header-container'>
				<div class='cart-header-products-container'>
					<div class='cart-header-products-header'>
						<div class='cart-header-products-title'>PRODUCT</div>
						<div class='cart-header-products-price'>PRICE</div>
						<div class='cart-header-products-quantity'>QUANTITY</div>
						<div class='cart-header-products-total-price'>TOTAL</div>
					</div>

					<div class='cart-products' id='items'>
						{cartItems !== null ? (
							cartItems.map(item => {
								return (
									<>
										<div class='cart-item-container'>
											<div class='cart-item-remove'>
												<span className='cart-remove-span' onClick={() => handleRemove(item)}>X</span>
											</div>

											<div class='cart-item-img'>
												<img src={item.img} alt='' />
											</div>

											<div class='cart-item-name'>{item.name}</div>

											<div class='cart-item-price'>{Math.round(item.price) + '$'}</div>

											<div class='cart-item-quantity'>
												<span class='cart-item-quantity-text'>
													{item.quantity}
												</span>
											</div>

											<div class='cart-item-total'>
												{Math.round(item.price * item.quantity)+'$'}
											</div>
										</div>
									</>
								)
							})
						) : (
							<p>No Products</p>
						)}
					</div>
				</div>
			</div>
			<div class='checkout-cart-btn' id='checkout-cart-btn'>
				<div className='cart-total-price'>
					Total: {totalPrice}$
				</div>
				<button
					onClick={() => handlePurchase()}
					class='checkout-cart-btn-button'
					id='checkout-cart-btn-button'
				>
					Purchase
				</button>
			</div>
		</>
	)
}

//CartPage.defaultProps = {
//}

//CartPage.propTypes = {
//}

export default CartPage
