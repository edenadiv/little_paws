//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function LoginLink( props ) {
	return (
		<>
			<div className='login-link'>
				<Link className='links links-hover' to='/login'>
					{props.underline? <p className='underline'>Login</p> : <p>Login</p>}
				</Link>
			</div>
		</>
	)
}

//LoginLink.defaultProps = {
//}

//LoginLink.propTypes = {
//}

export default LoginLink
