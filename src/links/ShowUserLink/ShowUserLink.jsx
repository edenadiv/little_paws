//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ShowUserLink.css'

function ShowUserLink() {
	return (
		<>
			<div className='show-user-link'>
				<Link className='show-user-link-tag' to='/show-user'>
					<p>Show User</p>
				</Link>
			</div>
		</>
	)
}

//ShowUserLink.defaultProps = {
//}

//ShowUserLink.propTypes = {
//}

export default ShowUserLink
