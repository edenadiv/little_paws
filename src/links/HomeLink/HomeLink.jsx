//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function HomeLink() {
	return (
		<>
			<div className='home-link'>
				<Link to='/'>
					<p>Home</p>
				</Link>
			</div>
		</>
	)
}

//HomeLink.defaultProps = {
//}

//HomeLink.propTypes = {
//}

export default HomeLink
