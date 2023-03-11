//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import './ShopNow.css'
import ProductsSentences from '../../data/shopNowSentences.json'
import { Link } from 'react-router-dom'

function ShopNow() {
	const picker = () => {
		return Math.floor(Math.random() * ProductsSentences.length)
	}
	return (
		<>
			<div className='shop-now-product'>
				<p className='shop-now-product-sentence'>
					{ProductsSentences[picker()].sentence}
				</p>
				<Link className='links' to='/shop'>
					<p className='shop-now'>Shop Now</p>
				</Link>
			</div>
		</>
	)
}

//ShopNow.defaultProps = {
//}

//ShopNow.propTypes = {
//}

export default ShopNow
