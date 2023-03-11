//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import { useState } from 'react'
//import { useContext } from 'react'
import { useEffect } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import HomeLink from '../../links/HomeLink/HomeLink'
import ProfileLink from '../../links/ProfileLink/ProfileLink'
import ContactLink from '../../links/ContactLink/ContactLink'
import AboutUsLink from '../../links/AboutUsLink/AboutUsLink'
import ShopLink from '../../links/ShopLink/ShopLink'
import CartLink from '../../links/CartLink/CartLink'
import LoginLink from '../../links/LoginLink/LoginLink'
import RegisterLink from '../../links/RegisterLink/RegisterLink'
import ShowUserLink from '../../links/ShowUserLink/ShowUserLink'

import './header.css'

function Header() {
	const isCurrentUser = () => {
		if (JSON.parse(sessionStorage.getItem('currentUser')) !== null) return true
		else return false
	}

	const [isBigHeader, setIsBigHeader] = useState(true)
	const [isCartActive, setIsCartActive] = useState(false)
	const [cartCounter, setCartCounter] = useState(0)

	const [y, setY] = useState(window.scrollY)

	function handleNavigation(e) {
		const window = e.currentTarget
		if (y - 20 > window.scrollY) {
			/*console.log("scrolling up");*/
			setIsBigHeader(true)
		} else if (y + 20 < window.scrollY) {
			/*console.log("scrolling down");*/
			setIsBigHeader(false)
		}
		setY(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', e => handleNavigation(e))

		return () => {
			// return a cleanup function to unregister our function since its gonna run multiple times
			window.removeEventListener('scroll', e => handleNavigation(e))
		}
	}, [y])

	return (
		<>
			{isBigHeader ? (
				<header>
					<div className='header'>
						<Link to='/'>
							<div className='logo'>
								<img src='../../../images/logo/logo-white.png' alt='' />
							</div>
						</Link>
					</div>

					<div className='navigation'>
						<ShowUserLink />
						<RegisterLink />
						<LoginLink />
						<ShopLink />
						<div className='header-cart'>
							<CartLink />
							{isCartActive ? (
								<p className='header-cart-counter'>{cartCounter}</p>
							) : null}
						</div>
					</div>
				</header>
			) : (
				<header>
					<div className='header-small'>
						<div className='logo-small'>
							<img src='images/logo/logo-white.png' alt='' />
						</div>
					</div>
				</header>
			)}
		</>
	)
}

//Header.defaultProps = {
//}

//Header.propTypes = {
//}

export default Header
