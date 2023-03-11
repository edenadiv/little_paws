//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function RegisterLink( props ) {
	return (
		<>
			<div className='register-link'>
				<Link className='links links-hover' to='/register'>
					{props.underline? <p className='underline'>Register</p> : <p>Register</p>}
				</Link>
			</div>
		</>
	)
}

//RegisterLink.defaultProps = {
//}

//RegisterLink.propTypes = {
//}

export default RegisterLink
