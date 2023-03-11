//import React from 'react'
import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import EnterVideo from '../../componnents/EnterVideo/EnterVideo'
import { VideosProvider } from '../../contexts/VideosContext'

import ProductsContext from '../../contexts/ProductsContext'

import ScrollToTop from 'react-scroll-to-top'

import Grid11 from '../../grids/6-Products/Grid11/Grid11'

import '../../pages/home/homeStyle1.css'

import CarouselProducts from '../../componnents/CarouselProducts/CarouselProducts'

function Home() {
	const { products } = useContext(ProductsContext)
	let drawedProducts = []
	const productsCollections = ['Neon', 'Splash', 'Monotone', 'Pastel', 'Winter']

	const pickerCollection = () => {
		let choise = Math.floor(Math.random() * 5)
		while (drawedProducts.includes(choise))
			choise = Math.floor(Math.random() * 5)
		drawedProducts.push(choise)
		let collectionArr = products.filter(
			product => product.collection == productsCollections[choise]
		)
		let collectionIdArr = collectionArr.map(product => {
			return product.id
		})
		return collectionIdArr
	}

	const videoWidth = '1920px'
	const videoHeight = '1080px'

	const [grids, setGrids] = useState([1, 1, 1])

	window.onscroll = function () {
		const difference =
			document.documentElement.scrollHeight - window.innerHeight
		const scrollposition = document.documentElement.scrollTop
		if (difference - scrollposition <= 2) {
			setGrids([...grids, 1])
		}
	}

	useEffect(() => {}, [grids])

	return (
		<>
			<div className='home-page'>
				<ScrollToTop />

				<div className='home-video'>
					<VideosProvider>
						<EnterVideo videoWidth={videoWidth} videoHeight={videoHeight} />
					</VideosProvider>
				</div>
				<CarouselProducts products={products} />
				<div className='home-products-container'>
					{grids.map((item, index) => {
						return <Grid11 key={index} shopNow='true' />
					})}
				</div>
			</div>
		</>
	)
}

//Home.defaultProps = {
//}

//Home.propTypes = {
//}

export default Home
