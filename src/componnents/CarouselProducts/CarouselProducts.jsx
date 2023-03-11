//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'

import { Container,Carousel } from 'react-bootstrap'
import './CarouselProducts.css'

function CarouselProducts({ products }) {
	return (
		<>
			<Container>
				<Carousel touch fade interval={3500}>
					<Carousel.Item className="carousel-item">
						<img
							className='d-block w-100'
							src='./images/home-pets/1.jpg'
							alt=''
						/>
						<Carousel.Caption className="carousel-captions">
							<h3>Arnold</h3>
							<p>" Well, Comfort And Style Can Be Toghter "</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item className="carousel-item">
						<img
							className='d-block w-100'
							src='./images/home-pets/2.jpg'
							alt=''
						/>

						<Carousel.Caption className="carousel-captions">
							<h3>Yuvi</h3>
							<p>" Got Mine For Dogtines (Dogs Valentaine) Cant Get It Off! "</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item className="carousel-item">
						<img
							className='d-block w-100'
							src='./images/home-pets/3.jpg'
							alt=''
						/>

						<Carousel.Caption className="carousel-captions">
							<h3>Tom</h3>
							<p>
								" Woof Woof Wooooof!, Woof Waf Waf Wooof. "
							</p>
						</Carousel.Caption>
					</Carousel.Item>					<Carousel.Item className="carousel-item">
						<img
							className='d-block w-100'
							src='./images/home-pets/6.jpg'
							alt=''
						/>

						<Carousel.Caption className="carousel-captions">
							<h3>Rye</h3>
							<p>
								" You Cant Ever Have Enough Collars, Period. "
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item className="carousel-item">
						<img
							className='d-block w-100'
							src='./images/home-pets/4.jpg'
							alt=''
						/>

						<Carousel.Caption className="carousel-captions">
							<h3>Loue</h3>
							<p>
								" Finally , We Desarve Quality Products! And Snacks. "
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item className="carousel-item">
						<img
							className='d-block w-100'
							src='./images/home-pets/5.jpg'
							alt=''
						/>

						<Carousel.Caption className="carousel-captions">
							<h3>Chase</h3>
							<p>
								" Most Comfortable Collars Ever! You Got My Dog Word. "
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Container>
		</>
	)
}

//CarouselProducts.defaultProps = {
//}

//CarouselProducts.propTypes = {
//}

export default CarouselProducts
