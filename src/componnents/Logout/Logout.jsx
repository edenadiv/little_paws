//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ProfilesContext } from '../../contexts/ProfilesContext'
import { useNavigate } from 'react-router-dom'
import './Logout.css'

function Logout() {
	const { SetCurrentUser } = useContext(ProfilesContext)
	const { CheckIfCurrentUser } = useContext(ProfilesContext)

	const [isLoggedIn, setIsLoggedIn] = useState(CheckIfCurrentUser())
	let route = useNavigate()

	const handleClick = () => {
		if (isLoggedIn) {
			SetCurrentUser(null)
			alert('Logged out successfully. ')
			route('/')
		}
	}

	return (
		<>
			<button onClick={() => handleClick()}>Log out</button>
		</>
	)
}

//Logout.defaultProps = {
//}

//Logout.propTypes = {
//}

export default Logout
