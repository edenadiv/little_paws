import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
//import { useState } from 'react'
//import { useContext } from 'react'
//import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/home/Home'
import ProductPage from '../../pages/ProductPage/ProductPage'
//import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
import ShowUserPage from '../../pages/ShowUserPage/ShowUserPage'
import EditUserPage from '../../pages/EditUserPage/EditUserPage'
import ShopPage from '../../pages/ShopPage/ShopPage'
import AdminPage from '../../pages/AdminPage/AdminPage'
import CartPage from '../../pages/CartPage/CartPage'
import AddProductPage from '../../pages/AddProductPage/AddProductPage'

function Navigation() {
	return (
		<>
			<Routes>
				<Route
					exact
					path='/'
					element={
						<>
							<Home />
						</>
					}
				/>
				<Route
					exact
					path='/add-product'
					element={
						<>
							<AddProductPage />
						</>
					}
				/>
				<Route
					exact
					path='/product-page/:id'
					element={
						<>
							<ProductPage />
						</>
					}
				/>
				<Route
					exact
					path='/shop'
					element={
						<>
							<ShopPage />
						</>
					}
				/>
				<Route
					exact
					path='/cart'
					element={
						<>
							<CartPage />
						</>
					}
				/>
				<Route exact path='/profile' element={<></>} />
				<Route
					exact
					path='/login'
					element={
						<>
							<LoginPage />
						</>
					}
				/>
				<Route
					exact
					path='/register'
					element={
						<>
							<RegisterPage />
						</>
					}
				/>
				<Route
					exact
					path='/show-user'
					element={
						<>
							<ShowUserPage />
						</>
					}
				/>
				<Route
					exact
					path='/edit-user'
					element={
						<>
							<EditUserPage />
						</>
					}
				/>
				<Route
					exact
					path='/admin'
					element={
						<>
							<AdminPage />
						</>
					}
				/>
			</Routes>
		</>
	)
}

//Navigation.defaultProps = {
//}

//Navigation.propTypes = {
//}

export default Navigation
