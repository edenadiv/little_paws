//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './ProfileLink.css'

function ProfileLink() {
	return (
		<>
			<div className='profile-link'>
				<Link className='links' to='/profile'>
					<p>Profile</p>
				</Link>
			</div>
		</>
	)
}

//ProfileLink.defaultProps = {
//}

//ProfileLink.propTypes = {
//}

export default ProfileLink
