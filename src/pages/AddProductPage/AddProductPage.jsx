//import React from 'react'
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddProductPage.css'
import ProductsProvider from '../../contexts/ProductsContext'

function AddProductPage() {
    let route = useNavigate()
	const { products } = useContext(ProductsProvider)
	const [product, setProduct] = useState({
		name: "",
		id: "",
		img: "",
		color: "",
		price: "",
		quantity: "",
		collection: "",
		description: "",
		imgColor: "",
		isFavorite: false
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
			setProduct({ ...product, img: data.target.result })
			setImgAlt(file.name)
		}
	}

    const handleClick = (event) => {
		event.preventDefault()
        alert('Product Added')
		let newProducts = products
		newProducts.push(product)
        sessionStorage.setItem('products',JSON.stringify(newProducts))
        console.log(product)
    }

	const [disableBtn,setDisableBtn] = useState(true)

	useEffect(() => {
		if (product.name&&
		product.id&&
		product.img&&
		product.color&&
		product.price&&
		product.quantity&&
		product.collection&&
		product.description&&
		product.imgColor)
		setDisableBtn(false)
	},[product])

    return (
        <>
            <div className="add-product-container">
            <fieldset className='register-fieldset'>
				<legend className='register-fieldset-legend'>Product: </legend>
				<form
					className='register-form'
					onSubmit={event => handleClick(event)}
				>
					<div className='register-form-container-part-1'>
						<div className='register-input-div'>
							<div className='register-input register-first-name'>
								<input
									required={true}
									placeholder='Product Name'
									type='text'
									id='inputFirstName'
									name='inputFirstName'
									value={product.name}
									onChange={event =>
										setProduct({ ...product, name: event.target.value })
									}
								/>
							</div>
							<div className='register-input register-last-name'>
								<input
									required={true}
									type='text'
									placeholder='ID'
									id='inputLastName'
									name='inputLastName'
									value={product.id}
									onChange={event =>
										setProduct({ ...product, id: event.target.value })
									}
								/>
							</div>
						</div>
						<div className='register-input-div'>
							<div className='register-input register-user-name'>
								<input
									required={true}
									type='text'
									placeholder='Color'
									id='inputUserName'
									name='inputUserName'
									value={product.color}
									onChange={event =>
										setProduct({ ...product, color: event.target.value })
									}
								/>
							</div>
							<div className='register-input register-id'>
								<input
									required={true}
									type='text'
									placeholder='Price'
									id='inputId'
									name='inputId'
									value={product.price}
									onChange={event =>
										setProduct({ ...product, price: event.target.value })
									}
								/>
							</div>
						</div>
						<div className='register-input-div'>
							<div className='register-input register-email'>
								<input
									required={true}
									placeholder='Quantity'
									type='text'
									id='inputEmail'
									name='inputEmail'
									value={product.quantity}
									onChange={event =>
										setProduct({ ...product, quantity: event.target.value })
									}
								/>
							</div>
                            <input
									required={true}
									type='text'
									placeholder='Collection'
									id='inputPassword'
									name='inputPassword'
									value={product.collection}
									onChange={event =>
										setProduct({ ...product, collection: event.target.value })
									}
								/>
						</div>
						<div className='register-input-div'>
							<div className='register-input register-password'>
								<input
									required={true}
									type='text'
									placeholder='Description'
									id='inputPassword'
									name='inputPassword'
									value={product.description}
									onChange={event =>
										setProduct({ ...product, description: event.target.value })
									}
								/>
							</div>
							<div className='register-input register-password-confirmation'>
								<input
									placeholder='imgColor'
									required={true}
									type='text'
									id='inputImgColor'
									name='inputImgColor'
									value={product.imgColor}
									onChange={event =>
										setProduct({
											...product,
											imgColor: event.target.value,
										})
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
								disabled={disableBtn}
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
        </>
    )
}

//AddProductPage.defaultProps = {
//}

//AddProductPage.propTypes = {
//}

export default AddProductPage