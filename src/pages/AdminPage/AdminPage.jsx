//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ProfilesContext } from '../../contexts/ProfilesContext'

import { Container, Card, Form, Button, Table } from 'react-bootstrap'
import EditUser from '../../componnents/EditUser/EditUser'

import './AdminPage.css'

function AdminPage() {
	let route = useNavigate()

	const { RemoveProfile } = useContext(ProfilesContext)
	const { SetProfiles } = useContext(ProfilesContext)
	const { profiles } = useContext(ProfilesContext)
	const [showEdit, setShowEdit] = useState(false)

	const handleClick = () => {
		setShowEdit(true)
		// route('/edit-user')
	}

	return (
		<>
			<Container className='admin-page-container'>
				<Container>
					{' '}
					<h1>
						Hello <b>Admin</b>, Welcome Back.
					</h1>
				</Container>
				<Table className='admin-page-table' responsive='xl'>
					<thead className='admin-page-titles'>
						<tr>
							<th>Username</th>
							<th>Full Name</th>
							<th>Birth Date</th>
							<th>Adress</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{profiles.map((item, index) => {
							return (
								<>
									<tr
										key={'admin-page-user-' + index + '-key'}
										className={'admin-page-user-' + index}
									>
										<th>{item.userName}</th>
										<th>
											{item.fname}&nbsp;{item.lname}
										</th>
										<th>
											{new Date(item.birthDay).getDate()}/
											{new Date(item.birthDay).getMonth()}/
											{new Date(item.birthDay).getFullYear()}
										</th>
										<th>
											{item.street}&nbsp;{item.houseNumber},&nbsp;{item.City}
										</th>
										<th>{item.email}</th>
										<th className='admin-page-btn-container'>
											{' '}
											<button
												key={'admin-page-btn-first-' + index}
												className={'admin-page-btn'}
												variant='primary'
												onClick={() => handleClick()}
											>
												Edit
											</button>
											<button
												key={'admin-page-btn-second-' + index}
												className={'admin-page-btn'}
												variant='danger'
												onClick={() => RemoveProfile(item)}
											>
												Delete
											</button>
										</th>
									</tr>
									{showEdit ? <EditUser oldUser={item} /> : null}
								</>
							)
						})}
						<button
							onClick={() => {
								route('/add-product')
							}}
						>
							{' '}
							Add Product{' '}
						</button>
					</tbody>
				</Table>
			</Container>
		</>
	)
}

//AdminPage.defaultProps = {
//}

//AdminPage.propTypes = {
//}

export default AdminPage
