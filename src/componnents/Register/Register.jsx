//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ProfilesContext } from '../../contexts/ProfilesContext'
import { useNavigate } from 'react-router-dom'

import './Register.css'

function Register() {
	const { AddProfile } = useContext(ProfilesContext)
	const { CheckPasswordAndPasswordConfirmation } = useContext(ProfilesContext)
	const { CheckIfCurrentUser } = useContext(ProfilesContext)

	const [isLoggedIn, setIsLoggedIn] = useState(CheckIfCurrentUser())

	let route = useNavigate()

	useEffect(() => {
		if (isLoggedIn) {
			route('/show-user')
		}
	}, [isLoggedIn])

	const [cities, setCities] = useState([])

	const ChooseCity = async () => {
		const res = await fetch(
			'https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1266'
		)
		const data = await res.json()
		const cities = data.result.records.map(record => record['שם_ישוב']) // ['שם_ישוב_לועזי']

		if (data.success) {
			setCities(cities)
		}
	}

	useEffect(() => {
		ChooseCity()
	}, [])

	const RegisterProfile = event => {
		event.preventDefault()
		const res = AddProfile(user)
		const passRes = CheckPasswordAndPasswordConfirmation(user)
		if (!res) {
			if (passRes) alert('The User Already Exist in Our System. ')
			else alert('The Passwords Are Not Match, Try Again. ')
		} else {
			alert('Register Successed !')
			route('/login')
		}
	}

	const AgeValidations = dob => {
		const today = new Date()
		let userAge = today.getFullYear() - dob.getFullYear()
		return userAge <= 120 && userAge > 0
	}

	const [user, setuser] = useState({
		userName: '',
		fname: '',
		lname: '',
		email: '',
		id: '',
		pic: '',
		password: '',
		passwordConfirmation: '',
		city: '',
		street: '',
		houseNumber: '',
		birthDay: '',
	})

	const [imgSrc, setImgSrc] = useState(null)
	const [imgAlt, setImgAlt] = useState(null)

	const ReadFile = event => {
		let file = event.target.files[0]
		//check the type of file
		if (file.type.indexOf('image') === -1) {
			alert('Unsupported File Type, Choose JPG Or JPEG Only.')
			//event.tager.files = []
			return
		}
		let fr = new FileReader()

		fr.readAsDataURL(file)

		fr.onload = data => {
			setImgSrc(data.target.result)
			setuser({ ...user, pic: data.target.result })
			setImgAlt(file.name)
		}
	}

	return (
		<div className='register-container '>
			<fieldset className='register-fieldset'>
				<legend className='register-fieldset-legend'>Register: </legend>
				<form
					className='register-form'
					onSubmit={event => RegisterProfile(event)}
				>
					<div className='register-form-container-part-1'>
						<div className='register-input-div'>
							<div className='register-input register-first-name'>
								<input
									required={true}
									placeholder='First Name'
									pattern='(?=.*[a-z])(?=.*[A-Z])+'
									type='text'
									id='inputFirstName'
									name='inputFirstName'
									value={user.fname}
									onChange={event =>
										setuser({ ...user, fname: event.target.value })
									}
								/>
							</div>
							<div className='register-input register-last-name'>
								<input
									required={true}
									type='text'
									placeholder='Last Name'
									pattern='(?=.*[a-z])(?=.*[A-Z])+'
									id='inputLastName'
									name='inputLastName'
									value={user.lname}
									onChange={event =>
										setuser({ ...user, lname: event.target.value })
									}
								/>
							</div>
						</div>
						<div className='register-input-div'>
							<div className='register-input register-user-name'>
								<input
									required={true}
									pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])+'
									max-length={60}
									type='text'
									placeholder='Username'
									id='inputUserName'
									name='inputUserName'
									value={user.userName}
									onChange={event =>
										setuser({ ...user, userName: event.target.value })
									}
								/>
							</div>
							<div className='register-input register-id'>
								<input
									required={true}
									type='text'
									placeholder='ID'
									pattern='(?=.*\d)+'
									maxLength={9}
									minLength={9}
									id='inputId'
									name='inputId'
									value={user.id}
									onChange={event =>
										setuser({ ...user, id: event.target.value })
									}
								/>
							</div>
						</div>
						<div className='register-input-div'>
							<div className='register-input register-email'>
								<input
									required={true}
									placeholder='Email'
									type='email'
									pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.com'
									id='inputEmail'
									name='inputEmail'
									value={user.email}
									onChange={event =>
										setuser({ ...user, email: event.target.value })
									}
								/>
							</div>
							<div className='register-input register-birth-date'>
								<input
									required={true}
									type='date'
									placeholder='Birth Date'
									id='inputBirthDate'
									name='inputBirthDate'
									value={user.birthDay}
									onChange={event =>
										AgeValidations(new Date(event.target.value))
											? setuser({ ...user, birthDay: event.target.value })
											: alert('Invalid Date, Please Choose Again. ')
									}
								/>
							</div>
						</div>
						<div className='register-input-div'>
							<div className='register-input register-password'>
								<input
									required={true}
									pattern='^(?=.*[A-Za-z])(?=.*[!@#$%^*_=+-])(?=.*\d)[A-Za-z\d!@#$%^*_=+-]{7,12}$'
									type='password'
									placeholder='Password'
									id='inputPassword'
									name='inputPassword'
									value={user.password}
									onChange={event =>
										setuser({ ...user, password: event.target.value })
									}
								/>
							</div>
							<div className='register-input register-password-confirmation'>
								<input
									placeholder='Confirmation'
									required={true}
									type='password'
									minLength={7}
									maxLength={12}
									id='inputPasswordConfirmation'
									name='inputPasswordConfirmation'
									value={user.passwordConfirmation}
									onChange={event =>
										setuser({
											...user,
											passwordConfirmation: event.target.value,
										})
									}
								/>
							</div>
						</div>
						<div className='register-input-div'>
							<div className='register-input register-city'>
								<select
									name='city'
									required={true}
									onChange={event =>
										setuser({ ...user, city: event.target.value })
									}
								>
									<option defaultValue='disable' disabled hidden>
										Choose City
									</option>
									{cities.map((city, index) => {
										return (
											<option key={index} value={city}>
												{city}
											</option>
										)
									})}
								</select>
							</div>
							</div>
							<div className='register-input-div'>
							<div className='register-input register-street'>
								<input
									required={true}
									placeholder='רחוב'
									pattern='[א-ת]+'
									type='text'
									id='inputStreet'
									name='inputStreet'
									value={user.street}
									onChange={event =>
										setuser({ ...user, street: event.target.value })
									}
								/>
							</div>
							<div className='register-input register-house-number'>
								<input
									required={true}
									placeholder='מספר בית'
									type='text'
									pattern='[0-9]+'
									id='inputHouseNumber'
									name='inputHouseNumber'
									value={user.houseNumber}
									onChange={event =>
										setuser({ ...user, houseNumber: event.target.value })
									}
								/>
							</div>
						</div>
						<div className='register-input-div'>
							<div className='register-input register-pic'>
								<input
									required={true}
									type='file'
									placeholder='Image'
									id='inputPictureUrl'
									name='inputPictureUrl'
									//value={user.pic}
									onChange={ReadFile}
									accept='.jpg, .jpeg'
									// onChange={event =>
									// 	setuser({ ...user, pic: event.target.value })
									// }
								/>
								{imgSrc !== null ? (
									<img src={imgSrc} style={{ height: '180px' }} />
								) : null}
							</div>
						</div>
						<div className='d-grid gap-2'>
							<button
								className='register-btn'
								variant='primary'
								size='lg'
								type='submit'
								id='submitBtn'
							>
								{' '}
								Submit{' '}
							</button>
							<button onClick={() => route('/login')}>Login</button>
						</div>
					</div>	
				</form>
			</fieldset>
		</div>
	)
}

//Register.defaultProps = {
//}

//Register.propTypes = {
//}

export default Register
