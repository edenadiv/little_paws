//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ShopLink() {
	return (
		<>
			<div className='shop-link'>
				<Link className='links' to='/shop'>
					<p>Shop</p>
				</Link>
			</div>
		</>
	)
}

//ShopLink.defaultProps = {
//}

//ShopLink.propTypes = {
//}

export default ShopLink
