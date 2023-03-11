//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'

import './ShopPage.css'

import Grid1 from '../../grids/5-Products/Grid1/Grid1'
import Grid2 from '../../grids/5-Products/Grid2/Grid2'
import Grid3 from '../../grids/5-Products/Grid3/Grid3'
import Grid4 from '../../grids/5-Products/Grid4/Grid4'
import Grid5 from '../../grids/5-Products/Grid5/Grid5'
import Grid11 from '../../grids/6-Products/Grid11/Grid11'
import GridMain from '../../grids/5-Products/GridMain/GridMain'

import ProductsProvider from '../../contexts/ProductsContext'

import { Container, Row, Col, Card } from 'react-bootstrap'

function ShopPage() {
	const { products } = useContext(ProductsProvider)
	const [allProducts, setAllProducts] = useState(
		JSON.parse(sessionStorage.getItem('products'))
	)
	const [showCollection, setShowCollection] = useState('all')
	const [sortBy, setSortBy] = useState('LtH')
	let collectionsList = []
	let priceList = []
	useEffect(() => {
		allProducts.map(item => priceList.push(item.price))
	}, [])

	useEffect(() => {
		if (sortBy === 'LtH' && showCollection === 'all')
			document.querySelector('.all-products-shop-page').style.flexDirection =
				'column'
		else if (sortBy === 'HtL' && showCollection === 'all')
			document.querySelector('.all-products-shop-page').style.flexDirection =
				'column-reverse'
	}, [sortBy])

	const findMin = array => {
		let min = array[0].price
		array.forEach(item => {
			if (min > item.price) min = item.price
		})
		return min
	}

	const findMax = array => {
		let max = array[0].price
		array.forEach(item => {
			if (max < item.price) max = item.price
		})
		return max
	}

	return (
		<>
			<Container className='container-shop'>
				<Container>
					<div className='shop-btns'>
						<div>
							<div>
								<div>Order By: </div>
							</div>
							{
								<select
									onChange={() => {
										setSortBy(document.getElementsByName('sortPicker')[0].value)
									}}
									name='sortPicker'
									id='sort-picker'
								>
									<option value='LtH'>Price - Low to High</option>
									<option value='HtL'>Price - High to Low</option>
								</select>
							}
						</div>
						<div>
							<div>
								<div>Sort By: </div>
							</div>
							{
								<select
									onChange={() => {
										setShowCollection(
											document.getElementsByName('collectionPicker')[0].value
										)
									}}
									name='collectionPicker'
									id='collection-picker'
								>
									<option value='all'>Collection: </option>
									{allProducts.map(item => {
										if (!collectionsList.includes(item.collection)) {
											collectionsList.push(item.collection)
											return (
												<option value={item.collection}>
													{item.collection}
												</option>
											)
										}
									})}
								</select>
							}
						</div>
					</div>
				</Container>
				<Container>
					{showCollection === 'all' ? (
						<div
							className='all-products-shop-page'
							style={{ display: 'flex', flexDirection: 'column' }}
						>
							<GridMain collection='Winter' />
							<GridMain collection='Monotone' />
							<GridMain collection='Pastel' />
							<GridMain collection='Neon' />
							<GridMain collection='Splash' />
						</div>
					) : (
						<GridMain collection={showCollection} />
					)}
				</Container>
			</Container>
		</>
	)
}

//ShopPage.defaultProps = {
//}

//ShopPage.propTypes = {
//}

export default ShopPage
