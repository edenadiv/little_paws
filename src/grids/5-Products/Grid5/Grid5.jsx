//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import './Grid5.css'
import Product from '../../../componnents/Product/Product'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Grid5({ products, isCard }) {
	let drawedProducts = []

	const picker = () => {
		let choise = Math.floor(Math.random() * 5)
		while (drawedProducts.includes(choise))
			choise = Math.floor(Math.random() * 5)
		drawedProducts.push(choise)
		return choise.toString()
	}

	return (
		<Container className='grid5-5 d-flex'>
			{isCard == true ? (
				<Card>
					<Col>
						<Row>
							<Product id={products[picker()]} />
							<Product id={products[picker()]} />
							<Product id={products[picker()]} />
						</Row>
						<Row className='justify-content-center'>
							<Product id={products[picker()]} />
							<Product id={products[picker()]} />
						</Row>
					</Col>
				</Card>
			) : (
				<Col>
					<Row>
						<Product id={products[picker()]} />
						<Product id={products[picker()]} />
						<Product id={products[picker()]} />
					</Row>
					<Row className='justify-content-center'>
						<Product id={products[picker()]} />
						<Product id={products[picker()]} />
					</Row>
				</Col>
			)}
		</Container>
	)
}

Grid5.defaultProps = {
	products: ['1', '2', '3', '4', '5'],
	isCard: false,
}

//Grid5.propTypes = {
//}

export default Grid5
