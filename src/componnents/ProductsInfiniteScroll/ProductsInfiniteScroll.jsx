//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import ProductsContext from '../../contexts/ProductsContext'

import ScrollToTop from 'react-scroll-to-top'

import Grid11 from '../../grids/6-Products/Grid11/Grid11'
import Grid12 from '../../grids/6-Products/Grid12/Grid12'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card, Form, Button } from 'react-bootstrap'

import Product from '../../componnents/Product/Product'

//import '../../pages/home/homeStyle1.css'

function ProductsInfiniteScroll() {
	const [test, asdf] = useState()
    //const [scroll,SetScroll] = useState()

	const handleScroll = () => {
		return <Grid11 />
	}

    useEffect(() =>{
        handleScroll()
    },[window.onscroll])

	// window.onscroll = function () {
	// 	handleScroll()
	// }

	return (
		<>
			<Grid11 />
		</>
	)
}

//ProductsInfiniteScroll.defaultProps = {
//}

//ProductsInfiniteScroll.propTypes = {
//}

export default ProductsInfiniteScroll
