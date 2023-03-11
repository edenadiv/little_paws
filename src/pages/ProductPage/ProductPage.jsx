//import React from 'react'
//import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import ProductsProvider from '../../contexts/ProductsContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './ProductPage.css'

import Product from '../../componnents/Product/Product'

import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'

function ProductPage() {
	let params = useParams()
	const { products } = useContext(ProductsProvider)
	const { setProducts } = useContext(ProductsProvider)
	const { cartItems } = useContext(ProductsProvider)
	const { setCartItems } = useContext(ProductsProvider)
	const [id, SetId] = useState(params.id)

	const initRandoms = () => {
		let arr = []
		for (let i = 0; i < 5; i++) {
			let tempRnd = Math.floor(Math.random() * products.length - 1) + 1
			while (arr.includes(tempRnd)) {
				tempRnd = Math.floor(Math.random() * products.length - 1) + 1
			}
			arr.push(tempRnd)
		}
		return arr
	}

	const [random5, setRandom5] = useState(initRandoms())

	const [productQuantity,setProductQuantity] = useState(products[id].quantity)

	const counterUp = () => {
		let newProducts
		let updatedProduct
		newProducts = products.filter(item => item.name !== products[id].name)
		updatedProduct = products[id]
		updatedProduct.quantity = updatedProduct.quantity+1
		newProducts.push(updatedProduct)
		setProductQuantity(updatedProduct.quantity)
	}

	const counterDown = () => {
		let newProducts
		let updatedProduct
		newProducts = products.filter(item => item.name !== products[id].name)
		updatedProduct = products[id]
		if (updatedProduct.quantity > 1)
			updatedProduct.quantity = updatedProduct.quantity-1
		newProducts.push(updatedProduct)
		setProductQuantity(updatedProduct.quantity)
	}

	const handleClick = () => {
		let newCart = []
		if (sessionStorage.getItem('cart'))
			newCart = JSON.parse(sessionStorage.getItem('cart'))
		newCart.push(products[id])
		sessionStorage.setItem('cart',JSON.stringify(newCart))
	}

	//useEffect(() =>{},[productQuantity])

	return (
		<>
			<section className='main'>
				<div className='product-div' name='product-div' id='product-div'>
					<div className='product-container'>
						<div className='product-image'>
							<img src={'../../../' + products[id].img} alt='' />
						</div>
						<div className='product-details'>
							<div className='product-name'> {products[id].name}</div>
							<div className='product-collection'>
								<div className='product-collection-des'>Collection:</div>
								<div className='product-collection-ans'>
									{products[id].collection}
								</div>
							</div>
							<div className='product-color'>
								<div className='product-color-des'>Color:</div>
								<div className='product-color-ans'>{products[id].color}</div>
							</div>
							<div className='product-price'>
								<div className='product-price-des'>Price:</div>
								<div className='product-price-ans'>{products[id].price}</div>
							</div>
							<div className='product-quantity'>
								<div className='product-quantity-des'>Quantity:</div>
								<div className='product-quantity-container'>
									<button onClick={()=>counterDown()}>-</button>
									<span className='product-quantity-span'>
										{productQuantity}
									</span>
									<button onClick={()=>counterUp()}>+</button>
								</div>
							</div>
							<div className='product-add-to-cart'>
								<button onClick={()=>handleClick()} className='product-add-to-cart-btn'>Add To Cart</button>
							</div>
						</div>
					</div>
				</div>

				<div className='you-may-also-like-container'>
					<div className='you-may-also-like-text'>You May Also Like:</div>
					<div className='you-may-also-like-images'>
						<Link to={`/product-page/${random5[0]}`}>
							<Image src={'../../../' + products[random5[0]].img}></Image>
						</Link>
						<Link to={`/product-page/${random5[1]}`}>
							<Image src={'../../../' + products[random5[1]].img}></Image>
						</Link>
						<Link to={`/product-page/${random5[2]}`}>
							<Image src={'../../../' + products[random5[2]].img}></Image>
						</Link>
						<Link to={`/product-page/${random5[3]}`}>
							<Image src={'../../../' + products[random5[3]].img}></Image>
						</Link>
						<Link to={`/product-page/${random5[4]}`}>
							<Image src={'../../../' + products[random5[4]].img}></Image>
						</Link>
					</div>
				</div>

				<div className='customers-reviews-container'>
					<div className='customers-reviews-text'>Customers Reviews:</div>

					<div className='comment'>
						<form id='comment-form'>
							<div className='part-one'>
								<label id='label-name'>Name: </label>
								<input type='text' id='comment-name' />
								<div className='review-stars-picker'>
									<div className='star-picker' id='starOne'>
										<i className='fas fa-bone'></i>
									</div>
									<div className='star-picker' id='starTwo'>
										<i className='fas fa-bone'></i>
									</div>
									<div className='star-picker' id='starThree'>
										<i className='fas fa-bone'></i>
									</div>
									<div className='star-picker' id='starFour'>
										<i className='fas fa-bone'></i>
									</div>
									<div className='star-picker' id='starFive'>
										<i className='fas fa-bone'></i>
									</div>
								</div>
							</div>
							<div className='part-two'>
								<label id='label-comment'>Comment: </label>
								<textarea id='comment-comment' cols='40' rows='2'></textarea>
								<input type='reset' id='comment-reset' />
								<Button id='comment-submit'>Submit </Button>
							</div>
						</form>
					</div>
				</div>

				<div className='reviews-container'>
					<div className='customers-reviews'>
						<div className='review'>
							<div className='review-img'>
								<img src='../../../images/reviews-images/2.png' alt='' />
							</div>
							<div className='review-content'>
								<div className='review-name'>Ralf said:</div>
								<div className='review-text'>
									Finally a comfortable collar, Will recommend to my dog
									friend's!
								</div>
							</div>
							<div className='review-stars'>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
							</div>
						</div>
					</div>

					<div className='customers-reviews'>
						<div className='review'>
							<div className='review-img'>
								<img src='../../../images/reviews-images/3.png' alt='' />
							</div>
							<div className='review-content'>
								<div className='review-name'>Todd said:</div>
								<div className='review-text'>
									When i see new collars i immediately buy them.
									<br />
									Can't go wrong with 100% cotton collar.
								</div>
							</div>
							<div className='review-stars'>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
							</div>
						</div>
					</div>

					<div className='customers-reviews'>
						<div className='review'>
							<div className='review-img'>
								<img src='../../../images/reviews-images/1.png' alt='' />
							</div>
							<div className='review-content'>
								<div className='review-name'>Louie said:</div>
								<div className='review-text'>Woof woof waf waf! woo?</div>
							</div>
							<div className='review-stars'>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
								<div className='star'>
									<i className='fas fa-bone'></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

ProductPage.defaultProps = {
	id: 1,
}

//ProductPage.propTypes = {
//}

export default ProductPage
