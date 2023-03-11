//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function EditUserLink() {
	return (
		<>
			<div className='edit-user-link'>
				<Link to='/edit-user'>
					<p>Edit User</p>
				</Link>
			</div>
		</>
	)
}

//EditUserLink.defaultProps = {
//}

//EditUserLink.propTypes = {
//}

export default EditUserLink
