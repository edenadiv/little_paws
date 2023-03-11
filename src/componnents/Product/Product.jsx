//import React from 'react'
//import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useContext } from 'react'
//import { useEffect } from 'react'
import ProductsProvider from '../../contexts/ProductsContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './product.css'

import ShopNow from '../ShopNow/ShopNow'

import ProductsData from '../../data/products.json'

function Product({ id, random, size150, size200, shopNow }) {
	const { products } = useContext(ProductsProvider)
	const [index,setIndex] = useState(
		random ? Math.floor(Math.random() * ProductsData.length) : id
	)
	/* todo counter up each one */

	let route = useNavigate()

	let size = 'size100'
	size = size150 ? 'size150' : size
	size = size200 ? 'size200' : size

	return (
		<>
			{shopNow === true && size === 'size100' ? (
				<ShopNow />
			) : (
					<div onClick={() =>route(`/product-page/${index}`)} id={`product-${index}`} className='product firstColorHover'>
						<img className={size} src={products[index].img} alt=''></img>
					</div>
			)}
			
		</>
	)
}		

Product.defaultProps = {
	id: 1,
	random: false,
	size150: false,
	size200: false,
	shopNow: false,
}
/*
Product.propTypes = {
	
}
*/
export default Product
