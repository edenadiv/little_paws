//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ContactLink() {
	return (
		<>
			<div className='contact-link'>
				<Link className='links' to='/contact'>
					<p>Contact</p>
				</Link>
			</div>
		</>
	)
}

//ContactLink.defaultProps = {
//}

//ContactLink.propTypes = {
//}

export default ContactLink
