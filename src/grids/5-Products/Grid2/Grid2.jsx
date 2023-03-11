//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import './Grid2.css'
import Product from '../../../componnents/Product/Product'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

function Grid2({ products, isCard }) {
	let drawedProducts = []

	const picker = () => {
		let choise = Math.floor(Math.random() * 5)
		while (drawedProducts.includes(choise))
			choise = Math.floor(Math.random() * 5)
		drawedProducts.push(choise)
		return choise.toString()
	}

	return (
		<Container className='grid5-2 d-flex'>
			{isCard == true ? (
				<Row>
					<Col>
						<Product id={products[picker()]} />
						<Product id={products[picker()]} />
					</Col>
					<Col>
						<Product id={products[picker()]} />
						<Product id={products[picker()]} />
					</Col>
					<Col className='align-self-center'>
						<Product size200='true' id={products[picker()]} />
					</Col>
				</Row>
			) : (
				<Row>
					<Col>
						<Product id={products[picker()]} />
						<Product id={products[picker()]} />
					</Col>
					<Col>
						<Product id={products[picker()]} />
						<Product id={products[picker()]} />
					</Col>
					<Col className='align-self-center'>
						<Product size200='true' id={products[picker()]} />
					</Col>
				</Row>
			)}
		</Container>
	)
}

Grid2.defaultProps = {
	products: ['1', '2', '3', '4', '5'],
	isCard: false,
}

//Grid2.propTypes = {
//}

export default Grid2
