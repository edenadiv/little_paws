//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function AboutUsLink() {
	return (
		<>
			<div className='about-us-link'>
				<Link className='links' to='/about-us'>
					<p>About Us</p>
				</Link>
			</div>
		</>
	)
}

//AboutUsLink.defaultProps = {
//}

//AboutUsLink.propTypes = {
//}

export default AboutUsLink
