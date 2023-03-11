//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import './Grid4.css'
import Product from '../../../componnents/Product/Product'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Grid4({ products, isCard }) {
	let drawedProducts = []

	const picker = () => {
		let choise = Math.floor(Math.random() * 5)
		while (drawedProducts.includes(choise))
			choise = Math.floor(Math.random() * 5)
		drawedProducts.push(choise)
		return choise.toString()
	}

	return (
		<Container className='grid5-4 d-flex'>
			{isCard == true ? (
				<Card>
					<Col>
						<Row>
							<Col><Product size150='true' id={products[picker()]} /></Col>
							<Col><Product size150='true' id={products[picker()]} /></Col>
							
						</Row>
						<Row>
							<Product id={products[picker()]} />
							<Product id={products[picker()]} />
							<Product id={products[picker()]} />
						</Row>
					</Col>
				</Card>
			) : (
				<Col>
					<Row>
						<Product size150='true' id={products[picker()]} />
						<Product size150='true' id={products[picker()]} />
					</Row>
					<Row>
						<Product id={products[picker()]} />
						<Product id={products[picker()]} />
						<Product id={products[picker()]} />
					</Row>
				</Col>
			)}
		</Container>
	)
}

Grid4.defaultProps = {
	products: ['1', '2', '3', '4', '5'],
	isCard: false,
}

//Grid4.propTypes = {
//}

export default Grid4
