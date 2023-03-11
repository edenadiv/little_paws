import { useState, useContext, useEffect } from 'react'
import { ProfilesContext } from '../../contexts/ProfilesContext'
import { useNavigate } from 'react-router-dom'
import Logout from '../../componnents/Logout/Logout'

import './ShowUser.css'

import { Container, Card, Form, Button } from 'react-bootstrap'

export default function ShowUser() {
	const { currentUser } = useContext(ProfilesContext)
	const { CheckIfCurrentUser } = useContext(ProfilesContext)

	let route = useNavigate()

	const handleEditUserBtn = () => {
		route('/edit-user')
	}

	useEffect(() => {}, [])

	return (
		<>
			{currentUser !== null ? (
				<div className='show-user-container center-fixed'>
					<div className='register-card'>
						<div
							style={{
								justifyContent: 'space-between',
								display: 'flex',
								flexDirection: 'row',
							}}
						>
							<fieldset>
								<legend>User Details: </legend>
								<div>
									<label>Username:&nbsp;</label>
									<label> {currentUser.userName}</label>
								</div>
								<div>
									<label>First name:&nbsp;{currentUser.fname}</label>
								</div>
								<div>
									<label>Last name:&nbsp;{currentUser.lname}</label>
								</div>
								<div>
									<label>ID:&nbsp;{currentUser.id}</label>
								</div>
								<div>
									<label>Birth Date:&nbsp;{currentUser.birthDay}</label>
								</div>
								<div>
									<label>Email:&nbsp;{currentUser.email}</label>
								</div>
								<div>
									<label>Password:&nbsp;{currentUser.password}</label>
								</div>
								<div style={{ flexDirection: 'colmn' }}>
									{currentUser.city},{currentUser.street}&nbsp;
									{currentUser.houseNumber}
								</div>
							</fieldset>
							<img
								src={
									currentUser.pic !== ''
										? currentUser.pic
										: 'https://picsum.photos/200/300'
								}
								alt=''
								style={{ height: 'auto', width: '200px' }}
							/>
						</div>
						<Logout />
						<button onClick={() => handleEditUserBtn()}>Edit User</button>
					</div>
				</div>
			) : <p className="show-user-p">Please Login To View Details</p>}
		</>
	)
}
