//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import Header from '../../componnents/Header/Header'
import Navigation from '../../componnents/Navigation/Navigation'
import Footer from '../../componnents/Footer/Footer'

function MainLayout() {
	return (
		<>
			<Header fixed='top' />
			<Navigation />
			<Footer />
		</>
	)
}

//MainLayout.defaultProps = {
//}

//MainLayout.propTypes = {
//}

export default MainLayout
