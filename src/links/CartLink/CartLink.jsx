//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function CartLink() {
	return (
		<>
			<div className='cart-link'>
				<Link className='links' to='/cart'>
					<p>Cart</p>
				</Link>
			</div>
		</>
	)
}

//CartLink.defaultProps = {
//}

//CartLink.propTypes = {
//}

export default CartLink
