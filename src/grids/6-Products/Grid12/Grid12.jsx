import Product from '../../../componnents/Product/Product'
import { useContext } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

import './Grid12.css'

function Grid12({ isCard }) {
	return (
		<Container className='grid12-6 d-flex'>
			{isCard === true ? (
				<Card>
					<Row className='inherit justify-content-center'>
						<Col>
							<Row>
								<Product sizeUp='true' random='true' />
							</Row>
							<Row className='inherit justify-content-center'>
								<Product random='true' />
								<Product random='true' />
							</Row>
						</Col>
						<Col>
							<Row className='inherit justify-content-center'>
								<Product random='true' />
								<Product random='true' />
							</Row>
							<Row>
								<Product sizeUp='true' random='true' />
							</Row>
						</Col>
					</Row>
				</Card>
			) : (
				<Row className='inherit justify-content-center'>
					<Col>
						<Row>
							<Product size200='true' random='true' />
						</Row>
						<Row className='inherit justify-content-center'>
							<Product random='true' />
							<Product random='true' />
						</Row>
					</Col>
					<Col>
						<Row className='inherit justify-content-center'>
							<Product random='true' />
							<Product random='true' />
						</Row>
						<Row>
							<Product size200='true' random='true' />
						</Row>
					</Col>
				</Row>
			)}
		</Container>
	)
}

Grid12.defaultProps = {
	isCard: false,
}

export default Grid12
