//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
import { useContext } from 'react'
//import { useEffect } from 'react'
import './Grid1.css'
import Product from '../../../componnents/Product/Product'
import ProductsProvider from '../../../contexts/ProductsContext'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Grid1({ collection, products, isCard }) {
	const { allProducts } = useContext(ProductsProvider)
	let drawedProducts = []

	const picker = () => {
		let choise = Math.floor(Math.random() * 5)
		while (drawedProducts.includes(choise))
			choise = Math.floor(Math.random() * 5)
		drawedProducts.push(choise)
		return choise.toString()
	}

	const collectionPicker = () => {
		let tempId
		products.map(product => {
			if (allProducts.collection === collection) {
				tempId = product.id
				drawedProducts.push(product.id)
			}
			return tempId
		})
	}

	return (
		<Container className='grid5-1 d-flex'>
			{isCard == true ? (
				<Card>
					<Row>
						<Col className='align-self-center big'>
							<Product
								size200='true'
								id={
									collection === null ? products[picker()] : collectionPicker()
								}
							/>
						</Col>
						<Col>
							<Product
								id={
									collection === null ? products[picker()] : collectionPicker()
								}
							/>
							<Product
								id={
									collection === null ? products[picker()] : collectionPicker()
								}
							/>
						</Col>
						<Col>
							<Product
								id={
									collection === null ? products[picker()] : collectionPicker()
								}
							/>
							<Product
								id={
									collection === null ? products[picker()] : collectionPicker()
								}
							/>
						</Col>
					</Row>
				</Card>
			) : (
				<Row>
					<Col className='align-self-center big'>
						<Product
							size200='true'
							id={collection === null ? products[picker()] : collectionPicker()}
						/>
					</Col>
					<Col>
						<Product
							id={collection === null ? products[picker()] : collectionPicker()}
						/>
						<Product
							id={collection === null ? products[picker()] : collectionPicker()}
						/>
					</Col>
					<Col>
						<Product
							id={collection === null ? products[picker()] : collectionPicker()}
						/>
						<Product
							id={collection === null ? products[picker()] : collectionPicker()}
						/>
					</Col>
				</Row>
			)}
		</Container>
	)
}

Grid1.defaultProps = {
	products: ['1', '2', '3', '4', '5'],
	isCard: false,
	collection: null,
}

//Grid1.propTypes = {
//}

export default Grid1
