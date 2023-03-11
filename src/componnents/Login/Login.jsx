import { useState, useContext, useEffect } from 'react'
import { ProfilesContext } from '../../contexts/ProfilesContext'
import { useNavigate } from 'react-router-dom'

import AdminPage from '../../pages/AdminPage/AdminPage'

import './Login.css'

export default function Login(event) {
	// const [showLoginOrUser,setShowLoginOrUser] = useState(true)
	const { CheckIfCurrentUser } = useContext(ProfilesContext)

	const [isLoggedIn, setIsLoggedIn] = useState(CheckIfCurrentUser())

	const [adminUsername, setAdminUsername] = useState('admin')
	const [adminPassword, setAdminPassword] = useState('admin1234admin')

	let route = useNavigate()

	useEffect(() => {
		if (isLoggedIn) {
			route('/show-user')
		}
	}, [isLoggedIn])

	const [user, setuser] = useState({
		email: '',
		password: '',
	})

	const { FindProfileByEmailAndPassword } = useContext(ProfilesContext)

	function LoginProfile(event) {
		event.preventDefault()
		let profile = FindProfileByEmailAndPassword(user.email, user.password)
		if (user.email === adminUsername && user.password === adminPassword) {
			route('/admin')
		} else if (profile != null) {
			alert('Login Completed')
			route('/show-user')
		} else {
			alert('Incorrect Email or Password, Try Again.')
		}
	}

	//<editUser value={props}/>
	return (
		<>
			{/* {showLoginOrUser? ( */}
			<div className='center-fixed login-field'>
				<div className='login-card'>
					<fieldset>
						<legend className='login-legend'>Login: </legend>
						<form onSubmit={event => LoginProfile(event)}>
							<div className='login-input'>
								<div>
									<input
										required={true}
										placeholder='email'
										//type='email'
										id='loginInputEmail'
										name='loginInputEmail'
										value={user.email}
										onChange={event =>
											setuser({ ...user, email: event.target.value })
										}
									/>
								</div>
								<div>
									<input
										required={true}
										placeholder='password'
										type='password'
										minLength={7}
										id='loginInputPassword'
										name='loginInputPassword'
										value={user.password}
										onChange={event =>
											setuser({ ...user, password: event.target.value })
										}
									/>
								</div>
							</div>
							<div>
						{' '}
						<div className='login-btn-container'>
							<button className='login-btn' type='submit' id='loginSubmitBtn'>
								{' '}
								Submit{' '}
							</button>
							<button
								className='login-btn'
								onClick={() => {
									route('/register')
								}}
							>
								Register
							</button>
						</div>
					</div>
						</form>
					</fieldset>
				
				</div>
			</div>
			{/* ):<ShowUser/>} */}
		</>
	)
}
