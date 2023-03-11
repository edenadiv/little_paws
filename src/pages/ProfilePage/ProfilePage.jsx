//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import Register from '../../componnents/Register/Register'
import Login from '../../componnents/Login/Login'

import { Container, Card, Form, Button } from 'react-bootstrap'

import LoginLink from '../../links/LoginLink/LoginLink'
import RegisterLink from '../../links/RegisterLink/RegisterLink'
import { useNavigate } from 'react-router-dom'

import { ProfilesContext } from '../../contexts/ProfilesContext'

import './ProfilePage.css'

function ProfilePage() {
	const { currentUser } = useContext(ProfilesContext)
    
	// const [isUser, setIsUser] = useState(CheckIfCurrentUser)
	const { CheckIfCurrentUser } = useContext(ProfilesContext)
	let route = useNavigate()

	useEffect(() => {
		if (CheckIfCurrentUser()) {
			route('/show-user')
		}
	}, [])
	/*
	const [registerPress, setRegisterPress] = useState(false)
	const [loginPress, setLoginPress] = useState(false)

	const handleRegisterPress = () => {
		if (registerPress) {
			setLoginPress(false)
			setRegisterPress(false)
		} else if (!registerPress) {
			setLoginPress(false)
			setRegisterPress(true)
		}
	}

	const handleLoginPress = () => {
		if (loginPress) {
			setLoginPress(false)
			setRegisterPress(false)
		} else if (!loginPress) {
			setLoginPress(true)
			setRegisterPress(false)
		}
	}
*/
	return (
		<>
			<Card className='center-fixed profile-main-card'>
				<Card className='profile-card profile-register-card'>
					<p className='profile-text'>
						New Member?&nbsp;
						<br />
					</p>
					<RegisterLink underline className='profile-register' />
				</Card>

				<Card className='profile-card profile-login-card'>
					<p className='profile-text'>
						Already Joined?&nbsp;
						<br />
					</p>
					<LoginLink underline={true} className='profile-login' />
				</Card>
			</Card>

			{/* <button onClick={handleLoginPress} >Login</button>
            <button onClick={handleRegisterPress} >Register</button>
            {registerPress? <Register/>:null}
            {loginPress? <Login/>:null} */}
		</>
	)
}

//ProfilePage.defaultProps = {
//}

//ProfilePage.propTypes = {
//}

export default ProfilePage
