import Product from '../../../componnents/Product/Product'
import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

import './Grid11.css'

function Grid11({ isCard, shopNow }) {
	let picked = []
	const shopNowPicker = () => {
		let pick
		if (shopNow) {
			pick = Math.floor(Math.random() * 6)
			while (picked.includes(pick)) {
				pick = Math.floor(Math.random() * 6)
			}
			picked.push(pick)
			if (pick !== 3) return false
			else if (pick === 3) return true
		} else {
			return false
		}
	}

	return (
		<Container className='grid11-6 d-flex'>
			{isCard === true ? (
				<Card>
					<Row className='inherit justify-content-center'>
						<Col>
							<Row className='inherit justify-content-center'>
								<Product random='true' />
								<Product random='true' />
							</Row>
							<Row>
								<Product size200='true' random='true' />
							</Row>
						</Col>
						<Col>
							<Row>
								<Product size200='true' random='true' />
							</Row>
							<Row className='inherit justify-content-center'>
								<Product random='true' />
								<Product random='true' />
							</Row>
						</Col>
					</Row>
				</Card>
			) : (
				<>
					<Row className='inherit justify-content-center'>
						<Col>
							<Row className='inherit justify-content-center'>
								<Product random='true' shopNow={shopNowPicker()} />
								<Product random='true' shopNow={shopNowPicker()} />
							</Row>
							<Row>
								<Product
									size200='true'
									random='true'
									shopNow={shopNowPicker()}
								/>
							</Row>
						</Col>
						<Col>
							<Row>
								<Product
									size200='true'
									random='true'
									shopNow={shopNowPicker()}
								/>
							</Row>
							<Row className='inherit justify-content-center'>
								<Product random='true' shopNow={shopNowPicker()} />
								<Product random='true' shopNow={shopNowPicker()} />
							</Row>
						</Col>
					</Row>
				</>
			)}
		</Container>
	)
}

Grid11.defaultProps = {
	isCard: false,
}

export default Grid11
